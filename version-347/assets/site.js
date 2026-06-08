(function () {
    "use strict";

    function ready(callback) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    function normalize(value) {
        return String(value || "").trim().toLowerCase();
    }

    function initMenu() {
        var toggle = document.querySelector("[data-menu-toggle]");
        var menu = document.querySelector("[data-mobile-menu]");
        if (!toggle || !menu) {
            return;
        }
        toggle.addEventListener("click", function () {
            menu.classList.toggle("is-open");
        });
    }

    function initHero() {
        var slides = Array.prototype.slice.call(document.querySelectorAll("[data-hero-slide]"));
        if (slides.length === 0) {
            return;
        }
        var dots = Array.prototype.slice.call(document.querySelectorAll("[data-hero-dot]"));
        var previous = document.querySelector("[data-hero-prev]");
        var next = document.querySelector("[data-hero-next]");
        var current = 0;
        var timer = null;

        function show(index) {
            current = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === current);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === current);
            });
        }

        function move(step) {
            show(current + step);
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                move(1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        if (previous) {
            previous.addEventListener("click", function () {
                move(-1);
                start();
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                move(1);
                start();
            });
        }
        dots.forEach(function (dot, index) {
            dot.addEventListener("click", function () {
                show(index);
                start();
            });
        });
        show(0);
        start();
    }

    function initCards() {
        var search = document.querySelector("[data-search]");
        var cards = Array.prototype.slice.call(document.querySelectorAll("[data-card]"));
        var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
        var empty = document.querySelector("[data-empty]");
        if (cards.length === 0) {
            return;
        }

        var params = new URLSearchParams(window.location.search);
        var query = params.get("q");
        if (search && query) {
            search.value = query;
        }

        function matchesText(card, value) {
            if (!value) {
                return true;
            }
            var haystack = [
                card.dataset.title,
                card.dataset.year,
                card.dataset.type,
                card.dataset.region,
                card.dataset.genre,
                card.dataset.tags
            ].join(" ").toLowerCase();
            return haystack.indexOf(value) !== -1;
        }

        function matchesFilters(card) {
            return filters.every(function (filter) {
                var key = filter.getAttribute("data-filter");
                var value = normalize(filter.value);
                if (!value) {
                    return true;
                }
                return normalize(card.dataset[key]) === value;
            });
        }

        function apply() {
            var value = normalize(search ? search.value : "");
            var visible = 0;
            cards.forEach(function (card) {
                var isVisible = matchesText(card, value) && matchesFilters(card);
                card.hidden = !isVisible;
                if (isVisible) {
                    visible += 1;
                }
            });
            if (empty) {
                empty.classList.toggle("is-visible", visible === 0);
            }
        }

        if (search) {
            search.addEventListener("input", apply);
        }
        filters.forEach(function (filter) {
            filter.addEventListener("change", apply);
        });
        apply();
    }

    function setupMoviePlayer(options) {
        ready(function () {
            var video = document.getElementById(options.videoId);
            var button = document.getElementById(options.buttonId);
            if (!video || !button || !options.source) {
                return;
            }
            var prepared = false;
            var hlsInstance = null;

            function prepare() {
                if (prepared) {
                    return;
                }
                prepared = true;
                video.poster = options.poster || video.poster;
                if (video.canPlayType("application/vnd.apple.mpegurl")) {
                    video.src = options.source;
                    return;
                }
                if (window.Hls && window.Hls.isSupported()) {
                    hlsInstance = new window.Hls({
                        enableWorker: true,
                        lowLatencyMode: true
                    });
                    hlsInstance.loadSource(options.source);
                    hlsInstance.attachMedia(video);
                    return;
                }
                video.src = options.source;
            }

            function play() {
                prepare();
                video.controls = true;
                button.hidden = true;
                var result = video.play();
                if (result && typeof result.catch === "function") {
                    result.catch(function () {
                        button.hidden = false;
                    });
                }
            }

            button.addEventListener("click", play);
            video.addEventListener("click", function () {
                if (video.paused) {
                    play();
                } else {
                    video.pause();
                }
            });
            window.addEventListener("pagehide", function () {
                if (hlsInstance) {
                    hlsInstance.destroy();
                }
            });
        });
    }

    ready(function () {
        initMenu();
        initHero();
        initCards();
    });

    window.HongfenMovieSite = {
        setupMoviePlayer: setupMoviePlayer
    };
})();

(function () {
    function $(selector, root) {
        return (root || document).querySelector(selector);
    }

    function $all(selector, root) {
        return Array.prototype.slice.call((root || document).querySelectorAll(selector));
    }

    function escapeHtml(value) {
        return String(value || "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function setupHeader() {
        var searchButton = $("[data-search-toggle]");
        var searchBox = $("[data-header-search]");
        var menuButton = $("[data-menu-toggle]");
        var mobileMenu = $("[data-mobile-menu]");

        if (searchButton && searchBox) {
            searchButton.addEventListener("click", function () {
                searchBox.classList.toggle("is-open");
                var input = searchBox.querySelector("input");
                if (searchBox.classList.contains("is-open") && input) {
                    input.focus();
                }
            });
        }

        if (menuButton && mobileMenu) {
            menuButton.addEventListener("click", function () {
                mobileMenu.classList.toggle("is-open");
            });
        }
    }

    function setupHero() {
        var hero = $("[data-hero]");
        if (!hero) {
            return;
        }
        var slides = $all(".hero-slide", hero);
        var dots = $all("[data-hero-dot]", hero);
        var prev = $("[data-hero-prev]", hero);
        var next = $("[data-hero-next]", hero);
        var index = 0;
        var timer = null;

        function show(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle("is-active", slideIndex === index);
            });
            dots.forEach(function (dot, dotIndex) {
                dot.classList.toggle("is-active", dotIndex === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 4800);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        if (prev) {
            prev.addEventListener("click", function () {
                show(index - 1);
                start();
            });
        }
        if (next) {
            next.addEventListener("click", function () {
                show(index + 1);
                start();
            });
        }
        dots.forEach(function (dot) {
            dot.addEventListener("click", function () {
                show(Number(dot.getAttribute("data-hero-dot")) || 0);
                start();
            });
        });
        hero.addEventListener("mouseenter", stop);
        hero.addEventListener("mouseleave", start);
        show(0);
        start();
    }

    function setupPlayers() {
        $all("[data-player]").forEach(function (panel) {
            var video = panel.querySelector("video");
            var playButton = panel.querySelector("[data-play]");
            var source = panel.getAttribute("data-src");
            var hlsReady = false;

            function attachSource() {
                if (!video || !source || video.getAttribute("data-ready") === "1") {
                    return;
                }
                if (video.canPlayType("application/vnd.apple.mpegurl")) {
                    video.src = source;
                } else if (window.Hls && window.Hls.isSupported()) {
                    var hls = new window.Hls({ enableWorker: true });
                    hls.loadSource(source);
                    hls.attachMedia(video);
                    hlsReady = true;
                } else {
                    video.src = source;
                }
                video.setAttribute("data-ready", "1");
            }

            function begin() {
                attachSource();
                panel.classList.add("is-playing");
                if (video) {
                    var playTask = video.play();
                    if (playTask && typeof playTask.catch === "function") {
                        playTask.catch(function () {
                            panel.classList.remove("is-playing");
                        });
                    }
                }
            }

            if (playButton) {
                playButton.addEventListener("click", begin);
            }
            if (video) {
                video.addEventListener("click", function () {
                    if (!hlsReady && video.getAttribute("data-ready") !== "1") {
                        begin();
                    }
                });
                video.addEventListener("play", function () {
                    panel.classList.add("is-playing");
                });
            }
        });
    }

    function setupBackTop() {
        $all("[data-back-top]").forEach(function (button) {
            button.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        });
    }

    function setupSearchPage() {
        var resultBox = $("[data-search-results]");
        if (!resultBox || !window.SEARCH_MOVIES) {
            return;
        }
        var params = new URLSearchParams(window.location.search);
        var query = (params.get("q") || "").trim();
        var input = $("[data-search-input]");
        var title = $("[data-search-title]");
        var subtitle = $("[data-search-subtitle]");
        if (input) {
            input.value = query;
        }
        if (!query) {
            return;
        }
        var lower = query.toLowerCase();
        var results = window.SEARCH_MOVIES.filter(function (movie) {
            var text = [
                movie.title,
                movie.region,
                movie.type,
                movie.year,
                movie.genre,
                (movie.tags || []).join(" "),
                movie.oneLine,
                movie.summary
            ].join(" ").toLowerCase();
            return text.indexOf(lower) !== -1;
        }).slice(0, 120);

        if (title) {
            title.textContent = "“" + query + "”的搜索结果";
        }
        if (subtitle) {
            subtitle.textContent = results.length ? "找到 " + results.length + " 部相关影片" : "没有找到匹配影片，可以换一个关键词继续搜索。";
        }
        resultBox.innerHTML = results.map(renderSearchCard).join("") || "";
    }

    function renderSearchCard(movie) {
        var tags = (movie.tags || []).slice(0, 2).map(function (tag) {
            return "<span>" + escapeHtml(tag) + "</span>";
        }).join("");
        return "<article class=\"movie-card\">" +
            "<a class=\"movie-poster\" href=\"./" + escapeHtml(movie.file) + "\" style=\"--poster-image: url('./" + escapeHtml(movie.cover) + "');\" aria-label=\"" + escapeHtml(movie.title) + "\">" +
            "<span class=\"poster-type\">" + escapeHtml(movie.type) + "</span>" +
            "<span class=\"poster-year\">" + escapeHtml(movie.year) + "</span>" +
            "</a>" +
            "<div class=\"movie-info\">" +
            "<h3><a href=\"./" + escapeHtml(movie.file) + "\">" + escapeHtml(movie.title) + "</a></h3>" +
            "<p>" + escapeHtml(movie.oneLine) + "</p>" +
            "<div class=\"movie-meta\"><span>" + escapeHtml(movie.region) + "</span><span>" + escapeHtml(movie.genre) + "</span></div>" +
            "<div class=\"tag-row\">" + tags + "</div>" +
            "</div>" +
            "</article>";
    }

    document.addEventListener("DOMContentLoaded", function () {
        setupHeader();
        setupHero();
        setupPlayers();
        setupBackTop();
        setupSearchPage();
    });
})();

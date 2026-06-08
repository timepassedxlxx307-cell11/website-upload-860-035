(function () {
    function ready(fn) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", fn);
        } else {
            fn();
        }
    }

    function bindMobileMenu() {
        const button = document.querySelector(".mobile-toggle");
        const panel = document.querySelector(".mobile-panel");
        if (!button || !panel) return;
        button.addEventListener("click", function () {
            const open = panel.hasAttribute("hidden");
            if (open) {
                panel.removeAttribute("hidden");
                button.setAttribute("aria-expanded", "true");
                button.textContent = "×";
            } else {
                panel.setAttribute("hidden", "");
                button.setAttribute("aria-expanded", "false");
                button.textContent = "☰";
            }
        });
    }

    function bindHero() {
        const slides = Array.from(document.querySelectorAll(".hero-slide"));
        const dots = Array.from(document.querySelectorAll(".hero-dots button"));
        if (slides.length < 2) return;
        let index = 0;
        let timer;
        function show(next) {
            index = (next + slides.length) % slides.length;
            slides.forEach(function (slide, i) {
                slide.classList.toggle("is-active", i === index);
            });
            dots.forEach(function (dot, i) {
                dot.classList.toggle("is-active", i === index);
            });
        }
        function play() {
            window.clearInterval(timer);
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }
        dots.forEach(function (dot, i) {
            dot.addEventListener("click", function () {
                show(i);
                play();
            });
        });
        show(0);
        play();
    }

    function bindLocalFilters() {
        const inputs = document.querySelectorAll("[data-filter-target]");
        inputs.forEach(function (input) {
            const selector = input.getAttribute("data-filter-target");
            const cards = Array.from(document.querySelectorAll(selector));
            input.addEventListener("input", function () {
                const q = input.value.trim().toLowerCase();
                cards.forEach(function (card) {
                    const value = (card.getAttribute("data-search") || "").toLowerCase();
                    card.style.display = !q || value.indexOf(q) !== -1 ? "" : "none";
                });
            });
        });
    }

    function renderSearchPage() {
        const container = document.querySelector("[data-search-results]");
        const form = document.querySelector("[data-search-form]");
        const input = document.querySelector("[data-search-input]");
        if (!container || !form || !input || typeof SITE_MOVIES === "undefined") return;
        const params = new URLSearchParams(window.location.search);
        input.value = params.get("q") || "";
        function match(movie, q) {
            const value = [movie.title, movie.region, movie.type, movie.year, movie.genre, movie.tags].join(" ").toLowerCase();
            return value.indexOf(q) !== -1;
        }
        function render(q) {
            const key = q.trim().toLowerCase();
            const list = (key ? SITE_MOVIES.filter(function (movie) { return match(movie, key); }) : SITE_MOVIES.slice(0, 60)).slice(0, 180);
            if (!list.length) {
                container.innerHTML = '<div class="no-results">没有匹配到相关内容，可以更换关键词继续搜索。</div>';
                return;
            }
            container.innerHTML = '<div class="search-result-list">' + list.map(function (movie) {
                return '<a class="search-result" href="' + movie.url + '">' +
                    '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '" loading="lazy">' +
                    '<div><h2>' + escapeHtml(movie.title) + '</h2><p>' + escapeHtml(movie.year + ' · ' + movie.region + ' · ' + movie.type + ' · ' + movie.genre) + '</p></div>' +
                    '</a>';
            }).join("") + '</div>';
        }
        function escapeHtml(value) {
            return String(value).replace(/[&<>"']/g, function (char) {
                return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char];
            });
        }
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            const q = input.value.trim();
            const url = q ? "./search.html?q=" + encodeURIComponent(q) : "./search.html";
            window.history.replaceState(null, "", url);
            render(q);
        });
        input.addEventListener("input", function () {
            render(input.value);
        });
        render(input.value);
    }

    window.MoviePlayer = {
        start: function (src) {
            ready(function () {
                const video = document.getElementById("movieVideo");
                const cover = document.querySelector(".player-cover");
                if (!video || !cover || !src) return;
                let loaded = false;
                function begin() {
                    if (!loaded) {
                        loaded = true;
                        if (video.canPlayType("application/vnd.apple.mpegurl")) {
                            video.src = src;
                        } else if (window.Hls && window.Hls.isSupported()) {
                            const hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
                            hls.loadSource(src);
                            hls.attachMedia(video);
                            video.hls = hls;
                        } else {
                            video.src = src;
                        }
                    }
                    cover.classList.add("is-hidden");
                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.catch === "function") {
                        playPromise.catch(function () {});
                    }
                }
                cover.addEventListener("click", begin);
                video.addEventListener("click", function () {
                    if (!loaded) begin();
                });
                video.addEventListener("play", function () {
                    cover.classList.add("is-hidden");
                });
            });
        }
    };

    ready(function () {
        bindMobileMenu();
        bindHero();
        bindLocalFilters();
        renderSearchPage();
    });
})();

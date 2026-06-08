(function () {
    var menuButton = document.querySelector('[data-menu-toggle]');
    var mobileNav = document.querySelector('[data-mobile-nav]');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });
    }

    var hero = document.querySelector('[data-hero]');

    if (hero) {
        var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        var index = 0;
        var timer = null;

        function show(nextIndex) {
            if (!slides.length) {
                return;
            }
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, position) {
                slide.classList.toggle('active', position === index);
            });
            dots.forEach(function (dot, position) {
                dot.classList.toggle('active', position === index);
            });
        }

        function start() {
            stop();
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
            }
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.getAttribute('data-hero-dot')) || 0);
                start();
            });
        });

        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                start();
            });
        }

        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                start();
            });
        }

        hero.addEventListener('mouseenter', stop);
        hero.addEventListener('mouseleave', start);
        show(0);
        start();
    }

    var scopes = Array.prototype.slice.call(document.querySelectorAll('[data-filter-scope]'));

    scopes.forEach(function (scope) {
        var input = scope.querySelector('[data-search-input]');
        var cards = Array.prototype.slice.call(scope.querySelectorAll('[data-card]'));
        var buttons = Array.prototype.slice.call(scope.querySelectorAll('[data-filter-value]'));
        var activeValue = '';

        function apply() {
            var term = input ? input.value.trim().toLowerCase() : '';
            cards.forEach(function (card) {
                var search = (card.getAttribute('data-search') || '').toLowerCase();
                var year = card.getAttribute('data-year') || '';
                var matchedText = !term || search.indexOf(term) !== -1;
                var matchedFilter = !activeValue || year === activeValue;
                card.classList.toggle('is-hidden', !(matchedText && matchedFilter));
            });
        }

        if (input) {
            input.addEventListener('input', apply);
        }

        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                activeValue = button.getAttribute('data-filter-value') || '';
                buttons.forEach(function (item) {
                    item.classList.toggle('active', item === button);
                });
                apply();
            });
        });
    });

    var player = document.querySelector('[data-player]');

    if (player) {
        var stream = player.getAttribute('data-stream') || '';
        var cover = document.querySelector('[data-play-cover]');
        var initialized = false;

        function initPlayer() {
            if (initialized || !stream) {
                return;
            }
            initialized = true;
            if (window.Hls && window.Hls.isSupported()) {
                var hls = new window.Hls({
                    enableWorker: true,
                    lowLatencyMode: true
                });
                hls.loadSource(stream);
                hls.attachMedia(player);
            } else if (player.canPlayType('application/vnd.apple.mpegurl')) {
                player.src = stream;
            } else {
                player.src = stream;
            }
        }

        function begin() {
            initPlayer();
            if (cover) {
                cover.classList.add('is-hidden');
            }
            var playRequest = player.play();
            if (playRequest && typeof playRequest.catch === 'function') {
                playRequest.catch(function () {});
            }
        }

        if (cover) {
            cover.addEventListener('click', begin);
        }

        player.addEventListener('play', function () {
            if (cover) {
                cover.classList.add('is-hidden');
            }
        });

        player.addEventListener('click', function () {
            if (player.paused) {
                begin();
            }
        });
    }

    var params = new URLSearchParams(window.location.search);
    var query = params.get('q');

    if (query) {
        var searchInput = document.querySelector('[data-search-input]');
        if (searchInput) {
            searchInput.value = query;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
    }
})();

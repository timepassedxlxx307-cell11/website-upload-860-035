(function () {
    function ready(callback) {
        if (document.readyState !== 'loading') {
            callback();
            return;
        }
        document.addEventListener('DOMContentLoaded', callback);
    }

    function setupNavigation() {
        var toggle = document.querySelector('[data-nav-toggle]');
        var nav = document.querySelector('[data-mobile-nav]');
        if (!toggle || !nav) {
            return;
        }
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });
    }

    function normalize(value) {
        return String(value || '').toLowerCase().trim();
    }

    function setupFilters() {
        var inputs = document.querySelectorAll('.js-search');
        var buttons = document.querySelectorAll('.js-filter');
        var currentFilter = 'all';

        function apply() {
            var query = '';
            inputs.forEach(function (input) {
                if (document.activeElement === input || input.value) {
                    query = normalize(input.value);
                }
            });
            document.querySelectorAll('.movie-card, .ranking-row').forEach(function (card) {
                var searchable = normalize(card.getAttribute('data-search') || card.textContent);
                var category = card.getAttribute('data-category') || 'all';
                var queryMatch = !query || searchable.indexOf(query) !== -1;
                var filterMatch = currentFilter === 'all' || category === currentFilter;
                card.classList.toggle('hidden-by-filter', !(queryMatch && filterMatch));
            });
        }

        inputs.forEach(function (input) {
            input.addEventListener('input', apply);
        });
        buttons.forEach(function (button) {
            button.addEventListener('click', function () {
                currentFilter = button.getAttribute('data-filter') || 'all';
                buttons.forEach(function (item) {
                    item.classList.toggle('active', item === button);
                });
                apply();
            });
        });
    }

    function setupHero() {
        var hero = document.querySelector('[data-hero]');
        if (!hero) {
            return;
        }
        var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
        var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
        var prev = hero.querySelector('[data-hero-prev]');
        var next = hero.querySelector('[data-hero-next]');
        if (!slides.length) {
            return;
        }
        var index = 0;
        var timer = null;

        function show(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            slides.forEach(function (slide, itemIndex) {
                slide.classList.toggle('active', itemIndex === index);
            });
            dots.forEach(function (dot, itemIndex) {
                dot.classList.toggle('active', itemIndex === index);
            });
        }

        function restart() {
            if (timer) {
                window.clearInterval(timer);
            }
            timer = window.setInterval(function () {
                show(index + 1);
            }, 5200);
        }

        dots.forEach(function (dot) {
            dot.addEventListener('click', function () {
                show(Number(dot.getAttribute('data-hero-dot')) || 0);
                restart();
            });
        });
        if (prev) {
            prev.addEventListener('click', function () {
                show(index - 1);
                restart();
            });
        }
        if (next) {
            next.addEventListener('click', function () {
                show(index + 1);
                restart();
            });
        }
        restart();
    }

    ready(function () {
        setupNavigation();
        setupFilters();
        setupHero();
    });
}());

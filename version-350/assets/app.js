(function () {
  var menuButton = document.querySelector('[data-menu-toggle]');
  var navMenu = document.querySelector('[data-nav-menu]');

  if (menuButton && navMenu) {
    menuButton.addEventListener('click', function () {
      var open = navMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.querySelectorAll('[data-hero]').forEach(function (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var activeIndex = 0;
    var timer = null;

    function showSlide(index) {
      if (!slides.length) {
        return;
      }
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === activeIndex);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === activeIndex);
      });
    }

    function startTimer() {
      if (timer) {
        clearInterval(timer);
      }
      timer = setInterval(function () {
        showSlide(activeIndex + 1);
      }, 5200);
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        var index = Number(dot.getAttribute('data-hero-dot')) || 0;
        showSlide(index);
        startTimer();
      });
    });

    showSlide(0);
    startTimer();
  });

  document.querySelectorAll('[data-filter-scope]').forEach(function (scope) {
    var grid = scope.parentElement.querySelector('[data-movie-grid]');
    if (!grid) {
      return;
    }

    var input = scope.querySelector('[data-search-input]');
    var selects = Array.prototype.slice.call(scope.querySelectorAll('[data-filter-select]'));
    var cards = Array.prototype.slice.call(grid.querySelectorAll('.movie-card'));

    selects.forEach(function (select) {
      var key = select.getAttribute('data-filter-key');
      var values = [];

      cards.forEach(function (card) {
        var value = card.getAttribute('data-' + key) || '';
        if (value && values.indexOf(value) === -1) {
          values.push(value);
        }
      });

      values.sort(function (a, b) {
        return b.localeCompare(a, 'zh-CN', { numeric: true });
      });

      values.forEach(function (value) {
        var option = document.createElement('option');
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
      });
    });

    function applyFilters() {
      var query = input ? input.value.trim().toLowerCase() : '';
      var activeFilters = selects.map(function (select) {
        return {
          key: select.getAttribute('data-filter-key'),
          value: select.value
        };
      });

      cards.forEach(function (card) {
        var haystack = [
          card.getAttribute('data-title') || '',
          card.getAttribute('data-region') || '',
          card.getAttribute('data-type') || '',
          card.getAttribute('data-year') || '',
          card.getAttribute('data-genre') || '',
          card.getAttribute('data-tags') || ''
        ].join(' ').toLowerCase();

        var queryMatch = !query || haystack.indexOf(query) !== -1;
        var filterMatch = activeFilters.every(function (filter) {
          if (!filter.value) {
            return true;
          }
          return (card.getAttribute('data-' + filter.key) || '') === filter.value;
        });

        card.hidden = !(queryMatch && filterMatch);
      });
    }

    if (input) {
      input.addEventListener('input', applyFilters);
    }

    selects.forEach(function (select) {
      select.addEventListener('change', applyFilters);
    });
  });

  var video = document.querySelector('[data-player-video]');
  var cover = document.querySelector('[data-player-cover]');
  var startButton = document.querySelector('[data-player-start]');
  var hlsInstance = null;
  var mediaAttached = false;

  function attachMedia() {
    if (!video || mediaAttached) {
      return;
    }

    var stream = video.getAttribute('data-stream');
    if (!stream) {
      return;
    }

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream;
      mediaAttached = true;
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hlsInstance.loadSource(stream);
      hlsInstance.attachMedia(video);
      mediaAttached = true;
      return;
    }

    video.src = stream;
    mediaAttached = true;
  }

  function playMovie() {
    if (!video) {
      return;
    }

    attachMedia();

    if (cover) {
      cover.classList.add('is-hidden');
    }

    video.controls = true;
    var playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(function () {});
    }
  }

  if (startButton) {
    startButton.addEventListener('click', function (event) {
      event.preventDefault();
      playMovie();
    });
  }

  if (cover) {
    cover.addEventListener('click', function () {
      playMovie();
    });
  }

  if (video) {
    video.addEventListener('play', function () {
      if (cover) {
        cover.classList.add('is-hidden');
      }
    });

    video.addEventListener('click', function () {
      if (!mediaAttached) {
        playMovie();
      }
    });

    window.addEventListener('beforeunload', function () {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    });
  }
})();

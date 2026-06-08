(function () {
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  function initMenu() {
    var toggle = document.querySelector('[data-nav-toggle]');
    var panel = document.querySelector('[data-mobile-panel]');
    if (!toggle || !panel) return;
    toggle.addEventListener('click', function () {
      var opened = panel.classList.toggle('is-open');
      document.body.classList.toggle('menu-open', opened);
      toggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
    });
  }

  function initHero() {
    var hero = document.querySelector('[data-hero]');
    if (!hero) return;
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    if (!slides.length) return;
    var index = 0;
    var timer;
    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.classList.toggle('is-active', i === index);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }
    function start() {
      stop();
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5600);
    }
    function stop() {
      if (timer) window.clearInterval(timer);
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        show(i);
        start();
      });
    });
    hero.addEventListener('mouseenter', stop);
    hero.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function initHeaderSearch() {
    Array.prototype.slice.call(document.querySelectorAll('[data-search-form]')).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        var input = form.querySelector('input');
        var query = input ? input.value.trim() : '';
        var url = './search.html';
        if (query) url += '?q=' + encodeURIComponent(query);
        window.location.href = url;
      });
    });
  }

  function textMatch(item, query) {
    var source = [item.title, item.region, item.type, item.year, item.genre, item.tags, item.oneLine].join(' ').toLowerCase();
    return source.indexOf(query.toLowerCase()) !== -1;
  }

  function initSearchPage() {
    var page = document.querySelector('[data-search-page]');
    if (!page || !window.SEARCH_ITEMS) return;
    var input = page.querySelector('[data-search-input]');
    var list = page.querySelector('[data-search-results]');
    var note = page.querySelector('[data-search-note]');
    var params = new URLSearchParams(window.location.search);
    var initial = params.get('q') || '';
    if (input) input.value = initial;
    function card(item) {
      return [
        '<article class="movie-card">',
        '<a class="card-link" href="' + item.link + '">',
        '<div class="card-poster"><img src="' + item.cover + '" alt="' + item.title.replace(/"/g, '&quot;') + '" loading="lazy" onerror="this.remove()"></div>',
        '<div class="card-body">',
        '<h2 class="card-title">' + item.title + '</h2>',
        '<p class="card-desc">' + item.oneLine + '</p>',
        '<div class="card-meta"><span>' + item.year + '</span><span>' + item.region + '</span></div>',
        '</div>',
        '</a>',
        '</article>'
      ].join('');
    }
    function render() {
      var query = input ? input.value.trim() : '';
      var items = query ? window.SEARCH_ITEMS.filter(function (item) { return textMatch(item, query); }) : window.SEARCH_ITEMS.slice(0, 36);
      items = items.slice(0, 72);
      list.innerHTML = items.length ? items.map(card).join('') : '<div class="empty-state">没有匹配的影片，换个关键词试试。</div>';
      if (note) note.textContent = query ? '正在浏览与“' + query + '”相关的影片' : '正在浏览近期精选影片';
    }
    if (input) input.addEventListener('input', render);
    render();
  }

  function initPlayer() {
    var shell = document.querySelector('[data-player-shell]');
    if (!shell) return;
    var video = shell.querySelector('video');
    var button = shell.querySelector('[data-play-button]');
    if (!video) return;
    var attached = false;
    var hlsInstance = null;
    function attachStream() {
      if (attached) return;
      var src = video.getAttribute('data-src');
      if (!src) return;
      if (window.Hls && window.Hls.isSupported()) {
        hlsInstance = new window.Hls({ enableWorker: true, lowLatencyMode: true });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
      } else {
        video.src = src;
      }
      attached = true;
    }
    function play() {
      attachStream();
      shell.classList.add('is-ready');
      var run = video.play();
      if (run && run.catch) run.catch(function () {});
    }
    if (button) button.addEventListener('click', play);
    video.addEventListener('pointerdown', attachStream, { once: true });
    video.addEventListener('play', function () {
      shell.classList.add('is-ready');
    });
    window.addEventListener('beforeunload', function () {
      if (hlsInstance) hlsInstance.destroy();
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initHeaderSearch();
    initSearchPage();
    initPlayer();
  });
})();

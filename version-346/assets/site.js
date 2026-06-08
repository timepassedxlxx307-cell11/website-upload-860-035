(function () {
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
    var button = document.querySelector(".menu-toggle");
    var panel = document.querySelector(".mobile-panel");
    if (!button || !panel) {
      return;
    }
    button.addEventListener("click", function () {
      var opened = panel.classList.toggle("open");
      button.setAttribute("aria-expanded", opened ? "true" : "false");
    });
  }

  function initHero() {
    var hero = document.querySelector(".hero");
    if (!hero) {
      return;
    }
    var slides = Array.prototype.slice.call(hero.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(hero.querySelectorAll(".hero-dot"));
    if (slides.length < 2) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, current) {
        slide.classList.toggle("active", current === index);
      });
      dots.forEach(function (dot, current) {
        dot.classList.toggle("active", current === index);
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

    dots.forEach(function (dot, current) {
      dot.addEventListener("click", function () {
        show(current);
        start();
      });
    });

    hero.addEventListener("mouseenter", stop);
    hero.addEventListener("mouseleave", start);
    show(0);
    start();
  }

  function initLocalFilter() {
    var panels = Array.prototype.slice.call(document.querySelectorAll(".local-filter"));
    panels.forEach(function (panel) {
      var input = panel.querySelector("input");
      var scopeSelector = panel.getAttribute("data-scope") || "body";
      var scope = document.querySelector(scopeSelector) || document;
      var cards = Array.prototype.slice.call(scope.querySelectorAll(".movie-card"));
      var buttons = Array.prototype.slice.call(panel.querySelectorAll(".filter-button"));

      function applyFilter() {
        var query = normalize(input ? input.value : "");
        var activeButton = panel.querySelector(".filter-button.active");
        var token = activeButton ? normalize(activeButton.getAttribute("data-filter")) : "";
        cards.forEach(function (card) {
          var title = normalize(card.getAttribute("data-title"));
          var meta = normalize(card.getAttribute("data-meta"));
          var matchesText = !query || title.indexOf(query) > -1 || meta.indexOf(query) > -1;
          var matchesToken = !token || meta.indexOf(token) > -1 || title.indexOf(token) > -1;
          card.classList.toggle("is-hidden-by-filter", !(matchesText && matchesToken));
        });
      }

      if (input) {
        input.addEventListener("input", applyFilter);
      }

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          buttons.forEach(function (item) {
            item.classList.remove("active");
          });
          button.classList.add("active");
          applyFilter();
        });
      });
    });
  }

  function getSearchMatches(query, limit) {
    var normalized = normalize(query);
    if (!normalized || !window.SEARCH_MOVIES) {
      return [];
    }
    return window.SEARCH_MOVIES.filter(function (item) {
      return normalize(item.text).indexOf(normalized) > -1;
    }).slice(0, limit || 8);
  }

  function initNavSearch() {
    var forms = Array.prototype.slice.call(document.querySelectorAll(".nav-search, .mobile-search"));
    forms.forEach(function (form) {
      var input = form.querySelector(".nav-search-input");
      var box = form.querySelector(".search-suggestions");
      if (!input || !box) {
        return;
      }
      input.addEventListener("input", function () {
        var matches = getSearchMatches(input.value, 6);
        if (!matches.length) {
          box.classList.remove("open");
          box.innerHTML = "";
          return;
        }
        box.innerHTML = matches.map(function (item) {
          return '<a href="' + item.url + '"><strong>' + item.title + '</strong><br><span>' + item.year + ' · ' + item.region + ' · ' + item.genre + '</span></a>';
        }).join("");
        box.classList.add("open");
      });
      document.addEventListener("click", function (event) {
        if (!form.contains(event.target)) {
          box.classList.remove("open");
        }
      });
    });
  }

  function initSearchPage() {
    var page = document.querySelector(".search-page");
    if (!page) {
      return;
    }
    var input = page.querySelector(".search-page-input");
    var results = page.querySelector(".search-results");
    var params = new URLSearchParams(window.location.search);
    var firstQuery = params.get("q") || "";

    function render() {
      var matches = getSearchMatches(input.value, 60);
      if (!matches.length) {
        results.innerHTML = '<div class="content-panel"><h2>继续搜索</h2><p>换一个片名、类型、地区或年份试试。</p></div>';
        return;
      }
      results.innerHTML = matches.map(function (item) {
        return '<article class="search-card"><a href="' + item.url + '"><img src="' + item.image + '" alt="' + item.title + '"></a><div><h2><a href="' + item.url + '">' + item.title + '</a></h2><p>' + item.year + ' · ' + item.region + ' · ' + item.genre + ' · ' + item.category + '</p></div><a class="primary-button" href="' + item.url + '">立即观看</a></article>';
      }).join("");
    }

    if (input) {
      input.value = firstQuery;
      input.addEventListener("input", render);
      render();
    }
  }

  function initQuickSearch() {
    var forms = Array.prototype.slice.call(document.querySelectorAll(".quick-search"));
    forms.forEach(function (form) {
      var input = form.querySelector("input");
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var query = input ? input.value.trim() : "";
        window.location.href = "./search.html?q=" + encodeURIComponent(query);
      });
    });
  }

  ready(function () {
    initMenu();
    initHero();
    initLocalFilter();
    initNavSearch();
    initSearchPage();
    initQuickSearch();
  });
})();

function startMoviePlayer(streamUrl) {
  var video = document.getElementById("movie-player");
  var overlay = document.querySelector(".play-overlay");
  var hls = null;
  var loaded = false;

  function loadVideo() {
    if (!video || loaded) {
      return;
    }
    loaded = true;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = streamUrl;
    } else if (window.Hls && Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hls.loadSource(streamUrl);
      hls.attachMedia(video);
    } else {
      video.src = streamUrl;
    }
  }

  function playVideo() {
    if (!video) {
      return;
    }
    loadVideo();
    if (overlay) {
      overlay.classList.add("is-hidden");
    }
    var action = video.play();
    if (action && typeof action.catch === "function") {
      action.catch(function () {});
    }
  }

  if (overlay) {
    overlay.addEventListener("click", playVideo);
  }
  if (video) {
    video.addEventListener("click", function () {
      if (video.paused) {
        playVideo();
      }
    });
    video.addEventListener("play", function () {
      if (overlay) {
        overlay.classList.add("is-hidden");
      }
    });
  }
}

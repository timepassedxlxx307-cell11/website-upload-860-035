(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
      return;
    }
    callback();
  }

  function normalize(value) {
    return String(value || "").trim().toLowerCase();
  }

  function setupMobileMenu() {
    var button = document.querySelector("[data-mobile-menu-button]");
    var menu = document.querySelector("[data-mobile-nav]");
    if (!button || !menu) {
      return;
    }
    button.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
  }

  function setupSearchForms() {
    document.querySelectorAll("[data-search-form]").forEach(function (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        var input = form.querySelector("input[name='q']");
        var query = input ? input.value.trim() : "";
        var target = "./search.html";
        if (query) {
          target += "?q=" + encodeURIComponent(query);
        }
        window.location.href = target;
      });
    });
  }

  function setupHero() {
    var slider = document.querySelector("[data-hero-slider]");
    if (!slider) {
      return;
    }
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll(".hero-dot"));
    if (slides.length <= 1) {
      return;
    }
    var current = 0;
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === current);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === current);
      });
    }
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        show(index);
      });
    });
    window.setInterval(function () {
      show(current + 1);
    }, 5200);
  }

  function setupFilters() {
    var filterRoot = document.querySelector("[data-filter-root]");
    if (!filterRoot) {
      return;
    }
    var keywordInput = filterRoot.querySelector("[data-filter-keyword]");
    var yearSelect = filterRoot.querySelector("[data-filter-year]");
    var regionSelect = filterRoot.querySelector("[data-filter-region]");
    var cards = Array.prototype.slice.call(document.querySelectorAll("[data-movie-card]"));
    var empty = document.querySelector("[data-empty-result]");
    var params = new URLSearchParams(window.location.search);
    var initialQuery = params.get("q") || "";
    if (keywordInput && initialQuery) {
      keywordInput.value = initialQuery;
    }
    function applyFilters() {
      var keyword = normalize(keywordInput ? keywordInput.value : "");
      var year = normalize(yearSelect ? yearSelect.value : "");
      var region = normalize(regionSelect ? regionSelect.value : "");
      var visibleCount = 0;
      cards.forEach(function (card) {
        var title = normalize(card.getAttribute("data-title"));
        var tags = normalize(card.getAttribute("data-tags"));
        var oneLine = normalize(card.getAttribute("data-line"));
        var cardYear = normalize(card.getAttribute("data-year"));
        var cardRegion = normalize(card.getAttribute("data-region"));
        var keywordMatch = !keyword || title.indexOf(keyword) >= 0 || tags.indexOf(keyword) >= 0 || oneLine.indexOf(keyword) >= 0;
        var yearMatch = !year || cardYear === year;
        var regionMatch = !region || cardRegion.indexOf(region) >= 0;
        var visible = keywordMatch && yearMatch && regionMatch;
        card.classList.toggle("is-hidden-by-filter", !visible);
        if (visible) {
          visibleCount += 1;
        }
      });
      if (empty) {
        empty.classList.toggle("visible", visibleCount === 0);
      }
    }
    [keywordInput, yearSelect, regionSelect].forEach(function (control) {
      if (control) {
        control.addEventListener("input", applyFilters);
        control.addEventListener("change", applyFilters);
      }
    });
    applyFilters();
  }

  function setupPlayer() {
    document.querySelectorAll("[data-player]").forEach(function (player) {
      var video = player.querySelector("video");
      var overlay = player.querySelector("[data-play-overlay]");
      var source = player.getAttribute("data-src");
      var initialized = false;

      function initialize() {
        if (initialized || !video || !source) {
          return;
        }
        initialized = true;
        if (window.Hls && window.Hls.isSupported()) {
          var hls = new window.Hls({
            enableWorker: true,
            lowLatencyMode: true
          });
          hls.loadSource(source);
          hls.attachMedia(video);
          player._hls = hls;
        } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = source;
        } else {
          video.src = source;
        }
      }

      function playVideo() {
        initialize();
        if (!video) {
          return;
        }
        var playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {
            video.controls = true;
          });
        }
      }

      if (overlay) {
        overlay.addEventListener("click", playVideo);
      }
      if (video) {
        video.addEventListener("click", function () {
          initialize();
        });
        video.addEventListener("play", function () {
          if (overlay) {
            overlay.classList.add("hidden");
          }
        });
        video.addEventListener("pause", function () {
          if (overlay && video.currentTime === 0) {
            overlay.classList.remove("hidden");
          }
        });
      }
    });
  }

  ready(function () {
    setupMobileMenu();
    setupSearchForms();
    setupHero();
    setupFilters();
    setupPlayer();
  });
})();

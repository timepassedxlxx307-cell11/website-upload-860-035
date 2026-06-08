(function () {
    function startPlayer(card) {
        var video = card.querySelector('video');
        var source = card.getAttribute('data-stream');
        if (!video || !source) {
            return;
        }
        var play = function () {
            card.classList.add('is-playing');
            var promise = video.play();
            if (promise && typeof promise.catch === 'function') {
                promise.catch(function () {});
            }
        };
        if (card.getAttribute('data-ready') === 'true') {
            play();
            return;
        }
        card.setAttribute('data-ready', 'true');
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = source;
            video.addEventListener('loadedmetadata', play, { once: true });
            video.load();
            return;
        }
        if (window.Hls && window.Hls.isSupported()) {
            var hls = new window.Hls({ enableWorker: true, lowLatencyMode: true });
            hls.loadSource(source);
            hls.attachMedia(video);
            hls.on(window.Hls.Events.MANIFEST_PARSED, play);
            return;
        }
        video.src = source;
        video.addEventListener('loadedmetadata', play, { once: true });
        video.load();
    }

    function init() {
        document.querySelectorAll('.player-card').forEach(function (card) {
            card.addEventListener('click', function (event) {
                if (event.target && event.target.closest('video')) {
                    return;
                }
                startPlayer(card);
            });
        });
    }

    if (document.readyState !== 'loading') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
}());

// Flip tiles: hover and keyboard focus are handled in CSS.
// On touch screens there is no hover, so the first tap flips a tile
// and a second tap follows its link.
(function () {
  var tiles = document.querySelectorAll('.flip');
  var noHover = window.matchMedia('(hover: none)');

  tiles.forEach(function (tile) {
    tile.addEventListener('click', function (event) {
      if (!noHover.matches) return;
      if (!tile.classList.contains('is-flipped')) {
        event.preventDefault();
        tiles.forEach(function (other) { other.classList.remove('is-flipped'); });
        tile.classList.add('is-flipped');
      } else if (!tile.hasAttribute('href')) {
        tile.classList.remove('is-flipped');
      }
    });
  });
})();

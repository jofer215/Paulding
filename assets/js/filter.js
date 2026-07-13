(function () {
  var grid = document.querySelector('.item-grid');
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.item-card'));
  var searchInput = document.getElementById('filter-search');
  var typeSelect = document.getElementById('filter-type');
  var eraSelect = document.getElementById('filter-era');
  var resetButton = document.getElementById('filter-reset');
  var countEl = document.getElementById('filter-count');

  function applyFilters() {
    var query = (searchInput && searchInput.value || '').trim().toLowerCase();
    var type = (typeSelect && typeSelect.value) || '';
    var era = (eraSelect && eraSelect.value) || '';
    var visible = 0;

    cards.forEach(function (card) {
      var matchesQuery = !query || card.dataset.search.indexOf(query) !== -1;
      var matchesType = !type || card.dataset.type === type;
      var matchesEra = !era || card.dataset.era === era;
      var show = matchesQuery && matchesType && matchesEra;
      card.hidden = !show;
      if (show) visible++;
    });

    if (countEl) {
      countEl.textContent = visible + (visible === 1 ? ' item' : ' items') + ' shown';
    }
  }

  [searchInput, typeSelect, eraSelect].forEach(function (el) {
    if (el) el.addEventListener('input', applyFilters);
  });

  if (resetButton) {
    resetButton.addEventListener('click', function () {
      if (searchInput) searchInput.value = '';
      if (typeSelect) typeSelect.value = '';
      if (eraSelect) eraSelect.value = '';
      applyFilters();
    });
  }

  applyFilters();
})();

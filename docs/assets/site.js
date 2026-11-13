// 画面写真の拡大と、機体の絞り込み・紹介の開閉
(function () {
  var box = document.querySelector('.lightbox'), big = box.querySelector('img');
  function close() { box.hidden = true; big.removeAttribute('src'); }
  document.querySelectorAll('.shot').forEach(function (b) {
    b.addEventListener('click', function () { big.src = b.dataset.full; big.alt = b.querySelector('img').alt; box.hidden = false; });
  });
  box.addEventListener('click', close);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });

  var cards = document.querySelectorAll('.mech');
  document.querySelectorAll('.chip').forEach(function (c) {
    c.addEventListener('click', function () {
      document.querySelectorAll('.chip').forEach(function (x) { x.classList.toggle('on', x === c); });
      var r = c.dataset.role;
      cards.forEach(function (m) { m.classList.toggle('hide', !!r && m.dataset.role !== r); m.classList.remove('open'); });
    });
  });
  cards.forEach(function (m) {
    m.addEventListener('click', function () {
      var on = !m.classList.contains('open');
      cards.forEach(function (x) { x.classList.remove('open'); });
      if (on) m.classList.add('open');
    });
  });
})();

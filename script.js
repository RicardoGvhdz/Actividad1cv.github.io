// script.js
const btn = document.getElementById('toggleMore');
const moreInfo = document.getElementById('moreInfo');

btn.addEventListener('click', () => {
  if(moreInfo.style.display === 'none') {
    moreInfo.style.display = 'block';
    btn.textContent = 'Mostrar menos info';
  } else {
    moreInfo.style.display = 'none';
    btn.textContent = 'Mostrar más info';
  }
});

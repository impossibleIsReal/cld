window.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.header__burger');
  const searchBtn = document.querySelector('.nav-bar__search')

  burgerBtn.addEventListener('click', () => {
    const navList = document.querySelector('.header__nav');
    const closeBtn = document.querySelector('.nav__burger-close');
    closeBtn.classList.remove('visually-hidden');

    navList.style.left = '0';

    closeBtn.addEventListener('click', () => {
      navList.style.left = '-500px';
      closeBtn.classList.add('visually-hidden');
    });
  });

  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const searchBlock = document.querySelector('.search__block');
    const searchBlockCloseBtn = document.querySelector('.search__close-btn');
    searchBlock.classList.add('search__block_active');
    searchBlockCloseBtn.addEventListener('click', () => {
      searchBlock.classList.remove('search__block_active');
      console.log('Something is wrong...')
    });


  });
})

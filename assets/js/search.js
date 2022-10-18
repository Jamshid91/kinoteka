const openBtn = document.querySelector('.search__btn'),
      searchItem = document.querySelector('.main-search .search');


      let check = 0;
      openBtn.addEventListener('click', () => {
              if(check == 0) {
                openBtn.textContent = 'Закрыт'
                searchItem.classList.add('showAllSearch')
                  return check = 1;
              } else {
                openBtn.textContent = 'Загрузить еще'
                searchItem.classList.remove('showAllSearch')
                  return check = 0;
              }
          })
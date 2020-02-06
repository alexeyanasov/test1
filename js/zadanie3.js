// определим контейнер с элементами
const features = document.querySelector('.features-block');

// функция получения контента элемента
const getFirstElContent = (el) => {

  // заберем в переменную содержание первого элемента
  return el.innerHTML;

}

// вешаем прослушку на контейнер 
features.addEventListener('click', e => {
  // то куда кликаем
  const target = e.target;

  // заберем в переменную первый элемент контейнера
  const firstEl = features.querySelector('.feature-item');

  // проверка что ближайший родитель с классом feature-item не первый элемент
  if( target.closest('.feature-item') != firstEl ) {
    // контент элемента по которому был клик положим в переменную
    const clickElContent = target.closest('.feature-item').innerHTML;

    // переприсвоим первому и тому на который кликаем внутренности
    target.closest('.feature-item').innerHTML = getFirstElContent(firstEl);
    firstEl.innerHTML = clickElContent;
  }

});
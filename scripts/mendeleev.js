// Функция для обработки нажатий на элементы таблицы
function handleElementClick(event) {
  // Получаем ID элемента, на который было нажато
  var elementId = event.target.id;
  
  // Получаем данные о элементе по его ID
  var elementData = getElementData(elementId);
  
  // Выводим данные элемента в консоль (или можно в другой элемент на странице)
  console.log(elementData);
}

// Функция для получения данных о элементе по его ID
function getElementData(elementId) {
  // В данном примере, просто возвращаем символ и атомный номер элемента
  var elementData = {
    symbol: elementId,
    atomicNumber: document.getElementById(elementId).textContent.split('\n')[1]
  };
  return elementData;
}


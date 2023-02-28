const tabHeaders = document.querySelectorAll("[data-tab]"); // Вибір всіх табів 
const contentBoxes = document.querySelectorAll("[data-tab-content]"); // Вибір всіх скритих блоків

tabHeaders.forEach(function (item) { // Перебор масива з всіма табами 
  item.addEventListener("click", function () { // Вішаєм клік на кожен таб після того як його перебрали форічом
    contentBoxes.forEach(function (item) { // Перебираєм всі скриті контент блоки
      item.classList.add("hidden"); // Добавляєм всім контент блокам класс hidden чим їх ховаєм
    });

    const contentBox = document.querySelector("#" + this.dataset.tab); // Вибираєм конкретний контент бокс по ID таби

    contentBox.classList.remove("hidden"); // видаляєм класс hidden чим показуєм блок для конкретної таби
  });
});

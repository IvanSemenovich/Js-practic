const modalTabButton = document.querySelectorAll("[data-modal-button]"); // Вибірка всіх кнопок відкрити модалку
const modalCloseButtons = document.querySelectorAll("[data-modal-close]"); // Вибірка всіх кнопок закрити модалку
modalTabButton.forEach(function (item) { // Перебор всіх кнопок відкрити модалку форічом
  item.addEventListener("click", function () { // Вішаєм івент пол кліку на кожну з кнопок відкрити модалку
    const modalId = this.dataset.modalButton; // Берем значення з html Для data-model-button для  кожної кнопки

    const modal = document.querySelector("#" + modalId); // Берем ID модалки по значенню з data-model-button для кожної модалки відповідно до кнопки
    modal.classList.remove("hidden"); // Видаляєм hidden чим показуєм модалку
  });
});

modalCloseButtons.forEach(function (item) { // Перебор всіх кнопок для закриття модалки  форічом
  item.addEventListener("click", function () { // Вішаєм івент пол кліку на кожну з кнопок закрити модалку
    const modal = this.closest("[data-modal]"); // Вибираєм найближчого батька для конкретного модального вікна
    modal.classList.add("hidden"); // Добавляєм йому hidden чим закриваємо модальне вікно
  });
});

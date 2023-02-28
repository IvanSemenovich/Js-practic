const button = document.getElementById("button"); // Берем ебучу кнопку 
const content = document.getElementById("content"); // Берем ебучий контент який схований
if (button) { // Провірка чи кнопка є на сторінці ( не обовязково )
  button.addEventListener("click", function () { // Вішаєм інвент по кліку на кнопку 
    if (content.classList.toggle("content-hidden")) { // По кліку на кнопку відкриваєм або закриваєм блок 
      button.textContent = "Відкрити блок"; // Якщо блок закритий то текст в кнопці міняєм на Відкрити блок
    } else {
      button.textContent = "Закрити блок"; // Якщо блок відкритий то текст в кнопці міняєм на Закрити блок
    }
  });
}

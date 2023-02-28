const accordeon = document.querySelectorAll('[data-name="accordeon-title"]'); // вибор всіх аккордеонів - массив з 4 аккордеонами

accordeon.forEach(function(item){ // Перебор массива з 4 аккордеонами 

    item.addEventListener("click", function(){ // Вішаєм івент кліка на кожен аккордео окремо після перебору всіх в массиві
        
        this.nextElementSibling.classList.toggle("hidden"); // Наступному елементу після аакордеону по кліку буде додаватися або забиратись класс hidden
    })
})



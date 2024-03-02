//Определяем действующие элементы на странице
const days = document.querySelector('#days'); //Ищем место для дней
const hours = document.querySelector('#hours'); // Ищем место для часов
const minutes = document.querySelector('#minutes'); // Ищем место для минут
const countdown = document.querySelector('#countdown'); // Ищем счетчик 

// Делаем расчеты
// const deadline = new Date(2024, 20, 09); // берем текущий год и время

function updateCounter () {
    // текущая дата и время
    const currentTime = new Date(); 
    // разница в миллисекундах
    const difference =  deadline - currentTime; 


//Перевод в сек>минуты>часы>сутки, округление
const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24); 

//  Всего часов осталось. Далее берем остаток от деления на 24(преобразование в дни) и получаем часы неполного дня
const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;


//  Всего минут осталось. Далее берем остаток от деления на 60(преобразование в минуты) и получаем минуты неполного дня
const minutesLeft = Math.floor(difference / 1000 / 60 ) % 60;

//  Всего сек осталось. Далее берем остаток от деления на 60(преобразование в сек) и получаем сек неполного дня
const secLeft = Math.floor(difference / 1000) % 60;

// Подставляем нужные значения на страницу
days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
seconds.innerText = secLeft < 10 ? '0' + secLeft : secLeft;
}

updateCounter();
// Запускаем расчет 1 раз в секунду (каждую секунду обновляется время и дата)
setInterval(updateCounter, 1000);

setTimeout(function(){
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);
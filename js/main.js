/*1.setTimeout
Створити програму, яка буде виводити повідомлення через певний час.
При натисканні на кнопку "Запуск", через 5 секунд на екрані має з'являтися повідомлення:
"Час минув!". Якщо користувач натисне на кнопку "Зупинити" до завершення таймера,
то повідомлення не повинно з'являтися.
 */
const get_msg_btn = document.querySelector("#get_msg_btn");
const stop_msg_btn = document.querySelector("#stop_msg_btn");
let timer_get = null;
get_msg_btn.addEventListener("click", () => {
  console.log("work");
  timer_get = setTimeout(() => {
    alert("Hello");
  }, 5000);
});

stop_msg_btn.addEventListener("click", () => {
  clearTimeout(timer_get);
});

/*2.setInterval
Створити програму, яка запускає таймер і оновлює час кожну секунду.
При натисканні на кнопку "Запуск" таймер має почати відлік (0, 1, 2, 3 і т.д.),
а при натисканні на кнопку "Зупинити" відлік має зупинятися.
Якщо натиснути "Скинути", лічильник має обнулитися. */
const start_btn = document.querySelector("#start_btn");
const stop_btn = document.querySelector("#stop_btn");
const clear_btn = document.querySelector("#clear_btn");
const time = document.querySelector("#time");

let interval = null;
let count = 0;
start_btn.addEventListener("click", () => {
  interval = setInterval(() => {
    time.textContent = count++;
  }, 1000);
});

stop_btn.addEventListener("click", () => {
  clearInterval(interval);
});

clear_btn.addEventListener("click", () => {
  clearInterval(interval);
  count = 0;
  time.textContent = 0;
});

/*3.document
Створити програму, яка змінює колір фону сторінки при натисканні на кнопку.
Кожне натискання змінює фон на випадковий колір.
 */
const color_random = document.querySelector("#color_random");
const body_color = document.body;
const colorArr = ["red", "blue", "yellow", "black"];

color_random.addEventListener("click", () => {
  console.log("working");
  body_color.style.backgroundColor =
    colorArr[Math.floor(Math.random() * colorArr.length)];
});
/*4.document
Створити програму, яка при натисканні на кнопку приховує або показує текст на сторінці. */
const text_hiden = document.querySelector("#text_hiden");
const hiden_btn = document.querySelector("#hiden_btn");
hiden_btn.addEventListener("click", () => {
  if (text_hiden.classList.contains("hiden")) {
    text_hiden.classList.remove("hiden");
  } else {
    text_hiden.classList.add("hiden");
  }
});
/*5.document
Створити програму, яка рахує кількість натискань на кнопку і показує результат на сторінці. */
const click_counter = document.querySelector("#click_counter");
const btn_click_count = document.querySelector("#btn_click_count");
let number_count = 1;
btn_click_count.addEventListener("click", () => {
  click_counter.textContent = number_count++;
});
/*6.document+setInterval
Створити програму, яка буде змінювати колір тексту заголовка кожні 500 мілісекунд.
При натисканні на кнопку "Зупинити миготіння", зміна кольорів має зупинятися.
 */
const color_h = document.querySelector("#color_h");
const btn_color_h = document.querySelector("#btn_color_h");
const btn_stop_color = document.querySelector("#btn_stop_color");
let color_interval = null;

btn_color_h.addEventListener("click", () => {
  color_interval = setInterval(() => {
    color_h.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  });
});

btn_stop_color.addEventListener("click", () => {
  console.log("testing");

  clearInterval(color_interval);
});
//Final

const Book = {
  title: 'book',
  author: 'anonymus',
  pages:0,
  read() {
  console.log (`you are read ${this.title} from ${this.author}`);
 },
};
console.log("Завдання: 1 ==============================");
console.log(Book);
console.log(Book.hasOwnProperty("title"));
Book.read();

console.log("Завдання: 1 ==============================");

// Виводимо в консоль Об'єкт: Book

// Виводимо в консоль прототип Об'єкту: Book

// Викликаємо функцію read об'єкту Book

// 2. Наслідування від базового об'єкту Book

/*
 * Об'єкт: Novel
 * Властивості та функції наслідуються від об'єкта Book
 * Додаємо нову властивість
 *  | Властивість | Значення |
 *  |-------------|----------|
 *  | genre       | "Новела" |
 */

const Novel = Object.create(Book);

Novel.genre = "Novella";

console.log("Завдання: 2 ==============================");
console.log(Novel);
console.log(Object.getPrototypeOf(Novel));

// 3. Створення нового об'єкту та зміна його прототипу

/*
 * Об'єкт: Biography
 * Властивості:
 * --------------------------------------
 * | Властивість | Значення             |
 * |-------------|----------------------|
 * | title       | "Загальна Біографія" |
 * | author      | "Біограф"            |
 * | pages       | 200                  |
 */

const Biography = {
  title: "general biography",
  author: "Biogrph",
  pages: 200,
};
// Змінемо прототип об'єкта Biography на Novel
Object.setPrototypeOf(Biography, Novel);

console.log("Завдання: 3 ==============================");
// Виводимо в консоль Об'єкт: Biography
console.log(Biography);
// Перевіримо чи являється Novel прототипом Biography та виведемо в консоль
console.log(Object.getPrototypeOf(Biography) === Novel);
// 4. Інкапсуляція властивості та додання властивості
/*
 * Об'єкт: ScienceBook
 * Властивості та функції наслідуються від об'єкта Book
 * Також тут використовується інкапсуляція для створення властивості 'info', яка не може бути змінена напряму, а лише змінюється за допомогю гетера
 */

// Створюємо ScienceBook, наслідуємо властивості і функції від об'єкта Book
const ScienceBook = Object.create(Book);
// Додаємо властивість 'info' за допомогою Object.defineProperty
// Зробимо щоб 'info' не можно було видалити або змінити, перевіримо і спробуємо присвоїти ій будь яке значення (це потрібно робити ззовні defineProperty),
// Отримаємо помилку Cannot assign to read only property 'info' of object '#<Object>'
Object.defineProperty(ScienceBook, "info", {
configurable: false,
get: function () {
  return `about book ${this.title}: ${this._info}`;
},
set: function (value) {
  this._info = value;
},
});
// Далі створюємо сетер який присвоє властивості info значення яке отримує при виклику, помилку більше не отримуємо але при спробі вивести значення info отримуємо undefined

// Створимо гетер який буде нам повертати рядок: Про книгу <title>: <info>
// тепер все виводить коректно

// Заповнюємо об'єкт
// | Властивість | Значення             |
// |-------------|----------------------|
// | title       | "Фізика 101"         |
// | author      | "Альберт Ейнштейн"   |
// | info        | написана в 1915 році |
ScienceBook.title = "Phis 101";
ScienceBook.author = "Einstein";
ScienceBook.info = "was written 1915";

// Виводимо в консоль властивість info

console.log("Завдання: 4 ==============================");
// Виводимо в консоль властивість info
console.log(ScienceBook.info);
// Виводимо в консоль налаштування властивости info
console.log(Object.getOwnPropertyDescriptor(ScienceBook, "info"));
// Виводимо в консоль налаштування властивости info

// 5. Поліморфізм: створення нового об'єкта та перевизначення його методу
const Textbook = Object.create(ScienceBook);
//Створюємо Textbook та наслідуємо властивості з ScienceBook

// Перевизначаємо метод read(), відповідно з дописом вище
Textbook.read = function () { console.log(`You era try to reed ${this.title} ${this.info}`);  
 };
// Встановлюємо значення для Textbook
// | Властивість | Значення                   |
// |-------------|----------------------------|
// | title       | "Фізика у Вищій Школі"     |
// | author      | "Дж. Д. Джонс"             |
Textbook.title = "Phis in School";
Textbook.author = "Johnes";
console.log("Завдання: 5 ==============================");
// Викликаємо функцію read об'єкту Textbook
console.log(Textbook.read())

// 6. Абстракція: створення об'єкта з загальними властивостями
const Media = {
  format: 'general',
  length: 0,
  play(){
    console.log(`You lisen now ${this.format} time:${this.length}`);
  },
};
const Song = Object.create(Media);
// Створюємо об'єкт Song, наслідуємо властивості і функції від об'єкта Media
Song.artist = 'someone';
Song.title = 'Bla bla';
// Встановлюємо додаткові властивості
// | Властивість | Значення               |
// |-------------|------------------------|
// | artist      | "Загальний Виконавець" |
// | title       | "Загальна Пісня"       |

console.log("Завдання: 6 ==============================");
// Викликаємо функцію play об'єкту Song
Song.play();
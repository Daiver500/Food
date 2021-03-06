// CARDS
// CLASSES FOR CARDS AND CARD CREATION (WITHOUT CLASSES LOOK FOR THE SERVER PART BELOW) 

import {getData} from "../services/server";

const cards = () => {
class MenuCard {
    constructor (img, alt, title, text, price, parentSelector, ...classes) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.currency = 75;
      this.changeToRub();
    }
  
    changeToRub() {
      this.price = this.price * this.currency;
    }
  
    render() {
      const newElement = document.createElement("div");
      if(this.classes.length === 0) {
        this.newElement = "menu__item";  // задаем дефолтный класс, если никаких классов в rest операторе нет
        newElement.classList.add(this.newElement);
      } else {
        this.classes.forEach((item) => {
          newElement.classList.add(item);
        });
      }
       newElement.innerHTML = 
      `<img src=${this.img} alt=${this.alt}>
      <h3 class="menu__item-subtitle">${this.title}</h3>
      <div class="menu__item-descr">${this.text}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
      </div>`;
    this.parent.append(newElement);
    }
  }

  // НА МОКОВЫХ ДАННЫХ 
  //    data.forEach((item) => {       // 
  //      item = new MenuCard.render()   // создание карточек на основе шаблона в классах (один из вариантов создания карточек)
  //    });

  /*axios.get("http://localhost:3000/menu")                        // AXIOS служит для обращения к серверу (GEt\POST) без создания дополнительных функций
  .then(data => {
    data.data.forEach(({img, altimg, title, descr, price}) => {       
      new MenuCard(img, altimg, title, descr, price, ".menu .container").render()   
    });
  });*/
  
  getData("http://localhost:3000/menu")                            // запрос к серверу (тоже самое ниже вариант 2)
    .then(data => {
      data.forEach(({img, altimg, title, descr, price}) => {       // деструктуризация объекта 
        new MenuCard(img, altimg, title, descr, price, ".menu .container").render()   // создание карточек на основе шаблона в классах (один из вариантов создания карточек)
      });
    });
  
  // getData("http://localhost:3000/menu")                            // запрос к серверу
  //  .then(data => {
  //    data.forEach((item) => {       
  //      item = new MenuCard.render()   // создание карточек на основе шаблона в классах (один из вариантов создания карточек)
  //    });
  //  });

  /*getData("http://localhost:3000/menu")                       // СОЗДАНИЕ КАРТОЧЕК БЕЗ ШАБЛОНИЗАЦИИ ПО КЛАССАМ
  .then(data => createCard(data));
  
  const createCard = (data) => {
     data.forEach(({img, altimg, title, descr, price}) => {
        const element = document.createElement("div");
        element.classList.add("menu__item");
        element.innerHTML = `
        <img src=${img} alt=${altimg}>
      <h3 class="menu__item-subtitle">${title}</h3>
      <div class="menu__item-descr">${descr}</div>
      <div class="menu__item-divider"></div>
      <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${price}</span> руб/день</div>
      </div>
        `
        document.querySelector(".menu .container").append(element);
     })
  }*/
}

// module.exports = cards;

export default cards;
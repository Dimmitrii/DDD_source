import React from 'react';

import { languageContext } from '../../App';

const dictionary = {
    basket: "Корзина",
    accessories: "Аксессуары",
    footwear: "Обувь",
    trousers: "Брюки",
    suits: "Костюмы",
    coats: "Пальто",
    hats: "Головные уборы",
    catalog: "Каталог",
    new: "Новое",
    arrival: "поступление",
    special: "Специальное",
    offer: "предложение",
    forward: "Перейти",
    information: "Информация",
    guarantees: "Гарантии",
    why: "Почему",
    about: "О",
    cooperation: "Сотрудничество",
	contacts: "Контакты",
    ties: "Галстуки",
    scarves: "Шарфы",
    shirts: "Рубашки",
    blazers: "Пиджаки",
    shoes: "Туфли",
    cloth: "ОДЕЖДА",
    pattern: "УЗОР",
    colour: "ЦВЕТ",
    price: "ЦЕНА",
    black: "Чёрный",
    brown: "Коричневый",
    burgundy: "Бордовый",
    gray: "Серый",
    white: "Белый",
    blue: "Синий",
    checked: "Клетка",
    striped: "Полоска",
    print: "Рисунок",
    without: "Без узора",
    to: "До",
    from:"От",
    filter: "Фильтр",
    qty: "Кол-во",
    "all goods": "Все товары",
	"delivery and payment": "Доставка и оплата",
	"purchase returns": "Возврат товара",
	"gift certificate": "Подарочный сертификат",
	"top-3 suits":"ТОП-3 Костюма",
	"about marteez": "О MARTEEZ",
	"about us": "О нас",
	"contact us": "Связь с нами",
    "sort by price": "Упорядочить по цене",
    "high to low": "По убыванию",
    "low to high": "По возрастанию",
}

export default function TranslatedComponent({ children }) {
    const language = React.useContext(languageContext);
    
    if(language === "en"){
        return children;
    }else{
        // console.log(children);
        return dictionary[children.toLowerCase()]
    }
}

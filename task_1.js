const div_basket = document.getElementById('div_basket');
const div_catalog = document.getElementById('div_catalog');
const div_basket_products = document.getElementById('div_basket_products');

//создаем каталог продукции
let catalog = {
    products: [
        { id: 1, name: 'Хлеб', price: 50 },
        { id: 2, name: 'Молоко', price: 80 },
        { id: 3, name: 'Сыр', price: 350 },
        { id: 4, name: 'Колбаса', price: 520 },
    ]
}

let total_count = catalog.products.length;
let basket = new Array(total_count).fill(0)

//вывод каталога
var out = '';
for (i = 0; i < total_count; i++) {
    out += '<input type="checkbox" class="products">' + catalog.products[i].name + '<br>';
}
div_catalog.innerHTML = out

//расчет стоимости корзины
function countCartPrice() {
    let total_price = 0;
    if (total_count > 0) {
        for (i = 0; i < total_count; i++) {
            total_price += basket[i] * catalog.products[i].price;
        }
        return 'В корзине: ' + total_count + ' товаров на сумму ' + total_price + ' рублей:'
    }
    else {

        return 'Корзина пуста';
    }
}

//нажатие кнопки
function onButtonClick() {
    for (i = 0; i < total_count; i++) {
        var product = document.getElementsByClassName("products")[i]
        if (product.checked == true) {
            basket[i] += 1;
        };
    }
    UpdateBasket();
}

//вывод обновленной корзины
function UpdateBasket() {
    div_basket.innerText = countCartPrice();
    var out = '';
    for (i = 0; i < total_count; i++) {
        if (basket[i] > 0) {
            out += catalog.products[i].name + ': ' + basket[i] + ' шт.' + '<br>'
        };
    }
    div_basket_products.innerHTML = out
}

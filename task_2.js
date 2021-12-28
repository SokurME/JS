var basket = document.getElementById('div_basket');
var basket = {
    products: [
        { id: 1, name: 'Хлеб', price: 50, count: 5 },
        { id: 2, name: 'Молоко', price: 80, count: 7 },
        { id: 3, name: 'Сыр', price: 350, count: 3 },
        { id: 4, name: 'Колбаса', price: 520, count: 2 },
    ]
}


function countCartPrice() {
    let total_price = 0;
    let total_count = basket.products.length;
    if (total_count > 0) {
        for (i = 0; i < total_count; i++) {
            total_price += basket.products[i].price * basket.products[i].count;
        }
        return 'В корзине: ' + total_count + ' товаров на сумму ' + total_price + ' рублей'
    }
    else {

        return 'Корзина пуста';
    }
}
div_basket.innerText = countCartPrice();

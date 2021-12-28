var basket = document.getElementById('catalog');
var basket = {
    products: [
        { id: 1, name: 'Хлеб', price: 50, count: 5 },
        { id: 2, name: 'Молоко', price: 80, count: 7 },
        { id: 3, name: 'Сыр', price: 350, count: 3 },
        { id: 4, name: 'Колбаса', price: 520, count: 2 },
    ]
}


function printProducts() {
    let total_count = basket.products.length;
    if (total_count > 0) {
        for (i = 0; i < total_count; i++) {
            let product = basket.products[i].name;
            let price = basket.products[i].price;
            catalog.innerText += product + ' стоимостью ' + price + ' руб.' + '\n';
        }
    }

    else {

        return 'Корзина пуста';
    }
}

printProducts();

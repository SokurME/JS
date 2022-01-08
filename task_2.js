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
    out += '<input type="checkbox" class="products">' + '<a href=# id =' + i + '>' + catalog.products[i].name + '</a><br>';
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

let links = document.getElementsByTagName('a');
let div_picture = document.getElementById('pictures');
let src_pic = './img/'
var pic_height = '480px';
var pic_width = '640px';
var number = 1;
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        modal.style.display = "block";
    };
    links[i].addEventListener('click', function (e) {
        let number_product = e.target.id;
        let img_src = '<img id="image" src=' + src_pic + number_product + '/';
        div_picture.innerHTML = img_src + '1.jpg width = ' + pic_width + ' height = ' + pic_height + '></img>';
    });
}
//меняем картинку при нажатии на нее
div_picture.addEventListener('click', function (e) {
    var pic_path = e.target.getAttribute('src');
    pic_path = pic_path.substr(0, pic_path.lastIndexOf('/')) + '/' + ((number + 1) % 3 + 1) + '.jpg';
    number++
    e.target.setAttribute('src', pic_path);
    console.log(pic_path);
})

var modal = document.getElementById("my_modal");
var span = document.getElementsByClassName("close_modal_window")[0];

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function text(t) {
    console.log(t);
}


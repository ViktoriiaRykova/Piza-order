var middlePizza = document.querySelector(".btn_small_size");
var bigPizza = document.querySelector(".middle_size");
var summa = document.querySelector(".sum");

var selectedSauce = document.querySelector(".current-topping");


var me = {};
var form = document.querySelector('.form');
var openFormButton = document.querySelector('.btn_order');
var closeButton = null;



var watermark = "Your name";
var input = document.forms[0].name;

document.getElementById("pizzaS").src = "https://mamamia.ua/storage/editor/fotos/sous-klassicheskij_1557758736353.png";

// ================= sum pizza ================= //
function insert(price) {
   summa.innerHTML = price;

    if (price === "117") { 
        document.getElementById("middle-pizza").src = "https://mamamia.ua/img/medium-pizza-active.svg";
        document.getElementById("big-pizza").src = "https://mamamia.ua/img/large-pizza-nonactive.svg";
    }
    else if (price === "147") { 
        document.getElementById("big-pizza").src = "https://mamamia.ua/img/large-pizza-active.svg";
        document.getElementById("middle-pizza").src = "https://mamamia.ua/img/medium-pizza-nonactive.svg";
    } return;
    }
// ================= choose Sauce ================= //
function chooseSauce(sauceName) {
    selectedSauce.innerHTML = sauceName;

    if (sauceName === 'Соус класичний') {
        document.getElementById("pizzaS").src = "https://mamamia.ua/storage/editor/fotos/sous-klassicheskij_1557758736353.png";
    }
    else if (sauceName === 'Соус BBQ') {
        document.getElementById("pizzaS").src = "https://mamamia.ua/storage/editor/fotos/sous-bbq_155679418013.png";
    }
    else if (sauceName === 'Соус Рікота') {
        document.getElementById("pizzaS").src = "https://mamamia.ua/storage/editor/fotos/sous-rikotta_1556623391103.png";
    }
    return;
}

 // ================= Open and close form ================= //
    function onClose() {
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function () {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.btn_submit');
        closeButton.addEventListener('click', onClose);
    };

    me.close = function () {
        form.classList.add('is-hidden');
    };

    if (openFormButton) {
        openFormButton.addEventListener('click', function (e) {
            e.preventDefault();
            me.open();
        });
    }

// ================= isValid form ================= //

me.isValid = function () {
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;

    if (!me.isAllCompleted(requiredFields)) {
        console.log('Заполните пожалуйста все необходимые поля');
        return false;
    } else if (!ITVDN.validation.isEmail(emailValue)) {
        console.log('Не верный email');
        return false;
    } else if (!ITVDN.validation.isNumber(numberValue)) {
        console.log('Не верный номер');
        return false;
    }

    return true;
};

me.isAllCompleted = function (data) {
    var result = true;

    for (var i = 0; i < data.length; i++) {
        if (!ITVDN.validation.isNotEmpty(data[i].value)) {
            result = false;
            break;
        }
    }

    return result;
};

ITVDN.form = me;

// ================= watermark name ================= //

initInput();

input.onfocus = function () {
    if (input.value === watermark) {
        input.value = "";

    }
};

input.onblur = function () {
    if (input.value === "") {
        initInput();
    }
};


function initInput() {
 
    input.value = watermark;
    input.style.color = "gray";
    input.style.fontStyle = "italic";
}



// ================= BTN SIZE PIZZA ================= //
middlePizza.addEventListener("mouseup", function small() {
    document.getElementById("middle-pizza").src = "https://mamamia.ua/img/medium-pizza-active.svg";
});

bigPizza.addEventListener("mouseup", function big() {
    document.getElementById("big-pizza").src = "https://mamamia.ua/img/large-pizza-active.svg";
});


// ================= BTN RIGHT NAV ================= //
function changeColor(parametri) {
 
    if (parametri === 'size') {
        document.getElementById("size").src = "https://mamamia.ua/img/size-active.svg";
        document.getElementById("toping").src = "https://mamamia.ua/img/toping.svg";
        document.getElementById("bortik").src = "https://mamamia.ua/img/pizza-4.svg";
    }
    else if (parametri === 'toping') {
        document.getElementById("toping").src = "https://mamamia.ua/img/toping-active.svg";
        document.getElementById("size").src = "https://mamamia.ua/img/size.svg";
        document.getElementById("bortik").src = "https://mamamia.ua/img/pizza-4.svg";
    } 
    else if (parametri === 'bortik') {
        document.getElementById("bortik").src = "https://mamamia.ua/img/pizza-4-active.svg";
        document.getElementById("size").src = "https://mamamia.ua/img/size.svg";
        document.getElementById("toping").src = "https://mamamia.ua/img/toping.svg";
    } return;
} 

// ================= ADD BORDER TO GALLERY ================= //
var img1 = document.images.pepperoni;
var img2 = document.images.margarita;
var img3 = document.images.kantri;
var gallery = document.getElementsByClassName("product-micro-block");


setTimeout(() => addBorder(), 3000);

function addBorder() {

    img1.style.border = "1px solid #000000";
    img2.style.border = "1px solid #000000";
    img3.style.border = "1px solid #000000";
    gallery.style.border = "1px solid #000000";
}




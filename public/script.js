
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};


function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.slider .dots li.active');
    if (last_active_dot) last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

window.onresize = function() {
    reloadSlider();
};

let sliderRes = document.querySelector('.sliderRes .listRes');  // Changed to match the 'res' version
let itemsRes = document.querySelectorAll('.sliderRes .listRes .itemRes');  // Adjusted for 'itemRes'
let nextRes = document.getElementById('nextRes');  // Targeting the correct 'next' button
let prevRes = document.getElementById('prevRes');  // Targeting the correct 'prev' button
let dotsRes = document.querySelectorAll('.sliderRes .dotsRes li');  // Adjusted for 'dotsRes'

let lengthItemsRes = itemsRes.length - 1;  // Adjusted for 'itemsRes'
let activeRes = 0;  // Active slide tracker for 'res' version

nextRes.onclick = function() {
    activeRes = activeRes + 1 <= lengthItemsRes ? activeRes + 1 : 0;  // Increment activeRes
    reloadSliderRes();  // Call the reload function
};

prevRes.onclick = function() {
    activeRes = activeRes - 1 >= 0 ? activeRes - 1 : lengthItemsRes;  // Decrement activeRes
    reloadSliderRes();  // Call the reload function
};

function reloadSliderRes() {
    sliderRes.style.left = -itemsRes[activeRes].offsetLeft + 'px';  // Update slider position

    let last_active_dot_res = document.querySelector('.sliderRes .dotsRes li.activeRes');  // Get last active dot
    if (last_active_dot_res) last_active_dot_res.classList.remove('activeRes');  // Remove the active class
    dotsRes[activeRes].classList.add('activeRes');  // Add active class to the current dot
}

// Click event on dots
dotsRes.forEach((li, key) => {
    li.addEventListener('click', () => {
        activeRes = key;  // Set activeRes to clicked dot index
        reloadSliderRes();  // Reload the slider with the new active slide
    });
});

// Ensure slider repositions correctly on window resize
window.onresize = function() {
    reloadSliderRes();  // Reload on resize
};

let sliderFun = document.querySelector('.sliderFun .listFun');
let itemsFun = document.querySelectorAll('.sliderFun .listFun .itemFun');
let nextFun = document.getElementById('nextFun');
let prevFun = document.getElementById('prevFun');

let dotsFun = document.querySelectorAll('.sliderFun .dotsFun li');

let lengthItemsFun = itemsFun.length - 1;
let activeFun = 0;

nextFun.onclick = function() {
    activeFun = activeFun + 1 <= lengthItemsFun ? activeFun + 1 : 0;
    reloadSliderFun();
};

prevFun.onclick = function() {
    activeFun = activeFun - 1 >= 0 ? activeFun - 1 : lengthItemsFun;
    reloadSliderFun();
};

function reloadSliderFun() {
    sliderFun.style.left = -itemsFun[activeFun].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.sliderFun .dotsFun li.activeFun');
    if (last_active_dot) last_active_dot.classList.remove('activeFun');
    dotsFun[activeFun].classList.add('activeFun');
}

dotsFun.forEach((li, key) => {
    li.addEventListener('click', () => {
        activeFun = key;
        reloadSliderFun();
    });
});

window.onresize = function() {
    reloadSliderFun();
};

let sliderFunRes = document.querySelector('.sliderFunRes .listFunRes');
let itemsFunRes = document.querySelectorAll('.sliderFunRes .listFunRes .itemFunRes');
let nextFunRes = document.getElementById('nextFunRes');
let prevFunRes = document.getElementById('prevFunRes');

let dotsFunRes = document.querySelectorAll('.sliderFunRes .dotsFunRes li');

let lengthItemsFunRes = itemsFunRes.length - 1;
let activeFunRes = 0;

nextFunRes.onclick = function() {
    activeFunRes = activeFunRes + 1 <= lengthItemsFunRes ? activeFunRes + 1 : 0;
    reloadSliderFunRes();
};

prevFunRes.onclick = function() {
    activeFunRes = activeFunRes - 1 >= 0 ? activeFunRes - 1 : lengthItemsFunRes;
    reloadSliderFunRes();
};

function reloadSliderFunRes() {
    sliderFunRes.style.left = -itemsFunRes[activeFunRes].offsetLeft + 'px';

    let last_active_dot = document.querySelector('.sliderFunRes .dotsFunRes li.activeFunRes');
    if (last_active_dot) last_active_dot.classList.remove('activeFunRes');
    dotsFunRes[activeFunRes].classList.add('activeFunRes');
}

dotsFunRes.forEach((li, key) => {
    li.addEventListener('click', () => {
        activeFunRes = key;
        reloadSliderFunRes();
    });
});

window.onresize = function() {
    reloadSliderFunRes();
};


$('.carousel').carousel({
    interval: 1000
  })

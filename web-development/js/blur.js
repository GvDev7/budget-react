// Grab needed elements
let percentTxt = document.querySelector('.loading-text');
let bgImg = document.querySelector('.bg');

// Create needed variables and functionality
let currentBlur = 0;
let maxBlur = 99;
let add = setInterval(toggleBlurring, 30)

function toggleBlurring() {
    currentBlur++
    if(currentBlur > maxBlur) {
        clearInterval(add);
    }
    percentTxt.innerHTML = `${currentBlur}%`;
    percentTxt.style.opacity = scale(currentBlur, 0, 100, 1, 0);
    bgImg.style.filter = `blur(${scale(currentBlur, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min)
}


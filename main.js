let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let number = document.querySelector('.number')
let kop2 = document.querySelector('.ikkix')
let kop5 = document.querySelector('.beshx')
let kop100 = document.querySelector('.yuzx')

let num = 0

let res = () => {
    number.innerHTML = num
    res()
}

minus.addEventListener('click', () => {
    --num
    res()
})

plus.addEventListener('click', () => {
    ++num
    res()
})

kop2.addEventListener('click', () => {
    num *= 2;
    res()
})

kop5.addEventListener('click', () => {
    num *=5
    res()
})

kop100.addEventListener('click', () => {
    num *=100
})
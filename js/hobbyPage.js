console.log(list)
let ul = document.querySelector('.bindPage ul')
let prevBtn = document.querySelector('.bindPage .prev')
let nextBtn = document.querySelector('.bindPage .next')
let currentPage = document.querySelector('.bindPage .currentPage')
let totalPage = document.querySelector('.bindPage .totalPage')
let selectBox = document.querySelector('select')
let current = 1, pageSize = 4, total = 1
// 渲染页面
bindHtml()
function bindHtml(){
    let bind = list.slice((current - 1) * pageSize, current * pageSize)
    let str = ''
    bind.forEach((item) => {
        str += `
        <li class="sample">
        <img src="${item['img']}">
        <div class="text">
        <h3>${item['hobby']}</h3>
        <p>${item['introduction']}</p>
        <span>${item['icon']}</span>
        <a href="#"></a>
        </div>
        </li>
        `
    })
    console.log(bind)
    ul.innerHTML = str
    total = Math.ceil(list.length / pageSize)
    currentPage.innerHTML = current
    totalPage.innerHTML =  total
    prevBtn.className = current === 1 ? 'prev disable' : 'prev'
    nextBtn.className = current === total ? 'next disable' : 'next'
}
nextBtn.onclick = () => {
    if(current === total) return
    current++
    bindHtml()
}
prevBtn.onclick = () => {
    if(current === 1) return
    current--
    bindHtml()
    console.log(current)
}
selectBox.onchange = () => {
    pageSize = selectBox.value - 0
    current = 1
    bindHtml()
}

let items = document.querySelectorAll('.item')
items.forEach((item) => {
    //这里不能使用箭头函数 this指向问题
    item.onclick = function (){
        items.forEach((item) => {
            item.classList.remove('active')
        }) 
        this.classList.add('active')
    }
})
//移除 active属性值




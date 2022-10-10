const titles = document.querySelectorAll('.titles a')
const imgs = document.querySelectorAll('.imgs a')
let curIndex = 0,timer = 0
function removerActive(){
    titles.forEach(item => {
        item.classList.remove('active')
    })
    imgs.forEach(item => {
        item.classList.remove('active')
    })
}
function changeBanner(index){
    removerActive()
    titles[index].classList.add('active')
    imgs[index].classList.add('active')

}
function autoBanner(){
    timer = setInterval(function(){
        curIndex++
        if(curIndex > titles.length - 1){
            curIndex = 0
        }
        changeBanner(curIndex)
    },2000)
}
titles.forEach((item,index) => {
    //鼠标移入只触发a标签
    item.addEventListener('mouseenter',function(){
        curIndex = index
        changeBanner(index)
        clearInterval(timer)
    })
    item.addEventListener('mouseleave',function(){
        autoBanner()
    })
})
autoBanner()
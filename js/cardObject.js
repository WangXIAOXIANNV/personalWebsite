// 出现选项卡的范围元素，以选择器的形式传参
function Tabs(select){
    // 第一个属性，选项卡的范围元素
    this.ele = document.querySelector(select)
    this.btns = this.ele.querySelectorAll('ul>li')
    this.boxs = this.ele.querySelectorAll('ol>li')
    this.init()

}
Tabs.prototype.init = function(){
    this.btns.forEach((item,index) => {
        item.onclick = () => {
            this.btns.forEach((item) => {
                item.classList.remove('active')
            })
            this.boxs.forEach((item) => {
                item.classList.remove('active')
            })
        this.btns[index].classList.add('active')
        this.boxs[index].classList.add('active')
        }
        
    });
}
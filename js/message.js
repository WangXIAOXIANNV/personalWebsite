const btn = document.querySelector('button')
const imgBox = document.querySelector('.bg-img')
const offBtn = document.querySelector('.bg-img>span')
const imgs = document.querySelectorAll('.bg-img>img')
btn.onclick = () => {
    imgBox.classList.add('active')
    console.log('出现')
}
offBtn.onclick = () => {
    imgBox.classList.remove('active')
}
imgs.forEach((item) => {
    item.onclick = () => {
        document.body.style.backgroundImage = 'url(' + item.src + ')'
    }
})
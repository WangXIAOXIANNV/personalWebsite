var item = document.querySelectorAll('.container .item')
// 遍历每一个item设置点击事件
item.forEach(function(items,index){
    items.onclick = function(){
        //移除每一个item上的active并为点击的item添加active
        item.forEach(function(items){
            items.classList.remove('active')
        })
        item[index].classList.add('active')

    }
})


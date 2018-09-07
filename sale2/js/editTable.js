var tempParent = ''
var initalNum = 0
document.addEventListener('click', function(e) {
    var e = e||window.event
    var target = e.target || e.srcElement
    var parent = target.parentElement

    switch (target.className) {
        case 'edit-input':
               clearEdit(tempParent)
               createEdit(target)
            break
        case 'confirm':
            break
        case 'cancle':
            break
    }
})

function createEdit(target) {
    initalNum = target.value
    tempParent = target.parentNode
    var td = target.parentNode
    var cancleButton = document.createElement("button")
    var confirmButton = document.createElement("button")
    cancleButton.innerHTML = "取消"
    confirmButton.innerHTML = "确定"
    cancleButton.classList.add("cancle")
    confirmButton.classList.add("confirm")
    td.appendChild(cancleButton)
    td.appendChild(confirmButton)
}

function clearEdit(tempParent) {
    console.log(tempParent)
    if(tempParent) {
        var childs = tempParent.childNodes
        console.log(childs)
        for(var i=childs.length-1; i>=0; i--) {
            if(childs[i].className == 'cancle' || childs[i].className == 'confirm') {
                console.log('delete')
                console.log(childs[i])
//                tempParent.removeChild(childs[i])
            }
        }
    }
}
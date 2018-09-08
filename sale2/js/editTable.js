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
            clearEdit(tempParent)
            break
        default:
            clearEdit(tempParent)
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

    cancleButton.onclick = function() {
        target.value = initalNum
        clearEdit(tempParent)
    }

    confirmButton.onclick = function() {
        var product = target.getAttribute('product')
        var region = target.getAttribute('region')
        var month = target.getAttribute('month')
        // change sourceData
        for(var i=0; i<sourceData.length; i++) {
            if(sourceData[i].product == product && sourceData[i].region == region) {
                sourceData[i].sale[month-1] = parseInt(target.value)
                break
            }
        }
        clearEdit(tempParent)
    }

    target.onkeyup = function(e) {
        if(e.keyCode == 13) {
            clearEdit(tempParent)
            target.blur()
        }
        if(e.keyCode == 27) {
            target.value = initalNum
            clearEdit(tempParent)
            target.blur()
        }
    }
}

function clearEdit(tempParent) {
    if(tempParent) {
        var childs = tempParent.childNodes
        for(var i=childs.length-1; i>=0; i--) {
            if(childs[i].className == 'cancle' || childs[i].className == 'confirm') {
                tempParent.removeChild(childs[i])
            }
        }
    }
}
var postfixList = ['@163.com', '@gmail.com', '@126.com', '@qq.com', '@263.net']

var input = document.querySelector('input')
var ulBlock = document.querySelector("#email-sug-wrapper") 
var chooseId = 0


input.addEventListener('keyup', function(event){
    var value = getInputValue(this.value)
    var data = new Array();
    if(value) {
        data = generateMessages(value) 
        addEmailSugWrapper(data)
    }else {
        clearUl()
    }
    var lis = ulBlock.childNodes
    if(event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13) {
        lis[0].setAttribute('class', 'choose')
        initChoose()
    } else {
     //   for(var i=0; i<lis.length; i++) {
     //       if(lis[i].classList.contains('choose')) {
     //           var chooseIndex = i
     //           break
     //       }
     //   }
     //   console.log(chooseIndex)
    //    lis[chooseIndex].classList.remove('choose')
        lis[chooseId].classList.remove('choose')
        if(event.keyCode == 38) {
            if(chooseId != 0) {
                lis[chooseId-1].classList.add('choose')
                chooseId = chooseId - 1
            } else {
                lis[lis.length-1].classList.add('choose')
                chooseId = lis.length - 1
            }
        }
    }
})

function getInputValue(value) {
    return value.trim()
}

function initChoose() {
    var lis = ulBlock.childNodes
    for(var i=0; i<lis.length; i++) {
        if(lis[i].classList.contains('choose')) {
           var chooseIndex = i
           break
        }
    }
    if (chooseIndex != 0) {
        console.log('not zero')
        lis[chooseIndex].classList.remove('choose')
        lis[0].classList.add('choose')
    }
}

function generateMessages(value) {
    var data = new Array();
    if(value.indexOf("@") != -1) {
        var name = value.slice(0, value.indexOf("@"))
        var pre = value.slice(value.indexOf("@"), value.length)
        for(var i=0; i<postfixList.length; i++) {
            if(postfixList[i].indexOf(pre) != -1) {
                data.push(name + postfixList[i])
            }
        }
    } else {
        name = value
        for(var i=0; i<postfixList.length; i++) {
            data.push(name + postfixList[i])
        }
    }
    return data
}

function addEmailSugWrapper(data) {

    clearUl()

    for(var j=0; j<data.length ;j++) {
        var para = document.createElement("li")
        var node = document.createTextNode(data[j])
        para.appendChild(node)
        ulBlock.appendChild(para)
    }
    var lis = ulBlock.childNodes

    for(var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', function(){
            input.value = this.innerHTML
            clearUl()
        })
    }

}

function clearUl() {
    var childs = ulBlock.childNodes
    for (var i=childs.length-1; i>=0; i--) {
        ulBlock.removeChild(childs[i])
    }
}
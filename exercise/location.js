function getContent() {

}
function showContent() {

}

var parent = document.querySelector(".location")
var temp = document.querySelector("#save")
console.log(parent)
console.log(temp)
parent.addEventListener("click", function(ev){
    var e = e||window.event
    var target = e.target || e.srcElement
    console.log(target.id)
})

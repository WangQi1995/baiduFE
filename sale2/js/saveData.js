var saveButton = document.querySelector("#save")
saveButton.onclick = function () {
    localStorage.setItem("sourceData", JSON.stringify(sourceData))
}

var readButton = document.querySelector("#read")
readButton.onclick = function () {
    sourceData = JSON.parse(localStorage.getItem("sourceData"))
    getData()
}
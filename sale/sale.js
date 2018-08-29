let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]

document.querySelector('#region-select').addEventListener('change', function(){
    createTable(getData())
})

function getData() {
    var myselect = document.querySelector('#region-select')
    var index = myselect.selectedIndex
    var region = myselect.options[index].text
    var data = new Array()
    var productselect = document.querySelector('#product-select')
    var productindex = productselect.selectedIndex
    var product = productselect.options[productindex].text
    for(var i=0; i<sourceData.length; i++) {
        if(sourceData[i].region == region && sourceData[i].product == product) {
            data.push(sourceData[i])
        }
    }
    return data
}

function createTable(data) {
    var tableArea = document.querySelector("#table-wrapper");
    tableArea.innerHTML = "<table id='data-table' border='1'><tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr></table>"
    var t = document.querySelector("#data-table")
    for(var i=0; i<data.length; i++) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.innerHTML = data[i].product
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[i].region
        tr.appendChild(td)
        for(var j=0; j<12; j++) {
            var td = document.createElement("td")
            td.innerHTML = data[i].sale[j]
            tr.appendChild(td)
        }
        t.appendChild(tr)
    }
}
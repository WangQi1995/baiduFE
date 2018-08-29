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

var regionContainer = document.querySelector("#region-radio-wrapper")
var productContainer = document.querySelector("#product-radio-wrapper")
generateCheckBox(regionContainer, [{
    value: 1,
    text: "华东"
}, {
    value: 2,
    text: "华北"
}, {
    value: 3,
    text: "华南"
}
])

generateCheckBox(productContainer, [{
    value: 1,
    text: "手机"
}, {
    value: 2,
    text: "笔记本"
}, {
    value: 3,
    text: "智能音箱"
}
])

function generateCheckBox(container, data) {
    var allcheck = document.createElement('input')
    allcheck.setAttribute("type", "checkbox")
    allcheck.setAttribute("checkbox-type", "all")
    var text = document.createTextNode("全选")
    container.appendChild(allcheck)
    container.appendChild(text)
    //generate data select
    for(var i=0; i<data.length; i++) {
        var allcheck = document.createElement('input')
        allcheck.setAttribute("type", "checkbox")
        allcheck.setAttribute("value", data[i].value)
        allcheck.setAttribute("checkbox-type", "child")
        var text = document.createTextNode(data[i].text)
        container.appendChild(allcheck)
        container.appendChild(text)
    }
    container.onclick = function(ev) {
        getData()
        var ev = ev || window.event
        var target = ev.target || ev.srcElement

        if(target.type.toLowerCase() == "checkbox") {
            if (target.getAttribute("checkbox-type") == "all") {
                var checkboxes = container.childNodes
                for(var i=0; i<checkboxes.length; i++) {
                    if(checkboxes[i].nodeName.toLowerCase() == "input") {
                        checkboxes[i].checked = true
                    }
                }
            }
            if (target.getAttribute("checkbox-type") == "child") {
                //is the only one?
                var checkboxes = container.childNodes
                var countChecked = 0
                for(var i=0; i<checkboxes.length; i++) {
                    if(checkboxes[i].nodeName.toLowerCase() == "input") {
                        if (checkboxes[i].checked == true && checkboxes[i].getAttribute("checkbox-type") != "all") {

                            countChecked++
                        }
                    }
                }
                if(countChecked == 0) {
                    target.checked = true
                }
                if(countChecked == data.length) {
                    container.firstChild.checked = true
                }
                if(countChecked < data.length) {
                    container.firstChild.checked = false
                }
            }
        }
    }
}

function getData() {
    var checkedRegion = new Array()
    var checkedProduct = new Array()
    var data = new Array()
    checkedRegion = getCheckedData(regionContainer)
    checkedProduct = getCheckedData(productContainer)

    if(checkedRegion.length>0 && checkedProduct.length>0) {
        for(var i=0; i<sourceData.length; i++) {
            if(checkedRegion.indexOf(sourceData[i].region)!=-1 && checkedProduct.indexOf(sourceData[i].product)!=-1) {
                data.push(sourceData[i])
            }
        }
        createTable(checkedRegion, checkedProduct, data)
    }
}

function getCheckedData(container) {
    var checkboxes = container.childNodes
    var result = new Array()
    for(var i=0; i<checkboxes.length; i++) {
        if(checkboxes[i].nodeName.toLowerCase() == "input") {
            if (checkboxes[i].checked == true && checkboxes[i].getAttribute("checkbox-type") != "all") {
                result.push(checkboxes[i].nextSibling.nodeValue)
            }
        }
    }
    return result
}

function createTable(regions, products, data) {
    var regionCount = regions.length
    var productCount = products.length
    if(regionCount == 1 && productCount > 1) {
        var tableArea = document.querySelector("#table-wrapper");
        tableArea.innerHTML = "<table id='data-table' border='1'><tr><th>地区</th><th>商品</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr></table>"
        var t = document.querySelector("#data-table")
        var tr = document.createElement("tr")
        var td = document.createElement("td")
        td.rowSpan = productCount
        td.innerHTML = data[0].region
        tr.appendChild(td)
        var td = document.createElement("td")
        td.innerHTML = data[0].product
        tr.appendChild(td)
        for(var j=0; j<12; j++) {
            var td = document.createElement("td")
            td.innerHTML = data[0].sale[j]
            tr.appendChild(td)
        }
        t.appendChild(tr)
        for(var i=1; i<data.length; i++) {
            var tr = document.createElement("tr")
            var td = document.createElement("td")
            td.innerHTML = data[i].product
            tr.appendChild(td)
            for(var j=0; j<12; j++) {
                var td = document.createElement("td")
                td.innerHTML = data[i].sale[j]
                tr.appendChild(td)
            }
            t.appendChild(tr)
        }
    } else {
        var tableArea = document.querySelector("#table-wrapper");
        tableArea.innerHTML = "<table id='data-table' border='1'><tr><th>商品</th><th>地区</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>12月</th></tr></table>"
        var t = document.querySelector("#data-table")
        for(var i=0; i<productCount; i++) {
            var flag = 0;
            for(var j=0; j<data.length; j++) {
                if(data[j].product == products[i]) {
                    var tr = document.createElement("tr")
                    if(flag==0) {
                        var td = document.createElement("td")
                        td.rowSpan = regionCount
                        td.innerHTML = products[i]
                        tr.appendChild(td)
                        flag = 1
                    }
                    var td = document.createElement("td")
                    td.innerHTML = data[j].region
                    tr.appendChild(td)
                    for(var m=0; m<12; m++) {
                        var td = document.createElement("td")
                        td.innerHTML = data[j].sale[m]
                        tr.appendChild(td)
                    }
                    t.appendChild(tr)
                }
            }
        }
    }
}
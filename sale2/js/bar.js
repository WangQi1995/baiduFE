function createBar(data) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute("width", "300")
    svg.setAttribute("height", "200")
    svg.setAttribute("viewBox", "0 0 300 200")

    var rectWidth = 16
    var rectSpace = 7
    var rectColor = "#D2B4DE"
    var max = 0
    
    for(var i=0; i<data.length; i++) {
        if(max<data[i]) {
            max = data[i]
        }
    }
    var unit = 180/max

    var xline = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    xline.setAttribute("x1", "0")
    xline.setAttribute("y1", "200")
    xline.setAttribute("x2", "300")
    xline.setAttribute("y2", "200")
    xline.setAttribute("stroke", "black")
    xline.setAttribute("stroke-width", "3")

    var yline = document.createElementNS("http://www.w3.org/2000/svg", 'line')
    yline.setAttribute("x1", "0")
    yline.setAttribute("y1", "0")
    yline.setAttribute("x2", "0")
    yline.setAttribute("y2", "200")
    yline.setAttribute("stroke", "black")
    yline.setAttribute("stroke-width", "3")


    for(var i=0; i<data.length; i++) {
        var rect = document.createElementNS("http://www.w3.org/2000/svg", 'rect')
        console.log(parseInt(300/data.length - rectWidth/2 + i*rectWidth + i*rectSpace))
        rect.setAttribute("x", parseInt(300/data.length - rectWidth/2 + i*rectWidth + i*rectSpace))
        rect.setAttribute("y", 200-unit*data[i])
        rect.setAttribute("width", rectWidth)
        rect.setAttribute("height", unit*data[i])
        rect.setAttribute("style", "fill:" + rectColor)
        svg.appendChild(rect)
    }

    svg.appendChild(xline)
    svg.appendChild(yline)
    document.querySelector("#bar-wrapper").appendChild(svg)
}
function draw(data) {
    var canvas = document.querySelector("#line")
    canvas.height = canvas.height
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d')

        var count = data.length
        var max = 0
        var axisx = 300
        var axisy = 200
        var axisWidth = 2
        var pointDiameter = 3
        var pointColor = "#17A589"
        var lineColor = "#76D7C4"
        var lineWidth = 1
        var pointInterval = parseInt(axisx/(count-1))

        for(var i=0; i<data.length; i++) {
            if(max<parseInt(data[i])) {
                max = data[i]
            }
        }

        var unit = axisy/max

        ctx.beginPath()
        ctx.moveTo(0,0)
        ctx.lineTo(0,axisy)
        ctx.stroke()
        ctx.moveTo(0,axisy)
        ctx.lineTo(axisx,axisy)
        ctx.stroke()
        ctx.lineWidth = axisWidth

        for(var i=0; i<count; i++) {
            ctx.beginPath()
            ctx.fillStyle = pointColor
            ctx.arc(pointInterval*i, axisy-unit*data[i], pointDiameter, 0 ,Math.PI*2, true)
            ctx.fill()
            if(i<count-1) {
                ctx.beginPath()
                ctx.strokeStyle = lineColor
                ctx.moveTo(pointInterval*i, axisy-unit*data[i])
                ctx.lineTo(pointInterval*(i+1), axisy-unit*data[i+1])
                ctx.stroke()
            } 
        }
    }
}

function createLine() {
    var t = document.querySelector("#data-table")
    var data = []
    t.onmouseover = function(ev) {
        var ev = ev || window.ev
        var target = ev.target || ev.srcElement
        var childs = target.childNodes
        if(target.nodeName.toLowerCase() == "td") {
            data = []
            var tr = target.parentNode
            var tds = tr.childNodes
            for(var i=0; i<tds.length; i++) {
                if (!isNaN(tds[i].firstChild.value)) {
                  data.push(tds[i].firstChild.value)
                }
            }
        }
        draw(data)
    }
}
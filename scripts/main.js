cl("main.js loaded")
canvas.width = width
canvas.height = height

function draw(){
    ctx.fillRect(100, 100, 50, 50)
    player()
    requestAnimationFrame(draw)
}

draw()


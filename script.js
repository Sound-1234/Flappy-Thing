// Defines Canvas Stuff

const canvas =  document.getElementById("myCanvas")
const ctx = canvas.getContext("2d")

canvas.width = 450
canvas.height = 300

// Makes The Class "Thing"

class Thing{
	constructor(y, radius) {
		// x will always be half the canvas width
		this.x = canvas.width/2
		this.y = y
		// will make the radius
		this.rad = radius
		// this.controllable will be true when the flappy thing can be controlled
		this.controllable = true
		this.a = true
		this.jumping = 0
		this.graviting = 4
	}

	draw(ctx) {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2)
		ctx.fill()
	}

	control() {
		// do some weird stuff that only I know what means
		this.a = true
		if(this.controllable==true){
			window.addEventListener("keydown", (e) => {
				if(this.a){
					this.a = false
					if(e.code=="Space"){
						this.jumping = this.graviting+5
					}
				}
			})
		}
	}

	jump(){
		if(this.jumping<0.2){
			this.jumping = 0
		} else {
			this.y-=this.jumping
			this.jumping-=0.2
		}
	}

	gravity(){
			this.y+=this.graviting
	}
}

// Defines thing as a Thing
const thing = new Thing(150, 15)
// animates the scene
function animate(){
	// clears the canvas
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	// makes the player have controls
	thing.control()
	thing.jump()
	thing.gravity()
	// draws the player/thing
	thing.draw(ctx)
	// plays every 60th of a second
	requestAnimationFrame(animate)
}

// calls animate function
animate()
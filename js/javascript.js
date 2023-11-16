let frameList = [];

window.addEventListener("load", () => {
    for (let i = 1; i < 7; i++) {
        frameList.push(new Tableau( "frame-"+i+"-evil"));
    }
    tick();
})

const tick = () => {
    //setTimeout(tick, 30); plus utilisé

    for (let i = 0; i < frameList.length; i++) {
        const node = frameList[i];
        node.tick();
    }


    window.requestAnimationFrame(tick);
}

class Tableau{
    constructor(id){
        this.id = id;
        this.node = document.querySelector("#" + this.id);
        this.opacity = 0;

        
        this.node.onmouseover = () => {
            console.log(onmouseover);
            this.opacity = 0;
        }
    }

    tick(){
        console.log(this.id)

        if(this.opacity < 1){
            this.opacity += 0.001;
        }

        this.node.style.opacity = this.opacity;

    }
}
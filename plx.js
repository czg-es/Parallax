const canvas = document.getElementById('canvas1');
const ctx =canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = window.innerWidth;//= 800;
const CANVAS_HEIGHT = canvas.height = window.innerHeight;//= 800;
let gSpeed = 5;

const bgLayer1 = new Image();
bgLayer1.src = "./layers/01_Mist.png";
const bgLayer2 = new Image();
bgLayer2.src = "./layers/02_Bushes.png";
const bgLayer3 = new Image();
bgLayer3.src = "./layers/03_Particles.png";
const bgLayer4 = new Image();
bgLayer4.src = "./layers/04_Forest.png";
const bgLayer5 = new Image();
bgLayer5.src = "./layers/05_Particles.png";
const bgLayer6 = new Image();
bgLayer6.src = "./layers/06_Forest.png";
const bgLayer7 = new Image();
bgLayer7.src = "./layers/07_Forest.png";
const bgLayer8 = new Image();
bgLayer8.src = "./layers/08_Forest.png";
const bgLayer9 = new Image();
bgLayer9.src = "./layers/09_Forest.png";
const bgLayer10 = new Image();
bgLayer10.src = "./layers/10_Sky.png";

class Layer{
    constructor(image, speedMod){
        this.x = 0;
        this.y = 0;
        this.width =  CANVAS_WIDTH;//2400;
        this.height = CANVAS_HEIGHT;//700;
        this.x2 = this.width;
        this.image = image;
        this.speedMod = speedMod;
        this.speed = gSpeed * this.speedMod;
    }
    update(){
        this.speed = gSpeed * this.speedMod;
        if(this.x <= -this.width){
            this.x = this.width + this.x2 - this.speed ;
        }
        if(this.x2 <= -this.width){
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);        
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
 }
 
const layer1 = new Layer(bgLayer1, 0.20);
const layer2 = new Layer(bgLayer2, 0.30);
const layer3 = new Layer(bgLayer3, 0.40);
const layer4 = new Layer(bgLayer4, 0.50);
const layer5 = new Layer(bgLayer5, 0.60);
const layer6 = new Layer(bgLayer6, 0.70);
const layer7 = new Layer(bgLayer7, 0.85);
const layer8 = new Layer(bgLayer8, 0.90);
const layer9 = new Layer(bgLayer9, 1.3);
const layer10 = new Layer(bgLayer10, 1.10);

const all_layers = [layer10,layer1,layer3,layer9,layer8,layer7,layer6,layer5,layer4,layer2]; //blue forest

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    all_layers.forEach(layer =>{
        layer.update();
        layer.draw();
    });
    requestAnimationFrame(animate);
};

window.addEventListener('resize', 
    function(){
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        
    })

function update_veloX(value,label){
    gSpeed = value;
    document.getElementById(label).value=value;
    
}

function update_hue(value,label){
    document.documentElement.style.setProperty('--hueRotate', value + "deg");
    document.getElementById(label).value=value;
    
}

function update_invert(value,label){
    document.documentElement.style.setProperty('--invertPercent', value + "%");
    document.getElementById(label).value=value;
    
}

animate();

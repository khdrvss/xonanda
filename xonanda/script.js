// Tiny particle background + mouse parallax for the hero
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let w = canvas.width = innerWidth;
let h = canvas.height = innerHeight;
const particles = [];
const COUNT = Math.min(80, Math.floor((w*h)/90000));

function rand(min,max){return Math.random()*(max-min)+min}

class P{constructor(){this.reset()}reset(){this.x=rand(0,w);this.y=rand(0,h);this.r=rand(0.6,2.6);this.vx=rand(-0.2,0.2);this.vy=rand(-0.2,0.2);this.alpha=rand(0.06,0.18)}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>w||this.y<0||this.y>h)this.reset()}draw(){ctx.beginPath();ctx.fillStyle=`rgba(200,255,240,${this.alpha})`;ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fill()}}

for(let i=0;i<COUNT;i++)particles.push(new P())

function loop(){ctx.clearRect(0,0,w,h);
 for(let p of particles){p.update();p.draw()}
 requestAnimationFrame(loop)}
loop()

addEventListener('resize',()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight})

// small parallax on mouse for the glow and card
const scene = document.querySelector('.scene');
const glow = document.querySelector('.glow');
const card = document.querySelector('.card');

addEventListener('mousemove', (e)=>{
  const cx = innerWidth/2, cy = innerHeight/2;
  const dx = (e.clientX-cx)/cx; const dy=(e.clientY-cy)/cy;
  glow.style.transform = `translateX(${ -50 + dx*3 }%) rotate(${12 + dx*4}deg)`;
  card.style.transform = `translateY(${dy*8}px) translateX(${dx*6}px)`;
});

// subtle entrance for elements
window.addEventListener('load', ()=>{
  document.querySelector('.logo').style.transform='translateY(0)';
});

const text=`Hello Afnan! 👋\n\nI'm Victor.\n\nI hope this little website brings a smile to your face. 💖`;
let i=0;const t=document.getElementById('typing');
(function type(){if(i<text.length){t.innerHTML+=text[i]=='\n'?'<br>':text[i];i++;setTimeout(type,35)}})();
const overlay=document.getElementById('overlay');
document.getElementById('letterBtn').onclick=()=>overlay.classList.add('show');
document.getElementById('closeBtn').onclick=()=>overlay.classList.remove('show');
overlay.onclick=e=>{if(e.target===overlay)overlay.classList.remove('show');};
setInterval(()=>{const p=document.createElement('div');p.className='petal';p.textContent='🌸';p.style.left=Math.random()*100+'vw';p.style.fontSize=(14+Math.random()*10)+'px';p.style.animationDuration=(5+Math.random()*5)+'s';document.body.appendChild(p);setTimeout(()=>p.remove(),10000)},300);
document.addEventListener('click',e=>{const h=document.createElement('div');h.textContent='💖';h.style.cssText=`position:fixed;left:${e.clientX}px;top:${e.clientY}px;pointer-events:none;transition:1s`;document.body.appendChild(h);requestAnimationFrame(()=>{h.style.transform='translateY(-80px) scale(1.3)';h.style.opacity='0'});setTimeout(()=>h.remove(),1000);});
const b=document.querySelector('.burger'),n=document.querySelector('nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const lb=document.getElementById('lb'),li=lb.querySelector('img');
document.querySelectorAll('figure img').forEach(i=>i.addEventListener('click',()=>{li.src=i.src;li.alt=i.alt;lb.hidden=false}));
lb.addEventListener('click',()=>lb.hidden=true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true});
document.querySelectorAll('.topic').forEach(t=>t.addEventListener('click',()=>{li.src=t.dataset.src;li.alt=t.dataset.alt;lb.hidden=false;lb.scrollTop=0}));
li.addEventListener('click',e=>e.stopPropagation());

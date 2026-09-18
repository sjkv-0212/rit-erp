const modal=document.getElementById('modal');
const typeField=document.getElementById('typeField');
const typeValue=document.getElementById('typeValue');
const close=document.getElementById('close');
typeField.addEventListener('click',()=>modal.classList.add('show'));
close.addEventListener('click',()=>modal.classList.remove('show'));
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});
document.querySelectorAll('.choice').forEach(b=>b.addEventListener('click',()=>{
  typeValue.textContent=b.dataset.choice;
  modal.classList.remove('show');
}));
document.getElementById('submitBtn').addEventListener('click',()=>{
  const toast=document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),2600);
});
const rows=[...document.querySelectorAll('#appsTable tbody tr')];
function filter(){
  const q=document.getElementById('search').value.toLowerCase();
  const t=document.getElementById('typeFilter').value;
  const s=document.getElementById('statusFilter').value;
  rows.forEach(r=>{
    const okText=r.innerText.toLowerCase().includes(q);
    const okType=t==='All Types'||r.dataset.type===t;
    const okStatus=s==='All Statuses'||r.dataset.status===s;
    r.style.display=okText&&okType&&okStatus?'':'none';
  });
}
['search','typeFilter','statusFilter'].forEach(id=>document.getElementById(id).addEventListener('input',filter));
document.getElementById('menuBtn').addEventListener('click',()=>document.getElementById('sidebar').classList.toggle('open'));
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>document.getElementById('sidebar').classList.remove('open')));

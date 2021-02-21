

const abrir= document.querySelector('[data-modal="login"]');
const fechar= document.querySelector('[data-modal="fechar"]');
const caixadelogin= document.querySelector('[data-modal="caixa"]');
function abrircaixa(event){
    event.preventDefault()
     caixadelogin.classList.add('ativo')
};
function fecharcaixa(event){ 
    event.preventDefault()
    caixadelogin.classList.remove('ativo')
};
function foradacaixa(event){ 
    if(event.target===this)
    fecharcaixa(event)
};

abrir.addEventListener('click' , abrircaixa);
fechar.addEventListener('click',fecharcaixa);
caixadelogin.addEventListener('click',foradacaixa);

const menubutton=document.querySelector('[data-menu="button"]');
const menulist=document.querySelector('[data-menu="lista"]');
function openmenu(event){
    menulist.classList.toggle('ativo')
    menubutton.classList.toggle('ativo')
}
menubutton.addEventListener('click', openmenu)


/*const novop=document.createElement('p');
novop.innerText='R$ 69,90'
const promocao= document.querySelector('[data-promocao="novopreco"]')
novop.classList.add('novop')
promocao.appendChild(novop)
const agora = new Date()
console.log(agora.getHours)
for(let i = 24; i < 20; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000*i);
  }*/0
//novoh1.classList.add('Novo');(esta add uma class)
//rodape.appendChild(novoh1)(coloca como o ultimo filho)

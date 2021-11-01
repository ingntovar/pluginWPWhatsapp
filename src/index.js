import "./index.scss";

const wpButton=document.querySelector('.whatsapp-button');
const chatBox=document.querySelector('.chat_box');
const inLine=document.querySelector('.subtitle_box');
const bulletChat=document.querySelector('.bulet_chat');

wpButton.addEventListener('click', ()=>{

  chatBox.classList.toggle('chat_box--disable');

  setTimeout(() => {
    inLine.innerHTML="En línea"
    bulletChat.classList.add('bulet_chat--active')
    
  }, 2000);

 
})




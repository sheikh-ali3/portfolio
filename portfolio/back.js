import { next } from '@vercel/edge'

var tablinks = document.getElementsByClassName("tab-liks");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemeu = document.getElementById("sidemenu");
function openTab(tabName) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){ 
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

function toggle1(){
    var x = document.getElementById("tab-skill");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}

function toggle2(){
    var x = document.getElementById("tab-experience");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}

function toggle3(){
    var x = document.getElementById("tab-education");
    if(x.style.display==='none'){
        x.style.display='block';
    }
    else{
        x.style.display='none';
    }
}

function toggleTabs(index) {
    let tabs = document.querySelectorAll('.tab-contents');
    tabs.forEach(tab => {
       if (tab.id === 'tab-' + ['skill', 'experience', 'education'][index]) {
         tab.classList.add('active-tab');
       } else {
         tab.classList.remove('active-tab');
       }
    });
   
    let links = document.querySelectorAll('.tab-links');
    links.forEach(link => {
       if (link.getAttribute('onclick').includes(index)) {
         link.classList.add('active-link');
       } else {
         link.classList.remove('active-link');
       }
    });
   }

   function openmenu()
   {
        sidemeu.style.right="0";

   }

   function closemenu()
   {
        sidemeu.style.right="-300px";
        
   }

   
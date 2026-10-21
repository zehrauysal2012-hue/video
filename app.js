"use strict";
const scenes = [
 {image:"assets/1.png",alt:"Sınıfta Elif üzgün Deniz'i dinliyor.",location:"SINIF",category:"EMPATİ & DAYANIŞMA",title:"Yanındayım.",description:"Deniz, cevabıyla tekrar alay edilmesinin üzüntüsünü paylaşır. Elif sözünü kesmeden dinler ve öğretmenleriyle birlikte konuşmayı önerir.",dialogue:[["Deniz","Yine cevabımla alay ettiler."],["Elif","Yanındayım. İstersen öğretmenimizle konuşalım."]],time:"00:00 — 00:08"},
 {image:"assets/2.png",alt:"Kantinde Deniz, önüne geçen Arda'ya nazikçe sıra hakkını hatırlatıyor.",location:"KANTİN",category:"ADALET & SAYGI",title:"Sırada nezaket var.",description:"Arda, Deniz’in önüne geçer. Deniz hakkını sakin bir dille hatırlatır. Arda özür dileyerek sıranın sonuna yönelir.",dialogue:[["Deniz","Biz de bekliyoruz. Lütfen sıraya geçer misin?"],["Arda","Pardon."]],time:"00:08 — 00:16"},
 {image:"assets/3.png",alt:"Koridorda Elif ve Arda, Ece'nin kitaplarına yardım etmeye hazırlanıyor.",location:"KORİDOR",category:"YARDIMLAŞMA & DUYARLILIK",title:"Bir yardım eli yeter.",description:"Ece’nin kitapları yere düşer. Elif ve Arda eğilip kitapları toplar. Ece’nin gülümsemesi her şeyi anlatır. Nezaket, bir başkasına yayılır.",dialogue:[],time:"00:16 — 00:24"},
 {image:"assets/4.png",alt:"Sınıfta Deniz, Ece'yi boş sandalyeye ve grup çalışmasına davet ediyor.",location:"SINIF",category:"AİDİYET & İŞ BİRLİĞİ",title:"Burada sana da yer var.",description:"Bu kez destek veren Deniz’dir. Ece’yi çalışmalarına davet eder. Boş bir sandalye, ortak bir kâğıt ve içten bir davetle hikâye tamamlanır.",dialogue:[["Deniz","Ece, bizimle çalışmak ister misin?"],["Ece","Evet, teşekkür ederim."]],time:"00:24 — 00:32"}
];
let current=0;
const byId=id=>document.getElementById(id);
function renderScene(index){
 current=(index+scenes.length)%scenes.length;
 const scene=scenes[current];
 byId("scene-image").src=scene.image;byId("scene-image").alt=scene.alt;
 byId("scene-location").textContent=scene.location;byId("scene-category").textContent=scene.category;
 byId("scene-count").textContent=`0${current+1} / 04`;byId("scene-title").textContent=scene.title;
 byId("scene-description").textContent=scene.description;byId("scene-time").textContent=scene.time;
 const dialogue=byId("scene-dialogue");dialogue.replaceChildren();
 if(scene.dialogue.length){scene.dialogue.forEach(([name,line])=>{const p=document.createElement("p");const strong=document.createElement("strong");strong.textContent=`${name}: `;p.append(strong,document.createTextNode(`“${line}”`));dialogue.append(p);});}
 else{const p=document.createElement("p");p.textContent="Diyalogsuz sahne · Kitap, ayak ve koridor sesleri.";dialogue.append(p);}
 document.querySelectorAll("[data-slide]").forEach((button,i)=>{if(i===current)button.setAttribute("aria-current","true");else button.removeAttribute("aria-current");});
}
byId("prev").addEventListener("click",()=>renderScene(current-1));
byId("next").addEventListener("click",()=>renderScene(current+1));
document.querySelectorAll("[data-slide]").forEach(button=>button.addEventListener("click",()=>renderScene(Number(button.dataset.slide))));
document.querySelector(".slideshow").addEventListener("keydown",event=>{if(event.key==="ArrowRight"||event.key==="ArrowLeft"){event.preventDefault();renderScene(current+(event.key==="ArrowRight"?1:-1));}});
renderScene(0);
// Yalnızca geçerli HTTP(S) bağlantıları etkinleştirilir.
const videoUrl=window.SITE_CONFIG?.videoUrl?.trim();
if(videoUrl){try{const url=new URL(videoUrl);if(["https:","http:"].includes(url.protocol)){byId("video-link").href=url.href;byId("video-link").hidden=false;byId("video-pending").hidden=true;byId("video-note").textContent="Film bağlantısı yeni sekmede açılır.";}}catch{console.warn("config.js: Video bağlantısını kontrol edin.");}}

let ct = 0;
let t = document.getElementById("t");
function currentTime(){
   let now = new Date();
   let time = now.toLocaleTimeString();
   t.textContent = time;
}                                                                           
ct = window.setInterval(currentTime, 500);
/* mouseover ជា event កំណត់ឱ្យអនុគមន៌ដើរពេលគេដាក់ mouse លើធាតុ
    mouseout ជា event កំណត់ឱ្យអនុគមន៌ដើរពេលគេដក mouse ចេញពីធាតុ
    clearInterval បញ្ឈប់ setInterval */
t.onmouseover = function(){window.clearInterval(ct);}
t.onmouseout = function(){ct = window.setInterval(currentTime, 500);}
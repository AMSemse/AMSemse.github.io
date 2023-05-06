 //bg
 var bgDog = document.querySelector(".js-bg-dog");
 var bgCat = document.querySelector(".js-bg-cat");
 var body = document.querySelector("body");
 

 function changeBg() {
     if (bgDog.checked) {
         body.style.backgroundImage = 'url("img/dog.webp")';
         body.style.backgroundRepeat = 'no-repeat';
         body.style.backgroundSize = 'cover';
         body.style.overflow = 'hidden';
         body.style.backgroundPosition = '50% 25%'
     } else if (bgCat.checked) {
         body.style.backgroundImage = 'url("img/cat.jpg")';
         body.style.backgroundRepeat = 'no-repeat';
         body.style.backgroundSize = 'cover';
         body.style.overflow = 'hidden';
         body.style.backgroundPosition = '50% 30%'
     } else {
         body.style.backgroundImage = '';
     }
 };
 document.querySelector('.js-bg-dog').addEventListener('change', changeBg);
 document.querySelector('.js-bg-cat').addEventListener('change', changeBg);



 // dvd 
 let dvd = document.getElementById('dvd');
 let interval_id;
 let x_incr = 1;
 let y_incr = 1;

 function init() {
     update_color();
     dvd.style.position = 'absolute';
     setInterval(frame, 5);
 }

 function update_color() {
     let color = Math.round((Math.random() * 100));
     dvd.style.fill = `hsl(${color},100%,50%)`;
 }

 function handle_collision() {
     let dvd_height = dvd.offsetHeight;
     let dvd_width = dvd.offsetWidth;
     let left = dvd.offsetLeft;
     let top = dvd.offsetTop;
     let win_height = window.innerHeight;
     let win_width = window.innerWidth;

     if (left <= 0 || left + dvd_width >= win_width) {
         // reverse x_incr käyttämällä "~"
         // if (x_incr == -1) then x_incr = 1 
         x_incr = ~x_incr + 1;
         update_color();
     }
     if (top <= 0 || top + dvd_height >= win_height) {
         // reverse y_incr käyttämällä "~"
         y_incr = ~y_incr + 1;
         update_color();
     }
 }

 function frame() {
     handle_collision();
     dvd.style.top = dvd.offsetTop + y_incr + 'px';
     dvd.style.left = dvd.offsetLeft + x_incr + 'px';
 }
 
document.querySelector("#btn").addEventListener('click', init);
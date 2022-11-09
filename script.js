
var leftbloc = document.querySelector(".leftbloc");
var rightbloc = document.querySelector(".rightbloc");
var scrS = [
    "https://images.unsplash.com/photo-1638263086646-ef4566e1a511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1637937267030-6d571ad57f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1637798104600-2abd425af051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1637246469612-73696a975750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"

];
scrS = scrS.concat(scrS[0]);
for (let i = 0; i < scrS.length; i++) {
    let im = document.createElement("img");
    im.src = scrS[i];
    im.style.top = -(scrS.length - 1) * 100 + '%';
    rightbloc.appendChild(im);
  
    let imm = document.createElement("img");
    imm.src = scrS[scrS.length-i-1];
    leftbloc.appendChild(imm); 
}
var upbtn = document.querySelector(".up-button");
var dounbtn = document.querySelector(".down-button");
var activeSlide = 0;
upbtn.addEventListener('click', () => {
    activeSlide++;
    course();
    if (activeSlide == scrS.length) { activeSlide = 0;transitioNn(); activeSlide++; setTimeout(course, 10); console.log("пауза"); }
});

function course() {
    console.log("анімація")
    rightbloc.querySelectorAll("img").forEach(el => {
        el.style.transition = 'transform 0.5s ease-in'
        el.style.transform = 'translate(-50%,' + activeSlide * 100 + '%)';
    });
    leftbloc.querySelectorAll("img").forEach(el => {
        el.style.transition = 'transform 0.5s ease-in'
        el.style.transform = 'translate(0%,' + -activeSlide * 100 + '%)';
    });
}
function transitioNn() {
    console.log("перехід")
    rightbloc.querySelectorAll("img").forEach(el => {
        el.style.transition = 'none';
        el.style.transform = 'translate(-50%,' + activeSlide * 100 + '%)';
    });
    leftbloc.querySelectorAll("img").forEach(el => {
        el.style.transition = 'none';
        el.style.transform = 'translate(0%,' + -activeSlide * 100 + '%)';
    });
}
dounbtn.addEventListener('click', () => {
    activeSlide--;
    course();
    if (activeSlide < 0) { activeSlide = scrS.length - 1; transitioNn(); activeSlide--; setTimeout(course, 10); console.log("пауза"); }
});

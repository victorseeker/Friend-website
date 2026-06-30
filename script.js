const text = `Hello Afnan! 👋

I'm Victor.

I made this little website just for you.

It's a small surprise to say...

Nice to meet you! 💖

I hope this page makes you smile and brightens your day.

Wishing you happiness, laughter, good health, and lots of wonderful adventures. 🌸✨`;

const typing = document.getElementById("typing");
let index = 0;

function typeWriter() {
    if (index < text.length) {
        typing.innerHTML += text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();

// Open Letter
document.getElementById("openBtn").addEventListener("click", () => {
    const letter = document.getElementById("letter");

    if (letter.style.display === "block") {
        letter.style.display = "none";
        document.getElementById("openBtn").innerHTML = "💌 Open My Letter";
    } else {
        letter.style.display = "block";
        document.getElementById("openBtn").innerHTML = "💕 Close Letter";
    }
});

// Sakura
function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = ["🌸","🌺","💮"][Math.floor(Math.random()*3)];

    petal.style.left = Math.random()*100 + "vw";

    petal.style.animationDuration = (6 + Math.random()*6) + "s";

    petal.style.fontSize = (18 + Math.random()*16) + "px";

    document.body.appendChild(petal);

    setTimeout(()=>{
        petal.remove();
    },12000);

}

setInterval(createPetal,300);

// Hearts
document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML=["💖","💕","❤️","💗"][Math.floor(Math.random()*4)];

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1000);

});

// Floating animation
setInterval(()=>{

    const avatar=document.querySelector(".avatar");

    avatar.animate([
        {transform:"translateY(0px)"},
        {transform:"translateY(-8px)"},
        {transform:"translateY(0px)"}
    ],{

        duration:2500,

        easing:"ease-in-out"

    });

},2500);

// Greeting in console 😄
console.log("%cHi Afnan! 💖","font-size:24px;color:#ff4d94;font-weight:bold;");
console.log("%cMade with ❤️ by Victor","font-size:16px;color:#666;");

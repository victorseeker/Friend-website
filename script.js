const message = `Hello Afnan! 👋

I'm Victor.

I made this little website just to say...

Nice to meet you. 💖

I hope today brings you lots of happiness,
beautiful moments,
and many reasons to smile. 🌸`;

const typing = document.getElementById("typing");

let i = 0;

function type() {

    if (i < message.length) {

        if (message[i] === "\n") {

            typing.innerHTML += "<br>";

        } else {

            typing.innerHTML += message[i];

        }

        i++;

        setTimeout(type, 35);

    }

}

type();

const overlay = document.getElementById("overlay");

document.getElementById("letterBtn").onclick = () => {

    overlay.classList.add("show");

};

document.getElementById("closeBtn").onclick = () => {

    overlay.classList.remove("show");

};

overlay.onclick = (e) => {

    if (e.target === overlay) {

        overlay.classList.remove("show");

    }

};

// 🌸 Sakura
function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    const flowers = ["🌸","🌸","🌸","🌺","💮"];

    petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (14 + Math.random() * 12) + "px";

    petal.style.animationDuration = (6 + Math.random() * 6) + "s";

    petal.style.opacity = 0.5 + Math.random() * 0.5;

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },12000);

}

setInterval(createPetal,300);

// 💖 Hearts
document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML=["💖","💕","💗","❤️"][Math.floor(Math.random()*4)];

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="22px";

    heart.style.pointerEvents="none";

    heart.style.transition="all 1s ease";

    heart.style.zIndex="999";

    document.body.appendChild(heart);

    requestAnimationFrame(()=>{

        heart.style.transform="translateY(-100px) scale(1.4)";

        heart.style.opacity="0";

    });

    setTimeout(()=>{

        heart.remove();

    },1000);

});

// 🧸 Avatar animation
const avatar = document.querySelector(".avatar");

setInterval(()=>{

    avatar.animate([

        {transform:"translateY(0px)"},

        {transform:"translateY(-8px)"},

        {transform:"translateY(0px)"}

    ],{

        duration:2800,

        easing:"ease-in-out"

    });

},2800);

console.log("🌸 Hi Afnan!");
console.log("Made with ❤️ by Victor");

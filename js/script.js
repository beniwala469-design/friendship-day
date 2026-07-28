let startBtn = document.getElementById("startBtn");

let page1 = document.getElementById("page1");

let page2 = document.getElementById("page2");

startBtn.onclick = function(){

page1.style.display = "none";

page2.style.display = "block";

}

let nextBtn = document.getElementById("nextBtn");
let page3 = document.getElementById("page3");

nextBtn.onclick = function(){

    page2.style.display = "none";

    page3.style.display = "block";

}

let page3Btn = document.getElementById("page3Btn");

let page4 = document.getElementById("page4");

page3Btn.onclick = function(){

page3.style.display = "none";

page4.style.display = "block";

}

let timelineBtn = document.getElementById("timelineBtn");
let page5 = document.getElementById("page5");

timelineBtn.onclick = function(){

page4.style.display="none";
page5.style.display="block";

}

let envelope=document.getElementById("envelope");
let letter=document.getElementById("letter");

envelope.onclick=function(){

envelope.style.display="none";

letter.style.display="block";

}

let letterNextBtn = document.getElementById("letterNextBtn");
let page6 = document.getElementById("page6");

letterNextBtn.onclick = function(){

page5.style.display="none";

page6.style.display="block";

}

let giftBox=document.getElementById("giftBox");

let giftMessage=document.getElementById("giftMessage");

giftBox.onclick=function(){

giftBox.classList.add("open");

setTimeout(function(){

giftBox.style.display="none";

giftMessage.style.display="block";

celebrate();

},700);

}

function celebrate(){

confetti({

particleCount:200,

spread:120,

origin:{y:0.6}

});

}

const container = document.getElementById("fireworks");

const fireworks = new Fireworks.default(container,{
    rocketsPoint:{min:50,max:50},
    hue:{min:0,max:360},
    delay:{min:15,max:30},
    speed:3
});

function startFireworks(){

    fireworks.start();

    setTimeout(function(){

        fireworks.stop();

    },5000);

}

let finalBtn = document.getElementById("finalBtn");
let page7 = document.getElementById("page7");
let page8 = document.getElementById("page8");


finalBtn.onclick = function(){

page6.style.display="none";

page7.style.display="block";

}

function checkAnswer(answer){

    let result = document.getElementById("result");

    if(answer=="A"){

        result.innerHTML="🎉 Correct! Friendship is built on Trust ❤️";

        result.style.color="lime";

        setTimeout(function(){

            page7.style.display = "none";
            page8.style.display = "block";

        },2000);

    }else{

        result.innerHTML="❌ Wrong Answer. Try Again.";

        result.style.color="red";

    }

}

function generateCertificate() {

    let name = document.getElementById("friendName").value;

    document.getElementById("certificateText").innerHTML =
    "🏆 Congratulations <br><br><b>" + name +
    "</b><br><br>Best Friend Forever ❤️";

    document.getElementById("finishBtn").style.display = "inline-block";

}

let finishBtn=document.getElementById("finishBtn");

let page9=document.getElementById("page9");

finishBtn.onclick=function(){

page8.style.display="none";

page9.style.display="block";

celebrate();

}

let giftBtn=document.getElementById("giftBtn");
let page10 = document.getElementById("page10");

giftBtn.onclick=function(){

page9.style.display="none";

page10.style.display="block";

}

let giftBox2 = document.getElementById("giftBox2");
let giftMessage2 = document.getElementById("giftMessage2");

giftBox2.onclick = function(){

    giftBox2.classList.add("open");

    setTimeout(function(){

        giftBox2.style.display = "none";
        giftMessage2.style.display = "block";

        celebrate();

    },700);

}

let endBtn = document.getElementById("endBtn");

endBtn.onclick = function(){

    alert("❤️ Happy Friendship Day ❤️\n\nThank you for visiting my website!");

}
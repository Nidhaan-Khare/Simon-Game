let gameseq=[];
let userseq=[];
let btns=["yellow","red", "purple", "green"];

let starter=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(starter==false){
        console.log("game is started");
        starter=true;

        levelUp();
    }
});

function btn_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
};

function user_flash(btn){
    btn.classList.add("user_flash");
    setTimeout(function(){
        btn.classList.remove("user_flash");
    },250);
};

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let rand_idx=Math.floor(Math.random()*3);
    let rand_color=btns[rand_idx];
    let rand_btn=document.querySelector(`.${rand_color}`);
    // console.log(rand_idx);
    // console.log(rand_color);
    // console.log(rand_btn);
    gameseq.push(rand_color);
    console.log(gameseq);
    btn_flash(rand_btn);
};

function check_ans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length)
        {
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="beige";
        },150);
        reset();
    }
}; 

function btn_press(){
    let bt=this;
    user_flash(bt);
    
    usercolor=bt.getAttribute("id");
    userseq.push(usercolor);

    check_ans(userseq.length-1);
};

let all_btn=document.querySelectorAll(".btn");
for(bt of all_btn){
    bt.addEventListener("click",btn_press);
};

function reset(){
    starter=false;
    gameseq=[];
    user_flash=[];
    level=0;
}
let gameSeq = []
let userSeq = []
let btns = ['yellow','green','red','purple']

let h3 = document.querySelector('h3')
let started = false
let  level = 0
document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started")
        started = true
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}

function userFlash(btn){
    btn.classList.add('user')
    setTimeout(function(){
        btn.classList.remove('user')
    },250)
}

function levelUp(){
    userSeq=[]
    level++
    h3.innerText = `Level ${level}`
    let random = Math.floor(Math.random()*3)
    let randomColor = btns[random]
    let randbtn = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor)
    console.log(gameSeq)
    btnFlash(randbtn)
}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length)
        setTimeout(levelUp,1000)
    }
    else{
        h3.innerHTML = `your score is ${level} <br>game Over Press any key to start`
        document.querySelector('body').style.backgroundColor = 'red'
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white'
        },150)
        reset()
    }
}
function btnPress(){
    let btn = this
    userFlash(btn)
    userid = btn.getAttribute('id')
    userSeq.push(userid)
    console.log(userSeq)
    check(userSeq.length-1)
}

allbtns = document.querySelectorAll('.box')
for(box of allbtns){
    box.addEventListener('click',btnPress)
}

function reset(){
    started=false
    gameSeq = []
    userSeq = []
    level = 0  
}
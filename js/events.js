//Option-2
function makeRed(){
    document.body.style.backgroundColor='red';
}

//Option-3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}

//Option-3(another)
const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick= function makePurple(){
        document.body.style.backgroundColor='purple';
    }

//Option-4
const pinkButton = document.getElementById('make-pink');
    pinkButton.addEventListener('click',makePink);

    function makePink(){
        document.body.style.backgroundColor = 'pink';
    }


//Option-4(another)
//const pinkButton = document.getElementById('make-pink');
//pinkButton.addEventListener('click',function makePink(){
//    document.body.style.backgroundColor = 'pink';
//});

//FINAL
document.getElementById('make-orange').addEventListener('click',function(){
    document.body.style.backgroundColor= 'orange';
})
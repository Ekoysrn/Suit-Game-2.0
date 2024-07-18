// random input from computer
function pilihanKomputer(){
        const comp = Math.random();
        if(comp < 0.34)return "batu";
        if(comp <= 0.67) return "gunting";
        return "kertas";
    } 

// declaration of the battle win or lose
function result(comp,player){
    if(player == comp) return "oh uh hasilnya seri";
    if(player == "batu") return (comp == "kertas") ? "yah.. kamu kalah.." : "hore, kamu menang!!";
    if(player == "gunting") return (comp == "batu") ? "yah.. kamu kalah.." : "hore, kamu menang!!";
    if(player == "kertas") return (comp == "gunting") ? "yah.. kamu kalah.." : "hore, kamu menang!!";
}
// function for loading the image
function loadingImage(){
    
    // target elements
    const imageComp = document.querySelector('.imageComputer');
    const member = ['batu','gunting','kertas'];

    // find the now time
    let i = 0;
    const timeStartNow = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - timeStartNow > 1000){
            clearInterval;
            return;
        }
        imageComp.setAttribute('src',`img/${member[i++]}.png`)
        if(i == member.length){
            i= 0
        }
    },100)
}

// target elements
const buttonImage = document.querySelectorAll('.button img');

// declaration the score
let getScoreYour = 0;
let getScoreComp = 0;

// function when image you click
buttonImage.forEach(function(pilihanGambar){
    pilihanGambar.addEventListener('click',function(){
        const getPilihanComp = pilihanKomputer();
        const getPilihanPlayer = pilihanGambar.className;
        console.log(getPilihanPlayer)
        const getResult = result(getPilihanComp,getPilihanPlayer);

        // target score element
        const scoreComp = document.getElementById('scoreComp')
        const scoreYour = document.getElementById('scoreYour')

        // loading image function
        loadingImage()

        // function setTimeOut win or lose 
        setTimeout(function getScore(){
            if(getResult == "hore, kamu menang!!"){
                getScoreYour ++;
                return scoreYour.textContent = getScoreYour;
                
            }
            if(getResult == "yah.. kamu kalah.."){
                getScoreComp ++;
                return scoreComp.textContent = getScoreComp;
            }

        },1000)
        
        // setTimeOut image
        setTimeout(function(){

            // target the image computer
            const imageComp = document.querySelector('.imageComputer');
            imageComp.setAttribute('src',`img/${getPilihanComp}.png`);
            // target the text computer
            const figCap = document.querySelector('.figCap');
            figCap.innerHTML = getPilihanComp;
            // target the info choice the image
            const info = document.querySelector('.info');
            info.innerHTML = `${getPilihanPlayer} VS ${getPilihanComp}`;
            // target the result win or lose
            const TextResult = document.querySelector('.result');
            TextResult.innerHTML = getResult;
        },1000)
        
    })
})




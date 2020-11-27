var joueuractif="x"
const statu=document.querySelector("h2")
var jeuactif=true

var etajeu=["","","","","","","","",""]
const condition=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
const gagne=()=>"le joueur gagne est "+joueuractif
const egalite=()=>"egalité"
const tourjoueur= ()=>" c'est au tour de joueur "+joueuractif
statu.innerHTML=tourjoueur()

document.querySelectorAll(".case").forEach(function(e){
    e.addEventListener("click",function(){
        let index= parseInt(this.dataset.index)
        if(etajeu[index]!="" || !jeuactif){
            return
        }
        etajeu[index]=joueuractif
        this.innerHTML=joueuractif
        console.log(etajeu)

        verifiegangne()
    })
})

function verifiegangne(){
    let tourganent=false
    for(let condivict of condition){
        let val1=etajeu[condivict[0]]
        let val2=etajeu[condivict[1]]
        let val3=etajeu[condivict[2]]
        if(val1=="" && val2=="" && val3==""){
         tourganent=true
         continue
        }
        if(val1==val2 && val2==val3){
            statu.innerHTML= gagne()
            jeuactif=false
            return
          
        }
    }
    if(!etajeu.includes("")){
       statu.innerHTML=egalite()
       jeuactif=false
       return
    }
    joueuractif=joueuractif=="x"?"o":"x"
    statu.innerHTML=tourjoueur()
}

document.querySelector("#btn-recomancer").addEventListener("click",function(){
 joueuractif="x"
 jeuactif=true
etajeu=["","","","","","","","",""]
document.querySelectorAll(".case").forEach(function(e){
    e.innerHTML=""
})
console.log(etajeu)
})
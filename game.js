function map(tall){
    
    for(let i=0; i<tall ; i++){
        array.push(i);
    }
       return array;
}



function startposition(num){
    if (num < array.length && num >= 0){
    array.splice(num,1,"ME");
    return array;
    }else{
        console.log("choose other position betwen 0 and", array.length-1 );
    }
}



function hiddentru(){
    let no = array.indexOf("ME")
    let k;
    do{
     k = Math.floor(Math.random() * array.length);
    } while (k === no);
    array.splice(k,1,"kanz")   
    return array;
}

let khotwat = 0;

function steps(z){
    khotwat = z;
    return khotwat;
}




let gameover = false;
let lost = false;

function moves (click){

let posi = array.indexOf("ME");

let space = array.length -1;

let kenzposi = array.indexOf("kanz");


let win = "Congrats you won 🎉";

let step = 0;
let l = posi +1;
let q = khotwat-1;   
if(gameover){
    console.log("no need to countinue you won🏆");
    return;
}

if (lost) {
    
    console.log("game over you are out of steps🛑");
    return;
}


if(khotwat >=1 && gameover === false && lost === false){
if(click === "right" ){
    if (posi+1 === kenzposi){
        step =posi +1;
        array.splice(step,1,"ME")
        array.splice(posi,1,posi)
        posi =posi +1;
        khotwat = khotwat -1;
        gameover= true;
        console.log(win);
        return win;
        
    }else if(posi < space && q!=0){
        step =posi +1;
        array.splice(step,1,"ME")
        array.splice(posi,1,posi)
        posi =posi +1;
        khotwat = khotwat -1;
        return array;
    }else if(posi>=space){

        console.log("cant go outside the map⛔");

    }
    else if (l != kenzposi && q ===0) {
        khotwat = khotwat -1;
        lost = true;
        console.log("sorry you lost😢");
    }

    
}else if(click === "left" && khotwat>0){
    if (posi-1 === kenzposi){
        step = posi - 1;
        array.splice(step,1,"ME")
        array.splice(posi,1,posi)
        posi = posi - 1;
        khotwat = khotwat -1;
        gameover= true;
        return win;
        
    }else if(posi > 0){
        step = posi - 1;
        array.splice(step,1,"ME")
        array.splice(posi,1,posi)
        posi = posi - 1;
        khotwat = khotwat -1;
        return array;
    }else if(posi === 0){
        console.log("cant go outside the map⛔");
        
    }
    else if (posi-1 === kenzposi && khotwat-1 ===0) {
        lost = true;
        console.log("sorry you lost😢");
        
    }
  
}}

}



let array = [];

map(6);

startposition(3);

hiddentru();

steps(5);
console.log(khotwat);
console.log(array);
moves("right");
console.log(khotwat);
moves("left");
console.log(khotwat);
moves("right");
console.log(khotwat);
moves("right");
moves("right");
console.log(khotwat);

















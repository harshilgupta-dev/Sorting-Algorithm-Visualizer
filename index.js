const randomize_array=document.getElementById("random_array_btn");
const sort_btn=document.getElementById("sort_btn");

let minRange=1;
let maxRange=100;
let noOfBars=10;

let unsorted_array=new Array(noOfBars);

function randomNum(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

function createRandomArray(){
    for(let i=0;i<noOfBars;i++){
        unsorted_array[i]=randomNum(minRange,maxRange);
    }
}


document.addEventListener("DOMContentLoaded",function(){
    createRandomArray();
    renderBars(unsorted_array);
});

function renderBars(array){
    for(let i=0;i<array.length;i++){
        let bar=document.createElement("div");
        bar.classList.add('bar');
        bar.style.height=array[i]*10+"px";
        bars_container.appendChild(bar);
    }
}
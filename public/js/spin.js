

var count = 0; //idk why i made this i thought i'd be fun
var mag = 1;
var item =  document.getElementById("spin-logo");
function border_spin(){  /*
    item.style.background=`radial-gradient(circle at ${count}%,rgb(51, 139, 255),#ffa733)`;//`radial-gradient(cicle at ${count}%, var(--main-color) 30%, var(--sec-color) 70%)`; 
    item.style.backgroundPosition=`${count}% ${count}%`; */
    if(count >= 200 || count <-100){
         mag *= -1;
    }
    count += mag;
};
    

var x = setInterval( border_spin,50); 


item.addEventListener("mouseover", ()=>{  
    clearInterval(x);
    //console.log("on");
});

item.addEventListener("mouseout", ()=>{  
    x = window.setInterval(border_spin ,50);  
    //console.log("off",x); 
}); 
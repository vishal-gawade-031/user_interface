console.log("jay shree ram");
console.log("jay hanuman g");
let tags=document.querySelectorAll(".bottom-div h4 span");
let navbar=document.querySelector("nav");
// let bottom_div=document.querySelector(".bottom-div");
let five_box=document.querySelectorAll(".box-all");


navbar.addEventListener("mouseenter",function (){
    
    setTimeout(() => {
        
        tags.forEach( k=>{
        k.style.display="inline-block";
        k.style.opacity="1";
        // tags.style.paddingBottom="10px";
        k.style.transition="all ease 0.4s"; 
    });
        },800);

        five_box.forEach(five_box=>{
            // five_box.style.display="none";
            // five_box.style.backgroundColor= "transparent";
        five_box.style.opacity="0";
        })

    });

    navbar.addEventListener("mouseleave",function(){
        tags.forEach(i=>{
            // tags.style.display="none";
            i.style.opacity="0";
            // five_box.style.display="block";

             });
           
       five_box.forEach(five_box=>{
        five_box.style.opacity="1";
       });

    });
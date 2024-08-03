const btn1 = document.querySelector(".btan1");
const btn2 = document.querySelector(".btan2");
const btn3 = document.querySelector(".btan3");
const back=document.querySelector("body");
const icn1 = document.querySelector(".ri-moon-clear-line");
const icn2 = document.querySelector(".ri-moon-cloudy-line");
const icn3 = document.querySelector(".ri-moon-foggy-line");



    btn1.addEventListener("click",()=>{
            if (back.classList.contains("dark-mode3")||back.classList.contains("dark-mode2")||back.classList.contains("dark-mode1")) {
                back.classList.remove("dark-mode3")||back.classList.remove("dark-mode2")||back.classList.remove("dark-mode1");
                back.classList.add("light-mode1");
                btn1.classList.remove("dark-mode1");
                btn1.classList.add("light-mode1");
                btn2.classList.remove("dark-mode2");
                btn2.classList.add("light-mode2");
                btn3.classList.remove("dark-mode3");
                btn3.classList.add("light-mode3");
                change1("ri-moon-foggy-line");
            } else {
                back.classList.remove("light-mode1")||back.classList.remove("light-mode2")||back.classList.remove("light-mode3");
                back.classList.add("dark-mode1");
                btn1.classList.remove("light-mode1");
                btn1.classList.add("dark-mode1");
                btn2.classList.remove("light-mode2");
                btn2.classList.add("dark-mode2");
                btn3.classList.remove("light-mode3");
                btn3.classList.add("dark-mode3");
                change1("ri-sun-line");
            }
        });
    btn2.addEventListener("click",()=>{
        if (back.classList.contains("dark-mode3")||back.classList.contains("dark-mode2")||back.classList.contains("dark-mode1")) {
            back.classList.remove("dark-mode3")||back.classList.remove("dark-mode2")||back.classList.remove("dark-mode1");
            back.classList.add("light-mode2");
            btn1.classList.remove("dark-mode1");
            btn1.classList.add("light-mode1");
            btn2.classList.remove("dark-mode2");
            btn2.classList.add("light-mode2");
            btn3.classList.remove("dark-mode3");
            btn3.classList.add("light-mode3");
            change2("ri-moon-foggy-line");
        } else {
            back.classList.remove("light-mode1")||back.classList.remove("light-mode2")||back.classList.remove("light-mode3");
            back.classList.add("dark-mode2");
            btn1.classList.remove("light-mode1");
            btn1.classList.add("dark-mode1");
            btn2.classList.remove("light-mode2");
            btn2.classList.add("dark-mode2");
            btn3.classList.remove("light-mode3");
            btn3.classList.add("dark-mode3");
            change2("ri-sun-cloudy-line");
        }
    });
    btn3.addEventListener("click",()=>{
        if (back.classList.contains("dark-mode3")||back.classList.contains("dark-mode2")||back.classList.contains("dark-mode1")) {
            back.classList.remove("dark-mode3")||back.classList.remove("dark-mode2")||back.classList.remove("dark-mode1");
            back.classList.add("light-mode3");
            btn1.classList.remove("dark-mode1");
            btn1.classList.add("light-mode1");
            btn2.classList.remove("dark-mode2");
            btn2.classList.add("light-mode2");
            btn3.classList.remove("dark-mode3");
            btn3.classList.add("light-mode3");
            change3("ri-moon-foggy-line");
        } else {
            back.classList.remove("light-mode1")||back.classList.remove("light-mode2")||back.classList.remove("light-mode3");
            back.classList.add("dark-mode3");
            btn1.classList.remove("light-mode1");
            btn1.classList.add("dark-mode1");
            btn2.classList.remove("light-mode2");
            btn2.classList.add("dark-mode2");
            btn3.classList.remove("light-mode3");
            btn3.classList.add("dark-mode3");
            change3("ri-sun-foggy-line");
        }
    });




const change1=function(icon){
    icn1.classList.toggle("ri-sun-fill");
}
const change2=function(icon){
    icn2.classList.toggle("ri-sun-cloudy-fill");
}
const change3=function(icon){
    icn3.classList.toggle("ri-sun-foggy-fill");
}

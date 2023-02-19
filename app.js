//*****************************preeloader**********************************

let preeloader = document.getElementById("preeloader");
window.addEventListener("load",function(){
    preeloader.style.display = "none";
});

//*****************************preeloader***********************************







//*****************************navbar sticky********************************

let navis = document.getElementById("navis");
window.addEventListener("scroll",function(){
    navis.classList.toggle("sticky",window.scrollY > 0);
});

//*****************************navbar sticky********************************
                






//********************************charat effect*****************************      

const charat =  "WEBSITE DESIGN FOR LAW OFFICE.";
let i = 0;
let charat_funcion = document.getElementById("charat_funcion");

function ok(){
    if(i<charat.length){
        charat_funcion.innerHTML += charat.charAt(i);
        i++;
        setTimeout(ok,150);
    };
};
ok();

//********************************charat effect*****************************







//***********************************opacity effect**************************

let who_we_photo = document.getElementById("who_we_photo");
window.addEventListener("scroll",function(){
    let vfx = window.scrollY;
    if(vfx >= 50){
        who_we_photo.style.opacity = 1;
    }
    else{
        who_we_photo.style.opacity = 0;
    }
});

//***********************************opacity effect**************************
                    






//***************************************see more*****************************

let btn_custom = document.getElementById("btn_custom");
let btn_custom_p = document.getElementById("btn_custom_p"); 
btn_custom.addEventListener("click",function(){
    if(btn_custom_p.style.display != "block"){
        btn_custom_p.style.display = "block";
    }
    else{
        btn_custom_p.style.display = "none";
    }
});

//***************************************see more******************************







//***************************************read more******************************

let btn_read1 = document.querySelectorAll(".btn_read1");
let span_read_p1 = document.querySelectorAll(".span_read_p1");
for(let i=0; i<btn_read1.length; i++){
    btn_read1[i].addEventListener("click",function(){
            if(span_read_p1[i].style.display != "block"){
                span_read_p1[i].style.display = "block"
            }
            else{
                span_read_p1[i].style.display = "none";
            }
    });
};

//***************************************see more*******************************






//***************************************swiper slider**************************

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    dynamicBullets: true,
    autoplay: {
        delay :5000,
    },
    breakpoints: {
        // when window width is min 0px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is min 567px
        576: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        // when window width is min 768px
        768: {
            slidesPerView: 3,
            // spaceBetween: 30
        },

      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//***************************************see more********************************

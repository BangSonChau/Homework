
let menuToggle = document.getElementById("menu-toggle");
let mobileNav = document.getElementById("mobile-nav");
let barsIcon = document.getElementById("bars-icon");
let marksIcon = document.getElementById("marks-icon");

menuToggle.addEventListener("click", function(){
    mobileNav.classList.toggle("active");

    if(mobileNav.classList.contains("active")){
      barsIcon.style.display = "none";
      marksIcon.style.display = "block";
    }else{
      barsIcon.style.display = "block";
      marksIcon.style.display = "none";
    }
});

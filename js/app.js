document.addEventListener("DOMContentLoaded", function() {

  /*zadanie 1*/

  var liElement = document.querySelector(".li_nav");
  var ulElement = document.querySelector(".header_nav_firm");

  liElement.addEventListener("mouseover", function(event){
    ulElement.style.display = "inline-block";
  });

  ulElement.addEventListener("mouseout", function(){
    ulElement.style.display = "none";
  });

  /*zadanie 2*/
  var box1 = Array.from(document.querySelectorAll(".model"));

  box1.forEach(function(element){
    element.addEventListener("mouseover", function(event){
      //odnosimy do ukrytego diiva z trescia z posiomu klasy .model
      if (this.querySelector(".chair")) {
        this.querySelector(".chair").classList.remove("classHidden");
      }
    });
    element.addEventListener("mouseout", function(event){
      //odnosimy do ukrytego diiva z trescia z posiomu klasy .model
      if (this.querySelector(".chair")) {
        this.querySelector(".chair").classList.add("classHidden");
      }
    });

  });

  /*Zadanie 3*/

    var nextBtn = document.querySelector(".section_banner_right_arrow");
    var prevBtn = document.querySelector(".section_banner_left_arrow");
    var slides = document.querySelectorAll(".slider li");

    var actualySlide = 0;

    slides[actualySlide].classList.add("visible");

    nextBtn.addEventListener("click", function(){
      slides[actualySlide].classList.remove("visible");
      actualySlide++;
      // instrukcja zeby sider zataczal kolo jak dojdziemy do ostatniego bannera
      if (actualySlide >= slides.length) {
        actualySlide = 0;
      }

      slides[actualySlide].classList.add("visible");
    });
    prevBtn.addEventListener("click", function(){
      slides[actualySlide].classList.remove("visible");
      --actualySlide;

      if (actualySlide< 0) {
        actualySlide=slides.length -1;
      }

      slides[actualySlide].classList.add("visible");
    });




});

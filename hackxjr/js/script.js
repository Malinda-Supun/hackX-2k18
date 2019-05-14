$(document).ready(function(){

    var scrollLink = $('.scroll');

    //smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 )
    })
})

//contdown timer:

var countDownDate = new Date("Oct 10, 2018 00:00:00").getTime();
var countDownFunction = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;
     if(distance < 0) {
        distance = 0;
    }
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);


    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
   
})


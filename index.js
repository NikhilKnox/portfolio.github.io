$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });



    // toggle menu navbar

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });



    // typing animation script 
    var typed = new Typed(".typing" , {
        strings: ["Software Engineer", "Android App Developer", "UI/UX Designer", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2" , {
        strings: ["Software Engineer", "Android App Developer", "UI/UX Designer", "Freelancer"],
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    });


    //owl carousel script 

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoPlayTimeOut: 2000,
        autoPlayHoverPause: true,
        responsive: {
            0:{
                item: 1,
                nav: false
            },

            600: {
                item: 2,
                nav: false
            },

            1000: {
                item: 3,
                nav: false
            }
        }

    });
});


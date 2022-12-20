$(".about-project__icon--about").click(function() {

    if ($(".about-project__text--about").is(":hidden")) {
    
		    $(".about-project__text--about").slideDown("slow");
		    $(".about-project__icon--about").addClass("open");
        
    } else {
        $(".about-project__text--about").hide("slow");
	    $(".about-project__icon--about").removeClass("open");
    
    }

});

$(".about-project__icon--programms").click(function() {

    if ($(".about-project__text--programms").is(":hidden")) {
    
		    $(".about-project__text--programms").slideDown("slow");
		    $(".about-project__icon--programms").addClass("open");
        
    } else {
        $(".about-project__text--programms").hide("slow");
	    $(".about-project__icon--programms").removeClass("open");
    
    }

});

const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });


;
// Начинать писать отсюда!!!!

$(document).ready(function(){

  /////////////// Mask ///////////////////

  $(function(){
    $("#phone").mask("+7 (999) 999-9999");
  });

    ////////////// Akkordeon /////////////////

  $(".products-filter__wrap .products-filter").on("click", function(){
    
    var $this = $(this),
      container = $this.closest('.products'),
      item = $this.closest('.products-filter__wrap'),
      currentContent = item.find('.products-filter__content'),
      duration = 600

    
    if(!item.hasClass('active')){

      item.addClass('active');
      currentContent.slideDown(duration);
      // open.removeClass('active');
      
    }else{
        
      item.removeClass('active');
      currentContent.slideUp();
      // open.addClass('active');
        
    }
  });

  ////////////// Tabs ///////////////////


  $('.tabs-item').on('click', function(){

    var $this = $(this),
        item = $this.closest('.tabs-item'),
        container = $this.closest('.tabs'),
        content = container.find('.tabs-content-item'),
        ndx = item.index();

    item.addClass('active')
        .siblings()
        .removeClass('active');

    content.eq(ndx)
        .addClass('active')
        .siblings()
        .removeClass('active');
  });

  //////////////// Slider //////////////////

  $('.product-slide__img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.product-slider__img'
  });
  $('.product-slider__img').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slide__img',
    focusOnSelect: true
  });


	$('.js-slider').slick({
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
  // variableWidth: true,
  dots: true,
  responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 415,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '300px',
        }
      }
    ]
  });

   ///// Слайдер внутри табов

  $('[href="#js-slider"]').on('.tabs-item', function (e) {
    $('.js-slider').resize();
  });

  ////

  $('.js-slider-similar').slick({
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.nav__mobile').click(function(){
    $(this).toggleClass('active');
    $('.nav-list__mobile').slideToggle('mobile-show');
  });



  $('.scroll-link').click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

  $('.popup-link').magnificPopup({
    type: 'inline'
  });

});

  /////////////// Map ///////////////////

  ymaps.ready(init);
    function init(){ 

      var myMap = new ymaps.Map("map", {
        center: [58.017377566548774,56.25482049999998],
        zoom: 16,
        controls: ['zoomControl']
      });

      myMap.behaviors.disable(['scrollZoom']).enable('ruler');

      var coords = [
          [58.017377566548774,56.25482049999998]
      ];

      var myCollection = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'static/img/general/map.png',
          iconImageSize: [50, 60],
          iconImageOffset: [-20, -70]
      });

      for (var i = 0; i < coords.length; i++) {
          myCollection.add(new ymaps.Placemark(coords[i]));
      }

      myMap.geoObjects.add(myCollection);
    };
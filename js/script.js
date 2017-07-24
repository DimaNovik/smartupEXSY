jQuery(document).ready(function () {


  if (jQuery('.slick-slider').length > 0) {
    jQuery('.slick-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  };

  if (jQuery('.main-bests-slider').length > 0) {
    jQuery('.main-bests-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      variableWidth: true,
      prevArrow: '<span class="slick-prev"><span class="sprite sprite-arrow-r"></span></span>',
      nextArrow: '<span class="slick-next"><span class="sprite sprite-arrow-r"></span></span>',
      responsive: [
        {
          breakpoint: 1218,
          settings: {
            slidesToShow: 2,
          }
			},
        {
          breakpoint: 856,
          settings: {
            slidesToShow: 1,
          }
			}
			]
    });
  };

  if (jQuery('.about-us-slider').length > 0) {
    jQuery('.about-us-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<span class="slick-prev"><span class="sprite sprite-arrow-r"></span></span>',
      nextArrow: '<span class="slick-next"><span class="sprite sprite-arrow-r"></span></span>',
      responsive: [
        {
          breakpoint: 1218,
          settings: {
            slidesToShow: 2,
          }
			},
        {
          breakpoint: 856,
          settings: {
            slidesToShow: 1,
          }
			}
			]
    });
  };

  if (jQuery('.about-news-slider').length > 0) {
    jQuery('.about-news-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      prevArrow: '<span class="slick-prev"><span class="sprite sprite-arrow-r"></span></span>',
      nextArrow: '<span class="slick-next"><span class="sprite sprite-arrow-r"></span></span>',
      responsive: [
        {
          breakpoint: 1218,
          settings: {
            slidesToShow: 2,
          }
			},
        {
          breakpoint: 856,
          settings: {
            slidesToShow: 1,
          }
			}
			]
    });
  };

  jQuery('.main-best-header .action').click(function () {
    if (jQuery(this).hasClass('on')) {
      jQuery(this).removeClass('on');
    } else {
      jQuery(this).addClass('on');
    };

    return false;
  });

  jQuery('.info-block').click(function () {
    if (jQuery(this).children('.hint').length) {
      if (!jQuery(this).children('.hint').hasClass('open'))
        jQuery(this).children('.hint').addClass('open');
    };

    return false;
  });

  jQuery('.hint .close').click(function () {
    if (jQuery(this).parent('.hint').hasClass('open'))
      jQuery(this).parent('.hint').removeClass('open');

    return false;
  });

  jQuery('.burger').click(function () {
    if (jQuery(this).hasClass('open')) {
      jQuery(this).removeClass('open');
      jQuery('.header').outerHeight(60);
    } else {
      jQuery(this).addClass('open');
      var headHeight = jQuery('.header .container').outerHeight() + 28
      jQuery('.header').outerHeight(headHeight);
    }
  });

  jQuery('.to-sort').click(function () {
    var sortWrap = jQuery(this).siblings('.sorting-wrap');
    var sortH = Math.ceil(jQuery(this).siblings('.sorting-wrap').children('ul').outerHeight());
    var sortW = Math.ceil(jQuery(this).siblings('.sorting-wrap').children('ul').outerWidth());
    if (sortWrap.hasClass('open')) {
      sortWrap.removeClass('open').width(0).height(2);
    } else {
      sortWrap.addClass('open').width(sortW).height(sortH);
    };
  });

  jQuery('.sorting-wrap li').click(function () {
    if (!jQuery(this).hasClass('active')) {
      jQuery(this).siblings().removeClass('active');
      jQuery(this).addClass('active');
      var textEl = jQuery(this).text();
      jQuery(this).parents('.title').children('.text').text(textEl);
      jQuery(this).parents('.sorting-wrap').removeClass('open').width(0).height(2);
    } else {
      jQuery(this).parents('.sorting-wrap').removeClass('open').width(0).height(2);
    };
  });

});

jQuery(window).on('load', function () {

  if (jQuery('.header').hasClass('fixed')) {
    var padTop = jQuery('.header').outerHeight();
    jQuery('body').css('paddingTop', padTop);
  };

  var mainSliderH = jQuery('.main-slider').outerHeight();

  jQuery(document).scroll(function () {
    if (jQuery('.header').hasClass('fixed')) {
      if (jQuery(document).scrollTop() >= mainSliderH) {
        jQuery('.header').css("box-shadow", "0px 5px 10px -5px rgba(0, 0, 0, 0.5)");
      } else {
        jQuery('.header').css("box-shadow", "none");
      };
    };
  });

  if (jQuery('.main-best-info-middle').length > 0) {
    jQuery('.main-best-info-middle').each(function () {
      var pers = jQuery(this).find('.info-progress .percent').text();
      if (!pers) {
        pers = '0%';
      };
      var inx = pers.indexOf('%');
      var numb = +pers.substring(0, inx);
      var elClass = 'red';
      if (numb >= 66) {
        elClass = 'green'
      } else if (numb >= 33) {
        elClass = 'yellow'
      };
      jQuery(this).find('.progress-data').css('width', pers).addClass(elClass);
    });
  };

  (function ($) {
    $(function () {
      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this) .addClass('active')
          .siblings()
          .removeClass('active')
          .closest('div.tabs')
          .find('div.tabs__content')
          .removeClass('active')
          .eq($(this).index())
          .addClass('active');
      });
    });
  })(jQuery);
  
  function modalOpen(e, elClass) {
    e.preventDefault();
    if(jQuery(elClass).hasClass('show')){
      jQuery(elClass).removeClass('show');
      if(!jQuery('.modal_bg').hasClass('show'))
        jQuery('html').removeClass('modal_show');
      return false;
    } else{
      jQuery(elClass).addClass('show');
      jQuery('html').addClass('modal_show');
      return false;
    }
    
//    if ((jQuery('.modal_bg').hasClass('show')) || (jQuery('html').hasClass('modal_show'))) {
//      jQuery('html').removeClass('modal_show');
//      jQuery('.modal_bg').removeClass('show');
//      return false;
//    } else {
//      jQuery('.modal_bg').addClass('show');
//      jQuery('html').addClass('modal_show');
//      return false;
//    }
  };
  
  jQuery('.prof-head-add .add-photo').click(function(e){
    modalOpen(e, '.modal_gallery');
  });
  jQuery('.prof-head-add .to-framing').click(function(e){
    modalOpen(e, '.modal_framing');
  });
  jQuery('.modal_gallery-close').click(function(e){
    modalOpen(e, '.modal_gallery');
  });
  jQuery('.modal_framing-close').click(function(e){
    modalOpen(e, '.modal_framing');
  });
  
  jQuery('.modal_bg').click(function(e){
    modalOpen(e, this);
  }).children().click(function(e){        
    e.stopPropagation();   
  });

});

/* ---------------------

Description page scripts

--------------------- */
$('.close-block-calc').click( function(event) {
  event.preventDefault();
  $('.calculator').toggle();
  //$('.company-profit').toggle();
  $(this).find('img').toggleClass('arrow-rotate');
})

$('.close-block-news').click( function(event) {
  event.preventDefault();
  $('.company-news').toggle();
  $('.news-arrow-up').toggle();
  $('.news-arrow-down').toggle();
  $(this).find('img').toggleClass('arrow-rotate');

})

$('.close-block-fin').click( function(event) {
  event.preventDefault();
  $('.company-default').toggle();
  $('.company-profit').toggle();
  $(this).find('img').toggleClass('arrow-rotate');
})

$('.close-block-propr').click( function(event) {
  event.preventDefault();
  $('.company-proprietors').toggle();
  $('.prop-arrow-up').toggle();
  $('.prop-arrow-down').toggle();
  $(this).find('img').toggleClass('arrow-rotate');
})

$('.total-btn-calc').click( function(event) {
  event.preventDefault();
  $('.card-forward').toggle();
  $('.card-calculator').toggle();
  $("html, body").animate({ scrollTop: 0 }, "slow");
})

// Slider for NEWS BLOCK //

var arrowRightNews = document.querySelectorAll('#news-arrow-down-href');
var arrowLeftNews = document.querySelectorAll('#news-arrow-up-href');

  $(arrowRightNews).on( "click", function(event) {
    event.preventDefault();
  });

  $(arrowLeftNews).on( "click", function(event) {
    event.preventDefault();
  });

  for (var i = 0; i < arrowRightNews.length; i++) {
    arrowRightNews[i].onclick = function() {
        var sliderInner = document.querySelector('.company-news-one');
        var sliderImagesLength = sliderInner.children.length;
        var currentMargin = parseInt(sliderInner.style.marginTop || 0);
        if ((sliderImagesLength-1)*-530 != currentMargin ) {
          sliderInner.style.marginTop = currentMargin - 530 + 'px';
        } else {
          sliderInner.style.marginTop = 0;
      }
    }
  }

  for (var i = 0; i < arrowLeftNews.length; i++) {
    arrowLeftNews[i].onclick = function() {
      var sliderInner = document.querySelector('.company-news-one');
      var sliderImagesLength = sliderInner.children.length;
      var currentMargin = parseInt(sliderInner.style.marginTop || 0);
        if (currentMargin) {
          sliderInner.style.marginTop = currentMargin + 530 + 'px'; 
        } else {
          sliderInner.style.marginTop = (sliderImagesLength-1)*-530 + 'px';
        }
        
      }
  }


// Slider for FINANCE BLOCK //

var arrowRight = document.querySelectorAll('#fin-arrow-right-href');
var arrowLeft = document.querySelectorAll('#fin-arrow-left-href');

  $(arrowRight).on( "click", function(event) {
    event.preventDefault();
  });

  $(arrowLeft).on( "click", function(event) {
    event.preventDefault();
  });

  for (var i = 0; i < arrowRight.length; i++) {
    arrowRight[i].onclick = function() {
        var sliderInner = document.querySelector('.finance-img');
        var sliderImagesLength = sliderInner.children.length;
   
        var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
        if ((sliderImagesLength-1)*-440 != currentMargin ) {
          sliderInner.style.marginLeft = currentMargin - 440 + 'px';
        } else {
          sliderInner.style.marginLeft = 0;
      }
    }
  }

  for (var i = 0; i < arrowLeft.length; i++) {
    arrowLeft[i].onclick = function() {
      var sliderInner = document.querySelector('.finance-img');
      var sliderImagesLength = sliderInner.children.length;
      var currentMargin = parseInt(sliderInner.style.marginLeft || 0);
        if (currentMargin) {
          sliderInner.style.marginLeft = currentMargin + 440 + 'px';  
        } else {
          sliderInner.style.marginLeft = (sliderImagesLength-1)*-440 + 'px';
        }
        
      }
  }


// Slider for PROPRIETORS BLOCK //

var arrowRightProp = document.querySelectorAll('#prop-arrow-down-href');
var arrowLeftProp = document.querySelectorAll('#prop-arrow-up-href');

  $(arrowRightProp).on( "click", function(event) {
    event.preventDefault();
  });

  $(arrowLeftProp).on( "click", function(event) {
    event.preventDefault();
  });

  for (var i = 0; i < arrowRightProp.length; i++) {
    arrowRightProp[i].onclick = function() {
        var sliderInner = document.querySelector('.company-proprietors-one');
        var sliderImagesLength = sliderInner.children.length;
        var currentMargin = parseInt(sliderInner.style.marginTop || 0);
        if ((sliderImagesLength-1)*-530 != currentMargin ) {
          sliderInner.style.marginTop = currentMargin - 530 + 'px';
        } else {
          sliderInner.style.marginTop = 0;
      }
    }
  }

  for (var i = 0; i < arrowLeftProp.length; i++) {
    arrowLeftProp[i].onclick = function() {
      var sliderInner = document.querySelector('.company-proprietors-one');
      var sliderImagesLength = sliderInner.children.length;
      var currentMargin = parseInt(sliderInner.style.marginTop || 0);
        if (currentMargin) {
          sliderInner.style.marginTop = currentMargin + 530 + 'px'; 
        } else {
          sliderInner.style.marginTop = (sliderImagesLength-1)*-530 + 'px';
        }
        
      }
  }

// положение карточки при загрузке документа
  if($(window).width() <= 880) {
    $('.right-side-item-2').prependTo('.left-side');
    $('.right-side-item-1').prependTo('.left-side');
   

  } else {
    $('.right-side-item-2').prependTo('.right-side');
    $('.right-side-item-1').prependTo('.right-side');  
  }

// положение карточки при ресайзе документа
$(window).resize(function() {
  if($(window).width() <= 880) {
    $('.right-side-item-2').prependTo('.left-side');
    $('.right-side-item-1').prependTo('.left-side');
   

  } else {
    $('.right-side-item-2').prependTo('.right-side');
    $('.right-side-item-1').prependTo('.right-side');  
  }

 
});
  

$(window).scroll(function() {
    // фиксирую положение правой части страницы Description
    var DescScrollHeight = $('header').height() + $('.main').height();
      if($(window).width() >= 860) {
        if($(this).scrollTop() >= DescScrollHeight) {
        var margin = $(this).scrollTop() - 560;
        $('.right-side').css('padding-top', margin);

     } else {
       $('.right-side').css('padding-top', '0');
     }
    }  


    if($(window).width() <= 880) {
       // появление кнопки Инвестирования 
    if($(this).scrollTop() >= 325) {
      $('.total-btn-calc').css('position', 'fixed');
      $('.total-btn-calc').css('bottom', '20px');
      $('.total-btn-calc').css('left', '50%');
      $('.total-btn-calc').css('margin-left', '-25%');
      $('.total-btn-calc').css('z-index', '9999');

    } else {
      $('.total-btn-calc').css('position', 'relative');
    }
    }

    
    // Скролл для меню табов
    var headerHeight = $('.prof-head').height() + $('.header').height();

    $(window).scroll(function() {

         if($(this).scrollTop() >= 60) {
      $('.fixed-nav').css('position','fixed');
        if($(window).width() >= 710 && $(window).width() <= 1020 ) {
          $('.fixed-nav').css('margin-top','115px');
        }   else {
          $('.fixed-nav').css('margin-top','80px'); 
        }  
      $('.fixed-nav').css('background-color','white');
      $('.fixed-nav').css('z-index','9998');
      $('.fixed-nav').css('width','100%');
      
    } else {
      $('.fixed-nav').css('position','relative');
      $('.fixed-nav').css('top','0');
      $('.fixed-nav').css('left','0');
      $('.fixed-nav').css('margin-top','0px');
    }

     // Скролл для заголовка таблицы
    if($(window).width() >= 710) {
      if($(this).scrollTop() > 420) {
        $('.catalog-title').css('position','fixed');     
        $('.catalog-title').css('margin-top','140px');  
        $('.catalog-title').css('background-color','white');
        $('.catalog-title').css('width','100%');
        $('.catalog-title').css('justify-content','center');
        $('.catalog-title').css('transition','0.2s');
        $('.catalog-title').css('padding-top','10px');
        $('.catalog-title').css('padding-bottom','5px');
      } else {
        $('.catalog-title').css('position','relative');
        $('.catalog-title').css('top','0');
        $('.catalog-title').css('left','0');
        $('.catalog-title').css('margin-top','0px');
        $('.catalog-title').css('transition','0.1s');
        $('.catalog-title').css('background-color','white');
        $('.catalog-title').css('padding-top','35px');
        $('.catalog-title').css('padding-bottom','25px');
      }
    }

    if($(window).width() <= 720) {
      if($(this).scrollTop() >= 320) {
      $('.fixed-nav').css('position','fixed');     
      $('.fixed-nav').css('margin-top','60px');   
      $('.fixed-nav').css('background-color','white');
      $('.fixed-nav').css('z-index','9998');
      $('.fixed-nav').css('width','100%');
      
    } else {
      $('.fixed-nav').css('position','relative');
      $('.fixed-nav').css('top','0');
      $('.fixed-nav').css('left','0');
      $('.fixed-nav').css('margin-top','0px');
    }

    }

    })
 

   

 

  })

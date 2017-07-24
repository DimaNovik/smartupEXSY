$(document).ready(function() {
	
	// Очищаю placeholder при фокусе на input
	$('input, textarea').focus(function(){
    $(this).data('placeholder',$(this).attr('placeholder'))
    $(this).attr('placeholder','');
    });
    $('input, textarea').blur(function(){
   	$(this).attr('placeholder',$(this).data('placeholder'));
 	});

 	var checkbox = $('input[type="checkbox"]'),
 		radio = $('input[type="radio"]');

 	checkbox.on('change', function(){
 		$(this).parent().css('color', '#38cf63');
 	});

 	$("#datepicker").css('cursor', 'pointer');
 	$("#datepicker").datepicker({ dateFormat: 'dd-mm-yy' });

 	$("#datepicker-2").css('cursor', 'pointer');
 	$("#datepicker-2").datepicker({ dateFormat: 'dd-mm-yy' });

 	$("#datepicker-3").css('cursor', 'pointer');
 	$("#datepicker-3").datepicker({ dateFormat: 'dd-mm-yy' });

 	$("#datepicker-4").css('cursor', 'pointer');
 	$("#datepicker-4").datepicker({ dateFormat: 'dd-mm-yy' });

 	$("#datepicker-5").css('cursor', 'pointer');
 	$("#datepicker-5").datepicker({ dateFormat: 'dd-mm-yy' });

 	$("#datepicker-6").css('cursor', 'pointer');
 	$("#datepicker-6").datepicker({ dateFormat: 'dd-mm-yy' });


 	// Добавляем поля для Банковские реквизиты
 	$('.add-bank-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-bank-data').css('display', 'inline-block');
 		$('#bank-data').clone().appendTo('#new-bank-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-bank-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-bank-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-bank-data').css('display', 'none');
 		}

 	})

 	// Добавляю поле Email
 	$('.add-email-block').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-email-block').css('display', 'inline-block');
 		$('#email-block').clone().appendTo('#new-email-block').addClass('added-blocks').removeAttr('id');		
 	})

 	// Удаление
 	$('.delete-email-block').on('click', function(event) {
 		event.preventDefault();
 		$('#new-email-block').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-email-block').css('display', 'none');
 		}

 	})

 	// Добавляем поля для Индекс Телефон
 	$('.add-phone-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-phone-data').css('display', 'inline-block');
 		$('#phone-data').clone().appendTo('#new-phone-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-phone-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-phone-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-phone-data').css('display', 'none');
 		}

 	})


 	// Добавляем поля уровень
 	$('.add-skill-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-skill-data').css('display', 'inline-block');
 		$('#skill-data').clone().appendTo('#new-skill-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-skill-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-skill-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-skill-data').css('display', 'none');
 		}

 	})

 	// Добавляем поля 
 	$('.add-skill-business-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-skill-business-data').css('display', 'inline-block');
 		$('#skill-business-data').clone().appendTo('#new-skill-business-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-skill-business-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-skill-business-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-skill-business-data').css('display', 'none');
 		}

 	})

 	// Добавляем поля для Индекс Телефон
 	$('.add-educ-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-educ-data').css('display', 'inline-block');
 		$('#educ-data').clone().appendTo('#new-educ-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-educ-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-educ-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-educ-data').css('display', 'none');
 		}

 	})

 	// Добавляем поля для Индекс Телефон
 	$('.add-lang-data').on('click', function(event) {
 		event.preventDefault();
 		$('.delete-lang-data').css('display', 'inline-block');
 		$('#lang-data').clone().appendTo('#new-lang-data').addClass('added-blocks').removeAttr('id');	
 	})

 	// Удаление
 	$('.delete-lang-data').on('click', function(event) {
 		event.preventDefault();
 		$('#new-lang-data').children().remove();
 		if($('.added-blocks').length === 0) {
 			$('.delete-lang-data').css('display', 'none');
 		}

 	})

 	if($(window).width() <= 710 ) {

 		$('.tabs__caption li #mob-view').append('<br/>');
 	} 


 	// Scripts for Message tab
 	$('.contact-one').mouseover(function(){
        $(this).children('.contact-reg').css('display', 'block');
    });
    $('.contact-one').mouseout(function(){
        $(this).children('.contact-reg').css('display', 'none');
    });
    $('.contact-one').on('click', function(event) {
    	$('.contact-list-block ').css('display', 'none');	
    	$('.chat-block').css('display', 'block');
    })

    $('.back-to-chat-list').on('click', function(event){
    	event.preventDefault();
    	$('.contact-list-block ').css('display', 'block');	
    	$('.chat-block').css('display', 'none');
    })


     //Open modal
        $(document).on('click', '[data-target="modal-map-wrap"]', function (event) {
            event.preventDefault();
            var $this = $(this);
            var $childId = $this.find('input').attr("id");
            var $body = $('body');
            var $modal = $($this.data('toggle'));

            $body.addClass('js-modal-map-open');
            $modal.addClass('js-modal-map-open');

            $(".modal-foot__btn--select").data("selected", $childId)

            setTimeout(function () {
                $modal.find('.modal-map').addClass('js-modal-map-open');
            }, 300);
            console.log(1);
        }); //end click
    
            
;(function() {

    var infowindow;
    var infowindowSearcher;
  var filterLinkValue;



    var columns = $('.head-form-content__item'); // var for head-form-content__item Equal height
    var addFromClass = false;
    var headForm = $('.head-bottom__form');
    var arrowBack = $('.results__arrow-back');


    var coords;
    var myPlacemark;
    var myMap;
    var geolocation;
    var prev_position;
    var setCenter = true;
    if ($('.map').length) {
        ymaps.ready(function () {
            geolocation = ymaps.geolocation;
            var myMap = new ymaps.Map("map-searcher", {
              center: [55.76, 37.64],
              zoom: 10,
              controls: []
            });


            geolocation.get({
                provider: 'auto',
                mapStateAutoApply: true
            }).then(function (result) {
                infowindowSearcher = (result.geoObjects.get(0).properties.get('text'));

                
                myMap.setCenter( result.geoObjects.get(0).geometry.getCoordinates() );
                myMap.setZoom( 14 );
            });

            var searchControl = new ymaps.control.SearchControl({
                options: {
                    noPlacemark: true
                }
            });

            var searchResults = new ymaps.GeoObjectCollection(null, {
                    hintContentLayout: ymaps.templateLayoutFactory.createClass('$[properties.name]')
                });
            myMap.controls.add(searchControl);
            myMap.geoObjects.add(searchResults);
            // РџСЂРё РєР»РёРєРµ РїРѕ РЅР°Р№РґРµРЅРЅРѕРјСѓ РѕР±СЉРµРєС‚Сѓ РјРµС‚РєР° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ РєСЂР°СЃРЅРѕР№.
            searchResults.events.add('click', function (e) {
                e.get('target').options.set('preset', 'islands#blueStretchyIcon');
            });
            // Р’С‹Р±СЂР°РЅРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РїРѕРјРµС‰Р°РµРј РІ РєРѕР»Р»РµРєС†РёСЋ.
            searchControl.events.add('resultselect', function (e) {
                var index = e.get('index');
                searchControl.getResult(index).then(function (res) {
                   searchResults.add(res);
                   infowindow = res.properties.get('text');
                });
            }).add('submit', function () {
                    searchResults.removeAll();
            })

            circle = new ymaps.Circle([coords], {}, 
            {
              draggable: true,
              fillColor: "#6bce79",
              fillOpacity:0.5,
              strokeColor: "#FFAA00",
              strokeOpacity: 0.9,
              strokeWidth: 3
            })

            myMap.events.add('click', function (e) {
                if (setCenter) {
                    circle.geometry.setRadius(null);
                    prev_position = e.get('coords');
                    circle.geometry.setCoordinates(prev_position);
                    if (myPlacemark) {
                        myPlacemark.geometry.setCoordinates(prev_position);
                    }else {
                        myPlacemark = createPlacemark(prev_position);
                        myMap.geoObjects.add(myPlacemark);
                    }
                    getAddress(prev_position);
                    setCenter = false;
                } else {
                      if (prev_position != undefined) {
                        var d = Math.round(ymaps.coordSystem.geo.getDistance(prev_position, e.get('coords')));
                        if (d > 100000) { d = 100000}
                        circle.geometry.setRadius(d);
                      } 
                    setCenter = true;
                    prev_position = undefined;

                }
            });

            myMap.geoObjects.add(circle);
        });

        ymaps.ready(function () {
            geolocation = ymaps.geolocation;
            myMap = new ymaps.Map("map-employer", {
                center: [55.76, 37.64],
                zoom: 13,
                controls: []
            });

            geolocation.get({
                provider: 'auto',
                mapStateAutoApply: true
            }).then(function (result) {         
                myMap.setCenter( result.geoObjects.get(0).geometry.getCoordinates() );
                myMap.setZoom( 14 );
            });
            var searchControl = new ymaps.control.SearchControl({
                options: {
                    noPlacemark: true
                }
            });

            var searchResults = new ymaps.GeoObjectCollection(null, {
                    hintContentLayout: ymaps.templateLayoutFactory.createClass('$[properties.name]')
                });
            myMap.controls.add(searchControl);
            myMap.geoObjects.add(searchResults);
            // РџСЂРё РєР»РёРєРµ РїРѕ РЅР°Р№РґРµРЅРЅРѕРјСѓ РѕР±СЉРµРєС‚Сѓ РјРµС‚РєР° СЃС‚Р°РЅРѕРІРёС‚СЃСЏ РєСЂР°СЃРЅРѕР№.
            searchResults.events.add('click', function (e) {
                e.get('target').options.set('preset', 'islands#blueStretchyIcon');
            });
            // Р’С‹Р±СЂР°РЅРЅС‹Р№ СЂРµР·СѓР»СЊС‚Р°С‚ РїРѕРјРµС‰Р°РµРј РІ РєРѕР»Р»РµРєС†РёСЋ.
            searchControl.events.add('resultselect', function (e) {
                var index = e.get('index');
                searchControl.getResult(index).then(function (res) {
                   searchResults.add(res);
                   infowindow = res.properties.get('text');
                });
            }).add('submit', function () {
                    searchResults.removeAll();
                })
        });
    }

    // РЎРѕР·РґР°РЅРёРµ РјРµС‚РєРё.
  function createPlacemark(coords) {
      return new ymaps.Placemark(coords, {
          iconCaption: 'РїРѕРёСЃРє...'
      }, {
          preset: 'islands#blueDotIconWithCaption',
          draggable: false
      });
  }

   // РћРїСЂРµРґРµР»СЏРµРј Р°РґСЂРµСЃ РїРѕ РєРѕРѕСЂРґРёРЅР°С‚Р°Рј (РѕР±СЂР°С‚РЅРѕРµ РіРµРѕРєРѕРґРёСЂРѕРІР°РЅРёРµ).
   var infowindowSearcher;
  function getAddress(coords) {
      myPlacemark.properties.set('iconCaption', 'РїРѕРёСЃРє...');
      ymaps.geocode(coords).then(function (res) {
          var firstGeoObject = res.geoObjects.get(0);
          infowindowSearcher = (firstGeoObject.properties.get('text'));
          myPlacemark.properties
              .set({
                  // Р¤РѕСЂРјРёСЂСѓРµРј СЃС‚СЂРѕРєСѓ СЃ РґР°РЅРЅС‹РјРё РѕР± РѕР±СЉРµРєС‚Рµ.
                  iconCaption: [
                      // РќР°Р·РІР°РЅРёРµ РЅР°СЃРµР»РµРЅРЅРѕРіРѕ РїСѓРЅРєС‚Р° РёР»Рё РІС‹С€РµСЃС‚РѕСЏС‰РµРµ Р°РґРјРёРЅРёСЃС‚СЂР°С‚РёРІРЅРѕ-С‚РµСЂСЂРёС‚РѕСЂРёР°Р»СЊРЅРѕРµ РѕР±СЂР°Р·РѕРІР°РЅРёРµ.
                      firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                      // РџРѕР»СѓС‡Р°РµРј РїСѓС‚СЊ РґРѕ С‚РѕРїРѕРЅРёРјР°, РµСЃР»Рё РјРµС‚РѕРґ РІРµСЂРЅСѓР» null, Р·Р°РїСЂР°С€РёРІР°РµРј РЅР°РёРјРµРЅРѕРІР°РЅРёРµ Р·РґР°РЅРёСЏ.
                      firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                  ].filter(Boolean).join(', '),
                  // Р’ РєР°С‡РµСЃС‚РІРµ РєРѕРЅС‚РµРЅС‚Р° Р±Р°Р»СѓРЅР° Р·Р°РґР°РµРј СЃС‚СЂРѕРєСѓ СЃ Р°РґСЂРµСЃРѕРј РѕР±СЉРµРєС‚Р°.
                  balloonContent: firstGeoObject.getAddressLine()
              });
      });
  }

  // get adress
  $(".modal-foot__btn--select").on('click', function(e){
    e.preventDefault();
    $("#" + $(this).data("selected")).val(infowindowSearcher)
    $(this).closest(".modal-map").removeClass("js-modal-map-open")
    $("body").removeClass("js-modal-map-open");
    $(".modal-map-wrap.modal-map-employer").removeClass("js-modal-map-open");
  })

  // cancel
  $(".modal-foot__btn--cancel").on('click', function(e){
    e.preventDefault();
    $(this).closest(".modal-map").removeClass("js-modal-map-open")
    $("body").removeClass("js-modal-map-open");
    $(".modal-map-wrap.modal-map-employer").removeClass("js-modal-map-open");
  })




})();
        
});	
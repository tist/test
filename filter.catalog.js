$(function () {
    var prev_good = '';
    var count = 0;
$(document).on('click', '.addToCartLink', function(e) {
    var id_cart_mes = $(this).attr('data-gid'); 
    var count_cart = $(this).attr('data-count');
    count++;
    	$.ajax({
                url: "/api/cart_api/getformessage/",
                data: {
				id_cart_mes: id_cart_mes
                },
                dataType: 'json',
                success: function(response){

					var outHtml = '';
			
				var title = response['pagetitle'];
				var price = response['price'];
                    var img = response['img'];
                outHtml = '<div class="tb__incart__item"><div class="tb__catalog__item__price__cur tb__incart-popup__price"><span class="tb__catalog__item__price__text">'+price+'</span><span class="tb__catalog__item__price__currency">руб.</span></div><div class="tb__incart-popup__content__name"><img class="popupContPic" src="'+img+'" alt="">'+title+'</div></div>'
				 var empty_cart = $('.tb__cart-page__empty').text();

				$('.tb__incart-popup__now .tb__incart-popup__content').html(outHtml);
				 if(empty_cart == 'Корзина товаров пуста'){
                     $('.tb__incart-popup__content_in').html('');
				 //$('.tb__incart-popup__cur .tb__incart-popup__content').html(outHtml);
				 }else{
                     if(count>1){
                        $('.tb__incart-popup__cur .tb__incart-popup__content').append(prev_good);
                     }
				 //$('.tb__incart-popup__cur .tb__incart-popup__content').append(outHtml);
				 }

                     prev_good = outHtml;
					}
            }); 

	   	
/*
		var len = data.length;
		var outHtml = '';
			for(var i = 0; i < len; i += 1){
				var title = data[i]['pagetitle'];
				var price = data[i]['price'];
                outHtml += '<div class="tb__incart__item"><div class="tb__catalog__item__price__cur tb__incart-popup__price"><span class="tb__catalog__item__price__text"><script>document.write(priceFormat("'+price+'"));</script></span><span class="tb__catalog__item__price__currency">руб.</span></div><div class="tb__incart-popup__content__name">'+title+'</div></div>'
				
			}
			$('.tb__incart-popup__cur .tb__incart-popup__content').html(outHtml);
			console.log(outHtml);
*/

})

/* $('.addToCartLink').on('click', function(e) {
	var title_now = $(this).prev().children();
	console.log(title_now);
}) */

})
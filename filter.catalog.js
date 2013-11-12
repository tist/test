var filter_array = {};
$(function(){

   
})
    function CheckBox(keys,values){
        values = values.split(',');
       // console.log(values);
//var url = window.location.hash.substring(1);
        $('.tb__filter-type').each(function(){
            if($(this).attr('data-ft') == keys){
                $(this).find('input').each(function(){
                    var checks = $.inArray($(this).attr('data-prop'), values);
                    if(checks >= 0){
                        $(this).attr('checked', true);
                        $(this).attr('checked', true);
                        $(this).attr('checked', true);
                        $(this).attr('checked', true); $(this).attr('checked', true);
                        $(this).attr('checked', true);


                    }


                })
            }

        })
        //console.log(keys);
        //console.log(values);
    }


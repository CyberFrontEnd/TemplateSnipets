$('#more').click(function(e) {
    $('#more ').text(function(_,txt) {
        var ret='';

        if ( txt == 'Подробнее..' ) {
           ret = 'Свернуть';
        }else{
           ret = 'Подробнее..';
        }
        return ret;
    });
    return false;
    e.preventDefault();
});



  $('#more').on( "click", function(e) {
     $('.down-block').slideToggle("slow");
     e.preventDefault();
   });
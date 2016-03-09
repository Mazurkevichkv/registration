$(document).ready(function(){
    /*выгрузка стран*/
    $(function getCountries(){
        $.getJSON('../json/countries.json', function(data){
           $.each(data, function(key,val){
                $('#countries').append('<option id="'+key+'">'+val+'</option>')
           });  
        });  
    }); 
    /*выгрузка городов*/
    getCities = function(){
        $('#cities').removeAttr('disabled');
        $('#cities').empty();
        $('#cities').append('<option disabled selected hidden val="">Город</option>');
          $.getJSON('/json/cities.json', function(data){
           $.each(data, function(key,city){
               if(city.country==$('#countries option:selected').attr("id"))
                  $('#cities').append('<option val="'+key+'">'+city.name+'</option>');});
          });
    }
   $('#countries').change(getCities); 
})
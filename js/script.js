$(document).ready(function(){

    //  Show/Hide basket-show

    $('.basket-bonus__basket').on('mousemove', function(){
        $('.basket-bonus__basket-show').show();
    });
    $('.basket-bonus__basket-show').on('mousemove', function(){
        $('.basket-bonus__basket-show').show();
    });

    $('.basket-bonus__basket-show').on('mouseleave', function(){
        $('.basket-bonus__basket-show').hide();
    });

    $('.basket-bonus__basket').on('mouseleave', function(){
        $('.basket-bonus__basket-show').hide();
    });

    //  Show/Hide bonus-show

    $('.basket-bonus__bonus').on('mousemove', function(){
        $('.basket-bonus__bonus-show').show();
    });

    $('.basket-bonus__bonus-show').on('mousemove', function(){
        $('.basket-bonus__bonus-show').show();
    });

    $('.basket-bonus__bonus-show').on('mouseleave', function(){
        $('.basket-bonus__bonus-show').hide();
    });
 
    $('.basket-bonus__bonus').on('mouseleave', function(){
        $('.basket-bonus__bonus-show').hide();
    });

});
// JavaScript Document

// ##################################################################################################
// Responsive Navbar
// ##################################################################################################

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*To Improve:
        -Add Icon for Mobile Menu to see the list subpoints
        -In Mobile Menu when subpoints are focused add icon to get back to main Menü
        - width calculation should be dynamic without a fixed value 
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



$(document).ready(function () {


    //NAVBAR Hover Effekt *************************************************************       
    
    $('nav li').mouseover(function () {
        console.log('mouse');
        $(this).addClass('hover_li');

    });
    $('nav li').mouseleave(function () {
        console.log('out ');
        $(this).removeClass('hover_li');

    });
    

    // NAVBAR down Elements Slide down/ up Effekt *************************************************************       

    $('nav ul li').stop().hover( //stop() dient dazu einen Effekt einmal voll abzuarbeiten bevor er erneut gestartet wird
        function (e) {
            if((($('ul.first_level').children('li').length) * 151) > $(window).width()){
                $('ul.first_level li ul').css('display', 'block');
            }else{
                $(this).children('ul').stop().slideDown(500)
            }
        },
        function (e) {
            $(this).children('ul').stop().slideUp(500)
            if((($('ul.first_level').children('li').length) * 151) > $(window).width()){
                $('ul.first_level li ul').css('display', 'block');
            }else{
                $(this).children('ul').stop().slideUp(500)            
                };

        }
    );

    //Mobile NAVBAR ICON Slide down/ up Effekt *************************************************************       
    var status = false;
    $('#nav_icons').stop().click(function (e) {
        if (!status) {
            $('.icon_menu').stop().animate({top: '100px'}, 500);
            $('.icon_cancel').stop().animate({top: '0px'}, 500);
            $('ul.first_level').css('left','0');
            $('ul.first_level').stop().slideDown(500);
            status = true;

                 //Mobile NAVBAR Click on list elements with under points *************************************************************       
                //Add Icon that's obvious that there is an under point ++++++++++++++++++++++++++++++++++++++++++++++++++++
                //remove this icon ++++++++++++++++++++++++++++++++++++++++++++++++++++
                  
                $('ul.first_level li').stop().click(function(e){
                    if($(this).children('ul')&&(($('ul.first_level').children('li').length) * 151) > $(window).width()){
                        $('ul.first_level').stop().animate({left: '-100%'}, 500);
                        //Add Icon to get back to the main menu ++++++++++++++++++++++++++++++++++++++++++++++++++++

                    }
                });
        } else {
            $('.icon_menu').stop().animate({top: '0px'}, 500);
            $('.icon_cancel').stop().animate({top: '-50px'}, 500);
            $('ul.first_level').stop().slideUp(500);
            status = false;
        }
    })

        
    //NAVBAR Responsive *************************************************************       

    function responsive() {
        if ((($('ul.first_level').children('li').length) * 151) > $(window).width()) {
            $('#nav_icons').css('display', 'block');
            $('ul.first_level').css('display', 'none');
            $('ul.first_level').css('width', '100%');
            $('ul.first_level').css('position', 'absolute');
            $('ul.first_level').css('top', '51px');

                $('ul.first_level li').addClass('mobile_nav_li');
                
                    $('ul.first_level li ul').css('left', '100%');
                    $('ul.first_level li ul').css('top', '0px');
                    $('ul.first_level li ul').css('width', '100%');

        } else {
            $('ul.first_level').css('left', '0');
            $('#nav_icons').css('display', 'none');
            $('ul.first_level').css('display', 'block');
            $('ul.first_level').css('width', 'auto');
            $('ul.first_level').css('background-color', 'none');
            $('ul.first_level').css('position', 'relative');
            $('ul.first_level').css('top', 'auto');

                $('ul.first_level li').addClass('wide_nav_li');
                $('ul.first_level li').removeClass('mobile_nav_li');
                
                    $('ul.first_level li ul').css('left', '0');
                    $('ul.first_level li ul').css('top', '50px');
                    $('ul.first_level li ul').css('width', 'auto');
                    $('ul.first_level li ul').css('display', 'none');
        }

    }

    responsive();
    $(window).resize(function () {
        responsive();
    })

    

});
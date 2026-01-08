

function gnbAction(){
    let winW = $(window).width()   //window = 한화면, document = 전체화면
    
    $('.gnb li').off();   // 기존이벤트 제거
    
    if(winW > 768){
        $('.gnb li').mouseover(function(){
            $(this).children('.lnb').stop().slideDown(200);
        });

        $('.gnb li').mouseout(function(){
            $('.lnb').stop().slideUp(200);
        });
    } else {
        $('.gnb li').click(function(){
            $('.lnb').slideUp();
            $(this).children('.lnb').stop().slideToggle(200);
        });
    }
}

gnbAction()   //새로고침할때 실행

$(window).resize(function(){    //창사이즈조절할때마다 실행
    gnbAction()
})








$('.hamburger').click(function(){
    $('.hamburger').toggleClass('on')
    $('header nav').toggleClass('on')
})




$('.smallimg li').mouseenter(function(){
    let h3Text = $(this).find('.textinfo').html();
    let smallImg = $(this).find('img').attr('src')
    $('.bigimg .textinfo').html(h3Text);
    $('.bigimg .btn_play').hide();
    $('.bigimg .bigimg1').attr('src',smallImg);
    $('.bigimg .bigimg2 img').attr('src',smallImg);
});


$('.btn_top').click(function(){
    $('html').animate({scrollTop:0}, 1000)
});


$('.floating_menu a').click(function(){
    $('.floating_menu a').removeClass('on')
    $(this).addClass('on')


})

// $('.floating_menu a').eq(0).click(function(){
//     let s1Top = $('#section1').offset().top
//     $('html').animate({scrollTop:s1Top})
// })

// $('.floating_menu a').eq(1).click(function(){
//     let s2Top = $('#section2').offset().top
//     $('html').animate({scrollTop:s2Top})
// })

$('.floating_menu a').click(function(){
    let aIndex = $(this).index()+1;  //1,2,3
    // let sTop = $('#section'+aIndex).offset().top;
    let sTop = $(`#section${aIndex}`).offset().top;
    $('html').animate({scrollTop:sTop});
})
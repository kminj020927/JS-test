
/*
  버튼0 누르면
  - 모든버튼에 붙은 orange 클래스명 제거
  - 버튼0에 orange 클래스명 추가
  - 모든 div에 붙은 show 클래스명 제거
  - div에 show 클래스명 추가
*/

//많이 쓸 경우 변수에 담아둠
var 버튼 = $('.tab-button');

for(let i =0; i < $('.tab-button').length ;i++){
  
  $('.tab-button').eq(i).on('click',function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('tab-content').removeClass('show');
    $('tab-content').eq(i).addClass('show');

});
}

// $('.tab-button').eq(0).on('click',function(){
//   $('.tab-button').removeClass('orange');
//   $('.tab-button').eq(0).addClass('orange');
//   $('tab-content').removeClass('show');
//   $('tab-content').eq(0).addClass('show');

// });
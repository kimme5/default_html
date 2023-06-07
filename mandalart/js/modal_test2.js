$('.modals').click(function () {
  $('.black-bg').fadeIn();
}); //로그인버튼을 누르면 모달창 생성
$('.btn-danger').click(function () {
  $('.black-bg').fadeOut(); //닫기를 누르면 모달창 사라짐
});

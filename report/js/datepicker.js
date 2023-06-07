$(function () {
  $('#datePicker')
    .datepicker({
      format: 'yyyy-mm-dd',
      autoclose: true,
      daysOfWeekDisabled: [0, 6],
      immediateUpdates: false,
      multidate: false,
      multidateSeparator: ',',
      // 다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징
      templates: {
        leftArrow: '&laquo;',
        rightArrow: '&raquo;',
      },
      // 위에 요일 보여주는 옵션 기본값 : true
      // showWeekDays: true,
      //캘린더 상단에 보여주는 타이틀
      // title: '테스트',
      //오늘 날짜에 하이라이팅 기능 기본값 :false
      todayHighlight: true,
      //이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
      toggleActive: true,
      //달력 시작 요일 선택하는 것 기본값은 0인 일요일
      weekStart: 0,
      //달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
      // language: 'ko',
    }) //datepicker end
    .on('changeDate', function (e) {
      //이벤트의 종류
      //show : datePicker가 보이는 순간 호출
      //hide : datePicker가 숨겨지는 순간 호출
      //clearDate: clear 버튼 누르면 호출
      //changeDate : 사용자가 클릭해서 날짜가 변경되면 호출 (개인적으로 가장 많이 사용함)
      //changeMonth : 월이 변경되면 호출
      //changeYear : 년이 변경되는 호출
      //changeCentury : 한 세기가 변경되면 호출 ex) 20세기에서 21세기가 되는 순간

      console.log(e); // 찍어보면 event 객체가 나온다.
      //간혹 e 객체에서 date 를 추출해야 하는 경우가 있는데
      // e.date를 찍어보면 Thu Jun 27 2019 00:00:00 GMT+0900 (한국 표준시)
      // 위와 같은 형태로 보인다.
      // 추후에 yyyy-mm-dd 형태로 변경하는 코드를 업로드 하겠습니다.
    })
    .on('click', function (e) {
      var date = $('#datedatePicker').val();
      // alert(date);
    });

  const getDatePickerTitle = (elem) => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
      titleText = label.textContent;
    } else {
      titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
  };

  const elems = document.querySelectorAll('.datepicker_input');
  for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
      format: 'dd/mm/yyyy', // UK format
      title: getDatePickerTitle(elem),
    });
  }
}); //ready end

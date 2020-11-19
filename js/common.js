function deviceSizeCheck(pcSize) {
  $(window).on('resize', function () {
    // 브라우저 사이즈가 늘었다 줄었다 했을때 {}안에 함수를 실행해라
    // pc:721~  mobile:720
    var root = $('html');
    var w = $(this).innerWidth();
    root.removeClass('pc mobile');
    if (w >= pcSize) {
      root.addClass('pc');
    } else {
      root.addClass('mobile');
    }
  });
  $(window).resize();
  // 처음 시작하자마자 resize시작하라는 강제 이벤트 발생시키는 것
}
// 다른곳에서 사용 시,pc버전 사이즈 : number값으로 넣기 721대신
deviceSizeCheck(721);

$(function () {
  //gnbMenuFnc($('#gnb'));
  $('.main-slide-banner').bxSlider();
});
// 문서객체 다 불러온 뒤에, 불러와야하므로 $(function)써줘야함

//자바스크립트 버전 'a태그'만 선택
function gnbMenuFnc2(element) {
  // console.log(element);
  var menuList1 = element.children;
  var hoverMenu = null;

  for (var i = 0; i < menuList1.length; i++) {
    // console.log(menuList1[i].children[0]);
    menuList1[i].children[0].addEventListener('mouseover', gnbMenuHandler1);
    menuList1[i].children[0].addEventListener('click', gnbMenuHandler2);
  }

  // pc or mobile에서 서브메뉴 클릭 시 서브메뉴가 펼쳐지는 효과
  function gnbMenuHandler1() {
    // console.log(document.querySelector('html').className);
    if (document.querySelector('html').className == 'pc') {
      // console.log(this);
      if (hoverMenu != null) hoverMenu.classList.remove('on');
      this.classList.add('on');
      hoverMenu = this;
    }
  }
  function gnbMenuHandler2() {
    if (document.querySelector('html').className == 'mobile') {
      this.classList.toggle('on');
      if (this.className.indexOf('on') >= 0) {
        hoverMenu = this;
      } else {
        hoverMenu = null;
      }
    }
  }
  element.addEventListener('mouseleave', function () {
    if (hoverMenu != null) hoverMenu.classList.remove('on');
    hoverMenu = null;
  });
}
window.addEventListener('load', function () {
  gnbMenuFnc2(document.querySelector('#gnb'));
});

// function gnbMenuFnc(element) {
//   var gnbEl = element;
//   var root = $('html');
//   var menuList1 = gnbEl.find('>li>a');
//   // #gnb의 a요소를 찾아라, find함수 사용
//   // pc버전 마우스오버 이벤트
//   menuList1.on('mouseover', gnbMenuHandler1);
//   menuList1.on('click', gnbMenuHandler2);
//   gnbEl.on('mouseleave', gnbMouseleaveHandler);
//   var hoverMenu = null;

//   function gnbMouseleaveHandler() {
//     if (hoverMenu != null) hoverMenu.removeClass('on');
//   }

//   function showSub(ts1) {
//     ts1.addClass('on');
//   }

//   // ------------------------pc버전 hover 시, 마우스 이동에 따라 보이고 삭제되는 것
//   function gnbMenuHandler1() {
//     if (root.hasClass('pc')) {
//       // console.log('pc');
//       // this - 마우스를 올린 a요소
//       if (hoverMenu != null) hoverMenu.removeClass('on');
//       showSub($(this));
//       hoverMenu = $(this);
//       // gnb메뉴에 서브메뉴가 그 다음 메뉴 클릭시 삭제되고 그 다음 서브메뉴 담는것
//       //  삭제하고 담아야 됨
//     }
//   }
//   function gnbMenuHandler2() {
//     if (root.hasClass('mobile')) {
//       // 마우스로 올린 a요소에 on클래스가 있으면 삭제
//       if ($(this).hasClass('on')) {
//         $(this).removeClass('on');
//       } else {
//         //추가
//         showSub($(this));
//       }

//       // $(this).addClass('on');
//       // this - 마우스를 올린 a요소
//     }
//   }
//   // console.log(gnbEl);
// }
// $(function () {
//   gnbMenuFnc($('#gnb'));
//   $('.main-slide-banner').bxSlider();
// });
// 문서객체 다 불러온 뒤에, 불러와야하므로 $(function)써줘야함

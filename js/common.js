function deviceSizeCheck(pcSize) {
  $(window).on('resize', function () {
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
}
deviceSizeCheck(721);

$(function () {
  $('.main-slide-banner').bxSlider();
});

function gnbMenuFnc2(element) {
  var menuList1 = element.children;
  var hoverMenu = null;

  for (var i = 0; i < menuList1.length; i++) {
    menuList1[i].children[0].addEventListener('mouseover', gnbMenuHandler1);
    menuList1[i].children[0].addEventListener('click', gnbMenuHandler2);
  }
  function gnbMenuHandler1() {
    if (document.querySelector('html').className == 'pc') {
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

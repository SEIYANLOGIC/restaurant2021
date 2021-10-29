//hunberger-menu 用のjQuery
$(function(){
//ハンバーガーの開閉関数の変数定義
  var mobile_menu__btn = $('.mobile-menu__btn');
  // var nav =$('.header__nav');
  var mobile_menu =$('.mobile-menu');
  var mobile_menu__cover = $('.mobile-menu__cover');
  var mobile_menu__li = $('.mobile-menu__li');
//ハンバーガーの開閉関数の変数定義ここまで

//ハンバーガーの開閉関数
mobile_menu__btn.on('click',function(){
  mobile_menu.slideToggle();
      mobile_menu__btn.toggleClass('active');
      mobile_menu__cover.toggleClass('active');

      //nav以外をタップした時
      if(mobile_menu__btn.hasClass('active')){
        mobile_menu__cover.on('click',function(){
            mobile_menu__btn.removeClass('active');
            mobile_menu__cover.removeClass('active');
              mobile_menu.slideUp();
          });
      //menuのliリストをクリックした時
        mobile_menu__li.on('click',function(){
          mobile_menu__btn.removeClass('active');
          mobile_menu__cover.removeClass('active');
            mobile_menu.slideUp();
        });
      }
  });
  //ハンバーガーの開閉関数閉じタグ

  //functionの閉じタグ
});
//hunberger-menu 用のjQuery　はここまで

//modalのjavascript
const buttonOpen = document.getElementById('modalOpen');
const modal = document.getElementById('easyModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

//ボタンがクリックされた時
buttonOpen.addEventListener('click', modalOpen);
function modalOpen() {
  modal.style.display = 'block';
};

//バツ印がクリックされた時
buttonClose.addEventListener('click', modalClose);
function modalClose() {
  modal.style.display = 'none';
};

//モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  };
};
//modalのjavascriptはここまで
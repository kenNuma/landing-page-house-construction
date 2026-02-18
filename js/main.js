$(function () {

  //ハンバーガーメニュー
  $(".hunberger").on("click", function () {
    if ($("header").hasClass("open")) {
      $("header").removeClass("open");
    } else {
      $("header").addClass("open");
    }
  });

  // メニューが表示されている時に画面をクリックした場合
  $("#mask").on("click", function () {

    $("header").removeClass("open");
  });
  let pagetop = $(".top-btn");
  // 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
  pagetop.hide();

  // スクロールイベント（スクロールされた際に実行）
  $(window).scroll(function () {
    if ($(window).scrollTop() > 700) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });

  // クリックイベント（ボタンがクリックされた際に実行）
    pagetop.click(function () {
    $("body,html").animate({ scrollTop: 500 }, );

    return false;
  });
});

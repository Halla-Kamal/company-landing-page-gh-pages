// convert navbar color when hight more than 500
$(window).scroll(function () {
  if ($(this).scrollTop() >= 50) {
    $("#navBar").addClass("noTransparrent");
  } else {
    $("#navBar").removeClass("noTransparrent");
  }
});

//scroll تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة
$(document).ready(function () {
  $("a.scroll").on('click', function (event) {

    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top - 37
    }, 800, function () {});

  });

  $('.timer').countTo();
});

// valivation form
$(document).ready(function () {
  $(function () {
    $("#commentForm").validate();
  });
});


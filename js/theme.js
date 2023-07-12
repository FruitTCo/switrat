!(function ($) {
  "use strict";
  var a = window.location.href.substr(
    window.location.href.lastIndexOf("https://switrat.com/") + 1
  );
  $(".navbar-nav > li  a").each(function () {
    ($(this).attr("href") == a || "" == $(this).attr("href")) &&
      $(this).addClass("active");
  }),
    $(".lazy-img").length &&
      $(".lazy-img").Lazy({ effect: "fadeIn", threshold: 300 }),
    $(".counter").length && $(".counter").counterUp({ delay: 10, time: 1200 }),
    $(window).on("scroll", function () {
      var a = $(".sticky-menu");
      $(window).scrollTop() >= 100
        ? a.addClass("fixed")
        : a.removeClass("fixed");
    }),
    $(window).on("scroll", function () {
      $(this).scrollTop() > 200
        ? $(".scroll-top").fadeIn()
        : $(".scroll-top").fadeOut();
    }),
    $(".scroll-top").on("click", function () {
      return $("html, body").animate({ scrollTop: 0 }), !1;
    }),
    $("input,textarea").each(function () {
      $(this).data("holder", $(this).attr("placeholder")),
        $(this).on("focusin", function () {
          $(this).attr("placeholder", "");
        }),
        $(this).on("focusout", function () {
          $(this).attr("placeholder", $(this).data("holder"));
        });
    }),
    $(".nice-select").length && $(".nice-select").niceSelect(),
    $(".feedback_slider_one").length &&
      $(".feedback_slider_one").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_f1"),
        nextArrow: $(".next_f1"),
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: !0,
        centerMode: !0,
        autoplaySpeed: 3e3,
        responsive: [{ breakpoint: 992, settings: { slidesToShow: 1 } }],
      }),
    $(".feedback_slider_two").length &&
      $(".feedback_slider_two").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_f2"),
        nextArrow: $(".next_f2"),
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
      }),
    $(".feedback_slider_three").length &&
      $(".feedback_slider_three").slick({
        dots: !0,
        arrows: !1,
        centerPadding: "0px",
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 3 } },
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".feedback_slider_four").length &&
      $(".feedback_slider_four").slick({
        centerPadding: "0px",
        arrows: !1,
        dots: !0,
        slidesToShow: 3,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 1e3, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".feedback_slider_five").length &&
      $(".feedback_slider_five").slick({
        centerPadding: "0px",
        arrows: !0,
        prevArrow: $(".prev_f2"),
        nextArrow: $(".next_f2"),
        dots: !1,
        slidesToShow: 4,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".feedback_slider_six").length &&
      $(".feedback_slider_six").slick({
        dots: !1,
        arrows: !0,
        prevArrow: $(".prev_s2"),
        nextArrow: $(".next_s2"),
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
      }),
    $(".feedback_slider_seven").length &&
      $(".feedback_slider_seven").slick({
        centerPadding: "0px",
        arrows: !1,
        dots: !0,
        slidesToShow: 3,
        centerMode: !0,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
      }),
    $(".feedback_slider_nine").length &&
      $(".feedback_slider_nine").slick({
        centerPadding: "0px",
        arrows: !1,
        dots: !0,
        slidesToShow: 2,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
      }),
    $(".feedback_slider_ten").length &&
      $(".feedback_slider_ten").slick({
        centerPadding: "0px",
        arrows: !0,
        prevArrow: $(".prev_f5"),
        nextArrow: $(".next_f5"),
        dots: !1,
        slidesToShow: 3,
        autoplay: !0,
        autoplaySpeed: 3500,
        responsive: [
          { breakpoint: 1200, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".feedback_slider_eleven").length &&
      $(".feedback_slider_eleven").slick({
        centerPadding: "0px",
        arrows: !1,
        dots: !0,
        slidesToShow: 1,
        autoplay: !0,
        autoplaySpeed: 3500,
      }),
    $(".partner_slider_one").length &&
      $(".partner_slider_one").slick({
        centerPadding: "0px",
        arrows: !1,
        dots: !1,
        slidesToShow: 5,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 4 } },
          { breakpoint: 768, settings: { slidesToShow: 3 } },
          { breakpoint: 576, settings: { slidesToShow: 2 } },
        ],
      }),
    $(".course_slider_one").length &&
      $(".course_slider_one").slick({
        centerPadding: "0px",
        arrows: !0,
        prevArrow: $(".prev_cs1"),
        nextArrow: $(".next_cs1"),
        dots: !1,
        slidesToShow: 4,
        autoplay: !0,
        autoplaySpeed: 3e3,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 2 } },
          { breakpoint: 576, settings: { slidesToShow: 1 } },
        ],
      }),
    $(".circle_percent").length &&
      $(".circle_percent").each(function () {
        var a = $(this),
          b = a.data("percent"),
          d = 3.6 * b,
          c = a.find(".round_per");
        c.css("transform", "rotate(" + parseInt(d + 180) + "deg)"),
          a.append(
            '<div class="circle_inbox"><span class="percent_text"></span></div>'
          ),
          a.prop("Counter", 0).animate(
            { Counter: b },
            {
              duration: 2e3,
              easing: "swing",
              step: function (b) {
                a.find(".percent_text").text(Math.ceil(b) + "%");
              },
            }
          ),
          b >= 51 &&
            (c.css("transform", "rotate(360deg)"),
            setTimeout(function () {
              a.addClass("percent_more");
            }, 1e3),
            setTimeout(function () {
              c.css("transform", "rotate(" + parseInt(d + 180) + "deg)");
            }, 1e3));
      }),
    $(".user-data-form").length &&
      $(".passVicon").on("click", function () {
        $(".passVicon").toggleClass("eye-slash");
        var a = $(".pass_log_id");
        "password" === a.attr("type")
          ? a.attr("type", "text")
          : a.attr("type", "password");
      }),
    $("#one-page-nav .nav-link").on("click", function () {
      $(".navbar-collapse").removeClass("show"),
        $(".navbar-toggler").attr("aria-expanded", "false");
    }),
    $("#contact-form").length &&
      ($("#contact-form").validator(),
      $("#contact-form").on("submit", function (a) {
        if (!a.isDefaultPrevented()) {
          var b = "inc/contact.html";
          return (
            $.ajax({
              type: "POST",
              url: b,
              data: $(this).serialize(),
              success: function (a) {
                var b = "alert-" + a.type,
                  c = a.message,
                  d =
                    '<div class="alert ' +
                    b +
                    ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
                    c +
                    "</div>";
                b &&
                  c &&
                  ($("#contact-form").find(".messages").html(d),
                  $("#contact-form")[0].reset());
              },
            }),
            !1
          );
        }
      })),
    $(window).on("load", function () {
      $("#ctn-preloader").fadeOut(),
        $("#preloader").delay(350).fadeOut("slow"),
        $("body").delay(350).css({ overflow: "visible" }),
        new WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
        }).init();
      var a = $(".fancybox");
      if (
        (a.length &&
          a.fancybox({
            arrows: !0,
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          }),
        $("#isotop-gallery-wrapper").length)
      ) {
        var b = $("#isotop-gallery-wrapper").isotope({
          itemSelector: ".isotop-item",
          percentPosition: !0,
          masonry: { columnWidth: ".grid-sizer" },
        });
        $(".isotop-menu-wrapper").on("click", "li", function () {
          var a = $(this).attr("data-filter");
          b.isotope({ filter: a });
        }),
          $(".isotop-menu-wrapper").each(function (c, a) {
            var b = $(a);
            b.on("click", "li", function () {
              b.find(".is-checked").removeClass("is-checked"),
                $(this).addClass("is-checked");
            });
          });
      }
    });
})(jQuery);

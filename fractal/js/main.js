$(document).ready(function () {
    // bootstrap dropdown-menu
    $(".dropdown-menu a").on('click', function (e) {
        e.preventDefault();
        var selText = $(this).text();
        $(this).parents('.dropdown').find('.dropdown-toggle span').html(selText);
    });

    // faq accordion
    $('.faq-list li').on('click', function () {
        $(this).toggleClass('active');
        $(this).find('.faq-answer-container').slideToggle();
    });

    $('.faq-list li a').on('click', function (e) {
       e.preventDefault();
    });

    // bootstrap select
    $('.selectpicker').selectpicker();

    // mobile menu
    $('.menu-button').on('click', function (e) {
        e.preventDefault();
        $('.nav-wrapper').toggleClass('active');
        $(this).closest('html').toggleClass('overflow-hidden-class');
    });

    // bootstrap datepicker
    $('#datetimepicker6').datetimepicker({
        format: 'MM/DD/YYYY'
    });

    $('#datetimepicker7').datetimepicker({
        format: 'MM/DD/YYYY',
        useCurrent: false //Important! See issue #1075
    });

    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });

    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });

    // admin toggle block
    $('.admin-info-row-click').on('click', function (e) {
        if (!$(e.target).attr('href')) {
            $(this).closest('.admin-info-row-wrapper').find('.admin-info-row-hide').slideToggle();
        }
    });
});

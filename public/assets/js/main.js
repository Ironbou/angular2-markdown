window.onload = function () {
    $(".button-collapse").sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    var el = document.querySelector('.custom-scrollbar');
    Ps.initialize(el);
    new WOW().init();
	$(function () {
  	    $('[data-toggle="tooltip"]').tooltip();
	})
	$('.datepicker').pickadate();
}
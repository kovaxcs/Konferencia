$(document).ready(function() {
	$("#main").css( "display", "block" );
	
	function showtext(id){
  		$("a", "#menus").removeClass("active");
		$("#m_"+id).addClass("active");
		$(".container").css( "display", "none" );
		$("#main").css( "display", "none" );
		$("#"+id+"_text").css( "display", "block" );	
	}
	
	$("#m_koszonto").click(function () {
		showtext("koszonto");
	});
	$("#m_regisztracio").click(function () {
		showtext("regisztracio");
	});
	$("#m_celcsoport").click(function () {
		showtext("celcsoport");
	});
	$("#m_tanulmany").click(function () {
		showtext("tanulmany");
	});
	$("#m_gyik").click(function () {
		showtext("gyik");
	});
	$("#m_hataridok").click(function () {
		showtext("hataridok");
	});
	$("#m_reszveteli").click(function () {
		showtext("reszveteli");
	});
	$("#m_program").click(function () {
		showtext("program");
	});
	$("#m_kapcsolat").click(function () {
		showtext("kapcsolat");
	});
	$("#m_szervezoi").click(function () {
		showtext("szervezoi");
	});
	$("#nyil").click(function () {
		$("#intro").animate({left:"-2000"},"slow");
		$("#intro_text").animate({left:"-2000"},"slow");
		$("#nyil").animate({left:"-2000"},"slow");
	});
	
});
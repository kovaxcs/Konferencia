$(document).ready(function() {
    $("#koszonto").click(function () {
		$("#container").css( "display", "none" );
		$("#content").css( "display", "block" );
	});
	$("#m_koszonto").click(function () {
		$("#container").css( "display", "block" );
		$("#content").css( "display", "none" );
	});
});

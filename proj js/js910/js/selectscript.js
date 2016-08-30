$(document).ready(function() {
	$("select").searchable();
});

$(document).ready(function() {
	$("#value").html($("#myselect :selected").text() + " (VALUE: " + $("#myselect").val() + ")");
	$("select").change(function(){
		$("#value").html(this.options[this.selectedIndex].text + " (VALUE: " + this.value + ")");
	});
});

$(document).ready(function(){
	$(".addPin").click(function(){
		console.log("button clicked");
		if ($(".addPin").attr("id") === "pinDisabled"){
			$(".addPin").attr("id", "pinEnabled");
		}else{
			$(".addPin").attr("id","pinDisabled");
		}
	});
});
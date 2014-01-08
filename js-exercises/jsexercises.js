// Exercise 1: There's a syntax error in the file. Try using the debugger to find it. (Even if you see it, trying catching it in the debugger)
var octopus_name = "Takoyaki";
console.log(octopus_name);

$(document).ready(function() {
  // Make all invisible elements visible again :)
  $(".invisible").removeClass("invisible");

  // Exercise 2 solution	
	
$(".block").hover(function(){
	$(this).addClass("glow");
}, function(){
	$(this).removeClass("glow");
});

  // Exercise 3 solution

$("#sendChat").click(function(){
	var name = $("#name").val();
	var message = $("#message").val();
	if(name !== "" && message !== ""){
		var text = "<li>" + name + ": " + message;
		$("#message_list").append(text);
		$("#name").val("");
		$("#message").val("");
	}	
})

});

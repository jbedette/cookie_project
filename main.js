Cookies.set("Snack", "Goldfish");

console.log( Cookies.get("Snack"));

$(document).ready(function() {
	
	$(".submit").on("click", function(){	
		var data = $(".name").val();
		Cookies.set("test", data);
		console.log( Cookies.get("test"));
	});

	$(".anim").ready(function(){
		boxBigger();
		console.log("hi");
		if (Cookies.get("test", true)) {
			$(".anim").stop();
			console.log("16.f.cali");
		};
		});
	$(".clear").click(function(e){
		e.preventDefault();
		Cookies.expire("test");
		
	});
});

// var boxBigger = function(){$(".anim").first().
// 		animate({
// 				opacity:0.25,
// 				// backgroundColor: '#4E1402',
// 				width: "600px",
// 				height: "600px"
// 			}, 4000, "swing", boxSmaller);
// }

// var boxSmaller = function(){$(".anim").first().
// 		animate({
// 				opacity:1,
// 				// backgroundColor: '#4E1402',
// 				width: "50px",
// 				height: "50px"
// 			}, 4000, "swing", boxBigger);
// 	}



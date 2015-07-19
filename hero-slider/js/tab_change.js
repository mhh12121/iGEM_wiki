$(function(){
	var iPage=1;
	$(".test1").click(function(){
		$.ajax({
			type:"post",
			url:"test.php",
			success:function(){
				$(".change_content").html("");

			},
			error:function(){
				$(".change_content").html("fail");
			}

		})
	})
})
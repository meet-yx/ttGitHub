window.onresize = function() {
	changeBodyHeight();
};

window.onload = function() {
	changeBodyHeight();
}

function changeBodyHeight() {
	var windowHeight = $(window).height();
	$("body").css("height", parseInt(windowHeight));
}

//登陆
var shoujihaoma = 123;
var mima = 123;
$("#login_Button").click(function() {
	$("#login_Button").attr("data-toggle", "");
		$("#login_Button").attr("data-target", "");
	if($("#inputEmail3").val() == shoujihaoma && $("#inputPassword3").val() == mima) {
		$("#login_Button").attr("href", "index.html");
	} else {
		$("#login_Button").attr("data-toggle", "modal");
		$("#login_Button").attr("data-target", "#myModal2");
		$("#inputEmail3").val("");
		$("#inputPassword3").val("");
	}
});


$("#login_Wangji").click(function() {
	$("#login_Wangji").attr("data-toggle", "modal");
	$("#login_Wangji").attr("data-target", "#myModal");
});

$("#xiugaimima_button").click(function() {
	console.log($("#oneshuru").val());
	console.log($("#twoshuru").val());
	if($("#oneshuru").val() == $("#twoshuru").val() && $("#oneshuru").val() != "" && $("#twoshuru").val() != "" || $(".exampleInputPassword3").val()) {
		mima = $("#oneshuru").val();
		console.log(mima);
		$(".message").text("修改成功！");
		return true;
	} else if($("#oneshuru").val() == "" || $("#twoshuru").val() == "") {
		$(".message").text("信息未填写完整！");
		return false;
	} else {
		$(".message").text("信息填写错误！");
		return false;
	}
});

var countDown ;

$(".sendCode").click(function() {
	var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
	console.log(""+reg.test($(".emailInput").val()));
	if($(".emailInput").val() !== "" && reg.test($(".emailInput").val())){
	var time = 30;
	countDown = setInterval(function() {
		$(".sendCode").text("已发送" + time + "秒后重新发送");
		time--;
		if(time === 0) {
			$(".sendCode").text("重新发送");
			clearInterval(countDown);
		}
	}, 1000);
	$(".checkCode").slideDown();
	$(".message").text("");
	}
	else{
		console.log("enter else");
		$(".message").text("信息填写错误！");
	}
	return false;
});

$(".codeBtn").click(function(){
	if($(".codeInput").val() !== ""){
		$(".changePsw").slideDown();
		$(".message").text("");
		clearInterval(countDown);
		$(".sendCode").text("验证成功").attr("disabled","true");
		$(this).attr("disabled","true");
		
	}else{
		$(".message").text("验证码错误！");
	}
	return false;
});



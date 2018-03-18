/**
 * Created by jcdn on 2017/10/3.
 */

//点击保存新增用户
$(".save").click(function(){

    let add_name=$(".add_username").val();
    let add_pwd=$(".add_userpwd").val();
    if(add_name!="" && add_pwd!=""){
        let this_id;
        if(window.top.userArr.length>0){
            this_id=parseInt(window.top.userArr[window.top.userArr.length-1].id)+1
        }
        else {
            this_id=1
        }
        window.top.userArr.push({id:this_id,userName:add_name,password:add_pwd});
        window.location.href="family.html";
    }else {
        $(".message").text("信息未填写完整！");
    }

});

$(".cancel").click(function(){
    $("input").val("");
    window.location.href="family.html";
});


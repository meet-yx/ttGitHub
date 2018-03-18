/**
 * Created by Administrator on 2017/9/28.
 */
/*============================= 用户管理 ==================================*/
/*
 * 成员id(id)
 * 用户名(userName)
 * 密码(password)
 */

//==========================页面离开时的操作，booksArr 赋值=========
// window.onbeforeunload=function (){
//     var studentAdd = JSON.stringify(studentArg);
//     window.localStorage.setItem("studentAdd",studentAdd);
// };studentAdd
var newObj=new Object();
    var newTr = $(".dataTr").clone(true);
    for(var j = 1 ; j < window.top.userArr.length ; j++){
        var other = newTr.clone();
        $("table").append(other);
}
    var id = $(".no");
    var password=$(".password") ;
    var userName=$(".userName") ;
    var operation=$(".operation") ;

    window.onload = initTable();
    /*=======================显示数据====================*/
function initTable(){
    $(".table td").html("");
    $.each(window.top.userArr,function(i,obj){
        $(password[i]).html(window.top.userArr[i].password);
        $(id[i]).html(window.top.userArr[i].id);
        $(userName[i]).html(window.top.userArr[i].userName);
        if ($(id[i]) != "") {
            $(operation[i]).html(
                "<i class='iconfont btn btnsubmit' sid='"+window.top.userArr[i].id+"' data-toggle='modal' data-target='#myModal'>&#xe74e;</i>" +
                "<i class='iconfont deleteData' sid='"+window.top.userArr[i].id+"'>&#xe69a;</i>"
            );
        }
    });
}
/*========================删除====================*/
$(".operation").on("click",".deleteData",function(){
    let sid=$(this).attr("sid");
    for (let i=0;i<window.top.userArr.length;i++){
        if(window.top.userArr[i].id==sid){
            window.top.userArr.splice(i,1)
        }
    }
    initTable();
    console.log(window.top.userArr,"deleted");
});



/*========================点击修改弹出框====================*/
var this_id;
$(".dataTable").on("click",".btnsubmit",function(){
    let sid=$(this).attr("sid");
    for (let i=0;i<window.top.userArr.length;i++){
        if(window.top.userArr[i].id==sid){
            this_id=i;
            $(".user_name").val(window.top.userArr[i].userName);
            $(".user_pwd").val(window.top.userArr[i].password)
        }
    }

    // window.top.userArr.splice($(this).attr("sid"),1)
    initTable()
});
/*========================点击确认修改====================*/
$("#btnInsert").click(function () {
    window.top.userArr[this_id].userName=$(".user_name").val();
    window.top.userArr[this_id].password=$(".user_pwd").val();
    initTable();
    window.location.href="family.html";
});


//=========================== 添加用户===========================
$("#userAdd").click(function(){
    window.location.href="addFamily.html";
});

/**
 * Created by Administrator on 2017/10/6.
 */

/*============================= 信息管理 ===================================*/
/*
 * 编号（id）
 姓名（perName）
 性别（sex）
 身份证号码（card）
 家庭住址（address）
 联系方式（tel）
 备注（remark）

 */

/*===========生成表格==================*/
var dataLength=window.top.perArr.length;
var newRow=$(".cloneRow").clone();
var b,c,queryTxtArr; //装输入文字的数组
var a=0;
for(var i=1;i<dataLength;i++){
    var another = newRow.clone();
    $(another).appendTo($("table"));
}
/*-=====================获取数据=============*/
var id=$(".id");
var perName=$(".perName");
var sex=$(".sex");
var card=$(".card");
var address=$(".address");
var tel=$(".tel");
var remark=$(".remark");
var operate=$(".operate");
window.onload = initTable();

function initTable() {
    $(".table td").html("");
    $.each(window.top.perArr, function (i,obj) {
        $(id[i]).html(window.top.perArr[i].id);
            $(perName[i]).html(window.top.perArr[i].perName);
            $(sex[i]).html(window.top.perArr[i].sex);
            $(card[i]).html(window.top.perArr[i].card);
            $(address[i]).html(window.top.perArr[i].address);
            $(tel[i]).html(window.top.perArr[i].tel);
            $(remark[i]).html(window.top.perArr[i].remark);
            if ($(id[i]) != "") {
                $(operate[i]).html(
                    "<span class='iconfont btn btnsubmit' data-toggle='modal' data-target='#myModal0' sid='"+obj.id+"' >&#xe74e;</span>" +
                    "<span class='iconfont'  data-toggle='modal' data-target='#myModal' onclick='getRow(this)'>&#xe69a;</span>"
                );
            }

    });
}

/*=======================查询数据======================*/
//var queryList=$(".tx");
$("#queryName").keydown(function (e) {
   if(e.keyCode==13){
       b=$("#queryName").val();
       c=$("#queryType").val();
       queryTxtArr=[b,c];
       a=0;
       $("td").html("");
    search()
   }
});
$("#queryBtn").click(function(){
    b=$("#queryName").val();
    c=$("#queryType").val();
    queryTxtArr=[b,c];
    a=0;
    $("td").html("");//清除表格中的数据
    console.log(queryTxtArr);
    search();
});
function search(){
    $.each(window.top.perArr,function(j,obj){
        if(window.top.perArr[j].card.indexOf(queryTxtArr[0])>=0||queryTxtArr[0]==""){
            if(queryTxtArr[1]==window.top.perArr[j].sex||queryTxtArr[1]==""){
                $(id[a]).html(window.top.perArr[j].id);
                $(perName[a]).html(window.top.perArr[j].perName);
                $(sex[a]).html(window.top.perArr[j].sex);
                $(card[a]).html(window.top.perArr[j].card);
                $(address[a]).html(window.top.perArr[j].address);
                $(tel[a]).html(window.top.perArr[j].tel);
                $(remark[a]).html(window.top.perArr[j].remark);
                if ($(id[a])!="") {
                    $(operate[j]).html(
                        "<span class='iconfont btn btnsubmit' data-toggle='modal' data-target='#myModal0' sid='"+obj.id+"'>&#xe74e;</span>" +
                        "<span class='iconfont okBtn'  data-toggle='modal' data-target='#myModal' onclick='getRow(this)'>&#xe69a;</span>"
                    );
                }
                a++;
            }
        }

    });
}
/*========================删除====================*/
//----获取行号-----
var rowsIndex;
function getRow(r){
    var d=r.parentNode.parentNode.rowIndex-1;
    rowsIndex=d;
    return d;
}
//----删除某一行-----
$(".okBtn").click(function(){
    //console.log(rowsIndex);
    window.top.perArr.splice(rowsIndex,1);
    initTable();
});

/*===================修改数据======================*/
$(".operate").on("click",".btnsubmit",function () {
        let this_id=$(this).attr("sid");
    for(let i=0;i<window.top.perArr.length;i++){
            if (window.top.perArr[i].id==this_id){
                $("#id").val(window.top.perArr[i].id);
                $("#perName").val(window.top.perArr[i].perName);
                $("#sex").val(window.top.perArr[i].sex);
                $("#card").val(window.top.perArr[i].card);
                $("#address").val(window.top.perArr[i].address);
                $("#tel").val(window.top.perArr[i].tel);
                $("#classRemark").val(window.top.perArr[i].classRemark);
            }
    }
});

/*==================新增信息插入===================*/
$("#updateBtn").click(function insertInfo(){
    //根据id获取表单信息
    let this_id=$("#id").val()-1;
    window.top.perArr[this_id].perName=$("#perName").val();
    window.top.perArr[this_id].sex=$("#sex").val();
    window.top.perArr[this_id].card=$("#card").val();
    window.top.perArr[this_id].address=$("#address").val();
    window.top.perArr[this_id].tel=$("#tel").val();
    window.top.perArr[this_id].remark=$("#classRemark").val();
    initTable();
    window.location.href="books.html";
});


//=========================== 添加信息===========================
$("#addPer").click(function(){
    window.location.href="addBooks.html";
});

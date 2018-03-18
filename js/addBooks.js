/**
 * Created by Administrator on 2017/10/7.
 */
var newObj=new Object();
/*================复制节点========================*/
var myClone=$("#selectCurse").clone(true);
$("#addCurse").click(function(){
    $("#selectCurse").append($(myClone).clone(true));
});
/*====================移除节点===================*/
$(".btndelete").click(function(){
    if($(".btndelete").length>1){
        $(this).parent().parent().remove();
    }

});
$(".saveBtn").click(function(){
    //console.log("click");
    if(getInfo()){
        window.location.href="books.html";
    }
});
$("#cancel").click(function(){
    $("input").val("");
    window.location.href="books.html";
});
function getInfo(){
//    根据id获取表单信息
    let perName=$("#perName").val();
    let sex=$("#sex").val();
    let card=$("#card").val();
    let address=$("#address").val();
    let tel=$("#tel").val();
    let remarkLab1=$("#remarkLab1").val();
    if(perName===''||sex===''||card===''||address===''|| tel==''){
        judge=false;
        $(".message").text("信息未填写完整！");
    }else{
        let id;
        if(window.top.perArr.length>0){
            id=parseInt(window.top.perArr[window.top.perArr.length-1].id)+1
        }
        else {
            id=1
        }
        window.top.perArr.push({id:id, perName:perName, sex:sex,
            card:card, address:address, tel:tel, remark:remarkLab1});
        judge=true;
    }
    return judge;
}
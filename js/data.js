/**
 * Created by Administrator on 2017/9/27 0027.
 */

/*============================= 账簿管理 ===================================*/
/*
* 编号（id）
 姓名（perName）
 性别（sex）
 身份证号码（card）
 家庭住址（address）
 联系方式（tel）
 备注（remark）
 */
var selfArr="1111111";

var per1 = {
   id:"1", perName:"车辆维护-保养费", sex:"支出",
    card:"老婆", address:"2015/1/10", tel:"100", remark:" "
};
var per2 = {
    id:"2",perName:"医保费", sex:"支出",
    card:"本人", address:"2015/1/10", tel:"100", remark:" "
};
var per3 = {
    id:"3", perName:"工资", sex:"收入",
    card:"本人", address:"2016/2/10", tel:"100", remark:" "
};
var per4 = {
    id:"4", perName:"工资", sex:"支出",
    card:"老婆", address:"2016/8/10", tel:"100", remark:" "
};
var per5 = {
    id:"5", perName:"车辆维护-保养费", sex:"支出",
    card:"老婆", address:"2017/1/10", tel:"100", remark:" "
};
var perArr = [per1,per2,per3,per4,per5];

/*============================= 家庭成员管理 ==================================*/
/*
*
* 成员id(id)
* 用户名(userName)
* 密码(password)
 */
var userArr = [
    {
    id:"1",
    userName:"本人",
    password:"oldBoy"
},
    {
        id:"2",
        userName:"老婆",
        password:"woman"
    },{
        id:"3",
        userName:"儿子",
        password:"son"
    }];
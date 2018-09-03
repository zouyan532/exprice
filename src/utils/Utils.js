export default {
  //字符串检查是否为空
  CheckIsNull(msg){
    if(msg==''||msg==null||msg==undefined){
      return true;
    }else{
      return false;
    }
  },
  //将从date中获取YYYY-MM-DD
  getDateFormat1(date){
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    let hour = date.getHours();

    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
      hour = "0" + hour;
    }
    return year + '-' + month + '-' + strDate;
  }
}

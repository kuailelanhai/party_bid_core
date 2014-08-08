function Sign_up(){
//    this.name=activity_name
    this.sign_ups =[]
}
console.log('100')
check_bm_status = function(sms_json){
    var bm_list = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g,"")
    var apply_name = message.substr(2).trim()
    var apply_phone =sms_json.messages[0].phone
    if(message.search(/bm/i) == 0){
        var sign_up = _.findWhere(bm_list,{name: localStorage.current_activity}).sign_ups
        return _.find(sign_up,function(sign){return sign.phone == apply_phone})
    }
}
put_signs_up = function(sms_json){
    var bm_list = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g,"")
    var apply_name = message.substr(2).trim()
    var apply_phone = sms_json.messages[0].phone
    var apply_list = {'name': apply_name, 'phone': apply_phone}
    _.findWhere(bm_list,{name: localStorage.current_activity}).sign_ups.unshift(apply_list)
    localStorage.setItem("activities",JSON.stringify(bm_list))
}
check_jj_status =function(sms_json){
    var jj_list = JSON.parse(localStorage.getItem("activities"))
    console.log(jj_list)
    console.log(localStorage.current_bid)
    var message = sms_json.messages[0].message.replace(/\s/g,"")
    var bid_price = message.substr(2).trim()
    var bid_phone = sms_json.messages[0].phone
    if(message.search(/jj/i) == 0){
        var bid_jj = _.findWhere(jj_list,{name: localStorage.current_activity}).bids
        return _.find(bid_jj,function(bid){return bid.phone == bid_phone})
    }
}





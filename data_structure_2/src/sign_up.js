//function Sign_up(){
//    this.sign_ups =[]
//}
//console.log('100')
////notify_sms_received=function(sms_json) {
////    if (localStorage.is_signing_up == 'true'){
////        if(!check_bm_status(sms_json)){
////            put_signs_up(sms_json)
////        }
////    }
////    if(localStorage.is_signing_up == 'true' && !check_jj_status(sms_json)){
////            put_bids_biddings(sms_json)
////    }
////}
//check_bm_status = function(sms_json){
//    var bm_list = JSON.parse(localStorage.getItem("activities"))
//    var message = sms_json.messages[0].message.replace(/\s/g,"")
//    var apply_name = message.substr(2).trim()
//    var apply_phone =sms_json.messages[0].phone
//    if(message.search(/bm/i) == 0){
//        var sign_up = _.findWhere(bm_list,{id:localStorage.current_activity_id}).sign_ups
//        return _.find(sign_up,function(sign){return sign.phone == apply_phone})
//    }
//}
//put_signs_up = function(sms_json){
//    var bm_list = JSON.parse(localStorage.getItem("activities"))
//    var message = sms_json.messages[0].message.replace(/\s/g,"")
//    var apply_name = message.substr(2).trim()
//    var apply_phone = sms_json.messages[0].phone
//    var apply_list = {'name': apply_name, 'phone': apply_phone}
//    _.findWhere(bm_list,{ud: localStorage.current_activity_id}).sign_ups.unshift(apply_list)
//    localStorage.setItem("activities",JSON.stringify(bm_list))
//}
//check_jj_status =function(sms_json){
//    var jj_list = JSON.parse(localStorage.getItem("activities"))
//    var message = sms_json.messages[0].message.replace(/\s/g,"")
//    var bid_price = message.substr(2).trim()
//    var bid_phone = sms_json.messages[0].phone
//    if(message.search(/jj/i) == 0){
//        var bid_jj = jj_list[localStorage.current_activity_id].sign_ups
//        return _.find(bid_jj,function(bid){return bid.phone == bid_phone})
//    }
//}
//
////put_bids_biddings = function(sms_json){
////    console.log(localStorage.activities)
////    var jj_list = JSON.parse(localStorage.getItem("activities"))
////    console.log(jj_list)
////    var message = sms_json.messages[0].message.replace(/\s/g,"")
////    var bid_price = message.substr(2).trim()
////    var bid_phone = sms_json.messages[0].phone
////    var working_activity = _.find(jj_list,function(working){return working.name == localStorage.current_activity})
////    var working_name = _.find(working_activity.sign_ups,function(currenting){return currenting.phone == bid_phone})
//////    var messages = {name:"竞价1",biddings : []}
////    var bm_jj_get = {name: '仝键',phone: bid_phone,price: bid_price}
//////    working_activity.bids.push(messages)
////    console.log(working_activity)
//////    console.log(working_activity.bids[0].biddings)
//////    working_activity.bids[0].biddings.unshift(bm_jj_get)
//////    console.log('110')
//////    console.log(working_activity.bids[0].biddings[0].name)
//////    console.log('112')
//////    localStorage.setItem("activities",JSON.stringify(jj_list))
////}
////
//
//
//

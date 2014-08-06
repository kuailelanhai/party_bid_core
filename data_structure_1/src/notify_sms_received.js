function notify_sms_received(sms_json){

    if (localStorage.is_signing_up == 'true'){

        if(!check_bm_status(sms_json)){
            put_signs_up(sms_json)
        }
    }
    if(localStorage.is_bidding == 'true' && !check_jj_status(sms_json) && !check_bid_phone_repeat(sms_json) && !failed_user_no_bm(sms_json)){
        put_bids_biddings(sms_json)
    }
}
put_bids_biddings = function(sms_json){

    var jj_list = JSON.parse(localStorage.getItem("activities"))

    var message = sms_json.messages[0].message.replace(/\s/g,"")
    var bid_price = message.substr(2).trim()
    var bid_phone = sms_json.messages[0].phone
    var working_activity = _.find(jj_list,function(working){return working.name == localStorage.current_activity})
    var working_name = _.find(working_activity.sign_ups,function(currenting){return currenting.phone == bid_phone})
//    var messages = {name:"竞价1",biddings : []}
    var bm_jj_get = {name: '仝键',phone: bid_phone,price: bid_price}
    console.log(working_activity)
    working_activity.bids[0].biddings.unshift(bm_jj_get)
   localStorage.setItem("activities",JSON.stringify(jj_list))
}
failed_user_no_bm = function(sms_json){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var message = sms_json.messages[0].message.replace(/\s/g,"")
    if (!message.search(/jj/i)) {
        var bid_price = message.substr(2).trim()
        var bid_phone = sms_json.messages[0].phone
    }
    var working_activity = _.find(activities,function(working){return working.name == localStorage.current_activity})
    return (_.find(working_activity,function(working){return working.phone == bid_phone}))
}
check_bid_phone_repeat=function(sms_json){
    var activities = JSON.parse(localStorage.getItem("activities"));
    var apply_phone = sms_json.messages[0].phone
    var activity = _.find(activities,function(working){
        return working.name==localStorage.current_activity
    })
    return( _.find(activity.bids[0].biddings,function(working){ return working.phone==apply_phone}))

}
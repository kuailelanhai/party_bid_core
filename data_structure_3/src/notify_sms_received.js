function notify_sms_received(sms_json){
    if(localStorage.is_signing_up = "true"){
        success_sign_up(sms_json)
    }
}
success_sign_up = function(sms_json){
    var sign_ups = JSON.parse(localStorage.getItem("sign_ups"))
    var message = sms_json.messages[0].message.replace(/\s/g,"")
    if(!message.search(/bm/i) == 0) {
        var apply_name = message.substr(2).trim()
        var apply_phone = sms_json.messages[0].phone
    }
    console.log(sign_ups[0].name)
    console.log(apply_name)
    console.log('00000000000000000')
    var bm_result = _.find(sign_ups,function(bm_name){return bm_name[0].name == '仝键'})
//    var apply_list = {'name': apply_name, 'phone': apply_phone}
//    sign_ups.unshift(apply_list)
    console.log('111111')
    console.log(sign_ups[0].name)
    console.log(sign_ups[0].activity_id)
    localStorage.setItem("sign_ups",JSON.stringify(bm_result))
//    return sign_ups
}
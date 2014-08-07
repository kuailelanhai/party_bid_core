function Bid() {
    this.name = "竞价1"
    this.biddings = []
}
create_new_bid = function () {
    var activities = JSON.parse(localStorage.getItem("activities"))
    var first = _.find(activities, function (first) {
        return first.name == "first activity"
    })
    var bid = new Bid()
    first.bids.unshift(bid)
    localStorage.setItem("activities", JSON.stringify(activities))


}
transform_bids_to_view_model = function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    console.log(activities[localStorage.current_activity].bids.length)
    console.log('10000000000000000')
    console.log(activities[localStorage.current_activity].bids[0])
    return activities[localStorage.current_activity].bids
}
//transform_biddings_to_view_model = function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    console.log('888')
//    console.log(activities)
//    var id = activities[localStorage.current_activity_id].bids.length + 1
//    var jj_id = "竞价" + id
//    console.log(id)
//    var current_jj_result = activities[localStorage.current_activity].biddings[jj_id]
//    console.log(current_jj_result())
//    console.log('99999')
//    return current_jj_result
//}
render_sign_ups = function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    return working_activity = _.find(activities,function(working){return working.name == localStorage.current_activity}).sign_ups

}


create_new_bid =function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var id = activities[localStorage.current_activity_id].bids.length + 1
    var jj_id = "竞价" + id
    activities[localStorage.current_activity_id].bids = ["竞价1"]
    activities[localStorage.current_activity_id].biddings[jj_id] = []
    localStorage.setItem("activities",JSON.stringify(activities))
}










//create_new_bid=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    var bid="竞价"+(activities[localStorage.current_activity_id].bids.length+1)
//    var bids=[]
//    bids.push(bid)
//    activities[localStorage.current_activity_id].bids=bids
//    activities[localStorage.current_activity_id].biddings[bid]=[]
//    localStorage.setItem("activities", JSON.stringify(activities))
//}
//transform_bids_to_view_model=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    return activities[localStorage.current_activity].bids
//}
transform_biddings_to_view_model=function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    console.log('9999')
    console.log(activities[localStorage.current_activity].biddings)
    return activities[localStorage.current_activity].biddings["竞价2"]
}
//render_sign_ups=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    return  activities[localStorage.current_activity].sign_ups
//}
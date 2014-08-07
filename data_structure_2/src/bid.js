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
    return activities[localStorage.current_activity].bids
}
transform_biddings_to_view_model = function(){
    var activities = JSON.parse(localStorage.getItem("activities"))
    var working_activity= _.find(activities, function (working) {
        return working.name == localStorage.current_activity
    }).bids
    var work_biddings = _.find(working_activity,function(working){return working.name=="竞价2"}).biddings
    console.log(work_biddings[0])
    console.log('01')
    return work_biddings[0]
}
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
//transform_biddings_to_view_model=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    return activities[localStorage.current_activity].biddings["竞价2"]
//}
//render_sign_ups=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    return  activities[localStorage.current_activity].sign_ups
//}
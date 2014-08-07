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
    var working_activity = _.find(activities,function(activity){return activity.name == localStorage.current_activity})
    return working_activity.bids
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

//    var activities = JSON.parse(localStorage.getItem("activities"))
//    var working_activity = _.find(activities,function(activity){return activity.name == localStorage.current_activity})
//    var bm_jj_result = _.find(working_activity,function(working){return working.name == "竞价2"}).bids
//    return bm_jj_result.biddings

//render_sign_ups=function(){
//    var activities = JSON.parse(localStorage.getItem("activities"))
//    return( _.find(activities, function (act) {
//        return act.name == localStorage.current_activity
//    })).sign_ups
//}
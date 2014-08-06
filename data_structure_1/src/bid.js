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

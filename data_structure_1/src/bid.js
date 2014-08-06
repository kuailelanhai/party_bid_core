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
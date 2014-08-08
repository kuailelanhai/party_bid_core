function Activity(activity_name){
    this.name = activity_name
    this.sign_ups = []
    this.bids = []
    this.biddings = {}
}
Activity.prototype.create = function(){
//    console.log(localStorage.activity_ids)
    var activities_json = JSON.parse(localStorage.getItem(localStorage.activities))|| [];
    var activity_ids = JSON.parse(localStorage.getItem(localStorage.activity_ids))|| [];
    console.log(activity_ids)
    console.log('0')
    var id = activity_ids.length
    console.log(id)
    activities_json.push(this)
//    activities_json.unshift(this)
    console.log(activities_json[id])
    localStorage.setItem("activity_ids",JSON.stringify(activity_ids))
    localStorage.setItem("activities",JSON.stringify(activities_json))
    localStorage.current_activity = 0
    localStorage.activity_id_generator = 3
}










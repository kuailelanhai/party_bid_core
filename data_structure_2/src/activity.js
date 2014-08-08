function Activity(activity_name){
    this.name = activity_name
    this.sign_ups = []
    this.bids = []
    this.biddings = {}
}
Activity.prototype.create = function(){
//    console.log(localStorage.activity_ids)
    var activities_json = JSON.parse(localStorage.getItem("activities")) || {};
    var activity_ids = JSON.parse(localStorage.getItem("activity_ids")) || [];
    activity_ids.length.toString(10)
    var id = activity_ids.length
    console.log(activity_ids)
    console.log(id)
    activity_ids.push(id)
//    activities_json.push(id)
//    activities_json.unshift(this)

    activities_json[id]= this
    console.log(activities_json[id])
    localStorage.setItem("activity_ids",JSON.stringify(activity_ids))
    localStorage.setItem("activities",JSON.stringify(activities_json))
    localStorage.current_activity = 0
    localStorage.activity_id_generator = 3
}










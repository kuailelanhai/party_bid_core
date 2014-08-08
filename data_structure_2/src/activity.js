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
    var id = activity_ids.length
    var ids = JSON.stringify(id)
    activity_ids.push(ids)
    activities_json[ids]= this
    localStorage.setItem("activity_ids",JSON.stringify(activity_ids))
    localStorage.setItem("activities",JSON.stringify(activities_json))
    localStorage.current_activity = 0
    localStorage.activity_id_generator = 3
}










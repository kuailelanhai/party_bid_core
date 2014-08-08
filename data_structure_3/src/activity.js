function Activity(activity_name){
    this.name = activity_name
    this.id = "0"

}
Activity.prototype.create = function(){
    var activities_json = JSON.parse(localStorage.getItem(localStorage.activities))|| [];
//    var activity_ids = JSON.parse(localStorage.getItem(localStorage.activity_ids))|| [];
//    this.id=activities.length + 1
    activities_json.unshift(this)
//    localStorage.setItem("activity_ids",JSON.stringify(activity_ids))
    localStorage.setItem("activities", JSON.stringify(activities_json))
    localStorage.current_activity = 0
    localStorage.activity_id_generator = 3
}









function Activity(activity_name){
    this.name = activity_name
    this.id = []

}
Activity.prototype.create = function(){
    console.log('0001')
    var activities = JSON.parse(localStorage.getItem("activities"))|| []
    console.log('0002')
    activities.unshift(this)
    activities.id = 0
    localStorage.setItem("activities", JSON.stringify(activities))
    localStorage.current_activity = 0
    localStorage.activity_id_generator = 3
    console.log(localStorage.activities)
}
console.log(localStorage.activities)
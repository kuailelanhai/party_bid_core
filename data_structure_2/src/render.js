render_sign_ups = function(){
    var activities = JSON.parse(localStorage.getItem("activities"))|| []
    return activities[localStorage.current_activity].sign_ups
}
function Sign_up(){

}
Sign_up.give_name = function(){
    var activity_json = JSON.parse(localStorage.getItem(localStorage.activities))|| [];
    var name = {name:[]}
    activity_json.sign_ups.unshift(name)
    console.log(activity_json.sign_ups)
    localStorage.setItem('activities', JSON.stringify(activity_json));
}
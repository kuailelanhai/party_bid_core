//describe("SignUp", function() {
//
//
//    beforeEach(function() {
//        init_activity_database();
//        init_two_activity();
//        localStorage.current_activity = "1";
//        localStorage.is_signing_up = "";
//    });
//
//    afterEach(function(){
//        localStorage.clear();
//    })
//console.log(localStorage.sign_ups)
//
//    it("should one sms with signing up content sign up successfully when it is signing up", function(){
//        var sms_json = build_sms_json("BM仝键", "13600000000");
//        localStorage.is_signing_up = "true";
//        notify_sms_received(sms_json);
//
//        var sign_ups = JSON.parse(localStorage.sign_ups);
//        console.log(sign_ups)
//        console.log('100')
//        expect(sign_ups.length).toBe(1);
//        expect(sign_ups[0].name).toBe("仝键");
//        expect(sign_ups[0].activity_id).toBe("1");
//
//    });
//
//
//    it("should one sms with signing up content sign up failed when user has signed", function(){
//        var sms_json = build_sms_json("BM仝键", "13600000000");
//        localStorage.is_signing_up = "true";
//        notify_sms_received(sms_json);
//        notify_sms_received(sms_json);
//
//        var sign_ups = JSON.parse(localStorage.sign_ups);
//        expect(sign_ups.length).toBe(1);
//        expect(sign_ups[0].name).toBe("仝键");
//        expect(sign_ups[0].activity_id).toBe("1");
//    });
//
//    it("should one sms with signing up content sign up failed when it is not signing up", function(){
//        var sms_json = build_sms_json("BM仝键", "13600000000");
//        //is false
//        localStorage.is_signing_up = "false";
//        notify_sms_received(sms_json);
//
//        var activities = JSON.parse(localStorage.activities);
//        expect(sign_ups.length).toBe(0);
//        //is empty string
//        localStorage.is_signing_up = "";
//        notify_sms_received(sms_json);
//
//        var activities = JSON.parse(localStorage.activities);
//        expect(sign_ups.length).toBe(0);
//        // no item
//        localStorage.removeItem(is_signing_up);
//        notify_sms_received(sms_json);
//
//        var activities = JSON.parse(localStorage.activities);
//        expect(sign_ups.length).toBe(0);
//    });
//
//});
describe("SignUp", function() {


    beforeEach(function() {
        init_activity_database()
        init_two_activity();
        localStorage.current_activity = "1";
        localStorage.is_signing_up = "";
    });
    afterEach(function(){
        localStorage.clear();
    })
    console.log(localStorage.activity_id_generator)
    it("should one sms with signing up content sign up successfully when it is signing up", function(){
        console.log(typeof(localStorage.sign_ups))
        var sms_json = build_sms_json("BM仝键", "13600000000");
        localStorage.is_signing_up = "true";
        notify_sms_received(sms_json);

        var sign_ups = JSON.parse(localStorage.sign_ups);
        expect(sign_ups.length).toBe(1);
        expect(sign_ups[0].name).toBe("仝键");
        expect(sign_ups[0].activity_id).toBe("1");
    });

    it("should one sms with signing up content sign up failed when user has signed", function(){
        var sms_json = build_sms_json("BM仝键", "13600000000");
        localStorage.is_signing_up = "true";
        notify_sms_received(sms_json);
        notify_sms_received(sms_json);

        var sign_ups = JSON.parse(localStorage.sign_ups);
        console.log(sign_ups)
        expect(sign_ups.length).toBe(1);
        expect(sign_ups[0].name).toBe("仝键");
        expect(sign_ups[0].activity_id).toBe("1");
    });

    it("should one sms with signing up content sign up failed when it is not signing up", function(){
        var sms_json = build_sms_json("BM仝键", "13600000000");
        localStorage.is_signing_up = "false";
        notify_sms_received(sms_json);

        var sign_ups = JSON.parse(localStorage.sign_ups);
        console.log(sign_ups)
        expect(sign_ups.length).toBe(0);
        //is empty string
        localStorage.is_signing_up = "";
        notify_sms_received(sms_json);

        var sign_ups = JSON.parse(localStorage.sign_ups);
        expect(sign_ups.length).toBe(0);
        console.log(sign_ups)
        // no item
        localStorage.removeItem("is_signing_up");
        notify_sms_received(sms_json);

        var sign_ups = JSON.parse(localStorage.sign_ups);
        expect(sign_ups.length).toBe(0);
    });

});
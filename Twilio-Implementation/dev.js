var accountSid = 'AC618185642d67dd2de832b3250097abfa';
var authToken = "da4e5b82134ddff109dc36c5be375f78";
var client = require('twilio')(accountSid, authToken);

client.calls.create({
    url: "https://github.com/Aniket965/hackbvp-17/blob/master/Twilio-Implementation/doc.xml",
    to: "+918800752205",
    from: "+18134524968"
}, function(err, call) {
    console.log(call.sid);
});
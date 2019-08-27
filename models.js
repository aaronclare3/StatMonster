const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.connect("mongodb://localhost/stat_monster");

var PlayerSchema = new mongoose.Schema({
    f_name: { type: String , required: true},
    l_name: { type: String , required: true},
    jersey_number: { type: Number },
    college: { type: String },
    team: { type: String },
    position: { type: String },
    player_id: { type: Number },
})

var UserSchema = new mongoose.Schema({
    f_name: { type: String, required: true },
    l_name: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: Number, required: true, minlength: 10, maxlength: 11 },
    password: {type:String, required: true },
    roster: [PlayerSchema],
}, { timestamps: true }, {strict: true});

module.exports = mongoose.model("User", UserSchema);


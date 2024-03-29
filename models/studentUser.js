var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var StudentUserSchema = new mongoose.Schema({
    username: String,
    Name: String,
    EmailId: { type: String, unique: true, required: true },
    StudentId: { type: String, unique: true, required: true },
    Year: String,
    Department: String,
    PhoneNo: String,
    Password: String,
    ConfirmPassword: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    isStudent: { type: Boolean, default: false }
});

StudentUserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('StudentUser', StudentUserSchema);
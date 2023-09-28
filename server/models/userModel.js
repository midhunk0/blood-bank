// @ts-nocheck
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: [true, "role is required"],
        enum: ["admin", "organization", "donar", "hospital"]
    },
    name: {
        type: String,
        required: function(){
            if(this.role === "donar" || this.role === "admin"){
                return true;
            }
            return false;
        }
    },
    organization: {
        type: String,
        required: function(){
            if(this.role === "organization"){
                return true;
            }
            return false;
        }
    },  
    hospital: {
        type: String,
        required: function(){
            if(this.role === "hospital"){
                return true;
            }
            return false;
        }
    },  
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    website: {
        type: String
    },
    address: {
        type: String,
        required: [true, "address is required"]
    },
    phone: {
        type: String,
        required: [true, "phone number is required"]
    }
}, {timestamps: true});

module.exports = mongoose.model("users", userSchema)
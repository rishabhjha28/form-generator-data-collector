const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
    formId: {
        type: String,
        required: [true, 'Not possible to move withoud formid']
    },
    userName:{
        type:String,
        required:[true,"We need to know who is filling the form"]
    },
    formResponse:{
        type:Array,
        required:[true,'please ans all question']
    }
})

const responseData = mongoose.model('RESPONSE', responseSchema);

module.exports = responseData;
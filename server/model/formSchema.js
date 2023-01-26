const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    formName: {
        type: String,
        required: [true, 'Why No Name']
    },
    formData:{
        type:Array,
        required:[true,'please create some form']
    }
})

const formData = mongoose.model('FORM', formSchema);

module.exports = formData;
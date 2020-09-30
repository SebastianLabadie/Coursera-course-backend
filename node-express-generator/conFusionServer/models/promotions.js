const mongoose = require('mongoose')
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const {Schema,model} = mongoose;

var promotionSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    image:  {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    description:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


module.exports = model('Promotion', promotionSchema);
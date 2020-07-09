import {Schema, model} from 'mongoose';


const purifierSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    idUser: {
        type: String,
        required: true
    },
    ventilation: {
        type: Number,
        required: true
    },
    nightmode: {
        type: Boolean,
        required: true
    },
    aldehyde: {
        type: Number,
        required: true
    },
    co2: {
        type: Number,
        required: true
    },
    pollen: {
        type: Number,
        required: true
    },


});

const Purifier = model('Purifier', purifierSchema);
export default Purifier;

import {Schema, model} from 'mongoose';

const composantSchema = new Schema ({
    type: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    /*prix: {
        type: String,
        required: true
    },
    caracts: {
        type: String,
        required: true
    },
    marque: {
        type: String,
        required: true
    }*/
});

const Composant = model('Composant', composantSchema);
export default Composant;

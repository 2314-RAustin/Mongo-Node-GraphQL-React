import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
}

);

export default model('Message', messageSchema);
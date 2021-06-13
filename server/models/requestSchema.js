import mongoose from 'mongoose';

const schema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type:Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});


const postSchema = mongoose.model('postSchema', schema);

export default postSchema;
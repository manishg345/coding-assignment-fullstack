import mongoose from 'mongoose';
const commentSchema = mongoose.Schema({
    postId : Number,
    id     : Number,
    name   : String,
    email  : {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"]
           },
    body  : String,
    createdAt : {
        type: Date,
        default: new Date()
    }
})

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
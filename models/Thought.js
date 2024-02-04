const { Schema, model } = require('mongoose');


//reactionSchema subdocument will be nested within model for thoughtSchema

/*const reactionSchema = new Schema({
    reactionId: Schema.Types.ObjectId,
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    toJSON: {
        getters: true,
    },
    id: false
})*/

//thoughtSchema below including reactionSchema subdocument

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        /*reactions: [reactionSchema]*/
    },
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

//created a virtual for thought Schema that will included number of reactions

/*thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
})*/


const Thought = model('thought', thoughtSchema);

module.exports = Thought;
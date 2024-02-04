const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought')

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, 'Please fill a valid email address']
        },
        /*thoughts: [thoughtSchema],*/
        /*friends: [userSchema]*/
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

/*userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})*/

const User = model('user', userSchema);

module.exports = User;
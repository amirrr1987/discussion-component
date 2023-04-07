const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
const commentSchema = new mongoose.Schema({
  // "_id": {
  //   "type": mongoose.Types.ObjectId()
  // },
  "user": {
    "id": {
      type: ObjectId
    },
    "fName": {
      "type": "String"
    },
    "lName": {
      "type": "String"
    },
    "avatar": {
      "type": "String"
    }
  },
  "text": {
    "type": "String"
  },
  "likes": {
    "type": "Number"
  },
  "isLike": {
    "type": "Boolean"
  },
}, { timestamps: true });
const commentsSchema = new mongoose.Schema({
  // "_id": {
  //   "type": mongoose.Types.ObjectId()
  // },
  "user": {
    "_id": {
      type: ObjectId
    },
    "fName": {
      "type": "String"
    },
    "lName": {
      "type": "String"
    },
    "avatar": {
      "type": "String"
    }
  },
  "text": {
    "type": "String"
  },
  "likes": {
    "type": "Number"
  },
  "isLike": {
    "type": "Boolean"
  },
  // "replies": {
  //   "type": commentSchema
  // }
}, { timestamps: true });

module.exports = mongoose.model('comment', commentsSchema);

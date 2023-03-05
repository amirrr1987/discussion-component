const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  "id": {
    "type": "Number"
  },
  "date": {
    "type": "Number"
  },
  "user": {
    "name": {
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
  "iLikedIt": {
    "type": "Boolean"
  },
  "replies": {
    "type": [
      "Mixed"
    ]
  }
});

module.exports = mongoose.model('discussion', discussionSchema);

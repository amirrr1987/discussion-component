const mongoose = require('mongoose');
const z = require('zod');


const idSchema = z.string().refine((val) => {
  try {
    return mongoose.Types.ObjectId(val);
  } catch (err) {
    return false;
  }
}, 'invalid ObjectId');


const idValidator = ({ data }) => {
  return idSchema.safeParse(data);
}
module.exports = { idValidator }

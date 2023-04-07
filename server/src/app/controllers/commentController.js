const { createCommentValidator, getCommentValidator } = require('../validators/commentValidator');
const { idValidator } = require('../validators/objectIdValidator');
const commentModel = require('../models/commentModel');
const _ = require('lodash');
const USER = {
  "fName": "Amir",
  "lName": "Maghami",
  "_id": "64044199f4139b977b2c3f79"
}
// const USER = {
//   "fName": "Sama",
//   "lName": "Maghami",
//   "_id": "640468a0698c09e9e051d4eb"
// }
// async function createContainer(req, res) {
//   const { body, user } = req;
//   // console.log(body);
//   // const { user } = req
//   body.owner_id = user._id
//   const validateResult = await containerValidator({ data: body })
//   if (!validateResult.success) {
//     return res.status(422)
//       .send({
//         code: 422,
//         data: validateResult.error.issues,
//         message: "Unprocessable Entity",
//         success: false,
//       })
//   }
//   const result = await new containerModel(body)
//   await result.save()
//   res
//     .status(200)
//     .send({
//       code: 200,
//       data: result,
//       message: "Container is created",
//       success: true,
//     })
// }
// async function getContainers(req, res) {
//   const { user } = req
//   const result = await containerModel.find({ owner_id: user._id })
//   res.status(200).send({
//     code: 200,
//     message: "Get containers",
//     data: result,
//     success: true,
//   })
// }
// async function getContainerById(req, res) {
//   const { params } = req;
//   const { containerId } = params
//   // const idValidateResult = await objectIdrValidator({ id: containerId })
//   // if (!idValidateResult.success) {
//   //     return res.status(422)
//   //         .send({
//   //             code: 422,
//   //             data: idValidateResult.error.issues,
//   //             message: "Unprocessable Entity",
//   //             success: false,
//   //         })
//   // }
//   const result = await ContainerModel.findById(containerId)
//   if (!result) {
//     return res.status(404).send({
//       code: 404,
//       message: `Not found containerId: ${containerId}`,
//       success: false,
//     })
//   }
//   res.status(200).send({
//     code: 200,
//     message: `Get containerId: ${containerId}`,
//     data: result,
//     success: true,
//   })
// }
// async function updateContainerById(req, res) {
//   const { params, body } = req;
//   const { containerId } = params
//   // const idValidateResult = await objectIdrValidator({ id: containerId })
//   // if (!idValidateResult.success) {
//   //     return res.status(422)
//   //         .send({
//   //             code: 422,
//   //             data: idValidateResult.error.issues,
//   //             message: "Unprocessable Entity",
//   //             success: false,
//   //         })
//   // }
//   const validateResult = await containerValidator({ data: body })
//   if (!validateResult.success) {
//     return res.status(422)
//       .send({
//         code: 422,
//         data: validateResult.error.issues,
//         message: "Unprocessable Entity",
//         success: false,
//       })
//   }
//   const result = await ContainerModel.findByIdAndUpdate(containerId, body)
//   if (!result) {
//     return res.status(404).send({
//       code: 404,
//       message: `Not found containerId: ${containerId}`,
//       success: false,
//     });
//   }
//   res.status(200).send({
//     code: 200,
//     message: `Update containerId: ${containerId}`,
//     data: result,
//     success: true,
//   })
// }
// async function deleteContainerById(req, res) {
//   const { params } = req;
//   const { containerId } = params
//   const idValidateResult = await objectIdrValidator({ id: containerId })
//   if (!idValidateResult.success) {
//     return res.status(422)
//       .send({
//         code: 422,
//         data: idValidateResult.error.issues,
//         message: "Unprocessable Entity",
//         success: false,
//       })
//   }
//   const result = await containerModel.findByIdAndRemove(containerId)
//   if (!result) {
//     return res.status(404).send({
//       code: 404,
//       message: `Not found containerId: ${containerId}`,
//       success: false,
//     })
//   }
//   res.status(200).send({
//     code: 200,
//     message: `Delete containerId: ${containerId}`,
//     success: true,
//   })
// }
// async function deleteContainers(req, res) {
//   await ContainerModel.deleteMany()
//   res.status(200).send({
//     code: 200,
//     message: `Delete containers`,
//     success: true,
//   })
// }
async function getCommentById(req, res) {
  const result = await commentModel.find()
  res.send(result)
  // res
  //   .status(200)
  //   .send({
  //     code: 200,
  //     data: result,
  //     message: "comments found",
  //     success: true,
  //   })
}
async function createComment(req, res) {
  const { body } = req;
  body.text
  body.user = USER
  body.likes = 0
  body.isLike = false
  body.replies = []
  const obj = _.pick(body, "isLike", "likes", "text", "user", "replies")
  const validateResult = await createCommentValidator({ data: obj })
  if (!validateResult.success) {
    return res
      .status(404)
      .send({
        code: 404,
        error: validateResult.error.issues,
        message: "validation error",
        success: false,
      })
  }
  const newComment = new commentModel(body)
  await newComment.save()
  res.status(201).send(newComment)
}
async function updateComment(req, res) {
  const { params, body } = req;
  const { commentId } = params;
  const result = await commentModel.findByIdAndUpdate(commentId, body, { new: true })
  if (!result) {
    res.send({
      message: "not found id"
    })
  }
  res.send(result)
}
module.exports = {
  getCommentById,
  createComment,
  updateComment
}
const { createDiscussionValidator, getDiscussionValidator } = require('../validators/discussionValidator');
const { idValidator } = require('../validators/objectIdValidator');
const discussionModel = require('../models/discussionModel');
const _ = require('lodash');




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

async function getDiscussionById(req, res) {
  const { params } = req;
  const { discussionId } = params
  const data = await discussionModel.findById(discussionId)
  res.status(200).send(data)

}
async function createDiscussion(req, res) {

  const { body } = req;

  const createDiscussionValidateResult = createDiscussionValidator({ data: body })
  if (!createDiscussionValidateResult.success) {
    return res.status(404).send(createDiscussionValidateResult.error.issues)
  }

  const { _id } = body;
  if (_id) {
    const idValidateResult = await idValidator({ data: _id })
    if (!idValidateResult.success) {
      return res.status(404).send(idValidateResult.error.issues)
    }
  }

  const findByIdResult = await discussionModel.findById(_id)
  if (findByIdResult) {
    return res.status(200).send(findByIdResult)
  }

  const newDiscussion = new discussionModel(body)
  await newDiscussion.save()

  res.status(201).send(newDiscussion)


  // console.log(findByIdResult);

  // if (!data) {

  //   console.log(data);
  //   res.status(200).send("null data:" + data)
  // }
  // console.log(data);
  // const dis = await new discussionModel()
  // await dis.save()
  // console.log('dis', dis);
  // console.log("id", obj);
}
module.exports = {
  getDiscussionById,
  // getContainerById,
  // updateContainerById,
  // deleteContainerById,
  createDiscussion,
  // deleteContainers
}
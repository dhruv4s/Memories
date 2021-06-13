import mongoose  from "mongoose";
import postSchema from "../models/requestSchema.js";

export const getRequest = async (req, res) => {
  try {
    const result = await postSchema.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const postRequest = async(req, res) => {
  const body = req.body;
  const requestSchema = new postSchema(body);
  try {
     await requestSchema.save();
     res.status(200).json(requestSchema);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRequest = async(req, res) => {
  const { id: _id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(400).send('No memory with that id');
  const body = req.body;
  const updatedMemory=await postSchema.findByIdAndUpdate(_id, body, {new : true});
  res.status(200).json(updatedMemory);
};

export const deleteRequest = async(req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('No memory with that id');
  await postSchema.findByIdAndRemove(id);
  res.status(200).json('Post Deleted Successfully');
};

export const updateLikes = async(req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send('No memory with that id');
  const memory = await postSchema.findById(id);
  const updatedMemory=await postSchema.findByIdAndUpdate(id, {likes: memory.likes + 1}, {new : true});
  res.status(200).json(updatedMemory);
};

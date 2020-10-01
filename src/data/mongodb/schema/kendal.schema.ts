import * as mongoose from 'mongoose';

export const KendalSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 80,
    min: 5,
    required: true,
  },
  input: {
    type: String,
  },
  output: {
    type: String,
    required: true,
  },
  keywords: [{ type: String }],
  category: {
    type: String,
    required: true,
  },
  parentid: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

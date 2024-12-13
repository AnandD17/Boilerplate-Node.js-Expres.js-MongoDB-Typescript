
import mongoose, { Schema, Document } from 'mongoose';

export interface INotes extends Document {
  title: string;
  description: string;
  userId: string;
  color: string;
  isActive: boolean;
}

const notesSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  userId: { type: String, required: true },
  color: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model<INotes>('Notes', notesSchema);
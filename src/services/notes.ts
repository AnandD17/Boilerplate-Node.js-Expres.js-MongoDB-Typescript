import httpStatus from "http-status";
import db from "../models";
import { TNotes } from "../types";
import ApiError from "../utils/ApiError";

const createNote = async (body:TNotes) => {
    if(!body) {
        throw new ApiError(400, 'Please provide all the required fields');
    }
    const { title, description, userId, color } = body;
    const existingNote = await db.notes.findOne({ title, userId });
    if (existingNote) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Note already exists');
    }
    const note = await db.notes.create({ title, description, userId, color });
    return note;
};

const getNotes = async (query:any) => {
    const { userId, search } = query;
    const filter:any = { userId, isActive: true };
    if (search) {
        filter.title = { $regex: search, $options: 'i' };
    }
    const notes = await db.notes.find(filter);
    return notes;
};

const updateNote = async (noteId:string, body:TNotes) => {
    const { title, description, color } = body;
    const note = await db.notes.findByIdAndUpdate(noteId, { title, description, color }, { new: true });
    if (!note) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Note not found');
    }
    return note;
};

const deleteNote = async (noteId:string) => {
    const note = await db.notes.findByIdAndUpdate(noteId, { isActive: false }, { new: true });
    if (!note) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Note not found');
    }
    return note;
};

const getNoteById = async (noteId:string) => {
    const note = await db.notes.findById(noteId);
    if (!note) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Note not found');
    }
    return note;
};

const noteService = {
    createNote,
    getNotes,
    updateNote,
    deleteNote,
    getNoteById
};

export default noteService;


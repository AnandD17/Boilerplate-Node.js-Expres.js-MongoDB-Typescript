import { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import httpStatus from 'http-status';
import notesService from '../services/notes';

export const createNote = catchAsync(async (req:Request, res:Response) => {
    const note = await notesService.createNote(req.body);
    res.status(httpStatus.CREATED).json({ note });
});

export const updateNote = catchAsync(async (req:Request, res:Response) => {
    const note = await notesService.updateNote(req.params.noteId, req.body);
    res.status(httpStatus.OK).json({ note });
});

export const deleteNote = catchAsync(async (req:Request, res:Response) => {
    await notesService.deleteNote(req.params.noteId);
    res.status(httpStatus.NO_CONTENT).send();
});

export const getNotes = catchAsync(async (req:Request, res:Response) => {
    const notes = await notesService.getNotes(req.query);
    res.status(httpStatus.OK).json({ notes });
});

export const getNoteById = catchAsync(async (req:Request, res:Response) => {
    const note = await notesService.getNoteById(req.params.noteId);
    res.status(httpStatus.OK).json({ note });
});


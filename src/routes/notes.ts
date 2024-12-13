import express from 'express';
import { createNoteValidator, deleteNoteValidator, getNoteByIdValidator, getNotesValidator, updateNoteValidator } from '../validators/notes';
import validate from '../middleware/validate';
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from '../controllers/notes';

const router = express.Router();

router.post('/', validate(createNoteValidator), createNote);
router.put('/:noteId', validate(updateNoteValidator), updateNote);
router.delete('/:noteId', validate(deleteNoteValidator), deleteNote);
router.get('/', validate(getNotesValidator), getNotes);

export default router;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const notes_1 = require("../validators/notes");
const validate_1 = __importDefault(require("../middleware/validate"));
const notes_2 = require("../controllers/notes");
const router = express_1.default.Router();
router.post('/', (0, validate_1.default)(notes_1.createNoteValidator), notes_2.createNote);
router.put('/:noteId', (0, validate_1.default)(notes_1.updateNoteValidator), notes_2.updateNote);
router.delete('/:noteId', (0, validate_1.default)(notes_1.deleteNoteValidator), notes_2.deleteNote);
router.get('/', (0, validate_1.default)(notes_1.getNotesValidator), notes_2.getNotes);
exports.default = router;
//# sourceMappingURL=notes.js.map
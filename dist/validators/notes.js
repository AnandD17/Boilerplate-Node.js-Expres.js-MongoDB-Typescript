"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoteValidator = exports.updateNoteValidator = exports.createNoteValidator = exports.getNoteByIdValidator = exports.getNotesValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.getNotesValidator = {
    query: joi_1.default.object().keys({
        userId: joi_1.default.string().required(),
        search: joi_1.default.string().optional(),
    }),
};
exports.getNoteByIdValidator = {
    params: joi_1.default.object().keys({
        noteId: joi_1.default.string().required(),
    }),
};
exports.createNoteValidator = {
    body: joi_1.default.object().keys({
        title: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
        userId: joi_1.default.string().required(),
        color: joi_1.default.string().required(),
    }),
};
exports.updateNoteValidator = {
    params: joi_1.default.object().keys({
        noteId: joi_1.default.string().required(),
    }),
    body: joi_1.default.object().keys({
        title: joi_1.default.string().optional(),
        description: joi_1.default.string().optional(),
    }),
};
exports.deleteNoteValidator = {
    params: joi_1.default.object().keys({
        noteId: joi_1.default.string().required(),
    }),
};
//# sourceMappingURL=notes.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const models_1 = __importDefault(require("../models"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
const createNote = (body) => __awaiter(void 0, void 0, void 0, function* () {
    if (!body) {
        throw new ApiError_1.default(400, 'Please provide all the required fields');
    }
    const { title, description, userId, color } = body;
    const existingNote = yield models_1.default.notes.findOne({ title, userId });
    if (existingNote) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Note already exists');
    }
    const note = yield models_1.default.notes.create({ title, description, userId, color });
    return note;
});
const getNotes = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, search } = query;
    const filter = { userId, isActive: true };
    if (search) {
        filter.title = { $regex: search, $options: 'i' };
    }
    const notes = yield models_1.default.notes.find(filter);
    return notes;
});
const updateNote = (noteId, body) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, color } = body;
    const note = yield models_1.default.notes.findByIdAndUpdate(noteId, { title, description, color }, { new: true });
    if (!note) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Note not found');
    }
    return note;
});
const deleteNote = (noteId) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield models_1.default.notes.findByIdAndUpdate(noteId, { isActive: false }, { new: true });
    if (!note) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Note not found');
    }
    return note;
});
const getNoteById = (noteId) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield models_1.default.notes.findById(noteId);
    if (!note) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Note not found');
    }
    return note;
});
const noteService = {
    createNote,
    getNotes,
    updateNote,
    deleteNote,
    getNoteById
};
exports.default = noteService;
//# sourceMappingURL=notes.js.map
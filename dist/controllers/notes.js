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
exports.getNoteById = exports.getNotes = exports.deleteNote = exports.updateNote = exports.createNote = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const http_status_1 = __importDefault(require("http-status"));
const notes_1 = __importDefault(require("../services/notes"));
exports.createNote = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_1.default.createNote(req.body);
    res.status(http_status_1.default.CREATED).json({ note });
}));
exports.updateNote = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_1.default.updateNote(req.params.noteId, req.body);
    res.status(http_status_1.default.OK).json({ note });
}));
exports.deleteNote = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield notes_1.default.deleteNote(req.params.noteId);
    res.status(http_status_1.default.NO_CONTENT).send();
}));
exports.getNotes = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const notes = yield notes_1.default.getNotes(req.query);
    res.status(http_status_1.default.OK).json({ notes });
}));
exports.getNoteById = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const note = yield notes_1.default.getNoteById(req.params.noteId);
    res.status(http_status_1.default.OK).json({ note });
}));
//# sourceMappingURL=notes.js.map
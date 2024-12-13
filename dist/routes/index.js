"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const notes_1 = __importDefault(require("./notes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use('/notes', notes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map
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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv_1 = __importDefault(require("dotenv"));
const db_js_1 = __importDefault(require("./config/db.js"));
dotenv_1.default.config();
const port = 4000;
const routes_1 = __importDefault(require("./routes"));
const error_js_1 = require("./middleware/error.js");
const cors_1 = __importDefault(require("cors"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_js_1.default)();
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    app.use('/api', routes_1.default);
    app.use(error_js_1.errorConverter);
    app.use(error_js_1.errorHandler);
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
}))();
//# sourceMappingURL=app.js.map
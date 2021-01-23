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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loaders = void 0;
const owners = {
    Max: {
        firstname: 'Jennifer',
        lastname: 'Doe'
    },
    Charlie: {
        firstname: 'Sue',
        lastname: 'Hamilton'
    },
    Buddy: {
        firstname: 'Tracy',
        lastname: 'Johnson'
    },
};
exports.loaders = {
    Dog: {
        owner(queries, _ctx) {
            return __awaiter(this, void 0, void 0, function* () {
                return queries.map(({ obj }) => owners[obj.name]);
            });
        },
    },
};
//# sourceMappingURL=loaders.js.map
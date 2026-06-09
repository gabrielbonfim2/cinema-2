"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const filmes_module_1 = require("./filmes/filmes.module");
const salas_module_1 = require("./salas/salas.module");
const sessoes_module_1 = require("./sessoes/sessoes.module");
const ingressos_module_1 = require("./ingressos/ingressos.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [filmes_module_1.FilmesModule, salas_module_1.SalasModule, sessoes_module_1.SessoesModule, ingressos_module_1.IngressosModule],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
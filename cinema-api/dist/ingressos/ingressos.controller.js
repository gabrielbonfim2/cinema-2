"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IngressosController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ingressos_service_1 = require("./ingressos.service");
const create_ingresso_dto_1 = require("./dto/create-ingresso.dto");
const update_ingresso_dto_1 = require("./dto/update-ingresso.dto");
let IngressosController = class IngressosController {
    ingressosService;
    constructor(ingressosService) {
        this.ingressosService = ingressosService;
    }
    create(dto) {
        return this.ingressosService.create(dto);
    }
    findAll() {
        return this.ingressosService.findAll();
    }
    findOne(id) {
        return this.ingressosService.findOne(+id);
    }
    update(id, dto) {
        return this.ingressosService.update(+id, dto);
    }
    remove(id) {
        return this.ingressosService.remove(+id);
    }
};
exports.IngressosController = IngressosController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Registrar venda de ingresso' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ingresso_dto_1.CreateIngressoDto]),
    __metadata("design:returntype", void 0)
], IngressosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar ingressos vendidos' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IngressosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar ingresso por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngressosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar ingresso' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ingresso_dto_1.UpdateIngressoDto]),
    __metadata("design:returntype", void 0)
], IngressosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir ingresso' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IngressosController.prototype, "remove", null);
exports.IngressosController = IngressosController = __decorate([
    (0, swagger_1.ApiTags)('ingressos'),
    (0, common_1.Controller)('ingressos'),
    __metadata("design:paramtypes", [ingressos_service_1.IngressosService])
], IngressosController);
//# sourceMappingURL=ingressos.controller.js.map
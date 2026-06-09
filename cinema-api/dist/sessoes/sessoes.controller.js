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
exports.SessoesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sessoes_service_1 = require("./sessoes.service");
const create_sessao_dto_1 = require("./dto/create-sessao.dto");
const update_sessao_dto_1 = require("./dto/update-sessao.dto");
let SessoesController = class SessoesController {
    sessoesService;
    constructor(sessoesService) {
        this.sessoesService = sessoesService;
    }
    create(dto) {
        return this.sessoesService.create(dto);
    }
    findAll() {
        return this.sessoesService.findAll();
    }
    findOne(id) {
        return this.sessoesService.findOne(+id);
    }
    update(id, dto) {
        return this.sessoesService.update(+id, dto);
    }
    remove(id) {
        return this.sessoesService.remove(+id);
    }
};
exports.SessoesController = SessoesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Cadastrar sessão' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sessao_dto_1.CreateSessaoDto]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar sessões com filme e sala' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Buscar sessão por ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Atualizar sessão' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sessao_dto_1.UpdateSessaoDto]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Excluir sessão' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SessoesController.prototype, "remove", null);
exports.SessoesController = SessoesController = __decorate([
    (0, swagger_1.ApiTags)('sessoes'),
    (0, common_1.Controller)('sessoes'),
    __metadata("design:paramtypes", [sessoes_service_1.SessoesService])
], SessoesController);
//# sourceMappingURL=sessoes.controller.js.map
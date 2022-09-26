"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculo_1 = require("./calculo");
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var altura = Number(prompt('Digite a sua altura: '));
var peso = Number(prompt('Digite o seu peso: '));
var imc = (0, calculo_1.calculo)(peso, altura);
console.log("Seu IMC \u00E9 de: ".concat(imc, "."));

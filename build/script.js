"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromptSync = require("prompt-sync");
var calculo_1 = require("./calculo");
var prompt = PromptSync();
var altura = Number(prompt('Digite a sua altura: '));
var peso = Number(prompt('Digite o seu peso: '));
var imc = (0, calculo_1.calculo)(peso, altura);
console.log("Seu IMC \u00E9 de: ".concat(imc, "."));

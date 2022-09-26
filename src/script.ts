import { calculo } from "./calculo";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

const altura = Number(prompt('Digite a sua altura: '));
const peso = Number(prompt('Digite o seu peso: '));

const imc = calculo(peso, altura);

console.log(`Seu IMC é de: ${imc}.`);
/*
luiz otavio miranda tem 30 anos, pesa 84 kg tem 1.8 de altura e seu IMC é de 25.925925925925924
luiz otavio nasceu em 1993 */
const nome = 'luiz otavio';
const sobrenome = 'miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80
let ano = 2023
let indiceMassaCorporal; // peso / (altura * altura)
let anoNascimento;
anoNascimento = ano - idade;
/*console.log(anoNascimento)*/
indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
/*console.log(indiceMassaCorporal)*/

console.log(`${nome} ${sobrenome} tem ${idade} ${anos} pesa ${peso} kg`);


console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`); // ISTO É UMA TEMPLATE STRING


console.log(`${nome} nasceu em ${anoNascimento}.`);
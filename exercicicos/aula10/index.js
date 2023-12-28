/* 
       Operadores Aritméticos 
*    + Adição/Concatenação exemplo:
const num1 = 10;
const num2 = 3;

console.log(num1 + num2 + num2 + num2);


 OUTROS OPERADORES ARITMÉTICOS:
*    - Subtração
*    / Divisão 
*    * Multiplicação
*    ** Potenciação
*    % Resto da divisão (quando existe sobra na divisão de um numnero INTEIRO. exemplo 10/3= 9 e sobra/resta 1. outro exemplo 5/2=4 e resta 1) 
const num1 = 10;
const num2 = 3;
console.log(num1 % num2);

ou 

const num1 = 10;
const num2 = 5;
console.log(num1 % num2);

* PRECEDENCIA DOS OPERADORES ARITMÉTCOS:

()
**
* / %
+ -


CONTAS COM ORDEM DE PRECEDENCIA:

Algumas expressões podem nao lanças o resultado esperado por causa da ordem de precedencia. isso acontece porque na ordem de precedencia alguns operadores de relevancia maior, mudando a ordem de execução da expressão, exemplo:

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log(num1 + num2 * num3);

vai retornar 25, quando na verdade deveria retornar 70

SOLUÇÃO : ADICIONAR PARENTESES PARA SELECIONAR AS CONTAS QUE DEVEM SER REALIZADAS PRIMEIRO:

const num1 = 5;
const num2 = 2;
const num3 = 10;

console.log((num1 + num2) * num3);


PRÊ INCREMENTO, PÓS INCREMENTO E DECREMENTO:

Incremento = ++
Decremento = --


++contador  // incrementa antes de fazer a conta e imprimir no console.log(). exemplo: let contador = 1;
++contador;

contador++ // incrementa após fazer a conta e imprimir no console.log(). Você verá o incremento somete na apos declarar o incremento antes de imprimir OU apos imprimir a variavel pela SEGUNDA VEZ no console.log().

exemplo:   let contador = 1;
contador++;

console.log(contador);



contador--   // decrementa 1 valor da conta. exemplo:

let contador = 10;
console.log(--contador);


INCREMENTANDO NUMEROS DE 1 EM 1:

const passo = 2;
let contador = 0;

contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);
contador = contador + passo;
console.log(contador);


OUTRA ALTERNATIVA MAIS CURTA PARA INCREMENTAR:
let contador = 0;
contador += 2;
contador += 2;
contador += 2;
console.log(contador);

INCREMENTANDO COM OPERADORES DE ATRIBUIÇÃO:
*/
let contador = 2;
contador *= 2;
contador *= 2;
contador *= 2;
/*console.log(contador);*/

//POTENCIAÇÃO

let contador1 = 2;
contador **=10;
console.log(contador);

// NaN - Not a number:

const num1 = 10;
const num2 = 'marcel0';
console.log(num1 * num2);

//Convertendo string em numero (modo antindo):
const num3 = 10;
const num4 = parseInt ('5');
console.log(num3 + num4);
console.log(typeof num4 );

//CONVERTENDO STRINGS PARA NUMEBROS DECIMAIS:
const num5 = 10;
const num6 = parseFloat ('5.2');
console.log(num5 + num6);
console.log(typeof num6);

//CONVERTENDO ESTRINGS PARA NUMBER
const num9 = 10;
const num10 = Number('5.2');
console.log(num9 + num10);
console.log(typeof num10);
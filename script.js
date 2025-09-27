//IMC
//Entrada
// const peso = Number(prompt("Peso (kg):"));
// const altura = Number(prompt("Altura em (m):"));
// // Processamento
// const imc = peso / (altura ** 2);
// //Saida     
// console.log(` IMC: ${imc.toFixed(2)}`);

//Saudação	
// const nome = prompt("Qual o seu nome?");
// console.log(`Olá, ${nome}! Seja bem-vindo(a)!`);
// alert(`Olá, ${nome}! Seja bem-vindo(a)!`);

//Soma de dois números
// const a = Number(prompt("Digite o primeiro número:"));
// const b = Number(prompt("Digite o segundo número:"));   
// const soma = a + b;
// console.log(`A soma entre ${a} e ${b} é igual a ${soma.toFixed(2)}.`);

//Centímetros em polegadas
// Converter cm > in (1 in = 2.54 cm).
// const cm = Number(prompt("Digite o valor em centímetros:"));
// const polegadas = cm / 2.54;
// console.log(`${cm} cm é igual a ${polegadas.toFixed(2)} polegadas.`);

//Idade detalhada
//Converter anos em meses, dias, horas e minutos.
//Faça um programa que leia a **idade de uma pessoa em anos** e mostre a mesma idade aproximada em:
// - Meses
// - Dias
// - Horas
// - Minutos
//Use  **365 dias por ano** como simplificação.
// const anos = Number(prompt("Digite sua idade em anos:"));
// const meses = anos * 12;
// const dias = anos * 365;
// const horas = dias * 24;    
// const minutos = horas * 60;
// console.log(`Você tem aproximadamente ${meses} meses, ou ${dias} dias, ou ${horas} horas, ou ${minutos} minutos de vida.`);

//Média aritmética
//Ler 3 notas e calcular a média.
//Faça um programa que leia 3 notas de um aluno, calcule e mostre a média aritmética com uma casa decimal.
//Exemplo: 
// Notas: 7, 8, 9 > Média: 8.0
// const n1 = Number(prompt("Digite a primeira nota:"));
// const n2 = Number(prompt("Digite a segunda nota:"));
// const n3 = Number(prompt("Digite a terceira nota:"));
// const media = (n1 + n2 + n3) / 3;
// console.log(`A média aritmética entre ${n1}, ${n2} e ${n3} é igual a ${media.toFixed(1)}.`);

//Conversor BRL > USD com vírgula
// Elabora um programa que peça ao usuário:
// 1 Valor em **reais (BRL)** - o usuário pode digitar com vírgula ou ponto.
// 2 Cotação do **dólar (USD)** - o usuário pode digitar com vírgula ou ponto.
// O programa deve fazer a conversão e mostrar o resultado em dólar com duas casas decimais.
// const valorBRL = prompt("Digite o valor em reais (BRL):");
// const cotacaoUSD = prompt("Digite a cotação do dólar (USD):");
// const valorBRLFormatado = Number(valorBRL.replace(',', '.'));
// const cotacaoUSDFormatada = Number(cotacaoUSD.replace(',', '.'));
// const valorUSD = valorBRLFormatado / cotacaoUSDFormatada;
// console.log(`R$ ${valorBRLFormatado.toFixed(2)} equivalem a $ ${valorUSD.toFixed(2)} dólares.`);

//Tempo total em segundos
// Escreva um programa que leia um tempo no formato **hh:mm:ss** e calcule o total em segundos.
//Exemplo:
// 01:10:15 > 4215 segundos
// const tempo = prompt("Digite o tempo no formato hh:mm:ss:");
// const [hh, mm, ss] = tempo.split(':').map(Number);
// const total = hh * 3600 + mm * 60 + ss;
// console.log(`${tempo} equivale a ${total} segundos.`);

//Condicionais 
//if/else

// const idade = Number(prompt("Digite sua idade:"));

// if (Number.isNaN(idade) || idade < 0) {
//     console.log("Idade inválida.")
// } else {
//     if (idade >= 18) {
//         console.log("Você é maior de idade.");
//     } else {
//         console.log("Você é menor de idade.");
//     }
// }

// const temp = Number(prompt("Temperatura atual(C):"));

//  if (Number.isNaN(temp)) {
//      console.log("Valor inválido.");    
//  } else if (temp < 0) {
//      console.log("Muito frio.");    
//  } else if (temp <= 20) {
//      console.log("Frio.");
//  } else if (temp <= 30) {
//      console.log("Agradável.");
// } else {
//     console.log("Quente.");
// }

//Operadores lógicos && (E), || (OU), ! (NÃO)

// const dinheiro = Number(prompt("Dinheiro na carteira: R$"));
// const temCartao = prompt("Tem cartão de crédito? (s/n)" === 's');

// if ((dinheiro >= 10 || temCartao) && dinheiro >= 0) {
//     console.log("Você consegue comprar o lanche.");
// } else {
//      console.log("Não vai rolar.");
// }

// const logado = true;
//  if (!logado) {
//     console.log("Faça login.");
// }

//Operador ternário consd ? x : y   
// const n = Number(prompt("Número:"));
// const tipo = Number.isNaN(n) ? "Inválido" : (n % 2 === 0 ? "Par" : "Ímpar");
// console.log(`O número ${n} é ${tipo}.`);

// switch/case(
// const dia = prompt("Dia da semana (seg, ter, qua, ...):");
// switch (dia) {
//     case "seg": 
//     case "ter": 
//     case "qua": 
//     case "qui": 
//     case "sex": 
//         console.log("Dia útil.");
//         break;
//     case "sab":
//     case "dom":
//         console.log("Fim de semana.");
//         break;
//     default:    
//         console.log("Dia inválido.");
//     }

//Exercícios: Login com && e ||
//Crie um programa em JavaScript que simule o sistema de login de uma empresa.
//O acesso só será liberado se:
//O usuário for "admin" ou "gerente"
//E a senha for exatamente "1234"
//Caso contrário, o acesso deve ser negado.

// const usuario = prompt("Usuário:"); 
// const senha = prompt("Senha:");
// if ((usuario === "admin" || usuario === "gerente") && senha === "1234") {
//     console.log("Acesso liberado.");
// } else {
//     console.log("Acesso negado.");
// }

//Classificador de número 
//Peça ao usuário para digitar um número. 
// Verifique se ele é positivo, negativo ou zero. Imprima a classificação correspondente na tela.

// const numero = Number(prompt("Digite um número:"));
// if (Number.isNaN(numero)) {
//     alert("Valor inválido.");
//     console.log("Valor inválido.");
// } else if (numero > 0) {
//     alert("O número é positivo.");
//     console.log("Positivo.");
// } else if (numero < 0) {
//     alert("O número é negativo.");
//     console.log("Negativo.");
// } else {
//     alert("O número é zero.");
//     console.log("Zero.");
// }

// Verificador de senha
// Peça ao usuário para digitar uma senha. A senha correta é "javascript123".
// Se a senha estiver correta, imprima "Acesso concedido". Caso contrário, imprima "Acesso negado".
// Use o operador de igualdade estrita (`===`).

// const senha = prompt("Digite a senha:");
// if (senha === "javascript123") {
//     alert("Acesso concedido.");
//     console.log("Acesso concedido.");

// } else {
//     alert("Acesso negado.");
//     console.log("Acesso negado.");
// }

//Calculadora simples com switch
// Crie uma calculadora simples. Peça ao usuário dois números e uma operação (+, -, *, /).
// Use a estrutura switch para realizar a operação escolhida e exibir o resultado.
// Inclua um default para operações inválidas.
// const num1 = Number(prompt("Digite o primeiro número:"));
// const num2 = Number(prompt("Digite o segundo número:"));
// const operacao = prompt("Escolha a operação (+, -, *, /):");
// let resultado;
// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//     console.log("Valor inválido.");
// } else {
//     switch (operacao) {
//         case "+":
//             resultado = num1 + num2;
//             alert(`Resultado: ${num1} + ${num2} = ${resultado}`);
//             console.log(`Resultado: ${num1} + ${num2} = ${resultado}`);
//             break;
//         case "-":
//             resultado = num1 - num2;
//             alert(`Resultado: ${num1} - ${num2} = ${resultado}`);
//             console.log(`Resultado: ${num1} - ${num2} = ${resultado}`);
//             break;  
//         case "*":
//             resultado = num1 * num2;
//             alert(`Resultado: ${num1} * ${num2} = ${resultado}`);
//             console.log(`Resultado: ${num1} * ${num2} = ${resultado}`);
//             break;
//         case "/":
//             if (num2 === 0) {
//                 alert("Erro: Divisão por zero.");
//                 console.log("Erro: Divisão por zero.");
//             } else {
//                 resultado = num1 / num2;
//                 alert(`Resultado: ${num1} / ${num2} = ${resultado}`);
//                 console.log(`Resultado: ${num1} / ${num2} = ${resultado}`);
//             }
//             break;
//         default:
//             alert("Operação inválida.");
//             console.log("Operação inválida.");
//     }
// }

//**Aprovação em uma prova:**
// O usuário insere a nota de um aluno (0 a 100).
// Se a nota for maior ou igual a 60, exibir "Aprovado", senão "Reprovado".

// const nota = Number(prompt("Digite a nota (0 a 100):"));
// if (Number.isNaN(nota) || nota < 0 || nota > 100) {
//     alert("Nota inválida.");
//     console.log("Nota inválida.");
// } else if (nota >= 60) {
//     alert("Aprovado.");
//     console.log("Aprovado.");
// } else {
//     alert("Reprovado.");
//     console.log("Reprovado.");
// }

//**Classificação de idade:**
// Peça ao usuário para inserir sua idade.
// Exiba se ele é "Criança" (0-12), "Adolescente" (13-17) ou "Adulto" (18+).
// const idade = Number(prompt("Digite sua idade:"));  
//     if (Number.isNaN(idade) || idade < 0) {
//         alert("Idade inválida.");
//         console.log("Idade inválida.");
//     } else if (idade <= 12) {
//         alert("Criança.");
//         console.log("Criança.");
//     } else if (idade <= 17) {
//         alert("Adolescente.");
//         console.log("Adolescente.");
//     } else {
//         alert("Adulto.");
//         console.log("Adulto.");
//     } 

// **Maior entre três números:**
// O usuário insere três números.
// Exiba qual é o maior número entre eles.
// const n1 = Number(prompt("Digite o primeiro número:"));
// const n2 = Number(prompt("Digite o segundo número:"));
// const n3 = Number(prompt("Digite o terceiro número:"));
// if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
//     alert("Valor inválido.");
//     console.log("Valor inválido.");
// }   else {
//     let maior = n1;
//     if (n2 > maior) {
//         maior = n2;
//     }
//     if (n3 > maior) {
//         maior = n3;
//     }
//     alert(`O maior número é ${maior}.`);
//     console.log(`O maior número é ${maior}.`);
// }

// **Desconto em compras:**
// Se o valor da compra for maior que R$ 100, aplique 10% de desconto.
// Caso contrário, exiba o valor normal.
// const valorCompra = Number(prompt("Valor da compra (R$):"));
// if (Number.isNaN(valorCompra) || valorCompra < 0) {
//     alert("Valor inválido.");
//     console.log("Valor inválido.");
// } else {
//     if (valorCompra > 100) {
//         const desconto = valorCompra * 0.10;
//         const valorComDesconto = valorCompra - desconto;
//         alert(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)} (Desconto de R$ ${desconto.toFixed(2)})`);
//         console.log(`Valor com desconto: R$ ${valorComDesconto.toFixed(2)} (Desconto de R$ ${desconto.toFixed(2)})`);
//     } else {
//         alert(`Valor normal: R$ ${valorCompra.toFixed(2)}`);
//         console.log(`Valor normal: R$ ${valorCompra.toFixed(2)}`);
//     }
// }

//Estruturas de repetição
// while
// let i = 1;

// while (i <= 5) {
//     console.log("Número:", i);
//     i++;
// }

// do/while
// let senha;
// do {
//     senha = prompt("Digite a senha");
// } while (senha !== "1234");
// console.log("Acesso liberado.");

// for
//Estrutura: (Início; Condição; Incremento)

// for (let i = 1; i <= 10; i++) {
//     console.log(`7 X ${i} = ${7 * i}`);
// }

//for...of
// const frutas = ["Maçã", "Banana", "Laranja"];
// for (const fruta of frutas) {
//     console.log(fruta);
// }

//for...in
// const pessoa = {nome: "Renata", idade: 26, cidade: "Santo André"};	
// for (const chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`);
// }

//forEach
// const numeros = [1,2,3,4,5,6,7,8,9,10];

// // numeros.forEach(function(n) {
// //     console.log(`7 X ${n} = ${7 * n}`)

// // });

// numeros.forEach(n => console.log(`7 X ${n} = ${7 * n}`))

//1 Mostrar os números de 1 a 10 com while

// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

// Mostrar a tabuada do 5 com for

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 X ${i} = ${5 * i}`);
// }

// Somar os números de 1 a 100 com for 1+1, 1+2 ... 1+100
// let soma = 0;
// for (let i = 1; i <= 100; i++) {
//   soma += i
// }  console.log(`A soma de 1 a 100: ${soma}`)

// Média de 5 números
// Faça um programa que peça 5 números ao usuário, calcule e mostre a média deles.
// let soma = 0;

// for (let i = 1; i <= 5; i++) {
//     const num = Number(prompt(`Digite o ${i} número:`));
//     soma += num
// }

// const media = soma / 5;
// console.log(`A média é ${media}`)

//Ler nomes até digitar "sair"
//Crie um programa que peça nomes ao usuário repetidamente.
//O programa só deve parar quando o usuário digitar "sair"

// let nome;
// do {
//     nome = prompt("Digite um nome(ou 'sair' para encerrar:");
//     if (nome !== "sair") {
//         console.log(`Você digitou: $(nome)`);
//     }
// } while (nome !== "sair");

//1 Mostrar os números de 1 a 10 com for

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

//Tabuada de um número com for
// const num = Number(prompt("Digite um número para ver a tabuada:"));
// for (let i = 1; i <= 10; i++) {
//     console.log(`${num} X ${i} = ${num * i}`);
// }

// const numeros = [1,2,3,4,5,6,7,8,9,10];
// const x = [1,2,3,4,5,6,7,8,9,10];

// numeros.forEach(function(numeros) {
//     x.forEach(function(x) {
//     console.log(`${numeros} X ${x} = ${numeros * x}`)
// })})


//Soma dos primeiros N números naturais
//Peça um número `N` ao usuário.
//Use um `while` ou `for` para somar os números de `1` até `N`.

// let soma = 0;
// const num = Number(prompt("Digite um número N:"));
// for (let i = 1; i <= num; i++) {
//     soma += i 
// }
// console.log(soma);

//Exibir os números pares de 1 a 50:
//Use um `for` ou `while` para exibir apenas os números pares de `1` a `50`.

// let i = 1;
// while (i <= 50) {
//     if (i % 2 === 0) {
//     console.log("Número:", i);
//     } i++;
// }

//Jogo de adivinhação:
// const segredo = Math.floor(Math.random() * 100) + 1;
// let tentativa;

// do {
//     const entrada = prompt("Adivinhe o número (entre 1 e 100):");

//     tentativa = Number(entrada);

//     if (tentativa > segredo) {
//         console.log("Muito alto! Tente novamente.");
//     } else if (tentativa < segredo) {
//         console.log("Muito baixo! Tente novamente.");
//     } else {
//         console.log("Parabéns, você acertou!");
//     }
// } while (tentativa !== segredo);

//Math
// console.log(Math.PI);

// console.log(Math.floor(4.9)); - Arredonda para mais;
// console.log(Math.ceil(4.1)); - Arredonda para menos;
// console.log(Math.round(4.5)); - Arredonda para o mais próximo;


// console.log(Math.pow(2, 3));
// console.log(2 ** 3);
// console.log(Math.sqrt(16));

// console.log(Math.min(4, 7, 1, 9));
// console.log(Math.max(4, 7, 1, 9));

// //Descobrir o maior número entre três valores digitados pelo usuário
// console.log("Maio número:", Math.max(n1, n2, n3))

//Contagem regressiva:
//Peça um número ao usuário e exiba uma contagem regressiva até 0 usando um `while`.

// let numero = Number(prompt("Digite um número para a contagem regressiva:"));

//     while (numero >= 0) {
//         console.log(numero);
//         numero--;
//       }
//       console.log("Contagem regressiva finalizada!");

// Soma dos dígitos de um número:
// Peça ao usuário um número inteiro positivo.
// Use um `while` para somar seus dígitos.

// let numero = Number(prompt("Digite um número inteiro positivo:"));
// let soma = 0;
// let numeroOriginal = numero; 

// while (numero > 0) {
//     let digito = numero % 10;
//     soma += digito;
//     numero = Math.floor(numero / 10);
// }

// console.log(`A soma dos dois digitos de ${numeroOriginal} é ${soma}`);

//Inverter um número:
//Peça um número ao usuário.
//Use um `while` para inverter seus dígitos (exemplo: `123` → `321`).



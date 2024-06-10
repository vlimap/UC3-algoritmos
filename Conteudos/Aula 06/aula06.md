
# Aula 6: Estruturas de Controle

## Objetivos da Aula
- Compreender as estruturas de controle de fluxo em JavaScript
- Aplicar estruturas condicionais e loops em exemplos práticos

## Conteúdo

### Estruturas Condicionais

1. **if, else if, else**
   A estrutura condicional `if` é usada para executar um bloco de código se uma condição for verdadeira.
   ```javascript
   let hora = 10;
   if (hora < 12) {
       console.log("Bom dia!");
   } else if (hora < 18) {
       console.log("Boa tarde!");
   } else {
       console.log("Boa noite!");
   }
   ```

2. **switch**
   A estrutura `switch` é usada para executar diferentes partes de código com base no valor de uma expressão.
   ```javascript
   let dia = 3;
   switch (dia) {
       case 1:
           console.log("Segunda-feira");
           break;
       case 2:
           console.log("Terça-feira");
           break;
       case 3:
           console.log("Quarta-feira");
           break;
       case 4:
           console.log("Quinta-feira");
           break;
       case 5:
           console.log("Sexta-feira");
           break;
       case 6:
           console.log("Sábado");
           break;
       case 7:
           console.log("Domingo");
           break;
       default:
           console.log("Dia inválido");
   }
   ```

### Loops

1. **for**
   O loop `for` é usado para executar um bloco de código um número específico de vezes.
   ```javascript
   for (let i = 0; i < 5; i++) {
       console.log("Iteração número " + i);
   }
   ```

2. **while**
   O loop `while` é usado para executar um bloco de código enquanto uma condição for verdadeira.
   ```javascript
   let contador = 0;
   while (contador < 5) {
       console.log("Contagem: " + contador);
       contador++;
   }
   ```

3. **do-while**
   O loop `do-while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez.
   ```javascript
   let contador = 0;
   do {
       console.log("Contagem: " + contador);
       contador++;
   } while (contador < 5);
   ```

---

## Lista de Exercícios

### Estruturas Condicionais
1. **Verificação de Paridade:**
   - Escreva um programa que recebe um número do usuário e verifica se o número é par ou ímpar.

2. **Verificação de Nota:**
   - Escreva um programa que recebe uma nota de 0 a 10 e exibe uma mensagem de acordo com a faixa da nota (ex: "Excelente", "Bom", "Regular", "Insuficiente").

3. **Dias da Semana:**
   - Escreva um programa que recebe um número de 1 a 7 e exibe o nome do dia da semana correspondente usando a estrutura `switch`.

### Loops
4. **Contagem Regressiva:**
   - Escreva um programa que exibe uma contagem regressiva de 10 a 0 usando um loop `for`.

5. **Tabuada:**
   - Escreva um programa que solicita um número ao usuário e exibe a tabuada desse número de 1 a 10 usando um loop `while`.

6. **Soma de Números:**
    - Escreva um programa que solicita números ao usuário até que ele insira zero. O programa deve exibir a soma de todos os números inseridos usando um loop `do-while`.

### Desafios
7. **Fibonacci:**
   - Escreva um programa que calcula e exibe os primeiros 10 números da sequência de Fibonacci usando um loop `for`.

8. **Fatorial:**
   - Escreva um programa que solicita um número ao usuário e calcula o fatorial desse número usando um loop `while`.

9. **Números Primos:**
   - Escreva um programa que exibe todos os números primos de 1 a 100 usando um loop `for`.

---

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Estruturas de Controle em JavaScript**
  [Estruturas de Controle em JavaScript](https://www.youtube.com/watch?v=4Mkn2RP7-Lw)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Estruturas de Controle](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

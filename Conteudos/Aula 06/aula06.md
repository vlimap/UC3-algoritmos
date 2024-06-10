
# Aula 6: Estruturas de Controle

## Objetivos da Aula
- Compreender as estruturas de controle de fluxo em JavaScript
- Aplicar estruturas condicionais e loops em exemplos práticos

## Conteúdo

### Estruturas Condicionais

1. **if, else if, else**
   A estrutura condicional `if` é usada para executar um bloco de código se uma condição for verdadeira. Se a condição não for verdadeira, você pode usar `else if` para verificar outra condição, e `else` para executar um bloco de código se nenhuma das condições anteriores for verdadeira.
   
   Exemplo:
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
   Explicação: Este código verifica a hora do dia e imprime uma saudação apropriada.

2. **switch**
   A estrutura `switch` é usada para executar diferentes partes de código com base no valor de uma expressão. É útil quando você tem muitas condições relacionadas.
   
   Exemplo:
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
   Explicação: Este código imprime o nome do dia da semana com base no número fornecido. O `default` é executado se nenhum dos casos corresponder.

### Loops

1. **for**
   O loop `for` é usado para executar um bloco de código um número específico de vezes. É composto por três partes: inicialização, condição e incremento.

   Exemplo:
   ```javascript
   for (let i = 0; i < 5; i++) {
       // Este código será executado 5 vezes
       console.log("Iteração número " + i);
   }
   ```
   Explicação: O loop começa com `i` igual a 0 e executa o bloco de código até que `i` seja menor que 5, incrementando `i` em 1 a cada iteração.

2. **while**
   O loop `while` é usado para executar um bloco de código enquanto uma condição for verdadeira.

   Exemplo:
   ```javascript
   let contador = 0;
   while (contador < 5) {
       // Este código será executado enquanto a condição for verdadeira
       console.log("Contagem: " + contador);
       contador++;
   }
   ```
   Explicação: O loop continua executando o bloco de código enquanto `contador` for menor que 5, incrementando `contador` em 1 a cada iteração.

3. **do-while**
   O loop `do-while` é semelhante ao `while`, mas garante que o bloco de código seja executado pelo menos uma vez.

   Exemplo:
   ```javascript
   let contador = 0;
   do {
       // Este código será executado pelo menos uma vez
       console.log("Contagem: " + contador);
       contador++;
   } while (contador < 5);
   ```
   Explicação: O bloco de código é executado uma vez antes da condição ser verificada. Em seguida, o loop continua executando enquanto `contador` for menor que 5.

4. **Loops Aninhados**
   Às vezes, você pode precisar de um loop dentro de outro loop. Isso é chamado de loop aninhado.

   Exemplo:
   ```javascript
   for (let i = 0; i < 3; i++) {
       // Este é o loop externo
       console.log("Loop externo: " + i);
       for (let j = 0; j < 2; j++) {
           // Este é o loop interno
           console.log("  Loop interno: " + j);
       }
   }
   ```
   Explicação: O loop interno é executado completamente cada vez que o loop externo é executado. No exemplo, o loop externo executa 3 vezes e o loop interno executa 2 vezes para cada iteração do loop externo.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Estruturas de Controle em JavaScript - Curso em Vídeo**
  [Estruturas de Controle em JavaScript](https://www.youtube.com/watch?v=4Mkn2RP7-Lw)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Estruturas de Controle](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

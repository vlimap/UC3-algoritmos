
# Aula 5: Operadores e Expressões

## Objetivos da Aula
- Compreender os operadores aritméticos, de comparação e lógicos em JavaScript
- Aplicar esses operadores em exemplos simples e do dia a dia

## Conteúdo

### Operadores Aritméticos
Os operadores aritméticos são utilizados para realizar operações matemáticas. Aqui estão os principais operadores:

1. **Adição (+)**
   Adiciona dois valores.
   ```javascript
   let soma = 5 + 3;
   console.log(soma); // saída: 8
   ```

2. **Subtração (-)**
   Subtrai um valor de outro.
   ```javascript
   let diferenca = 9 - 4;
   console.log(diferenca); // saída: 5
   ```

3. **Multiplicação (*)**
   Multiplica dois valores.
   ```javascript
   let produto = 7 * 3;
   console.log(produto); // saída: 21
   ```

4. **Divisão (/)** 
   Divide um valor por outro.
   ```javascript
   let quociente = 20 / 4;
   console.log(quociente); // saída: 5
   ```

5. **Módulo (%)**
   Retorna o resto da divisão de dois valores.
   ```javascript
   let resto = 10 % 3;
   console.log(resto); // saída: 1
   ```

### Operadores de Comparação
Os operadores de comparação são utilizados para comparar dois valores. Eles retornam um valor booleano (`true` ou `false`).

1. **Igual (==)**
   Compara se dois valores são iguais (sem considerar o tipo).
   ```javascript
   console.log(5 == '5'); // saída: true
   ```

2. **Estritamente Igual (===)**
   Compara se dois valores são iguais e do mesmo tipo.
   ```javascript
   console.log(5 === '5'); // saída: false
   ```

3. **Diferente (!=)**
   Compara se dois valores são diferentes (sem considerar o tipo).
   ```javascript
   console.log(5 != '5'); // saída: false
   ```

4. **Estritamente Diferente (!==)**
   Compara se dois valores são diferentes e de tipos diferentes.
   ```javascript
   console.log(5 !== '5'); // saída: true
   ```

5. **Maior que (>)**
   Compara se um valor é maior que outro.
   ```javascript
   console.log(10 > 6); // saída: true
   ```

6. **Maior ou Igual a (>=)**
   Compara se um valor é maior ou igual a outro.
   ```javascript
   console.log(5 >= 5); // saída: true
   ```

7. **Menor que (<)**
   Compara se um valor é menor que outro.
   ```javascript
   console.log(3 < 7); // saída: true
   ```

8. **Menor ou Igual a (<=)**
   Compara se um valor é menor ou igual a outro.
   ```javascript
   console.log(4 <= 4); // saída: true
   ```

### Operadores Lógicos
Os operadores lógicos são utilizados para combinar expressões booleanas. Aqui estão os principais operadores:

1. **E Lógico (&&)**
   Retorna `true` se ambas as expressões forem verdadeiras.
   ```javascript
   let a = true;
   let b = false;
   console.log(a && b); // saída: false
   ```

2. **OU Lógico (||)**
   Retorna `true` se pelo menos uma das expressões for verdadeira.
   ```javascript
   let a = true;
   let b = false;
   console.log(a || b); // saída: true
   ```

3. **NÃO Lógico (!)**
   Inverte o valor de uma expressão.
   ```javascript
   let a = true;
   console.log(!a); // saída: false
   ```

### Exemplos do Dia a Dia
Vamos aplicar esses operadores em exemplos simples do cotidiano.

1. **Cálculo do Troco**
   Suponha que você comprou algo que custa 15 reais e pagou com uma nota de 20 reais. Para calcular o troco, usamos a subtração.
   ```javascript
   let custo = 15;
   let pagamento = 20;
   let troco = pagamento - custo;
   console.log(troco); // saída: 5
   ```

2. **Verificação de Idade**
   Suponha que você precisa verificar se uma pessoa tem idade suficiente para votar. Em muitos países, a idade mínima para votar é 18 anos.
   ```javascript
   let idade = 20;
   let podeVotar = idade >= 18;
   console.log(podeVotar); // saída: true
   ```

3. **Combinação de Condições**
   Suponha que você quer verificar se uma pessoa pode entrar em um evento que requer convite e ser maior de 18 anos.
   ```javascript
   let temConvite = true;
   let idade = 20;
   let podeEntrar = temConvite && (idade >= 18);
   console.log(podeEntrar); // saída: true
   ```

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Operadores em JavaScript**
  [Operadores em JavaScript](https://www.youtube.com/watch?v=xEKo29OWILE)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Operadores](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Exercícios Práticos
1. Use operadores aritméticos para calcular o preço total de três produtos.
2. Use operadores de comparação para verificar se um número é par ou ímpar.
3. Combine operadores lógicos para criar uma expressão que verifica se uma pessoa pode obter uma carteira de motorista (idade >= 18 e passou no teste de direção).

---

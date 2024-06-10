
# Aula 7: Funções

## Objetivos da Aula
- Compreender o conceito de funções em JavaScript
- Declarar e invocar funções
- Trabalhar com parâmetros e retorno de funções
- Conhecer funções anônimas e arrow functions

## Conteúdo

### Declaração e Invocação de Funções
Uma função é um bloco de código projetado para executar uma tarefa específica. Você pode declarar uma função e depois invocá-la quando precisar dela.

Exemplo:
```javascript
function saudacao() {
    console.log("Olá, Mundo!");
}

// Invocando a função
saudacao();  // saída: Olá, Mundo!
```
Explicação: Este exemplo declara uma função chamada `saudacao` que imprime "Olá, Mundo!" no console. A função é então invocada com `saudacao()`.

### Parâmetros e Retorno de Funções
As funções podem receber parâmetros e retornar valores. Isso permite que você passe dados para a função e obtenha resultados de volta.

Exemplo:
```javascript
function soma(a, b) {
    return a + b;
}

// Invocando a função com argumentos
let resultado = soma(5, 3);
console.log(resultado);  // saída: 8
```
Explicação: Este exemplo declara uma função `soma` que recebe dois parâmetros `a` e `b`, e retorna a soma deles. A função é invocada com os argumentos `5` e `3`, e o resultado é armazenado na variável `resultado`.

### Funções Anônimas
As funções anônimas são funções que não têm um nome. Elas são frequentemente usadas como argumentos para outras funções.

Exemplo:
```javascript
let saudacao = function(nome) {
    return "Olá, " + nome + "!";
};

// Invocando a função anônima
console.log(saudacao("Alice"));  // saída: Olá, Alice!
```
Explicação: Este exemplo declara uma função anônima que recebe um parâmetro `nome` e retorna uma saudação. A função é armazenada na variável `saudacao` e invocada com o argumento `"Alice"`.

### Arrow Functions
As arrow functions são uma forma mais concisa de escrever funções em JavaScript. Elas são especialmente úteis para funções anônimas.

Exemplo:
```javascript
let saudacao = (nome) => {
    return "Olá, " + nome + "!";
};

// Invocando a arrow function
console.log(saudacao("Bob"));  // saída: Olá, Bob!
```
Explicação: Este exemplo usa uma arrow function para criar uma função que recebe um parâmetro `nome` e retorna uma saudação. A arrow function é armazenada na variável `saudacao` e invocada com o argumento `"Bob"`.

### Funções como Parâmetros
As funções podem ser passadas como parâmetros para outras funções. Isso é útil para criar funções de ordem superior que operam em outras funções.

Exemplo:
```javascript
function executar(funcao, valor) {
    return funcao(valor);
}

let resultado = executar(saudacao, "Charlie");
console.log(resultado);  // saída: Olá, Charlie!
```
Explicação: Este exemplo declara uma função `executar` que recebe uma função `funcao` e um valor `valor` como parâmetros, e invoca `funcao` com `valor`. A função `saudacao` é passada como argumento para `executar`, junto com o valor `"Charlie"`.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Funções em JavaScript - Curso em Vídeo**
  [Funções em JavaScript](https://www.youtube.com/watch?v=6WB16wZS61c)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Functions)

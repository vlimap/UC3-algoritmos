
# Aula 3 e 4: Primeiro Programa em JavaScript e Fundamentos de Tipos de Dados e Variáveis

## Objetivos da Aula
- Entender a sintaxe básica do JavaScript
- Escrever o primeiro programa "Hello World"
- Executar JavaScript no navegador e no Node.js
- Conhecer os tipos primitivos de dados em JavaScript
- Declarar e usar variáveis com `var`, `let`, e `const`

## Conteúdo

### Sintaxe Básica
JavaScript é uma linguagem de programação que segue a sintaxe C-like. Abaixo estão alguns exemplos básicos de sintaxe:

1. **Comentários**
   ```javascript
   // Comentário de linha única
   /* Comentário de múltiplas linhas */
   ```

2. **Variáveis**
   Em JavaScript, você pode declarar variáveis usando `var`, `let`, ou `const`. Vamos ver a diferença entre eles.

   - **`var`**: Usado na versão mais antiga do JavaScript. Tem escopo de função e permite redeclaração.
     ```javascript
     var nome = "Valtemir";
     var nome = "João"; // permitido
     console.log(nome); // saída: João
     ```

   - **`let`**: Introduzido no ES6 (ECMAScript 2015). Tem escopo de bloco e não permite redeclaração.
     ```javascript
     let idade = 25;
     idade = 26; // permitido
     console.log(idade); // saída: 26
     ```

   - **`const`**: Também introduzido no ES6. Utilizado para declarar constantes que não podem ser reatribuídas.
     ```javascript
     const cidade = "São Paulo";
     cidade = "Rio de Janeiro"; // erro
     console.log(cidade); // saída: São Paulo
     ```

### Tipos de Dados Primitivos
JavaScript tem vários tipos de dados primitivos:
- **String**: Texto.
  ```javascript
  let saudacao = "Olá, Mundo!";
  console.log(saudacao); // saída: Olá, Mundo!
  ```

- **Number**: Números, tanto inteiros quanto decimais.
  ```javascript
  let idade = 30;
  let preco = 19.99;
  console.log(idade); // saída: 30
  console.log(preco); // saída: 19.99
  ```

- **Boolean**: Valores verdadeiros ou falsos.
  ```javascript
  let estaChovendo = true;
  let estaEnsolarado = false;
  console.log(estaChovendo); // saída: true
  console.log(estaEnsolarado); // saída: false
  ```

- **Null**: Representa a ausência intencional de um valor.
  ```javascript
  let resposta = null;
  console.log(resposta); // saída: null
  ```

- **Undefined**: Variável declarada que ainda não recebeu um valor.
  ```javascript
  let nome;
  console.log(nome); // saída: undefined
  ```

- **Symbol**: Um valor único e imutável.
  ```javascript
  let simbolo1 = Symbol("descricao");
  let simbolo2 = Symbol("descricao");
  console.log(simbolo1 === simbolo2); // saída: false
  ```

### Primeiro Programa em JavaScript: "Hello World"
Vamos escrever nosso primeiro programa em JavaScript. Tradicionalmente, o primeiro programa que se escreve em uma nova linguagem é o "Hello World".

1. **No Navegador**
   Abra o console do navegador (Ctrl + Shift + J no Chrome) e digite:
   ```javascript
   console.log("Hello, World!");
   ```

2. **No Node.js**
   Crie um arquivo chamado `hello.js` e adicione o seguinte código:
   ```javascript
   console.log("Hello, World!");
   ```
   Execute o programa no terminal:
   ```bash
   node hello.js
   ```

### Executando JavaScript no Navegador e no Node.js

#### Navegador
Para executar JavaScript no navegador, você pode usar o console do desenvolvedor ou incluir scripts em páginas HTML. Exemplo:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Primeiro Programa em JavaScript</title>
</head>
<body>
    <script>
        console.log("Hello, World!");
    </script>
</body>
</html>
```

#### Node.js
Para executar JavaScript no Node.js, crie arquivos `.js` e execute-os usando o comando `node`. Exemplo:
1. Crie um arquivo `app.js` com o conteúdo:
   ```javascript
   console.log("Executando JavaScript no Node.js!");
   ```
2. No terminal, execute:
   ```bash
   node app.js
   ```

## Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Primeiros Passos com JavaScript**
  [Primeiros Passos com JavaScript](https://www.youtube.com/watch?v=i6Oi-YtXnAU)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Exercícios Práticos
1. Declare variáveis usando `var`, `let` e `const` e tente reatribuir valores a elas.
2. Crie exemplos para cada tipo primitivo de dados e imprima-os no console.
3. Escreva um programa "Hello World" e execute-o tanto no navegador quanto no Node.js.

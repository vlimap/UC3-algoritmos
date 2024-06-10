
# Aula 8: Arrays

## Objetivos da Aula
- Compreender o conceito de arrays em JavaScript
- Declarar e manipular arrays
- Utilizar métodos comuns de arrays para adicionar, remover e modificar elementos
- Trabalhar com métodos avançados de arrays como `map`, `filter`, e `reduce`

## Conteúdo

### Declaração e Manipulação de Arrays
Um array é uma coleção de elementos que são armazenados em uma única variável. Os arrays podem conter elementos de qualquer tipo, incluindo números, strings, objetos e até outras arrays.

#### Declaração de Arrays
Você pode declarar um array usando colchetes (`[]`) e atribuindo valores separados por vírgulas.

Exemplo:
```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);  // saída: ["Maçã", "Banana", "Laranja"]
```
Explicação: Este exemplo declara um array chamado `frutas` que contém três strings.

#### Acessando Elementos de um Array
Os elementos de um array são acessados usando índices, que começam em 0.

Exemplo:
```javascript
let primeiraFruta = frutas[0];
console.log(primeiraFruta);  // saída: "Maçã"
```
Explicação: Este exemplo acessa o primeiro elemento do array `frutas`.

#### Modificando Elementos de um Array
Você pode modificar elementos de um array atribuindo novos valores aos índices existentes.

Exemplo:
```javascript
frutas[1] = "Manga";
console.log(frutas);  // saída: ["Maçã", "Manga", "Laranja"]
```
Explicação: Este exemplo modifica o segundo elemento do array `frutas` de "Banana" para "Manga".

### Métodos Comuns de Arrays
Os arrays possuem vários métodos que permitem adicionar, remover e modificar elementos.

#### Adicionando Elementos
- **push:** Adiciona um ou mais elementos ao final do array.
- **unshift:** Adiciona um ou mais elementos ao início do array.

Exemplo:
```javascript
frutas.push("Uva");
console.log(frutas);  // saída: ["Maçã", "Manga", "Laranja", "Uva"]

frutas.unshift("Abacaxi");
console.log(frutas);  // saída: ["Abacaxi", "Maçã", "Manga", "Laranja", "Uva"]
```

#### Removendo Elementos
- **pop:** Remove o último elemento do array.
- **shift:** Remove o primeiro elemento do array.

Exemplo:
```javascript
let ultimaFruta = frutas.pop();
console.log(ultimaFruta);  // saída: "Uva"
console.log(frutas);       // saída: ["Abacaxi", "Maçã", "Manga", "Laranja"]

let primeiraFrutaRemovida = frutas.shift();
console.log(primeiraFrutaRemovida);  // saída: "Abacaxi"
console.log(frutas);                 // saída: ["Maçã", "Manga", "Laranja"]
```

#### Outros Métodos Úteis
- **indexOf:** Retorna o índice do primeiro elemento encontrado que corresponde ao valor especificado.
- **splice:** Adiciona ou remove elementos de qualquer posição do array.
- **slice:** Retorna uma cópia superficial de uma parte do array em um novo array.

Exemplo:
```javascript
let indiceManga = frutas.indexOf("Manga");
console.log(indiceManga);  // saída: 1

frutas.splice(1, 1, "Kiwi");
console.log(frutas);  // saída: ["Maçã", "Kiwi", "Laranja"]

let algumasFrutas = frutas.slice(1, 3);
console.log(algumasFrutas);  // saída: ["Kiwi", "Laranja"]
```

### Métodos Avançados de Arrays
Os métodos avançados de arrays permitem realizar operações mais complexas de maneira eficiente e concisa.

#### map
O método `map` cria um novo array com os resultados da aplicação de uma função a cada elemento do array original.

Exemplo:
```javascript
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobrados);  // saída: [2, 4, 6, 8, 10]
```
Explicação: Este exemplo usa `map` para criar um novo array `dobrados`, onde cada elemento é o dobro do valor correspondente em `numeros`.

#### filter
O método `filter` cria um novo array com todos os elementos que passam em um teste implementado por uma função fornecida.

Exemplo:
```javascript
let numeros = [1, 2, 3, 4, 5];
let pares = numeros.filter(function(numero) {
    return numero % 2 === 0;
});
console.log(pares);  // saída: [2, 4]
```
Explicação: Este exemplo usa `filter` para criar um novo array `pares`, contendo apenas os números pares do array `numeros`.

#### reduce
O método `reduce` aplica uma função a um acumulador e a cada elemento do array (da esquerda para a direita) para reduzir o array a um único valor.

Exemplo:
```javascript
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(soma);  // saída: 15
```
Explicação: Este exemplo usa `reduce` para somar todos os elementos do array `numeros`, resultando em `15`.

### Exemplos Práticos

#### Exemplo 1: Calculadora de Média
Crie um programa que calcula a média de uma lista de notas.

```javascript
let notas = [7, 8, 6, 9, 10];
let soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
let media = soma / notas.length;
console.log("Média:", media);  // saída: "Média: 8"
```

#### Exemplo 2: Filtro de Produtos
Crie um programa que filtra uma lista de produtos com preço maior que um valor especificado.

```javascript
let produtos = [
    { nome: "Produto A", preco: 50 },
    { nome: "Produto B", preco: 30 },
    { nome: "Produto C", preco: 70 },
    { nome: "Produto D", preco: 20 }
];

let produtosCaros = produtos.filter(produto => produto.preco > 40);
console.log(produtosCaros);  
// saída: [{ nome: "Produto A", preco: 50 }, { nome: "Produto C", preco: 70 }]
```

#### Exemplo 3: Transformação de Strings
Crie um programa que transforma uma lista de palavras em maiúsculas.

```javascript
let palavras = ["javascript", "arrays", "funções"];
let palavrasMaiusculas = palavras.map(palavra => palavra.toUpperCase());
console.log(palavrasMaiusculas);  // saída: ["JAVASCRIPT", "ARRAYS", "FUNÇÕES"]
```

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Arrays em JavaScript - Curso em Vídeo**
  [Arrays em JavaScript](https://www.youtube.com/watch?v=rRgD1yVwIvE)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)


# Aula 10: Manipulação de Strings

## Objetivos da Aula
- Compreender o conceito de strings em JavaScript
- Utilizar métodos de strings para manipulação
- Aplicar interpolação de strings utilizando template literals

## Conteúdo

### Métodos de Strings

#### concat
O método `concat` é usado para concatenar duas ou mais strings.

Exemplo:
```javascript
let primeiraParte = "Olá, ";
let segundaParte = "mundo!";
let saudacao = primeiraParte.concat(segundaParte);
console.log(saudacao);  // saída: "Olá, mundo!"
```
Explicação: Este exemplo utiliza o método `concat` para juntar as strings `primeiraParte` e `segundaParte`.

#### slice
O método `slice` é usado para extrair uma parte de uma string sem modificar a string original.

Exemplo:
```javascript
let texto = "JavaScript é divertido";
let parte = texto.slice(0, 10);
console.log(parte);  // saída: "JavaScript"
```
Explicação: Este exemplo utiliza o método `slice` para extrair os primeiros 10 caracteres da string `texto`.

#### substring
O método `substring` é similar ao `slice`, mas não aceita índices negativos.

Exemplo:
```javascript
let texto = "JavaScript é divertido";
let parte = texto.substring(0, 10);
console.log(parte);  // saída: "JavaScript"
```
Explicação: Este exemplo utiliza o método `substring` para extrair os primeiros 10 caracteres da string `texto`.

#### replace
O método `replace` é usado para substituir parte de uma string por outra.

Exemplo:
```javascript
let texto = "JavaScript é divertido";
let novoTexto = texto.replace("divertido", "poderoso");
console.log(novoTexto);  // saída: "JavaScript é poderoso"
```
Explicação: Este exemplo utiliza o método `replace` para substituir "divertido" por "poderoso" na string `texto`.

#### toUpperCase
O método `toUpperCase` é usado para converter uma string para letras maiúsculas.

Exemplo:
```javascript
let texto = "JavaScript";
let textoMaiusculo = texto.toUpperCase();
console.log(textoMaiusculo);  // saída: "JAVASCRIPT"
```
Explicação: Este exemplo utiliza o método `toUpperCase` para converter a string `texto` para letras maiúsculas.

#### toLowerCase
O método `toLowerCase` é usado para converter uma string para letras minúsculas.

Exemplo:
```javascript
let texto = "JavaScript";
let textoMinusculo = texto.toLowerCase();
console.log(textoMinusculo);  // saída: "javascript"
```
Explicação: Este exemplo utiliza o método `toLowerCase` para converter a string `texto` para letras minúsculas.

### Interpolação de Strings (Template Literals)

Os template literals permitem incorporar expressões dentro de strings, utilizando crases (`` ` ``) em vez de aspas.

Exemplo:
```javascript
let nome = "João";
let idade = 30;
let saudacao = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(saudacao);  // saída: "Olá, meu nome é João e eu tenho 30 anos."
```
Explicação: Este exemplo utiliza template literals para criar uma string que incorpora as variáveis `nome` e `idade`.

### Exemplos Práticos

#### Exemplo 1: Formatação de Mensagens
Crie uma função que receba um nome e uma saudação e retorne uma mensagem formatada.

```javascript
function formatarMensagem(nome, saudacao) {
    return `${saudacao}, ${nome}!`;
}

let mensagem = formatarMensagem("Alice", "Bom dia");
console.log(mensagem);  // saída: "Bom dia, Alice!"
```
Explicação: Este exemplo define uma função `formatarMensagem` que utiliza template literals para formatar uma mensagem.

#### Exemplo 2: Contagem de Palavras
Crie uma função que conte o número de palavras em uma string.

```javascript
function contarPalavras(texto) {
    let palavras = texto.split(" ");
    return palavras.length;
}

let texto = "JavaScript é uma linguagem poderosa";
let numeroDePalavras = contarPalavras(texto);
console.log(numeroDePalavras);  // saída: 5
```
Explicação: Este exemplo define uma função `contarPalavras` que utiliza o método `split` para dividir a string em palavras e retorna o número de palavras.

#### Exemplo 3: Substituição de Palavras
Crie uma função que substitua todas as ocorrências de uma palavra em uma string por outra palavra.

```javascript
function substituirPalavra(texto, antigaPalavra, novaPalavra) {
    let novaString = texto.split(antigaPalavra).join(novaPalavra);
    return novaString;
}

let texto = "JavaScript é incrível. Aprender JavaScript é divertido.";
let novoTexto = substituirPalavra(texto, "JavaScript", "Python");
console.log(novoTexto);  // saída: "Python é incrível. Aprender Python é divertido."
```
Explicação: Este exemplo define uma função `substituirPalavra` que utiliza os métodos `split` e `join` para substituir todas as ocorrências de uma palavra em uma string.

### Exercícios Práticos

1. **Concatenação de Strings:**
   - Crie uma função que receba duas strings e as concatene.

2. **Extração de Substring:**
   - Crie uma função que receba uma string e dois índices, e retorne a substring correspondente.

3. **Contagem de Caracteres:**
   - Crie uma função que conte o número de caracteres em uma string.

4. **Formatação de Datas:**
   - Crie uma função que receba uma data no formato "YYYY-MM-DD" e retorne a data formatada como "DD/MM/YYYY".

5. **Verificação de Palíndromo:**
   - Crie uma função que verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Manipulação de Strings em JavaScript**
  [Manipulação de Strings em JavaScript](https://www.youtube.com/watch?v=UYh6EvpQquw)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - String](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String)

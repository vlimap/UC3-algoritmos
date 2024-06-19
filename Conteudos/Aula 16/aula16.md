
# Aula 16: Async/Await

## Objetivos da Aula
- Compreender a sintaxe de async/await em JavaScript
- Aprender a lidar com erros em async/await
- Comparar async/await com Promises e callbacks

## Conteúdo

### Conceito de Async/Await

Async/Await é uma sintaxe introduzida no ECMAScript 2017 que permite trabalhar com Promises de maneira mais simples e legível. `async` define uma função assíncrona e `await` pausa a execução da função até que a Promise seja resolvida ou rejeitada.

#### Vantagens do Async/Await
- **Legibilidade:** O código assíncrono se parece com código síncrono, facilitando a leitura e manutenção.
- **Depuração:** Depurar código async/await é mais intuitivo do que depurar código baseado em callbacks ou Promises.

### Usando Async/Await em JavaScript

#### Definindo Funções Assíncronas

Uma função assíncrona é definida usando a palavra-chave `async`. Dentro dessa função, você pode usar `await` para esperar por uma Promise.

```javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

fetchData().then(data => {
    console.log(data);
});
```

#### Lidando com Erros em Async/Await

Erros em async/await podem ser tratados usando blocos `try/catch`, o que torna o código mais limpo e gerenciável.

```javascript
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchData();
```

### Comparando Async/Await com Promises e Callbacks

#### Exemplo com Callbacks

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Dados recebidos');
    }, 2000);
}

fetchData(data => {
    console.log(data);
});
```

#### Exemplo com Promises

```javascript
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Dados recebidos');
        }, 2000);
    });
}

fetchData().then(data => {
    console.log(data);
});
```

#### Exemplo com Async/Await

```javascript
async function fetchData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Dados recebidos');
        }, 2000);
    });
    console.log(data);
}

fetchData();
```

### Exercícios Práticos

1. **Requisição de API:**
   - Crie uma função que faça uma requisição a uma API usando async/await e trate possíveis erros.

2. **Processamento de Dados:**
   - Implemente uma função assíncrona que processe dados de maneira sequencial usando async/await.

3. **Leitura de Arquivos:**
   - Crie uma função que leia um arquivo de forma assíncrona e use async/await para esperar pela conclusão da leitura.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Entendendo Async/Await em JavaScript**
  [Entendendo Async/Await em JavaScript](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Async/Await](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await)

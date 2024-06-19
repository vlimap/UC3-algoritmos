
# Aula 14: Introdução à Programação Assíncrona

## Objetivos da Aula
- Compreender o conceito de programação assíncrona
- Entender como usar callbacks em JavaScript
- Identificar problemas comuns com callbacks (Callback Hell)

## Conteúdo

### Conceito de Programação Assíncrona

A programação assíncrona permite que o código inicie uma operação e depois passe para outra tarefa antes que a primeira seja concluída. Quando a operação é finalizada, o código é notificado e lida com o resultado. Este é um conceito fundamental para aplicações web que precisam lidar com operações de I/O, como requisições HTTP ou interações com bancos de dados, sem bloquear o fluxo principal do programa.

#### Vantagens da Programação Assíncrona
- **Responsividade:** Permite que o programa continue respondendo a eventos enquanto espera pela conclusão de operações demoradas.
- **Escalabilidade:** Facilita a construção de aplicações escaláveis, onde muitas operações podem ser processadas simultaneamente.

#### Desvantagens da Programação Assíncrona
- **Complexidade:** Pode ser mais difícil de entender e depurar devido ao fluxo de execução não-linear.
- **Callback Hell:** Aninhamento profundo de callbacks pode tornar o código difícil de ler e manter.

### Usando Callbacks em JavaScript

Callbacks são funções passadas como argumento para outras funções e executadas após a conclusão de alguma operação. Elas são a base da programação assíncrona em JavaScript.

#### Exemplo de Callback

```javascript
function fetchData(callback) {
    setTimeout(() => {
        callback('Dados recebidos');
    }, 2000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);  // Após 2 segundos, saída: Dados recebidos
```

### Problemas com Callbacks (Callback Hell)

Callback Hell ocorre quando temos múltiplos níveis de callbacks aninhados, tornando o código difícil de ler e manter. Isso geralmente acontece em operações assíncronas sequenciais.

#### Exemplo de Callback Hell

```javascript
function firstTask(callback) {
    setTimeout(() => {
        console.log('Primeira tarefa completa');
        callback();
    }, 1000);
}

function secondTask(callback) {
    setTimeout(() => {
        console.log('Segunda tarefa completa');
        callback();
    }, 1000);
}

function thirdTask(callback) {
    setTimeout(() => {
        console.log('Terceira tarefa completa');
        callback();
    }, 1000);
}

firstTask(() => {
    secondTask(() => {
        thirdTask(() => {
            console.log('Todas as tarefas completas');
        });
    });
});
```

### Mitigando Callback Hell

Existem várias estratégias para mitigar o Callback Hell, como modularização do código, uso de bibliotecas como `async` e transição para Promises e `async/await`.

### Exercícios Práticos

1. **Leitura de Arquivos:**
   - Implemente uma função que leia um arquivo usando callbacks e lide com erros de forma adequada.

2. **Requisições HTTP:**
   - Crie uma função que faça uma requisição HTTP e use um callback para processar a resposta.

3. **Operações de Banco de Dados:**
   - Simule uma operação de banco de dados assíncrona que utiliza callbacks para indicar sucesso ou falha.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Introdução à Programação Assíncrona**
  [Introdução à Programação Assíncrona](https://www.youtube.com/watch?v=PoRJizFvM7s)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

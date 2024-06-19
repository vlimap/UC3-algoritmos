
# Aula 15: Promises

## Objetivos da Aula
- Compreender o conceito de Promises em JavaScript
- Aprender a criar e usar Promises
- Utilizar métodos de Promises (then, catch, finally)

## Conteúdo

### Conceito de Promises

Promises são uma maneira moderna de lidar com operações assíncronas em JavaScript. Uma Promise representa um valor que pode estar disponível agora, no futuro ou nunca. Elas ajudam a evitar o Callback Hell e tornam o código mais legível e gerenciável.

#### Estados de uma Promise
- **Pending (Pendente):** Estado inicial, ainda não resolvido ou rejeitado.
- **Fulfilled (Resolvida):** A operação foi concluída com sucesso.
- **Rejected (Rejeitada):** A operação falhou.

### Criando e Usando Promises

#### Criando uma Promise

Uma Promise é criada usando o construtor `Promise`, que aceita uma função com dois argumentos: `resolve` e `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operação bem-sucedida!");
    } else {
        reject("Ocorreu um erro.");
    }
});
```

#### Usando `then`, `catch` e `finally`

Os métodos `then`, `catch` e `finally` são usados para lidar com o resultado de uma Promise.

```javascript
myPromise
    .then(result => {
        console.log(result);  // Saída: Operação bem-sucedida!
    })
    .catch(error => {
        console.error(error);  // Se houver erro, mostra a mensagem de erro
    })
    .finally(() => {
        console.log("Operação finalizada.");  // Executa independente do resultado
    });
```

### Exemplos Práticos

#### Exemplo 1: Simulação de Requisição HTTP

```javascript
function fakeHTTPRequest() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;  // Simula sucesso ou falha
            if (success) {
                resolve("Dados recebidos");
            } else {
                reject("Erro na requisição");
            }
        }, 2000);
    });
}

fakeHTTPRequest()
    .then(data => {
        console.log(data);  // Saída: Dados recebidos
    })
    .catch(error => {
        console.error(error);  // Saída: Erro na requisição (se falhar)
    })
    .finally(() => {
        console.log("Requisição finalizada");  // Executa independente do resultado
    });
```

#### Exemplo 2: Encadeamento de Promises

```javascript
function firstTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Primeira tarefa completa");
            resolve();
        }, 1000);
    });
}

function secondTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Segunda tarefa completa");
            resolve();
        }, 1000);
    });
}

function thirdTask() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Terceira tarefa completa");
            resolve();
        }, 1000);
    });
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => {
        console.log("Todas as tarefas completas");
    });
```

### Exercícios Práticos

1. **Simulação de Processamento de Dados:**
   - Crie uma função que simule o processamento de dados usando Promises e encadeie várias operações de processamento.

2. **Requisição HTTP com Retentativa:**
   - Implemente uma função que faça uma requisição HTTP usando Promises e tente novamente em caso de falha.

3. **Carregamento de Imagens:**
   - Crie uma função que carregue uma imagem usando Promises e lide com sucesso ou falha no carregamento.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Entendendo Promises em JavaScript**
  [Entendendo Promises em JavaScript](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Promises](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise)

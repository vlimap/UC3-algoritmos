
# Aula 11: Pilhas e Filas

## Objetivos da Aula

- Compreender os conceitos de classes, herança, polimorfismo, abstração e encapsulamento
- Implementar esses conceitos em JavaScript
- Identificar casos de uso práticos
- Compreender o conceito de pilhas (stacks) e filas (queues) em JavaScript
- Implementar pilhas e filas em JavaScript
- Diferenciar pilhas e filas e identificar casos de uso práticos


## Conteúdo

### Classes

#### O que é uma Classe?
Uma classe é um modelo para criar objetos que compartilham um mesmo comportamento e propriedades. Em JavaScript, as classes são introduzidas com a palavra-chave `class`.

Exemplo:
```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

let pessoa1 = new Pessoa("João", 30);
pessoa1.apresentar();  // saída: Olá, meu nome é João e eu tenho 30 anos.
```
Explicação: Este exemplo define uma classe `Pessoa` com um construtor e um método `apresentar`.

### Herança

#### O que é Herança?
Herança é um mecanismo que permite que uma classe (subclasse) herde as propriedades e métodos de outra classe (superclasse).

Exemplo:
```javascript
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
}

let funcionario1 = new Funcionario("Maria", 28, "Desenvolvedora");
funcionario1.apresentar();  // saída: Olá, meu nome é Maria, eu tenho 28 anos e sou Desenvolvedora.
```
Explicação: Este exemplo define uma classe `Funcionario` que herda da classe `Pessoa` e adiciona um novo atributo `cargo`.

### Polimorfismo

#### O que é Polimorfismo?
Polimorfismo é a capacidade de um método ser implementado de diferentes formas por classes diferentes.

Exemplo:
```javascript
class Animal {
    fazerSom() {
        console.log("Algum som de animal...");
    }
}

class Cachorro extends Animal {
    fazerSom() {
        console.log("Latido");
    }
}

class Gato extends Animal {
    fazerSom() {
        console.log("Miau");
    }
}

let cachorro = new Cachorro();
let gato = new Gato();
cachorro.fazerSom();  // saída: Latido
gato.fazerSom();  // saída: Miau
```
Explicação: Este exemplo define uma classe `Animal` com um método `fazerSom` que é sobrescrito pelas classes `Cachorro` e `Gato`.

### Abstração

#### O que é Abstração?
Abstração é o processo de ocultar os detalhes complexos de um sistema e expor apenas as funcionalidades essenciais.

Exemplo:
```javascript
class ContaBancaria {
    constructor(saldoInicial) {
        if (this.constructor === ContaBancaria) {
            throw new Error("Classe abstrata não pode ser instanciada.");
        }
        this.saldo = saldoInicial;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }

    verSaldo() {
        console.log(`Saldo: R$ ${this.saldo}`);
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(saldoInicial) {
        super(saldoInicial);
    }
}

let conta = new ContaCorrente(100);
conta.depositar(50);
conta.verSaldo();  // saída: Saldo: R$ 150
conta.sacar(70);
conta.verSaldo();  // saída: Saldo: R$ 80
```
Explicação: Este exemplo define uma classe `ContaBancaria` abstrata que não pode ser instanciada diretamente.

### Encapsulamento

#### O que é Encapsulamento?
Encapsulamento é a prática de esconder os detalhes internos de um objeto e fornecer métodos para acessar e modificar esses detalhes.

Exemplo:
```javascript
class Carro {
    constructor(marca, modelo) {
        this._marca = marca;
        this._modelo = modelo;
    }

    get marca() {
        return this._marca;
    }

    set marca(novaMarca) {
        this._marca = novaMarca;
    }

    get modelo() {
        return this._modelo;
    }

    set modelo(novoModelo) {
        this._modelo = novoModelo;
    }

    detalhes() {
        console.log(`Marca: ${this._marca}, Modelo: ${this._modelo}`);
    }
}

let carro = new Carro("Toyota", "Corolla");
carro.detalhes();  // saída: Marca: Toyota, Modelo: Corolla
carro.marca = "Honda";
carro.modelo = "Civic";
carro.detalhes();  // saída: Marca: Honda, Modelo: Civic
```
Explicação: Este exemplo define uma classe `Carro` com propriedades privadas `_marca` e `_modelo` e métodos `get` e `set` para acessá-las e modificá-las.

### Exemplos Práticos

#### Exemplo 1: Sistema de Funcionários
Implemente um sistema de funcionários utilizando classes, herança, polimorfismo, abstração e encapsulamento.

```javascript
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
        super(nome, idade);
        this._cargo = cargo;
        this._salario = salario;
    }

    get cargo() {
        return this._cargo;
    }

    set cargo(novoCargo) {
        this._cargo = novoCargo;
    }

    get salario() {
        return this._salario;
    }

    set salario(novoSalario) {
        this._salario = novoSalario;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, eu tenho ${this.idade} anos e sou ${this._cargo}.`);
    }

    verSalario() {
        console.log(`Salário: R$ ${this._salario}`);
    }
}

let funcionario = new Funcionario("Carlos", 35, "Gerente", 5000);
funcionario.apresentar();  // saída: Olá, meu nome é Carlos, eu tenho 35 anos e sou Gerente.
funcionario.verSalario();  // saída: Salário: R$ 5000
funcionario.cargo = "Diretor";
funcionario.salario = 7000;
funcionario.apresentar();  // saída: Olá, meu nome é Carlos, eu tenho 35 anos e sou Diretor.
funcionario.verSalario();  // saída: Salário: R$ 7000
```
Explicação: Este exemplo implementa um sistema de funcionários utilizando os conceitos de POO.

### Exercícios Práticos

1. **Implementação de Classe:**
   - Crie uma classe `Livro` com propriedades `titulo`, `autor` e `ano` e métodos para acessar e modificar essas propriedades.

2. **Implementação de Herança:**
   - Crie uma classe `Ebook` que herde da classe `Livro` e adicione a propriedade `tamanhoDoArquivo`.

3. **Implementação de Polimorfismo:**
   - Crie uma classe `Veiculo` com um método `mover` e classes `Carro` e `Bicicleta` que sobrescrevam o método `mover`.

4. **Implementação de Abstração:**
   - Crie uma classe abstrata `FormaGeometrica` com um método `calcularArea` e classes `Circulo` e `Quadrado` que implementem o método `calcularArea`.

5. **Implementação de Encapsulamento:**
   - Crie uma classe `ContaBancaria` com propriedades privadas `saldo` e `numeroDaConta` e métodos para acessar e modificar essas propriedades.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Programação Orientada a Objetos em JavaScript - Curso em Vídeo**
  [POO em JavaScript](https://www.youtube.com/watch?v=RRubcjpTkks)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Classes](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes)

### Conceito de Pilhas (Stacks)

#### O que é uma Pilha?
Uma pilha é uma estrutura de dados linear que segue o princípio LIFO (Last In, First Out), onde o último elemento inserido é o primeiro a ser removido. Imagine uma pilha de pratos, onde você só pode adicionar ou remover o prato que está no topo.

#### Implementação de Pilhas em JavaScript
Para implementar uma pilha, podemos usar um array e os métodos `push` e `pop`.

Exemplo:
```javascript
class Pilha {
    constructor() {
        this.itens = [];
    }

    push(elemento) {
        this.itens.push(elemento);
    }

    pop() {
        if (this.itens.length === 0) return "A pilha está vazia";
        return this.itens.pop();
    }

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }

    print() {
        console.log(this.itens.toString());
    }
}

let pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.print();  // saída: 1,2,3
pilha.pop();
pilha.print();  // saída: 1,2
```
Explicação: Este exemplo define uma classe `Pilha` com métodos para adicionar (`push`), remover (`pop`), visualizar o topo (`peek`), verificar se está vazia (`isEmpty`), obter o tamanho (`tamanho`) e imprimir a pilha (`print`).

### Conceito de Filas (Queues)

#### O que é uma Fila?
Uma fila é uma estrutura de dados linear que segue o princípio FIFO (First In, First Out), onde o primeiro elemento inserido é o primeiro a ser removido. Imagine uma fila de pessoas em um banco, onde a primeira pessoa a chegar é a primeira a ser atendida.

#### Implementação de Filas em JavaScript
Para implementar uma fila, podemos usar um array e os métodos `push` e `shift`.

Exemplo:
```javascript
class Fila {
    constructor() {
        this.itens = [];
    }

    enqueue(elemento) {
        this.itens.push(elemento);
    }

    dequeue() {
        if (this.itens.length === 0) return "A fila está vazia";
        return this.itens.shift();
    }

    front() {
        return this.itens[0];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    tamanho() {
        return this.itens.length;
    }

    print() {
        console.log(this.itens.toString());
    }
}

let fila = new Fila();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.print();  // saída: 1,2,3
fila.dequeue();
fila.print();  // saída: 2,3
```
Explicação: Este exemplo define uma classe `Fila` com métodos para adicionar (`enqueue`), remover (`dequeue`), visualizar o início (`front`), verificar se está vazia (`isEmpty`), obter o tamanho (`tamanho`) e imprimir a fila (`print`).

### Casos de Uso Práticos

#### Quando Usar Pilhas
- **Undo/Redo em editores de texto:** As pilhas são usadas para armazenar as ações realizadas pelo usuário, permitindo desfazer (undo) e refazer (redo) ações.
- **Navegadores Web:** Histórico de navegação é implementado usando pilhas, onde as páginas visitadas são empilhadas e podem ser desempilhadas ao clicar em "voltar".

#### Quando Usar Filas
- **Sistemas de Atendimento:** Filas são usadas para gerenciar a ordem de atendimento de clientes, como em bancos e call centers.
- **Processamento de Tarefas:** Filas são usadas em sistemas de processamento de tarefas assíncronas, onde as tarefas são enfileiradas e processadas em ordem.

### Exemplos Práticos

#### Exemplo 1: Sistema de Undo/Redo
Implemente um sistema de undo/redo usando pilhas.

```javascript
class Editor {
    constructor() {
        this.conteudo = "";
        this.undoStack = new Pilha();
        this.redoStack = new Pilha();
    }

    escrever(texto) {
        this.undoStack.push(this.conteudo);
        this.conteudo += texto;
        this.redoStack = new Pilha();  // Limpa a pilha de redo
    }

    undo() {
        if (!this.undoStack.isEmpty()) {
            this.redoStack.push(this.conteudo);
            this.conteudo = this.undoStack.pop();
        }
    }

    redo() {
        if (!this.redoStack.isEmpty()) {
            this.undoStack.push(this.conteudo);
            this.conteudo = this.redoStack.pop();
        }
    }

    print() {
        console.log(this.conteudo);
    }
}

let editor = new Editor();
editor.escrever("Olá, ");
editor.escrever("mundo!");
editor.print();  // saída: Olá, mundo!
editor.undo();
editor.print();  // saída: Olá, 
editor.redo();
editor.print();  // saída: Olá, mundo!
```
Explicação: Este exemplo define uma classe `Editor` que utiliza pilhas para implementar as funcionalidades de undo e redo.

#### Exemplo 2: Sistema de Atendimento
Implemente um sistema de atendimento usando filas.

```javascript
class Atendimento {
    constructor() {
        this.fila = new Fila();
    }

    chegarCliente(cliente) {
        this.fila.enqueue(cliente);
        console.log(`Cliente ${cliente} entrou na fila.`);
    }

    atenderCliente() {
        let clienteAtendido = this.fila.dequeue();
        console.log(`Cliente ${clienteAtendido} foi atendido.`);
    }

    printFila() {
        this.fila.print();
    }
}

let atendimento = new Atendimento();
atendimento.chegarCliente("Alice");
atendimento.chegarCliente("Bob");
atendimento.printFila();  // saída: Alice,Bob
atendimento.atenderCliente();  // saída: Cliente Alice foi atendido.
atendimento.printFila();  // saída: Bob
```
Explicação: Este exemplo define uma classe `Atendimento` que utiliza uma fila para gerenciar a ordem de atendimento de clientes.

### Exercícios Práticos

1. **Implementação de Pilha:**
   - Crie uma classe `Pilha` que suporte as operações básicas (`push`, `pop`, `peek`, `isEmpty`, `tamanho`, `print`).

2. **Implementação de Fila:**
   - Crie uma classe `Fila` que suporte as operações básicas (`enqueue`, `dequeue`, `front`, `isEmpty`, `tamanho`, `print`).

3. **Sistema de Navegação de Páginas:**
   - Implemente um sistema de navegação de páginas que suporte as operações de avançar e voltar usando pilhas.

4. **Gerenciamento de Tarefas Assíncronas:**
   - Crie um sistema de gerenciamento de tarefas assíncronas que enfileira tarefas e as processa em ordem usando filas.

5. **Fila de Prioridade Simples:**
   - Implemente uma fila de prioridade simples onde cada elemento tem uma prioridade e a fila processa primeiro os elementos de maior prioridade.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Estruturas de Dados**
  [Estruturas de Dados: Pilhas e Filas](https://www.youtube.com/watch?v=Nchz0mMIBlY)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

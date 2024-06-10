
# Aula 12: Listas Ligadas

## Objetivos da Aula
- Compreender o conceito de listas ligadas (linked lists)
- Implementar listas ligadas em JavaScript
- Realizar operações básicas como inserção, remoção e busca

## Conteúdo

### Conceito de Listas Ligadas

Uma lista ligada é uma estrutura de dados linear composta de uma sequência de elementos, onde cada elemento aponta para o próximo. Diferente dos arrays, onde os elementos são armazenados em locais contíguos na memória, os elementos de uma lista ligada podem estar dispersos na memória. Cada elemento da lista é chamado de nó, e cada nó contém dois campos principais:
- Dados: O valor ou conteúdo do nó.
- Próximo: Um ponteiro que aponta para o próximo nó na lista.

#### Vantagens das Listas Ligadas
- **Inserção e Remoção:** Inserir e remover elementos no meio da lista é eficiente, pois não requer deslocamento de elementos como nos arrays.
- **Tamanho Dinâmico:** O tamanho da lista pode crescer ou diminuir conforme necessário, sem precisar redimensionar a estrutura.

#### Desvantagens das Listas Ligadas
- **Acesso Sequencial:** O acesso aos elementos é sequencial, o que pode ser mais lento em comparação com o acesso aleatório em arrays.
- **Uso de Memória:** Cada nó requer espaço adicional para armazenar o ponteiro para o próximo nó.

### Implementação de Listas Ligadas em JavaScript

Vamos implementar uma lista ligada simples em JavaScript. Para isso, criaremos duas classes:
1. **Node:** Representa um nó na lista.
2. **LinkedList:** Representa a própria lista ligada e contém métodos para manipulação dos nós.

#### Classe Node
A classe `Node` possui dois atributos: `data` e `next`.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
```

#### Classe LinkedList
A classe `LinkedList` possui um atributo `head`, que aponta para o primeiro nó da lista, e métodos para operações básicas.

```javascript
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Método para adicionar um nó ao final da lista
    append(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Método para remover um nó da lista
    remove(data) {
        if (this.head === null) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next !== null && current.next.data !== data) {
            current = current.next;
        }
        if (current.next !== null) {
            current.next = current.next.next;
        }
    }

    // Método para buscar um nó na lista
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Método para imprimir a lista
    print() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}
```

### Operações Básicas

#### Inserção (append)
Adicionar um nó ao final da lista.

```javascript
let list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print();  // saída: 10 20 30
```

#### Remoção (remove)
Remover um nó da lista.

```javascript
list.remove(20);
list.print();  // saída: 10 30
```

#### Busca (search)
Buscar um nó na lista.

```javascript
console.log(list.search(30));  // saída: true
console.log(list.search(40));  // saída: false
```

### Exemplos Práticos

#### Exemplo 1: Lista de Tarefas
Crie um programa que gerencie uma lista de tarefas usando uma lista ligada.

```javascript
class Task {
    constructor(description) {
        this.description = description;
    }
}

class TaskList extends LinkedList {
    addTask(description) {
        this.append(new Task(description));
    }

    removeTask(description) {
        this.remove(new Task(description));
    }
}

let tasks = new TaskList();
tasks.addTask("Comprar leite");
tasks.addTask("Estudar JavaScript");
tasks.print();  // saída: Comprar leite, Estudar JavaScript

tasks.removeTask("Comprar leite");
tasks.print();  // saída: Estudar JavaScript
```

#### Exemplo 2: Registro de Alunos
Crie um programa que registre alunos usando uma lista ligada.

```javascript
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class StudentList extends LinkedList {
    addStudent(name, age) {
        this.append(new Student(name, age));
    }

    removeStudent(name) {
        let current = this.head;
        while (current !== null) {
            if (current.data.name === name) {
                this.remove(current.data);
                return;
            }
            current = current.next;
        }
    }

    printStudents() {
        let current = this.head;
        while (current !== null) {
            console.log(`Nome: ${current.data.name}, Idade: ${current.data.age}`);
            current = current.next;
        }
    }
}

let students = new StudentList();
students.addStudent("Alice", 22);
students.addStudent("Bob", 25);
students.printStudents();  // saída: Nome: Alice, Idade: 22 
 Nome: Bob, Idade: 25

students.removeStudent("Alice");
students.printStudents();  // saída: Nome: Bob, Idade: 25
```

#### Exemplo 3: Lista de Compras
Crie um programa que gerencie uma lista de compras usando uma lista ligada.

```javascript
class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
}

class ShoppingList extends LinkedList {
    addItem(name, quantity) {
        this.append(new Item(name, quantity));
    }

    removeItem(name) {
        let current = this.head;
        while (current !== null) {
            if (current.data.name === name) {
                this.remove(current.data);
                return;
            }
            current = current.next;
        }
    }

    printItems() {
        let current = this.head;
        while (current !== null) {
            console.log(`Item: ${current.data.name}, Quantidade: ${current.data.quantity}`);
            current = current.next;
        }
    }
}

let shoppingList = new ShoppingList();
shoppingList.addItem("Maçãs", 5);
shoppingList.addItem("Bananas", 7);
shoppingList.printItems();  // saída: Item: Maçãs, Quantidade: 5 
 Item: Bananas, Quantidade: 7

shoppingList.removeItem("Maçãs");
shoppingList.printItems();  // saída: Item: Bananas, Quantidade: 7
```

### Exercícios Práticos

1. **Gerenciamento de Livros:**
   - Crie um programa que permita cadastrar e listar livros usando uma lista ligada. Cada livro deve ter título, autor e ano de publicação.

2. **Agenda de Contatos:**
   - Crie um programa que permita adicionar, remover e buscar contatos em uma agenda. Cada contato deve ter nome, telefone e email.

3. **Fila de Atendimento:**
   - Implemente uma fila de atendimento usando uma lista ligada. Permita adicionar pessoas à fila, remover a primeira pessoa da fila e buscar pessoas na fila.

4. **Lista de Músicas:**
   - Crie um programa que gerencie uma lista de músicas usando uma lista ligada. Cada música deve ter título e artista.

5. **Registro de Carros:**
   - Crie um programa que permita cadastrar e listar carros em um estacionamento. Cada carro deve ter placa, modelo e cor.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Listas Ligadas em JavaScript**
  [Listas Ligadas em JavaScript](https://www.youtube.com/watch?v=ZBdE8DElQQU)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

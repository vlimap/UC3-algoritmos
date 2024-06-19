
# Aula 13: Árvores e Grafos

## Objetivos da Aula
- Compreender o conceito de árvores (trees)
- Implementar uma árvore binária de busca (BST) em JavaScript
- Compreender o conceito de grafos (graphs)
- Implementar uma estrutura básica de grafos em JavaScript

## Conteúdo

### Conceito de Árvores

Uma árvore é uma estrutura de dados hierárquica que consiste em nós (nodes), onde cada nó tem um valor e pode ter filhos (child nodes). A estrutura de uma árvore começa com um nó raiz (root node) e se ramifica em subárvores formadas pelos filhos.

#### Tipos de Árvores
- **Árvore Binária:** Cada nó tem no máximo dois filhos.
- **Árvore Binária de Busca (BST):** Árvore binária onde o nó à esquerda tem valor menor e o nó à direita tem valor maior que o nó atual.

#### Vantagens das Árvores
- **Busca eficiente:** Operações de busca, inserção e remoção podem ser feitas em O(log n) no caso médio.
- **Hierarquia natural:** Representa dados hierárquicos de forma clara e eficiente.

### Implementação de uma Árvore Binária de Busca (BST) em JavaScript

#### Classe Node
A classe `Node` possui três atributos: `data`, `left`, e `right`.

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
```

#### Classe BST
A classe `BST` possui um atributo `root` e métodos para inserção, busca e remoção de nós.

```javascript
class BST {
    constructor() {
        this.root = null;
    }

    // Método para inserir um novo nó na árvore
    insert(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Método para buscar um nó na árvore
    search(node, data) {
        if (node === null) {
            return null;
        }
        if (data < node.data) {
            return this.search(node.left, data);
        } else if (data > node.data) {
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

    // Método para remover um nó da árvore
    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (node === null) {
            return null;
        } else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            const aux = this.findMinNode(node.right);
            node.data = aux.data;
            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node) {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }
}
```

### Conceito de Grafos

Um grafo é uma estrutura de dados que consiste em um conjunto de nós (ou vértices) e um conjunto de arestas (ou arcos) que conectam pares de nós. Os grafos podem ser dirigidos (arestas têm direção) ou não dirigidos.

#### Tipos de Grafos
- **Grafo não dirigido:** As arestas não têm direção.
- **Grafo dirigido:** As arestas têm direção.

#### Representação de Grafos
- **Matriz de Adjacência:** Usa uma matriz para representar conexões entre os nós.
- **Lista de Adjacência:** Usa listas para representar conexões entre os nós.

### Implementação de Grafos em JavaScript

#### Classe Graph
A classe `Graph` implementa um grafo básico usando lista de adjacência.

```javascript
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Método para adicionar um vértice
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Método para adicionar uma aresta
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    // Método para remover uma aresta
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }

    // Método para remover um vértice
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Método para imprimir o grafo
    printGraph() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " -> " + this.adjacencyList[vertex].join(", "));
        }
    }
}
```

### Exemplos Práticos

#### Exemplo 1: Grafo de Amizades
Crie um programa que represente uma rede de amizades usando um grafo.

```javascript
let socialGraph = new Graph();
socialGraph.addVertex("Alice");
socialGraph.addVertex("Bob");
socialGraph.addEdge("Alice", "Bob");
socialGraph.addEdge("Alice", "Charlie");
socialGraph.printGraph();  // saída: Alice -> Bob, Charlie 
                           // Bob -> Alice 
                           // Charlie -> Alice
```

#### Exemplo 2: Mapa de Cidades
Crie um programa que represente um mapa de cidades conectadas por estradas usando um grafo.

```javascript
let cityGraph = new Graph();
cityGraph.addVertex("City A");
cityGraph.addVertex("City B");
cityGraph.addVertex("City C");
cityGraph.addEdge("City A", "City B");
cityGraph.addEdge("City A", "City C");
cityGraph.addEdge("City B", "City C");
cityGraph.printGraph();  // saída: City A -> City B, City C 
                         // City B -> City A, City C 
                         // City C -> City A, City B
```

### Exercícios Práticos

1. **Árvore de Diretórios:**
   - Implemente uma árvore para representar a estrutura de diretórios de um sistema de arquivos.

2. **Grafo de Roteamento:**
   - Crie um programa que represente a rede de roteamento de um provedor de internet usando um grafo.

3. **Sistema de Recomendação:**
   - Implemente um grafo que represente um sistema de recomendação de produtos onde os nós são produtos e as arestas indicam co-compras frequentes.

4. **Organograma:**
   - Crie uma árvore que represente a hierarquia de uma empresa.

5. **Mapa de Trânsito:**
   - Implemente um grafo que represente o mapa de trânsito de uma cidade, incluindo semáforos e interseções.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Árvores e Grafos em JavaScript**
  [Árvores e Grafos em JavaScript](https://www.youtube.com/watch?v=oDqjPvD54Ss)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

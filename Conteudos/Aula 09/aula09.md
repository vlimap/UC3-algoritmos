
# Aula 9: Objetos

## Objetivos da Aula
- Compreender o conceito de objetos em JavaScript
- Declarar e manipular objetos
- Utilizar métodos para acessar e modificar propriedades de objetos
- Trabalhar com métodos de objetos

## Conteúdo

### Declaração e Manipulação de Objetos
Um objeto é uma coleção de propriedades, e cada propriedade é uma associação entre um nome (ou chave) e um valor. Os valores das propriedades podem ser de qualquer tipo, incluindo outros objetos.

#### Declaração de Objetos
Você pode declarar um objeto usando chaves (`{}`) e especificando pares de chave-valor.

Exemplo:
```javascript
let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Engenheiro"
};
console.log(pessoa);  // saída: { nome: "João", idade: 30, profissao: "Engenheiro" }
```
Explicação: Este exemplo declara um objeto chamado `pessoa` com três propriedades: `nome`, `idade` e `profissao`.

#### Acessando Propriedades de um Objeto
Você pode acessar as propriedades de um objeto usando a notação de ponto ou a notação de colchetes.

Exemplo:
```javascript
console.log(pessoa.nome);       // saída: "João"
console.log(pessoa["idade"]);   // saída: 30
```
Explicação: Este exemplo mostra duas maneiras de acessar as propriedades `nome` e `idade` do objeto `pessoa`.

#### Modificando Propriedades de um Objeto
Você pode modificar as propriedades de um objeto atribuindo novos valores às chaves existentes.

Exemplo:
```javascript
pessoa.idade = 31;
pessoa["profissao"] = "Arquiteto";
console.log(pessoa);  // saída: { nome: "João", idade: 31, profissao: "Arquiteto" }
```
Explicação: Este exemplo modifica as propriedades `idade` e `profissao` do objeto `pessoa`.

### Métodos de Objetos
Os métodos são funções que são propriedades de um objeto. Eles podem ser usados para definir comportamentos para os objetos.

Exemplo:
```javascript
let pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;
    }
};

console.log(pessoa.saudacao());  // saída: "Olá, meu nome é João"
```
Explicação: Este exemplo adiciona um método `saudacao` ao objeto `pessoa`, que retorna uma saudação usando a propriedade `nome`.

### Adicionando e Removendo Propriedades
Você pode adicionar novas propriedades a um objeto ou remover propriedades existentes.

Exemplo:
```javascript
pessoa.altura = 1.75;
console.log(pessoa);  // saída: { nome: "João", idade: 31, profissao: "Arquiteto", saudacao: [Function: saudacao], altura: 1.75 }

delete pessoa.profissao;
console.log(pessoa);  // saída: { nome: "João", idade: 31, saudacao: [Function: saudacao], altura: 1.75 }
```
Explicação: Este exemplo adiciona a propriedade `altura` ao objeto `pessoa` e remove a propriedade `profissao`.

### Iterando sobre Propriedades de um Objeto
Você pode usar um loop `for...in` para iterar sobre as propriedades de um objeto.

Exemplo:
```javascript
for (let chave in pessoa) {
    console.log(chave + ": " + pessoa[chave]);
}
// saída:
// nome: João
// idade: 31
// saudacao: function() { return "Olá, meu nome é " + this.nome; }
// altura: 1.75
```
Explicação: Este exemplo usa um loop `for...in` para iterar sobre todas as propriedades do objeto `pessoa` e imprimir seus nomes e valores.

### Métodos Úteis de Objetos
Existem vários métodos embutidos no JavaScript que são úteis ao trabalhar com objetos.

- **Object.keys:** Retorna um array com os nomes das propriedades de um objeto.
- **Object.values:** Retorna um array com os valores das propriedades de um objeto.
- **Object.entries:** Retorna um array de arrays, onde cada sub-array é um par [chave, valor].

Exemplo:
```javascript
let chaves = Object.keys(pessoa);
console.log(chaves);  // saída: ["nome", "idade", "saudacao", "altura"]

let valores = Object.values(pessoa);
console.log(valores);  // saída: ["João", 31, function() { return "Olá, meu nome é " + this.nome; }, 1.75]

let entradas = Object.entries(pessoa);
console.log(entradas);  
// saída: [["nome", "João"], ["idade", 31], ["saudacao", function() { return "Olá, meu nome é " + this.nome; }], ["altura", 1.75]]
```
Explicação: Este exemplo usa os métodos `Object.keys`, `Object.values` e `Object.entries` para obter arrays contendo as chaves, valores e pares chave-valor do objeto `pessoa`.

### Exemplos Práticos

#### Exemplo 1: Cadastro de Usuários
Crie um programa que permita cadastrar e listar usuários.

```javascript
let usuarios = [];

function adicionarUsuario(nome, idade) {
    let usuario = {
        nome: nome,
        idade: idade
    };
    usuarios.push(usuario);
}

function listarUsuarios() {
    usuarios.forEach(usuario => {
        console.log("Nome: " + usuario.nome + ", Idade: " + usuario.idade);
    });
}

adicionarUsuario("Alice", 28);
adicionarUsuario("Bob", 35);
listarUsuarios();
// saída:
// Nome: Alice, Idade: 28
// Nome: Bob, Idade: 35
```
Explicação: Este exemplo define funções para adicionar e listar usuários usando objetos para armazenar as informações de cada usuário.

#### Exemplo 2: Biblioteca de Livros
Crie um programa que permita cadastrar e listar livros em uma biblioteca.

```javascript
let biblioteca = [];

function adicionarLivro(titulo, autor, ano) {
    let livro = {
        titulo: titulo,
        autor: autor,
        ano: ano
    };
    biblioteca.push(livro);
}

function listarLivros() {
    biblioteca.forEach(livro => {
        console.log("Título: " + livro.titulo + ", Autor: " + livro.autor + ", Ano: " + livro.ano);
    });
}

adicionarLivro("1984", "George Orwell", 1949);
adicionarLivro("A Revolução dos Bichos", "George Orwell", 1945);
listarLivros();
// saída:
// Título: 1984, Autor: George Orwell, Ano: 1949
// Título: A Revolução dos Bichos, Autor: George Orwell, Ano: 1945
```
Explicação: Este exemplo define funções para adicionar e listar livros em uma biblioteca usando objetos para armazenar as informações de cada livro.

#### Exemplo 3: Inventário de Produtos
Crie um programa que permita cadastrar e listar produtos em um inventário.

```javascript
let inventario = [];

function adicionarProduto(nome, quantidade, preco) {
    let produto = {
        nome: nome,
        quantidade: quantidade,
        preco: preco
    };
    inventario.push(produto);
}

function listarProdutos() {
    inventario.forEach(produto => {
        console.log("Nome: " + produto.nome + ", Quantidade: " + produto.quantidade + ", Preço: " + produto.preco);
    });
}

adicionarProduto("Laptop", 10, 1500);
adicionarProduto("Mouse", 50, 20);
listarProdutos();
// saída:
// Nome: Laptop, Quantidade: 10, Preço: 1500
// Nome: Mouse, Quantidade: 50, Preço: 20
```
Explicação: Este exemplo define funções para adicionar e listar produtos em um inventário usando objetos para armazenar as informações de cada produto.

### Exercícios Práticos

1. **Criar Contatos:**
   - Crie um programa que permita cadastrar e listar contatos, onde cada contato possui nome, telefone e email.

2. **Gestão de Tarefas:**
   - Crie um programa que permita adicionar e listar tarefas, onde cada tarefa possui um título, descrição e status (concluída ou pendente).

3. **Catálogo de Filmes:**
   - Crie um programa que permita adicionar e listar filmes, onde cada filme possui título, diretor e ano de lançamento.

4. **Controle de Gastos:**
   - Crie um programa que permita adicionar e listar despesas, onde cada despesa possui uma descrição, valor e data.

5. **Registro de Alunos:**
   - Crie um programa que permita cadastrar e listar alunos, onde cada aluno possui nome, idade e nota.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Objetos em JavaScript**
  [Objetos em JavaScript](https://www.youtube.com/watch?v=RJa3YrtN4Iw)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - Objetos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects)

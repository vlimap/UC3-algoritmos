
# Aula 18: Manipulação de Elementos

## Objetivos da Aula
- Compreender como alterar o conteúdo e os estilos dos elementos do DOM
- Aprender a adicionar e remover elementos do DOM
- Utilizar métodos de manipulação de elementos de forma eficiente

## Conteúdo

### Alterando Conteúdo de Elementos

Modificar o conteúdo dos elementos do DOM é uma tarefa comum em JavaScript. Existem várias maneiras de fazer isso, dependendo do que você precisa alterar.

#### Alterando o Texto

Para alterar o texto de um elemento, use a propriedade `textContent`.

```javascript
let element = document.getElementById('myElement');
element.textContent = 'Novo texto aqui!';
```

#### Alterando HTML Interno

Para inserir ou alterar o HTML dentro de um elemento, use a propriedade `innerHTML`.

```javascript
let element = document.getElementById('myElement');
element.innerHTML = '<strong>Texto em negrito</strong>';
```

### Alterando Estilos de Elementos

Alterar os estilos de um elemento pode ser feito diretamente através da propriedade `style`.

```javascript
let element = document.getElementById('myElement');
element.style.color = 'blue';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '20px';
```

### Adicionando e Removendo Elementos do DOM

Adicionar e remover elementos dinamicamente permite criar páginas web interativas e dinâmicas.

#### Criando e Adicionando Elementos

Para criar um novo elemento, use `document.createElement` e, em seguida, adicione-o ao DOM com `appendChild` ou `insertBefore`.

```javascript
let newElement = document.createElement('div');
newElement.textContent = 'Sou um novo elemento!';
document.body.appendChild(newElement);
```

#### Removendo Elementos

Para remover um elemento do DOM, use `removeChild`.

```javascript
let element = document.getElementById('myElement');
element.parentNode.removeChild(element);
```

### Métodos de Manipulação de Elementos

#### appendChild

Adiciona um novo nó ao final da lista de filhos de um elemento pai.

```javascript
let parent = document.getElementById('parentElement');
let child = document.createElement('div');
child.textContent = 'Filho';
parent.appendChild(child);
```

#### insertBefore

Insere um novo nó antes de um nó existente.

```javascript
let parent = document.getElementById('parentElement');
let child = document.createElement('div');
child.textContent = 'Novo filho';
let existingChild = document.getElementById('existingChild');
parent.insertBefore(child, existingChild);
```

#### removeChild

Remove um nó filho de um elemento pai.

```javascript
let parent = document.getElementById('parentElement');
let child = document.getElementById('childElement');
parent.removeChild(child);
```

#### replaceChild

Substitui um nó filho por outro.

```javascript
let parent = document.getElementById('parentElement');
let newChild = document.createElement('div');
newChild.textContent = 'Novo filho';
let oldChild = document.getElementById('oldChild');
parent.replaceChild(newChild, oldChild);
```

### Exemplos Práticos

#### Exemplo 1: Lista de Tarefas

Crie uma lista de tarefas onde o usuário pode adicionar e remover tarefas dinamicamente.

```javascript
let taskList = document.getElementById('taskList');
let addTaskButton = document.getElementById('addTask');
let taskInput = document.getElementById('taskInput');

addTaskButton.addEventListener('click', () => {
    let task = document.createElement('li');
    task.textContent = taskInput.value;
    taskList.appendChild(task);
    taskInput.value = '';
});

taskList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        taskList.removeChild(event.target);
    }
});
```

#### Exemplo 2: Galeria de Imagens

Crie uma galeria de imagens onde o usuário pode adicionar e remover imagens.

```javascript
let gallery = document.getElementById('gallery');
let addImageButton = document.getElementById('addImage');
let imageUrlInput = document.getElementById('imageUrl');

addImageButton.addEventListener('click', () => {
    let img = document.createElement('img');
    img.src = imageUrlInput.value;
    gallery.appendChild(img);
    imageUrlInput.value = '';
});

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        gallery.removeChild(event.target);
    }
});
```

#### Exemplo 3: Tabela Dinâmica

Crie uma tabela onde o usuário pode adicionar e remover linhas.

```javascript
let table = document.getElementById('dynamicTable');
let addRowButton = document.getElementById('addRow');
let rowDataInput = document.getElementById('rowData');

addRowButton.addEventListener('click', () => {
    let row = table.insertRow();
    let cell = row.insertCell(0);
    cell.textContent = rowDataInput.value;
    rowDataInput.value = '';
});

table.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
        table.deleteRow(event.target.parentNode.rowIndex);
    }
});
```

### Exercícios Práticos

1. **Lista de Compras:**
   - Implemente uma lista de compras onde o usuário pode adicionar itens com nome e quantidade e remover itens.

2. **Álbum de Fotos:**
   - Crie um álbum de fotos onde o usuário pode adicionar URLs de fotos e visualizar as imagens em uma galeria. Permita a remoção das fotos clicando nelas.

3. **Tabela de Registros:**
   - Implemente uma tabela de registros onde o usuário pode adicionar, editar e remover linhas. Cada linha deve ter campos para nome e idade.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Manipulação do DOM em JavaScript**
  [Manipulação do DOM em JavaScript](https://www.youtube.com/watch?v=wiozYyXQEVk)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - DOM Manipulation](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)

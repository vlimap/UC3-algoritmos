
# Aula 17: Introdução ao DOM

## Objetivos da Aula
- Compreender o que é o DOM (Document Object Model)
- Aprender a selecionar elementos no DOM usando JavaScript
- Manipular elementos do DOM

## Conteúdo

### Conceito de DOM

O DOM (Document Object Model) é uma interface de programação que permite scripts acessar e manipular o conteúdo, estrutura e estilo de documentos HTML e XML. Ele representa a página de maneira hierárquica, permitindo que os desenvolvedores naveguem e modifiquem a árvore de nós da página.

#### Vantagens do DOM
- **Interatividade:** Permite criar páginas web dinâmicas e interativas.
- **Acesso e Manipulação:** Facilita o acesso e a modificação dos elementos da página.

### Seleção de Elementos no DOM

JavaScript oferece várias maneiras de selecionar elementos no DOM. Os métodos mais comuns incluem:

#### getElementById

Seleciona um elemento pelo seu ID.

```javascript
let element = document.getElementById('myElement');
```

#### getElementsByClassName

Seleciona todos os elementos com uma determinada classe.

```javascript
let elements = document.getElementsByClassName('myClass');
```

#### getElementsByTagName

Seleciona todos os elementos de um determinado tipo de tag.

```javascript
let elements = document.getElementsByTagName('div');
```

#### querySelector

Seleciona o primeiro elemento que corresponde a um seletor CSS.

```javascript
let element = document.querySelector('.myClass');
```

#### querySelectorAll

Seleciona todos os elementos que correspondem a um seletor CSS.

```javascript
let elements = document.querySelectorAll('.myClass');
```

### Manipulação de Elementos do DOM

Uma vez que os elementos são selecionados, podemos manipular seu conteúdo, atributos e estilo.

#### Alterando o Conteúdo de Texto

```javascript
let element = document.getElementById('myElement');
element.textContent = 'Novo Conteúdo';
```

#### Alterando HTML Interno

```javascript
let element = document.getElementById('myElement');
element.innerHTML = '<strong>Novo Conteúdo</strong>';
```

#### Alterando Atributos

```javascript
let element = document.getElementById('myElement');
element.setAttribute('data-custom', 'valor');
```

#### Alterando Estilos

```javascript
let element = document.getElementById('myElement');
element.style.color = 'blue';
element.style.fontSize = '20px';
```

### Exemplos Práticos

#### Exemplo 1: Mudando o Texto de um Parágrafo

```javascript
let paragraph = document.getElementById('myParagraph');
paragraph.textContent = 'Texto alterado pelo JavaScript!';
```

#### Exemplo 2: Adicionando uma Classe a um Elemento

```javascript
let element = document.querySelector('.myElement');
element.classList.add('nova-classe');
```

#### Exemplo 3: Escondendo um Elemento

```javascript
let element = document.querySelector('.myElement');
element.style.display = 'none';
```

### Exercícios Práticos

1. **Manipulação de Texto:**
   - Selecione um parágrafo e altere seu texto usando JavaScript.

2. **Modificação de Atributos:**
   - Selecione uma imagem e altere seu atributo `src` para uma nova URL de imagem.

3. **Alteração de Estilos:**
   - Selecione um elemento e modifique suas propriedades de estilo, como cor de fundo e tamanho da fonte.

### Recursos Adicionais
Para apoiar o aprendizado, utilize os seguintes vídeos e recursos:

- **Vídeo: Introdução ao DOM em JavaScript**
  [Introdução ao DOM em JavaScript](https://www.youtube.com/watch?v=FIORjGvT0kk)
- **Documentação Oficial do JavaScript (MDN Web Docs)**
  [MDN Web Docs - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)

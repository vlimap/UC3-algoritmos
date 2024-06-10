
# Aula 1: Introdução ao JavaScript

## O que é JavaScript?

JavaScript é uma linguagem de programação de alto nível, dinâmica e interpretada, usada principalmente para criar e controlar conteúdo dinâmico em websites. Desenvolvida originalmente por Brendan Eich em 1995, enquanto trabalhava na Netscape Communications, a linguagem evoluiu rapidamente e tornou-se uma das principais tecnologias da web, ao lado de HTML e CSS.

- **Fonte**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## História do JavaScript

JavaScript foi criado em apenas 10 dias por Brendan Eich para a Netscape Navigator 2.0 em 1995. Originalmente chamado de Mocha, foi rapidamente renomeado para LiveScript e, finalmente, para JavaScript para atrair a popularidade do Java na época. A padronização da linguagem começou em 1996, resultando na criação do ECMAScript pela Ecma International. As versões subsequentes trouxeram muitos aprimoramentos e recursos modernos que conhecemos hoje.

- **Fonte**: [Wikipedia - History of JavaScript](https://en.wikipedia.org/wiki/JavaScript#History)
- **Fonte**: [ECMA International](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

## Onde e como usar JavaScript

### Uso no Navegador

JavaScript é amplamente utilizado em navegadores para criar websites interativos. Ele permite manipular o Document Object Model (DOM), que representa a estrutura HTML de uma página, permitindo criar, modificar e remover elementos dinamicamente.

### Uso no Servidor

Com o advento do Node.js, JavaScript também pode ser usado no lado do servidor, permitindo a criação de aplicações web completas utilizando apenas uma linguagem de programação.

### Ferramentas e Ambientes

Para começar a programar em JavaScript, você precisa de:
- Um editor de texto ou IDE (recomendamos VS Code)
- Um navegador web para testar seu código (Chrome, Firefox)
- Node.js para desenvolvimento no servidor

### Exemplos de Código

#### Executando no Navegador
Você pode incluir JavaScript diretamente em um arquivo HTML:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Meu Primeiro Programa JavaScript</title>
</head>
<body>
    <h1>Olá, Mundo!</h1>
    <script>
        document.querySelector('h1').textContent = 'Olá, JavaScript!';
    </script>
</body>
</html>
```

#### Executando no Node.js
Primeiro, instale o Node.js a partir do [site oficial](https://nodejs.org/).

Depois, crie um arquivo `app.js` com o seguinte conteúdo:

```javascript
console.log('Olá, Node.js!');
```

Execute o arquivo no terminal:

```sh
node app.js
```

## Extensões Recomendadas para Visual Studio Code

### Instalação do VS Code
Você pode baixar e instalar o Visual Studio Code a partir do [site oficial](https://code.visualstudio.com/).

### Extensões Necessárias

1. **ESLint**
   - Descrição: ESLint é uma ferramenta de linting para JavaScript que ajuda a identificar e corrigir problemas no código.
   - Instalação: Abra o VS Code, vá para a aba de Extensões (ícone de quadrado com um recorte) e procure por "ESLint". Clique em "Instalar".

2. **Prettier - Code formatter**
   - Descrição: Prettier é um formatador de código que ajuda a manter um estilo consistente.
   - Instalação: Abra o VS Code, vá para a aba de Extensões e procure por "Prettier - Code formatter". Clique em "Instalar".

3. **JavaScript (ES6) code snippets**
   - Descrição: Fornece snippets de código para JavaScript ES6, facilitando a escrita de código moderno.
   - Instalação: Abra o VS Code, vá para a aba de Extensões e procure por "JavaScript (ES6) code snippets". Clique em "Instalar".

4. **Live Server**
   - Descrição: Live Server lança um servidor local com recarregamento automático para testes rápidos de desenvolvimento web.
   - Instalação: Abra o VS Code, vá para a aba de Extensões e procure por "Live Server". Clique em "Instalar".

5. **Bracket Pair Colorizer**
   - Descrição: Esta extensão colore os pares de colchetes correspondentes, facilitando a leitura do código.
   - Instalação: Abra o VS Code, vá para a aba de Extensões e procure por "Bracket Pair Colorizer". Clique em "Instalar".


## Recursos Adicionais

### Documentação Oficial

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMA International](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

### Vídeos em Português

1. **[Curso de JavaScript para Iniciantes - Gustavo Guanabara](https://www.youtube.com/watch?v=1-w1RfGIov4)**
   - Canal: Curso em Vídeo
   - Descrição: Um curso completo e gratuito que cobre desde os conceitos básicos até tópicos mais avançados.

2. **[JavaScript - Guia do Programador Iniciante - Programador a Bordo](https://www.youtube.com/watch?v=i6Oi-YtXnAU)**
   - Canal: Programador a Bordo
   - Descrição: Um vídeo introdutório sobre JavaScript, cobrindo os primeiros passos na linguagem.

3. **[Introdução ao JavaScript - Filipe Deschamps](https://www.youtube.com/watch?v=W1Kttu53qTg)**
   - Canal: Filipe Deschamps
   - Descrição: Vídeo explicativo sobre a linguagem JavaScript e suas principais características.

### Livros Recomendados

- **Eloquent JavaScript** de Marijn Haverbeke: [Link para o livro](https://eloquentjavascript.net/)
- **JavaScript: The Good Parts** de Douglas Crockford: [Link para o livro](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)

### Comunidades e Fóruns

- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
- [Reddit - r/javascript](https://www.reddit.com/r/javascript/)
- [GitHub](https://github.com/topics/javascript)

---

Esta aula proporciona uma introdução abrangente ao JavaScript, cobrindo seus fundamentos, história e usos, com referências e recursos adicionais para aprofundamento.

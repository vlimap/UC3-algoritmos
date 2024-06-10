
# Aula 2: Configuração do Ambiente de Desenvolvimento

## Instalando um Editor de Texto (VS Code)

Visual Studio Code (VS Code) é um editor de código-fonte leve e poderoso, com suporte embutido para JavaScript e Node.js. Ele também possui um vasto ecossistema de extensões que melhoram a produtividade dos desenvolvedores.

### Passo a Passo para Instalar o VS Code

1. **Baixar o VS Code**
   - Acesse o site oficial do VS Code: [code.visualstudio.com](https://code.visualstudio.com/)
   - Clique em "Download" e selecione a versão apropriada para o seu sistema operacional (Windows, macOS, ou Linux).

2. **Instalar o VS Code**
   - Siga as instruções do instalador para concluir a instalação.

3. **Configurar o VS Code**
   - Abra o VS Code.
   - Personalize suas configurações de acordo com suas preferências através do menu `File` > `Preferences` > `Settings`.

### Extensões Recomendadas para VS Code

1. **ESLint**
   - Ajuda a identificar e corrigir problemas no código JavaScript.
2. **Prettier - Code formatter**
   - Mantém o estilo do código consistente.
3. **JavaScript (ES6) code snippets**
   - Facilita a escrita de código moderno com snippets de código.
4. **Live Server**
   - Lança um servidor local com recarregamento automático.
5. **Bracket Pair Colorizer**
   - Colore os pares de colchetes correspondentes, facilitando a leitura do código.

### Configuração Inicial

Adicione as seguintes configurações ao arquivo `settings.json` do VS Code para otimizar seu ambiente de desenvolvimento:

```json
{
    "editor.formatOnSave": true,
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact"
    ],
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5",
    "prettier.jsxSingleQuote": true
}
```

## Configuração do Node.js e npm

Node.js é um ambiente de tempo de execução JavaScript que permite executar JavaScript no servidor. npm (Node Package Manager) é o gerenciador de pacotes para Node.js.

### Passo a Passo para Instalar o Node.js e npm

1. **Baixar o Node.js**
   - Acesse o site oficial do Node.js: [nodejs.org](https://nodejs.org/)
   - Baixe a versão LTS (Long Term Support) recomendada.

2. **Instalar o Node.js**
   - Siga as instruções do instalador para concluir a instalação.
   - O npm será instalado automaticamente junto com o Node.js.

3. **Verificar a Instalação**
   - Abra um terminal e execute os seguintes comandos para verificar se o Node.js e o npm foram instalados corretamente:
     ```sh
     node -v
     npm -v
     ```
   - Esses comandos devem retornar as versões instaladas do Node.js e npm, respectivamente.

## Ferramentas de Desenvolvimento

Além do VS Code e Node.js, outras ferramentas podem melhorar a produtividade do desenvolvimento JavaScript.

### Git

Git é um sistema de controle de versão distribuído que permite gerenciar e acompanhar alterações no código.

#### Passo a Passo para Instalar o Git

1. **Baixar o Git**
   - Acesse o site oficial do Git: [git-scm.com](https://git-scm.com/)
   - Baixe a versão apropriada para o seu sistema operacional.

2. **Instalar o Git**
   - Siga as instruções do instalador para concluir a instalação.

3. **Configurar o Git**
   - Abra um terminal e configure seu nome de usuário e email:
     ```sh
     git config --global user.name "Seu Nome"
     git config --global user.email "seu.email@exemplo.com"
     ```

### Navegadores de Desenvolvimento

Para testar e depurar seu código JavaScript no navegador, os seguintes navegadores são recomendados:

- **Google Chrome**: Possui ferramentas de desenvolvedor robustas.
- **Mozilla Firefox**: Inclui o Firefox Developer Edition, projetado especificamente para desenvolvedores web.

### Ferramentas de Linha de Comando

- **npx**: Ferramenta incluída com npm que permite executar pacotes npm sem instalá-los globalmente.
- **http-server**: Um servidor HTTP simples para testes locais.
  ```sh
  npm install -g http-server
  ```

## Recursos Adicionais

### Documentação Oficial

- [Node.js](https://nodejs.org/en/docs/)
- [npm](https://docs.npmjs.com/)
- [Git](https://git-scm.com/doc)

### Vídeos em Português

1. **[Instalando e Configurando o VS Code - Fabio Scopeta](https://www.youtube.com/watch?v=FN4HDAp6gSQ)**
   - Canal: Fabio Scopeta
   - Descrição: Guia passo a passo para instalar e configurar o Visual Studio Code.

2. **[Instalação do Node.js e npm - Curso em Vídeo](https://www.youtube.com/watch?v=1JXLxpSNtS8)**
   - Canal: Curso em Vídeo
   - Descrição: Tutorial sobre como instalar e configurar o Node.js e npm.

3. **[Git e GitHub para Iniciantes - Rodrigo Branas](https://www.youtube.com/watch?v=UBAX-13g8OM)**
   - Canal: Rodrigo Branas
   - Descrição: Introdução ao Git e GitHub para controle de versão.

### Comunidades e Fóruns

- [Stack Overflow](https://stackoverflow.com/questions/tagged/node.js)
- [Reddit - r/node](https://www.reddit.com/r/node/)
- [GitHub](https://github.com/)

---

Esta aula proporciona uma introdução completa à configuração do ambiente de desenvolvimento para JavaScript, incluindo a instalação e configuração de VS Code, Node.js, npm e outras ferramentas essenciais.

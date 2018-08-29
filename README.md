<h1 align="center">
  <img src="images/nerd-fonts-logo.svg" alt="Mychecklist" />
</h1>

<div align="center">

![Depfu](https://img.shields.io/depfu/depfu/example-ruby.svg)
![GitHub issues](https://img.shields.io/github/issues-raw/badges/shields.svg)
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)
![GitHub followers](https://img.shields.io/github/followers/espadrine.svg?style=social&label=Follow)

![node](https://img.shields.io/node/v/passport.svg)
<a href="#patched-fonts" title=""><img src="https://raw.githubusercontent.com/wiki/ryanoasis/nerd-fonts/images/faux-shield-badge-os-logos.svg?sanitize=true" alt="Nerd Fonts - OS Support"></a>

</div>

**Mychecklist** In this bussy time, we all need some one to guide what to do. This app will help everyone to find different types of checklist they need. For example we have a big birthday celebration and a bunch of people are working on that how everyone will coordinate and how everyone will know what all we need to do. So here comes this app, they will find a birthday plan checklist and they can use it. Once a person have regiested with the app they can also share that checklist and they can also create their own. 

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v8.11.3

    $ npm --version
    6.4.0

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git https://github.com/palpalikta/mychecklist.git
    $ cd Mychecklist
    $ npm install

### Configure app

Copy `config.sample.js` to `config.js` then edit it with the url where you have setup:
copy `.env.sample` to `.env` then edit all the database and security related configuration

- backend api
- oauth like endpoint for auth
- development

## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

**Note:** Unix user can just link the `git-hooks/post-merge`:

## Code style

![Code style](/images/code-style.png)

<a name="code-style-check"></a>

### Some code style guidelines

- Use stage-2 and higher JavaScript (modern) syntax for new projects. For old project stay consistent with existing syntax unless you intend to modernise the project.

  _Why:_

  > This is all up to you. We use transpilers to use advantages of new syntax. stage-2 is more likely to eventually become part of the spec with only minor revisions.

- Include code style check in your build process.

  _Why:_

  > Breaking your build is one way of enforcing code style to your code. It prevents you from taking it less seriously. Do it for both client and server-side code. [read more...](https://www.robinwieruch.de/react-eslint-webpack-babel/)

- Use [ESLint - Pluggable JavaScript linter](http://eslint.org/) to enforce code style.

  _Why:_

  > We simply prefer `eslint`, you don't have to. It has more rules supported, the ability to configure the rules, and ability to add custom rules.

- We use [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) for JavaScript, [Read more](https://www.gitbook.com/book/duk/airbnb-javascript-guidelines/details). Use the javascript style guide required by the project or your team.

* Use local modules instead of using globally installed modules.

  _Why:_

  > Lets you share your tooling with your colleague instead of expecting them to have it globally on their systems.

- Always comment and keep them relevant as code changes. Remove commented blocks of code.

  _Why:_

  > Your code should be as readable as possible, you should get rid of anything distracting. If you refactored a function, don't just comment out the old one, remove it.

- Avoid irrelevant or funny comments, logs or naming.

  _Why:_

  > While your build process may(should) get rid of them, sometimes your source code may get handed over to another company/client and they may not share the same banter.

- Make your names search-able with meaningful distinctions avoid shortened names. For functions use long, descriptive names. A function name should be a verb or a verb phrase, and it needs to communicate its intention.

  _Why:_

  > It makes it more natural to read the source code.

- Organize your functions in a file according to the step-down rule. Higher level functions should be on top and lower levels below.

  _Why:_

  > It makes it more natural to read the source code.

  - Organize your files around product features / pages / components, not roles. Also, place your test files next to their implementation.

    ```
    .
    ├── controllers
    |   ├── product.js
    |   └── user.js
    ├── models
    |   ├── product.js
    |   └── user.js
    ```

* Load your deployment specific configurations from environment variables and never add them to the codebase as constants.

  _Why:_

  > You have tokens, passwords and other valuable information in there. Your config should be correctly separated from the app internals as if the codebase could be made public at any moment.

  _How:_

  > `.env` files to store your variables and add them to `.gitignore` to be excluded. Instead, commit a `.env.example` which serves as a guide for developers. For production, you should still set your environment variables in the standard way.

  > <a name="enforcing-code-style-standards"></a>

- Use a [.editorconfig](http://editorconfig.org/) file which helps developers define and maintain consistent coding styles between different editors and IDEs on the project.

  _Why:_

  > The EditorConfig project consists of a file format for defining coding styles and a collection of text editor plugins that enable editors to read the file format and adhere to defined styles. EditorConfig files are easily readable and they work nicely with version control systems.

- Have your editor notify you about code style errors. Use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) and [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) with your existing ESLint configuration. [read more...](https://github.com/prettier/eslint-config-prettier#installation)

- Consider using Git hooks.

  _Why:_

  > Git hooks greatly increase a developer's productivity. Make changes, commit and push to staging or production environments without the fear of breaking builds. [read more...](http://githooks.com/)

- Use Prettier with a precommit hook.

  _Why:_

  > While `prettier` itself can be very powerful, it's not very productive to run it simply as an npm task alone each time to format code. This is where `lint-staged` (and `husky`) come into play. Read more on configuring `lint-staged` [here](https://github.com/okonet/lint-staged#configuration) and on configuring `husky` [here](https://github.com/typicode/husky).

## Project Structure

- **`public`**: contains built files for distribution

- **`server`**: contains sourse code for the API. They are built in the Node/express
  - **`config`**: All the build configuration for third party API and database
  - **`models`**: contain all the database schema
  - **`controller`**: they contain all the logical operation
  - **`routes`**: they contain all the routes handeling for API
- **`test`**: contains all tests.

- **`src`**: contains the source code for the frontend layout. The codebase is written in React(ES2015).

  - **`components`**: contains code for the component templates.

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.
- [Bootsrap](http://getbootstarp.com/) as a teamplating framework.

### JavaScript

- [ESLint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [prettei](https://npmjs.org/package/jscs) is used to check coding conventions.
- [React](http://facebook.github.io/react) is used for UI.

### Plugins

- [express] .
- [jsonwebtoken].
- [mongoose]
g
### build Tools

- [Web Pack] .
- [babel].

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

---

Sources:
[Awesome Readme](https://github.com/matiassingers/awesome-readme),
[RisingStack Engineering](https://blog.risingstack.com/),
[Mozilla Developer Network](https://developer.mozilla.org/),
[Heroku Dev Center](https://devcenter.heroku.com),
[Airbnb/javascript](https://github.com/airbnb/javascript),
[Atlassian Git tutorials](https://www.atlassian.com/git/tutorials),
[Apigee](https://apigee.com/about/blog),
[Wishtack](https://blog.wishtack.com)

Icons by [icons8](https://icons8.com/)

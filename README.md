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

**Mychecklist** is a project that allow user to share theri checklist or find the checklist that they want

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

Copy `config.sample.json` to `config.json` then edit it with the url where you have setup:

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

## Enable git hooks (unix only :/)

    $ npm run create-hook-symlinks

### `post-merge` (≃ `npm install`)

This hook will `npm prune && npm install` each time you `git pull` something if the `package.json` has been modified.

### `pre-commit` (≃ `npm test`)

This hook will just ensure you will commit something not broken bye pruning npm packages not in the `package.json` & eventually reinstall missings/not correctly removed packages.
Then it will try a production build.

---

## Languages & tools

### HTML

- [Jade](http://jade-lang.com/) for some templating.
- [Bootsrap](http://getbootstarp.com/) as a teamplating framework.

### JavaScript

- [ESLint](http://www.jshint.com/docs/) is used to prevent JavaScript error.
- [prettei](https://npmjs.org/package/jscs) is used to check coding conventions.
- [React](http://facebook.github.io/react) is used for UI.

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

# client-boilerplate

An angular seed project.  Contains the front-end only.  Use the server-boilerplate project for backend seed.  See the `technology_stack.md` document to find out what versions of software are known to be compatible.

Application specific code and content should be placed in a single source directory (usually `src`) 

## Running Locally

Make sure you have [Node.js](http://nodejs.org/), [bower](http://bower.io), and [karma-cli]()installed.  A working vagrant devbox that supports this app is avaiable at [https://github.com/ErikEvenson/devbox](https://github.com/ErikEvenson/devbox).

```sh
$ git clone git@github.com:ErikEvenson/client-boilerplate.git # or clone your own fork
$ cd client-boilerplate
$ npm install
$ bower install
```
## Gulp tasks

- `gulp` -- the default task will...
aws
browserify
build
clean
lint
server
templates
test
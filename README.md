# lazeez

![Node.js Build](https://github.com/dearoneesama/lazeez/workflows/Node.js%20Build/badge.svg)

`npm install lazeez`


#### Provided functions

```ts
function goToLazeez(): Promise<void>;
```

Go to Lazeez.

Usage:
```js
const { goToLazeez } = require('lazeez');

console.log('taking you to lazeez');
goToLazeez()
    .then(() => console.log('have fun!'))
    .catch(e => console.log(e));
```

#### CLI

```bash
% npx lazeez
```

Takes you to lazeez.

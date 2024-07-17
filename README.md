# VerbsJS

VerbsJS is a small library used for writing unit test descriptions. We take the verbs in English and use a boolean to determine which form of the verb to use. This allows me to use the verbs dynamically.

## Usage 

You can include this as a submodule easily:

```
git submodule add https://github.com/jauntyjocularjay/VerbsJS.git path/to/modules
```

## Import for CommonJS

In your test files include the following import statement:

```js
const {
    getCounter,
    throwsAnError,
    contains,
    did,
    does,
    have,
    has,
    is,
    matches,
    recognizes
} = require('path/to/Verbs.cjs')
```

## Import for ES6

```js
import {
    getCounter,
    throwsAnError,
    contains,
    did,
    does,
    have,
    has,
    is,
    matches,
    recognizes
} from 'path/to/Verbs.mjs'
```

## Developer Instructions

### Setup


### Testing

After setting up with the command above, you can verify your changes do not break the existing tests by running:

```
npm test
```

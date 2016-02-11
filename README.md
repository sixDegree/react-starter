## React Basic Feacture Demo

## Babel Demo

### Use Babel in front directly

1. fail to load the file unless it's served via HTTP. 
2. don't use require(xxx) in babelTet-1.jsx

```html
<script type="text/javascript" src="bower_components/babel/browser.min.js"></script>
<script type="text/babel" src="babelTest-1.jsx"></script>
```


### Use builded JS (1)

don't use require(xxx) in babelTet-1.jsx

```
npm install babel-cli -g
npm install babel-preset-react --save-dev
babel --presets react babelTest-1.jsx -o babelTest-1.js
```

```html
<script type="text/javascript" src="babelTest-1.js"></script>
```


### Use builded JS (2)

use require(xxx) in babelTet-2.jsx

```
npm install browserify -g
npm install babelify@6.4
browserify babelTest-2.jsx -t babelify -o babelTest-2.js --extension .jsx 
```

```html
<script type="text/javascript" src="babelTest-2.js"></script>
```


## Isomorphic Demo

### Demo1

```html
<script type="text/javascript" src="bower_components/babel/browser.min.js"></script>
<script type="text/babel" src="isomorphicTest-1.jsx"></script>
```

exec `http-server` or `node server`

### Demo2

```
browserify isomorphicTest-2.jsx -t babelify -o isomorphicTest-2.js --extension .jsx
```

```html
 <script type="text/javascript" src="isomorphicTest-2.js"></script>
```

exec `node server`

A [babel-transfrom-imports](https://bitbucket.org/amctheatres/babel-transform-imports) plugin for [react-icons](https://github.com/gorangajic/react-icons)

## Getting Started

```
$ yarn add --dev transform-imports-react-icons babel-plugin-transform-imports 

# .babelrc

  plugins: [
    ['transform-imports', {
      'react-icons': { transform: 'transform-imports-react-icons/index.js' }
    }]
  ]


# App.js

  import { MdHome } from 'react-icons'
  // which will transpile into `import MdHome from 'react-icons/lib/md/home'`
```


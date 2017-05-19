const kebabCase = require('lodash.kebabcase')

module.exports = function(importName) {
  const name = kebabCase(importName).replace(/-/, '/')
  return `react-icons/lib/${name}`
}

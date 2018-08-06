const path = require('path')
const resolveAliasPath = (moduleAliases) => {
  for (let key in moduleAliases) {
    moduleAliases[key] = path.resolve(process.cwd(), moduleAliases[key])
  }
  return moduleAliases
}
module.exports = {
  resolveAliasPath
}

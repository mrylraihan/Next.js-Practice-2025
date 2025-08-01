const fs = require('node:fs/promises');
const testTernaray = (data) => {
  return { name: data || [] }
}

console.log(testTernaray())
console.log(testTernaray('mike'))



function storePosts(name) {
  fs.readFile('test.json', { encoding: 'utf-8' })
    .then(rawFileContent => JSON.parse(rawFileContent))
    .then(data=>{
      fs.writeFile('test.json', JSON.stringify({ names: [name, ...data.names] }))
      return { names: [name, ...data.names] }
    })
    .then(console.log)

  
  
}
storePosts("larrry")
const nameList = ['Wayel', 'Raihan', 'mike', 'john', 'doe']

const printName = (name)=>{
    console.log(name)
}

const firstName = printName.bind(this, nameList[0])
firstName()

const person1 = {
    name: 'Wayel',
}
function printNameObj() {
    console.log(this.name)
}


const testPrintNameObj = printNameObj.bind(person1)
testPrintNameObj()

printNameObj.call(person1)
printNameObj.apply(person1)

const printTest = console.log.bind(null, 'Hello World')
printTest()

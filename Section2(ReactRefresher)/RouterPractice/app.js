const numList = [1,2,3,4,5,6]

const newList = numList.filter((num, idx) => {
    console.log(num)
    console.log("index", idx)
    return num
})

console.log(newList)



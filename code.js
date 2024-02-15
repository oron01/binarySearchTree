function Node(value,leftChildren,rightChildren) {
    return {
        value:value,
        leftChildren:leftChildren,
        rightChildren:rightChildren,
    }
}

function Tree(array) {
    let root = buildTree(array)
}

function buildTree(array) {

    let iteratorSort = (halfOne,halfTwo) => {
        let newArray = []
        console.log(Array.isArray(halfOne))
        console.log(halfOne)
        console.log(Array.isArray(halfTwo))
        console.log(halfTwo)
    
        while (halfOne.length !== 0 || halfTwo.length !== 0) {
            if (halfOne.length !== 0) {
                if (halfOne[0] >= halfTwo[0] && halfTwo.length !== 0) {
                    newArray.push(halfTwo.shift())
                    
                }
                else if (halfOne[0] < halfTwo[0] && halfTwo.length !== 0) {
                    newArray.push(halfOne.shift())
                }
                else if (halfTwo.length == 0) {
                    newArray.push(halfOne.shift())
                }
            }
            else if (halfTwo.length !== 0) {
                newArray.push(halfTwo.shift())
        }
        }
        return newArray
    
    }

    let mergeSortArray = (array) => {
        if (array.length == 1) { return array[0]}
        let slicedArray = array.slice()
        let first = slicedArray.splice(0, (array.length / 2))
        let second = slicedArray
        first = mergeSortArray(first)
        halfTwo = mergeSortArray(second)
        let sorted = iteratorSort(first,second)
        return sorted
    
    }

    // let mergeSort = (array) => {
    //     if (array.length == 1) return [array[0]]
    
    //     else {
    //         let slicedArray = array.slice()
    //         let first = slicedArray.splice(0 ,(array.length / 2))
    //         first = mergeSort(first)
    //         let second = slicedArray
    //         second = mergeSort(second)
    //         let sorted = iteratorSort(first,second)
    //         return sorted
    // }
    // }

    console.log(mergeSortArray(array))
}



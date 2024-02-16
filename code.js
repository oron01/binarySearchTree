function Node(value,leftChildren,rightChildren) {
    return {
        data:value,
        left:leftChildren,
        right:rightChildren,
    }
}

function Tree(array) {
    let root = buildTree(array)
}

function buildTree(array) {

    let compareSort = (one,two) => {
        let sorted = []
        while (one.length !== 0 || two.length !== 0) {
            if (one.length > 0 && two.length > 0) {
                if (one[0] > two[0]) {
                    sorted.push(two[0])
                    two.shift()
                }
                else {
                    sorted.push(one[0])
                    one.shift()
                }
            }
            else if (one.length == 0) {
                sorted.push(two[0])
                two.shift()
            }
            else {
                sorted.push(one[0])
                one.shift()
            }

        }
        return sorted

    }

    let mergeSort = (arr) => {
        if (arr.length == 1) return arr
        else {
        let array = arr.slice()
        let firstHalf = array.splice(0, array.length/2)
        firstHalf = mergeSort(firstHalf)
        let secondHalf = array.slice()
        secondHalf = mergeSort(secondHalf)
        return [...compareSort(firstHalf,secondHalf)]}
    }

    console.log(mergeSort(array))

    let sortedList = mergeSort(array)

    let removeDupes = (array) => {
        let newArr = []
        for (let i = 0; i < array.length ; i++) {
            if (newArr.includes(array[i])) {}
            else {newArr.push(array[i])}
        }
        return newArr
    }

    sortedList = removeDupes(sortedList)

    let createBST = (list) => {
        if (list.length == 0) {return null}
        else if (list.length == 1) return Node(list[0],null,null)
        else {
            let middle = list.length / 2
            let leftHalf = list.slice(0,middle)
            let rightHalf = list.slice(middle+1)
            middle = list[Math.floor(middle)]
            leftHalf = createBST(leftHalf)
            rightHalf= createBST(rightHalf)
            return Node(middle,leftHalf,rightHalf)
        }
    }

    const prettyPrint = (node, prefix = "", isLeft = true) => {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
  
      prettyPrint(createBST(sortedList))
}

/*
create a function for a bst
recieve a sorted list
get the center element,
*/
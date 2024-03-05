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

    let insertValue = (value,node) => {
        if (value > node.data) {
            if (node.right !== null) {
                insertValue(value,node.right)
            }
            else {node.right = Node(value,null,null)}
        }
        else if (value < node.data) {
            if (node.left !== null) {
                insertValue(value,node.left)
            }
            else (node.left = Node(value,null,null))
        }
    }

let findNode = (value,currentNode) => {
    if (value == currentNode.data) {
        alert(currentNode)
        return currentNode}
    else if (value > currentNode.data && currentNode.right !== null) {return findNode(value,currentNode.right)}
    else if (value < currentNode.data && currentNode.left !== null) {return findNode(value,currentNode.left)}
    else {return null}
}

    let removeValue = (value,node) => {
        let findNode = (value,node) => {
            if (value == node.data) return node
            else if (value > node.data && node.right !== null) {return findNode(value,node.right)}
            else if (value < node.data && node.left !== null) {return findNode(value,node.left)}
            else {return null}
        }
        let findParentNode = (targetNode,node) => {
            if (node.left == targetNode || node.right == targetNode) {
                if (node.left == targetNode) return {parentNode: node,side: "left"}
                else return {parentNode:node,side:"right"}
            }
            else if (node.data < targetNode.data) {
                return findParentNode(targetNode,node.right)
            }
            else if (node.data > targetNode.data) {
                return findParentNode(targetNode,node.left)
            }
        }
        let targetNode = findNode(value,node)
        let parentNode = findParentNode(targetNode,node)
        if (targetNode.left == null && targetNode.right == null) {
            parentNode.parentNode[parentNode.side] = null
        }
        else if (targetNode.left !== null && targetNode.right !== null) {
            let findNextBiggest = (currentSearchNode) => {
                if (currentSearchNode.left == null) return currentSearchNode
                else {return findNextBiggest(currentSearchNode.left)}
            }

            let nextBiggest = findNextBiggest(targetNode.right)
            removeValue(nextBiggest.data,node)            
            parentNode.parentNode[parentNode.side].data = nextBiggest.data
        }
        else {
            parentNode.parentNode[parentNode[side]] = targetNode[parentNode.side]
        }

    }

    const levelOrder = (callback=null,node) => {
        let nodeList = []
        let visitList = [node]
        let getNodeList = (node,visitList) => {
        nodeList.push(node)
        let leftChild
        let rightChild
        console.log(node)
        if (node.right && node.left) {
            leftChild = node.left
            rightChild = node.right
            visitList.push(leftChild)
            visitList.push(rightChild)
        }
        else if (node.right !== null) {
            rightChild = node.right
            visitList.push(rightChild)
        }
        else if (node.left !== null) {
            leftChild = node.left
            visitList.push(leftChild)
        }
        visitList.shift()
        if (visitList[0]) {
        getNodeList(visitList[0],visitList)}
    }
    getNodeList(node,visitList)
    if (callback !== null) {
    callback(nodeList)}
    else {return nodeList}

    }

let preOrderTransversal = (node) => {
    let nodeList = []
    let getNodeList = (node) => {
        nodeList.push(node)
        if (node.left) {
            getNodeList(node.left)
        }
        if (node.right) {
            getNodeList(node.right)
    }
}
    getNodeList(node)
    console.log(nodeList)
    return nodeList
}

let postOrderTransversal = (node) => {
    let nodeList = []
    let getNodeList = (node) => {
        if (node.left) {
            getNodeList(node.left)
        }
        if (node.right) {
            getNodeList(node.right)}
        nodeList.push(node)
    }
    getNodeList(node)
    console.log(nodeList)
    return nodeList
}

let inOrderTransversal = (node) => {
    let nodeList = []
    let getNodeList = (node) => {
        if (node.left) {
            getNodeList(node.left)
        }
        nodeList.push(node)
        if (node.right) {
            getNodeList(node.right)
        }
    }
    getNodeList(node)
    console.log(nodeList)
    return nodeList
}

const depth = (node) => {
    let depth = 0
    let transverseTree = (currentNode) => {
        if (currentNode.data > node.data && currentNode.left) {
            depth += 1
            transverseTree(currentNode.left)
        }
        else if (currentNode.data < node.data && currentNode.right) {
            depth += 1
            transverseTree(currentNode.right)
        }
        else if (currentNode.data == node.data) {
            alert("babonag")
            return depth
        }
        else {
            alert(`${currentNode.data} ${node.data}`)
            throw console.error("node doesn't exist")};
    }
    transverseTree(first)
    return depth

}

const height = (currentNode,targetNode) => {
    let totalHeight = 0
    let leafNode
    let getHeightValue = (currentNode) => {
        if (!currentNode) {console.error("Doesn't exist")}
        else if (currentNode.data > targetNode.data) {
            leftVal = getHeightValue(currentNode.left)
        }
        else if (currentNode.data < targetNode.data) {
            rightVal = getHeightValue(currentNode.right)
        }
        else if (currentNode.data == targetNode.data) {
            let transverse = (node,height=0) => {
                if (node.right) {
                    transverse(node.right,height+1)
                }
                if (node.left) {
                    transverse(node.left,height+1)
                }
                else if (!node.left && !node.right) {
                    if (height > totalHeight) {
                        totalHeight = height
                        leafNode = node
                    }
                }
            }
            transverse(currentNode)
        }
    }
    getHeightValue(currentNode)
    return totalHeight

}

const isBalanced = (node) => {
    let balance = true
    let getBalanceValue = (currentNode,balanced=true) => {
        let rightVal = 0
        let leftVal = 0

        if (balanced == false) {return balance = false}
        if (currentNode.left) {
            leftVal = getBalanceValue(currentNode.left)
            leftVal += 1
        }
        if (currentNode.right) {
            rightVal = getBalanceValue(currentNode.right)
            rightVal += 1
        }
        console.log(rightVal,leftVal)
        if (rightVal > leftVal + 1 || leftVal > rightVal + 1) {
            balance = false
        }
        return rightVal + leftVal
        }
        getBalanceValue(node)
        return balance
    }

const rebalance = (node) => {
    let array = inOrderTransversal(node)
    let newArr = []
    for (let i = 0; i < array.length ; i++) {
        newArr[i] = array[i].data 
    }
    console.log(newArr)
    let balancedTree = buildTree(newArr)
    return balancedTree
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
      
      let first = createBST(sortedList)
      prettyPrint(first)
    //   removeValue(5,first)
      insertValue(3,first)
      prettyPrint(first)
      let obama = levelOrder(null,first)
      let borrack = preOrderTransversal(first)
      let dat = postOrderTransversal(first)
      let president = inOrderTransversal(first)
      let lol = depth(findNode(3,first),first)
      let balamciaga = isBalanced(first)
      prettyPrint(first)
      return {prettyPrint,findNode,insertValue,first,obama,borrack,dat,president,lol,balamciaga,rebalance,isBalanced,height}
}

/*
create a function for a bst
recieve a sorted list
get the center element,
*/
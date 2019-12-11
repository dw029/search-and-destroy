'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    var currentNode = linkedlist.head
    const cache = {};
    while (currentNode.next) {
        if (currentNode.value.toString() in cache) {
            return true;
        } else {
            cache[currentNode.value.toString()] = currentNode.value.toString();
        }
        currentNode = currentNode.next
    }
    return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop

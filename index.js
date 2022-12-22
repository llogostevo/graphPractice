/* 
  ########################################################
            Setting up an Adjacency Matrix
  ########################################################
*/
// array to identify the nodes in the matrix
graphNodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

graphConnectionsMatrix = [
  [0, 1, 0, 0, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 1, 0]
]

/* 
  ########################################################
            SIMPLE OUTPUT OF ALL CONNECTIONS
  ########################################################
*/
// loop through graph nodes list
for (let i = 0; i < graphNodes.length; i++) {
  // output the graphNode
  console.log(`Node: ${graphNodes[i]} is connected to:`)
  // loop through the graphNodes Matrix
  for (let j = 0; j < graphNodes.length; j++) {
    // if the matrix contains a 1 then it is a connection, output the connection
    if (graphConnectionsMatrix[i][j] == 1) {
      console.log(`  ${graphNodes[j]}`)
    }
  }
}


/* 
  ########################################################
  ########################################################
          Traversal of the Graph using an array queue
  ########################################################
  ########################################################

*/

// - 1a - create a queue
// Queue as an array
const arrayQueue = [null, null, null, null, null, null, null, null]
// set variables to track the front and rear of the queue
let rear = -1;
let front = 0;

function isFull() {
  // check if all elements are taken
  if (front + rear == 7) {
    return true;
  } else {
    return false;
  }
}

function isEmpty() {
  // check if the rear is set to minus 1 which means it is empty
  if (front - rear == -1) {
    return true;
  } else {
    return false;
  }
}

function enqueue(vertex, queue) {
  if (!isFull()) {
    //increment rear to add new vertex
    //use mod to return to start of array if reached end of physical array
    rear = (rear + 1) % 8
    //add the vertex to the rear
    queue[rear] = vertex;
  } else {
    console.log("Error: Queue is Full")
  }
}

function dequeue(queue) {
  if (!isEmpty()) {
    //increment front to add make the adjacent vertex the front of the queue
    //use mod to return to start of array if reached end of physical array
    front = (front + 1) % 8
    return queue[front - 1];
  } else {
    console.log("Error: Queue is empty")
  }
}

function peek(queue) {
  return queue[front];
}


console.log(arrayQueue)

//1b enqueue the starting node
let start = graphNodes[0]
enqueue(start,arrayQueue)

//TESTING PURPOSES
console.log(start)
console.log(arrayQueue)

// - 2 - create a set (or array) to store visited nodes
let visited = [];

// - 3 - while the queue is not empty, repeat steps 4 -6
    //- 4. Dequeue the first node
    //- 5. Carry out action on the dequeued node
        //- e.g if you are trying to find a particular node this would be where you would check if it matched a value
        //- if you are just trying to output each element then you can print this nodes relevant value
    //- 6. for each unvisited neighbour, add it to the visited nodes and to the back of the queue


/* ########################################################
Breadth First Search
########################################################
*/

// set first node as 
//
//
//
//

/*
########################################################
Depth First Search
########################################################
*/



/*
#######################################################################
###################################################################
Traversal of the Graph using an Object Linked List as queue
#######################################################################
#######################################################################

*/

// - 1 - create a queue, enqueue the starting node

// Queue as a linked list object
// class Queue {
//   queueNode: ;

//   class QueueNode {


//   }
// }


// - 2 - create a set (or array) to store visited nodes
// - 3 - while the queue is not empty, repeat steps 4 -6
//- 4. Dequeue the first node
//- 5. Carry out action on the dequeued node
//- e.g if you are trying to find a particular node this would be where you would check if it matched a value
//- if you are just trying to output each element then you can print this nodes relevant value
//- 6. for each unvisited neighbour, add it to the visited nodes and to the back of the queue

/*
########################################################
Breadth First Search
########################################################
*/

// set first node as 
//
//
//
//

/* 
########################################################
Depth First Search
########################################################
*/
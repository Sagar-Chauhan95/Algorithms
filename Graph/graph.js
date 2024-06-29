class Graph{
    constructor(){
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex]
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2){
        this.adjacencyList[v1]= this.adjacencyList[v1].filter((v)=> v != v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((v)=>v !=v1);

    }

    dfsIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        let vertex;
        visited[start] = true;
        while(stack.length){
            vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
    }

    bfs(start){
        let queue = [start];
        let result = [];
        let visited = {};
        let vertex;
        visited[start] = true;
        while( queue.length){
            vertex = queue.shift();
            result.push(vertex);
            this.adjacencyList[vertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');

console.log(graph)
console.log(graph.bfs('A'))
console.log(graph.dfsIterative('A'))
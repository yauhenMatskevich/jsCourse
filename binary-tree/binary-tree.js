'use strict';

class BinaryTree {
	constructor() {

         this.root = null;
         this.totalNodes = 0;

         console.log('root', this.root);       
         console.log("totalNodes = ", this.totalNodes);
	}

	insert(data) {

    	if (this.root == null) { 

    		this.root = new Node(data, null, null);      

        	this.totalNodes += 1;   

        	console.log("totalNodes = ", this.totalNodes);          
  		}	 
    
    	else {
        
       		var current = this.root;

    		while(true) {
    	 
      			if (data >= current.data) {
      		
          			if(current.right == null) {
          		
              			current.right = new Node(data, null, null);

              			this.totalNodes += 1; 

              			console.log("totalNodes = ", this.totalNodes);
     
              			break;
          			}  
         			else {
          			
              			current = current.right;
          			}  
      			}
      			else {
      	
          			if(current.left == null) {
          		
              			current.left = new Node(data, null, null);

              			this.totalNodes += 1; 

              			console.log("totalNodes = ", this.totalNodes);              
           
              			break;
          			} 
          			else {
 
              			current = current.left;
          			}
      			} 
    		}

    		//console.log("currentNode = ", current);
   		}

   		//console.log("this.root = ", this.root);
	}

	contains(data) {

	}

	remove(data) {

	}

	size() {

      console.log("size = ", this.totalNodes);   

      return this.totalNodes;
	}

	isEmpty() {

		if( this.root == null) {

			console.log('true');   

			return true;
		}	
		else {

			console.log('false');  

			return false;
		}	
	}
}

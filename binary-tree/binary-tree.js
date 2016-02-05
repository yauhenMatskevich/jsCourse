'use strict';

class BinaryTree {
  //--------------------------------------------------------------
	constructor() {

         this.root = null;
         
         console.log('root', this.root);       
	}
  //--------------------------------------------------------------
	insert(data) {

      console.log("data to insert = ", data);

    	if (this.root == null) { 

    		  this.root = new Node(data, null, null);               
  		}	 

    	else {
        
       	  var currentNode = this.root;

    		  while(true) {
    	 
              if (data >= currentNode.data) {
      		        
                  if(currentNode.right == null) {
          		
              		    currentNode.right = new Node(data, null, null);
     
                      break;
                  }  
         			    else {
          		           			   
                      currentNode = currentNode.right;
                  }       		
              }
              else {
      	         		
                	if(currentNode.left == null) {
          		
              	   		currentNode.left = new Node(data, null, null);             
           
                			break;
            			} 
            			else {
 
                			currentNode = currentNode.left;
            			}
      		  	} 
          }
   		}
	}
  //--------------------------------------------------------------
  contains(data) {

      console.log("data to find = ", data); 
  
      var currentNode = this.root;

      while(true) {  

          if (currentNode == null) {     

              console.log("data was not found");    

              return false;
          }  

          console.log("currentNode.data = ", currentNode.data); 

          if(data < currentNode.data) {

              currentNode = currentNode.left;      
          }
          else if(data > currentNode.data) {

              currentNode = currentNode.right;
          }  
          else {

              console.log("find node = ", currentNode); 

              return true;    
          }  
      }          
  }  

  //--------------------------------------------------------------
	remove(data) {

      console.log("remove data = ", data); 

      var currentNode = this.root;
      var parrentNode = null;

      // search node with data
      while(true) {  

          if (currentNode == null) {     

              console.log("there is nothing to remove");              

              return false;
          }  

          if(data < currentNode.data) {

              parrentNode = currentNode;

              currentNode = currentNode.left;
          }
          else if(data > currentNode.data) {

              parrentNode = currentNode;

              currentNode = currentNode.right;
          }  
          else {

              console.log("node to remove = ", currentNode); 
              console.log("parrentNode = ", parrentNode); 

              break;    
          }

      }

      // remove this node
      // if node has no children
      if((currentNode.left == null) && (currentNode.right == null)) {

          if(parrentNode == null) {

              this.root = null;
          }      
          else if(parrentNode.left == currentNode) {
                                 
              parrentNode.left = null;
          } 
          else if(parrentNode.right == currentNode) {

              parrentNode.right = null;
          } 
      }   

      // if node has one child
      else if((currentNode.left == null) || (currentNode.right == null)) {

          // has left child
          if(currentNode.left != null) {

              if(parrentNode.left == currentNode) {                     
                                 
                  parrentNode.left = currentNode.left;
              }  
              else if(parrentNode.right == currentNode) {                      
                                 
                  parrentNode.right = currentNode.left;
              }     

              currentNode.left = null; 
          }
          // has right child
          else if(currentNode.right != null) {

              if(parrentNode.left == currentNode) {                     
                                 
                  parrentNode.left = currentNode.right;
              }  
              else if(parrentNode.right == currentNode) {                   
                                 
                  parrentNode.right = currentNode.right;
              }     

              currentNode.right = null;
          }
      }   
      // if node has two children
      else {

          if(parrentNode.left == currentNode) {                    
                                 
              parrentNode.left = currentNode.left;
              parrentNode.left.left = currentNode.right;

              currentNode.left = null; 
          }  
          else if(parrentNode.right == currentNode) {                   
                                 
              parrentNode.right = currentNode.left;
              parrentNode.right.right = currentNode.right;

              currentNode.left = null; 
          }           
      }  
	}
  //--------------------------------------------------------------
	size() {
    
      var totalNodes = 0;
      var currentNode = this.root;
      var stack = [];
      var stackSize = 0;
      //var parrentNode = null;
      
    
      /*if (currentNode == null) {     

          console.log("totalNodes", totalNodes);              

          return totalNodes;
      } */ 

      //totalNodes = 1;

      while(stackSize != 0 || currentNode != null) {

          //currentNode = currentNode.left;  
          if(currentNode != null)  {

              totalNodes++;       

              console.log("node = ", currentNode);
              console.log("totalNodes = ", totalNodes);

              if(currentNode.right != null) {

                  stack[stackSize] = currentNode.right;                 

                  stackSize++;

                  console.log("stackSize = ", stackSize);
              }

              currentNode = currentNode.left;
          }
          else {

              stackSize--;

              currentNode = stack[stackSize];

              console.log("stackNode = ", stack[stackSize]);

              

          }
   
      }  

      /*currentNode = this.root;

      while(currentNode != null) {

          if(currentNode.right != 0)   
          {
              totalNodes++;       
          
              console.log("node = ", currentNode);
              console.log("data = ", currentNode.data);
              console.log("totalNodes = ", totalNodes);
          }
          currentNode = currentNode.left;   
      } */

      /*if (node == null) 
      {
          return 0;

      } 
      else 
      {
          console.log("node = ", node);  

          return (this.size(node.left) + 1 + this.size(node.right));
          

      } */
      console.log("totalNodes", totalNodes);  

      return totalNodes;

	}
  //--------------------------------------------------------------
	isEmpty() {

		  if( this.root == null) {

			   console.log('Tree is empty');   

			   return true;
		  }	
		  else {

			   console.log('Tree is not empty');  

			   return false;
		  }	
	}
  //--------------------------------------------------------------
}

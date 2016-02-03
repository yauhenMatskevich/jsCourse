'use strict';

class BinaryTree {
  //--------------------------------------------------------------
	constructor() {

         this.root = null;
         
         console.log('root', this.root);       
	}
  //--------------------------------------------------------------
	insert(data) {

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
  
      var currentNode = this.root;

      while(true) {  

          if (currentNode == null) {     

              console.log("currentNode = ", currentNode);  

              return false;
          }  

          console.log("currentNode.data = ", currentNode.data); 

          if(data < currentNode.data) {

              currentNode = currentNode.left;

              console.log("contains = left", currentNode); 
          
          }
          else if(data > currentNode.data) {

              currentNode = currentNode.right;

              console.log("contains = right", currentNode); 

          }  
          else {

              return true;    
          }  
      }          
  }  

  //--------------------------------------------------------------
	remove(data) {

      console.log("data = ", data); 

      console.log("remove method"); 

      var currentNode = this.root;
      var parrentNode = null;

      // search node with data
      while(true) {  

          if (currentNode == null) {     

              console.log("currentNode = ", currentNode);  

              console.log("there is nothing to remove");              

              return false;
          }  

          console.log("currentNode.data = ", currentNode.data); 

          if(data < currentNode.data) {

              parrentNode = currentNode;

              currentNode = currentNode.left;

              console.log("contains = left", currentNode); 
          
          }
          else if(data > currentNode.data) {

              parrentNode = currentNode;

              currentNode = currentNode.right;

              console.log("contains = right", currentNode); 

          }  
          else {

              console.log("find node = ", currentNode); 

              break;    
          }

      }

      // remove this node

      // if node has no children
      if((currentNode.left == null) && (currentNode.right == null)) {

          if(parrentNode == null) {

              this.root = null;

              console.log("this.root = ", this.root); 
          }     
 
          else if(parrentNode.left.data == data) {
                                 
              parrentNode.left = null;
          } 
          else if(parrentNode.right.data == data) {

              parrentNode.right = null;
          }

          console.log("currentNode = ", currentNode); 

          console.log("parrentNode = ", parrentNode);   
      }   

      // if node has one child
      else if((currentNode.left != null) && (currentNode.right == null)) {

          if(parrentNode.left.data == data) {

              console.log("currentNode = ", currentNode);                       
                                 
              parrentNode.left = currentNode.left;

              console.log("parrentNode = ", parrentNode);
          }  
          else if(parrentNode.right.data == data) { 

              console.log("currentNode = ", currentNode);                       
                                 
              parrentNode.right = currentNode.left;

              console.log("parrentNode = ", parrentNode);
          }     

          currentNode.left = null; 

          console.log("currentNode = ", currentNode); 

          console.log("this.root = ", this.root); 
      }   

      else if((currentNode.left == null) && (currentNode.right != null)) {

          if(parrentNode.left.data == data) {                     
                                 
              parrentNode.left = currentNode.right;

              //console.log("parrentNode = ", parrentNode);
          }  
          else if(parrentNode.right.data == data) {                   
                                 
              parrentNode.right = currentNode.right;

              //console.log("parrentNode = ", parrentNode);
          }     

          currentNode.right = null; 

          console.log("this.root = ", this.root); 
      }        
	}
  //--------------------------------------------------------------
	size() {

      var totalNodes = 0;

      if(this.root == null) {

          console.log("totalNodes = ", totalNodes); 

          return totalNodes;
      }
 
      /*var currentNode = this.root;

      while(true) {  

          if (currentNode != null) {     

              totalNodes += 1;

              if (currentNode.data) {};

              console.log("totalNodes = ", totalNodes);  

              currentNode = currentNode.left;
          }  

          console.log("currentNode.data = ", currentNode.data); 

          if(data < currentNode.data) {

              currentNode = currentNode.left;

              console.log("contains = left", currentNode); 
          
          }
          else if(data > currentNode.data) {

              currentNode = currentNode.right;

              console.log("contains = right", currentNode); 

          }  
          else {

              return true;    
          }  
      }*/

      return totalNodes;
	}
  //--------------------------------------------------------------
	isEmpty() {

		  if( this.root == null) {

			   console.log('isEmpty = true');   

			   return true;
		  }	
		  else {

			   console.log('isEmpty = false');  

			   return false;
		  }	
	}
  //--------------------------------------------------------------
}

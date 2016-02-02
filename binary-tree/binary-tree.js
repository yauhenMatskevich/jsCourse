'use strict';

class BinaryTree {
  //--------------------------------------------------------------
	constructor() {

         this.root = null;
         this.currentNode = null;
         this.totalNodes = 0;
         
         console.log('root', this.root);       
         console.log("totalNodes = ", this.totalNodes);
	}
  //--------------------------------------------------------------
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
  //--------------------------------------------------------------
  contains(data) {

      if(this.currentNode == null)
      {  
          this.currentNode = this.root;
      }    

      if (this.isEmpty() == true) {

          this.root = this.currentNode;

          this.currentNode = null;

          console.log("this.root = ", this.root); 

          return false;    
      }
      else {

          console.log("this.root.data = ", this.root.data); 

          if(data < this.root.data) {

              this.root = this.root.left;

              console.log("contains = left", this.root); 

              return this.contains(data);          
          }
          else if(data > this.root.data) {

              this.root = this.root.right;

              console.log("contains = right", this.root); 

              return this.contains(data);

          }  
          else {

              this.root = this.currentNode;

              this.currentNode = null;

              return true;    
          }  

      }

  }
  //--------------------------------------------------------------
	remove(data) {

      console.log("data = ", data); 

      console.log("remove method"); 

      if (this.contains(data) == false) {

          console.log("there is nothing to remove");

          return false;
      }
      else{

      }
	}
  //--------------------------------------------------------------
	size() {

      console.log("size = ", this.totalNodes);   

      return this.totalNodes;
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

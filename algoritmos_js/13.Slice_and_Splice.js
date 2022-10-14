/***********************Slice and Splice*************************
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.*/

function frankenSplice(arr1, arr2, n) {
    let together=arr2.slice();
    together.splice(0, -n ,...arr1) 
    
      return together;
    }
    
    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

  
   
/*function frankenSplice(arr1, arr2, n) {
      let together= arr2.slice();
      together.splice(n, 0, ...arr1) 
      return together;
    }

    console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
  }*/
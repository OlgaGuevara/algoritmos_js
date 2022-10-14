/*******************Find the Longest Word in a String***************************
Return the length of the longest word in the provided sentence.
Your response should be a number*/
function findLongestWordLength(str) {
    str=str.split(" "); 
    let longest =0; 
    for(const element of str){ 
      if(element.length > longest){
        longest= element.length
      }
    }
  
  
  
    return longest
  }
  
 console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

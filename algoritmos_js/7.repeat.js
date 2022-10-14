/***************Repeat a String Repeat a String*******************************
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.*/

function repeatStringNumTimes(str, num) {
    let repeat="";   
      while(num > 0){
        repeat += str;  
        num--
      }
      return repeat;
    }
    
    console.log(repeatStringNumTimes("abc", 3));
    

    function repeatStringNumTimes1(str,num) {
        str = str.repeat(str,num)   
          return str
        }
        
        console.log(repeatStringNumTimes("abc", 3));
    
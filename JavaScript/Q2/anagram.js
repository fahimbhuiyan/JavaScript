function myFunction() {
    var i=0;
    document.getElementById("statsOut").innerHTML="";
    while (true) {
    var pair=prompt("Please enter String of pair:", "");//get value from user
       if (pair == -1)
       {
       break;//break as value is -1
       }
    
    var p=pair.split(" ", 2);//split will make two words
    var first=p[0];//get first split string
    var second=p[1];
    if(isNaN(first) && isNaN(second)){//check wheather non numeric
    
    var str1=first.toLowerCase().split('').sort().join('').trim();
    var str2=second.toLowerCase().split('').sort().join('').trim();
    if (str1 === str2) {
    document.getElementById("statsOut").innerHTML+="Pair "+first+" and "+second+" are anagram<br>";
    } else {
    document.getElementById("statsOut").innerHTML+="Pair "+first+" and "+second+" are Not anagram<br>";
    }
    }
    else{
    i=i+1;
    if(i===5)
    {
    document.getElementById("statsOut").innerHTML="You have exceed invalid entry limit";//if more then five this error message
    break;
    }
    }
    
    }
    }
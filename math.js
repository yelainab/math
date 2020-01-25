var doc1 = document.getElementById("first");
var doc2 = document.getElementById("second");
var doc3 = document.getElementById("third");
var doc4 = document.getElementById("fourth");
var doc5 = document.getElementById("fifth");
var doc6 = document.getElementById("sixth");
var output = document.getElementById("output");

 //function for the mean
function mean(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);
    output.innerHTML = "The mean is " + (first + second + third + fourth + fifth + sixth) / 6;
    return mean;
}

 //function for the largest number
 function largeNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    largest = first;

    if(largest < second){
        largest = second;
    }
    if(largest < third){
        largest = third;
    }
    if(largest < fourth){
        largest = third;
    }
    if(largest < fifth){
        largest = fifth;
    }
    if(largest < sixth){
        largest = sixth;
    }
    output.innerHTML = "The largest number is " + largest;
    return largest;
 }

 //function for the smallest number
 function smallNum(){
    var first = parseFloat(doc1.value);
    var second = parseFloat(doc2.value);
    var third = parseFloat(doc3.value);
    var fourth = parseFloat(doc4.value);
    var fifth = parseFloat(doc5.value);
    var sixth = parseFloat(doc6.value);

    smallest = first;

    if(smallest > second){
        smallest = second;
    }
    if(smallest > third){
        smallest = third;
    }
    if(smallest > fourth){
        smallest = fourth;
    }
    if(smallest > fifth){
        smallest = fifth;
    }
    if(smallest > sixth){
        smallest = sixth;
    }
    output.innerHTML = "The smallest number is " + smallest;
    return smallest;
 }

 //function to find the range of all of the numbers 
 function rangeNum(){
    var range = (largeNum() - smallNum());
    output.innerHTML = range;
 }

function order(){
    var one = parseFloat(doc1.value);
    var two = parseFloat(doc2.value);
    var three = parseFloat(doc3.value);
    var four = parseFloat(doc4.value);
    var five = parseFloat(doc5.value);
    var six = parseFloat(doc6.value);

    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;

    n1 = Math.min(one, two, three, four, five, six);
    
    if(n1 === first){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six;
    }else if(n1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six;
    }else if(n1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six;
    }else if(n1 === four){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six;
    }else if(n1 === five){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six;
    }else{
        one = one;
        two = two;
        three = three;
        four = four;
        five = five;
    }

    n2 = Math.min(one, two, three, four, five);
    
    if(n2 === first){
        one = two;
        two = three;
        three = four;
        four = five;

    }else if(n2 === two){
        one = two;
        two = three;
        three = four;
        four = five;
    }else if(n2 === three){
        one = two;
        two = three;
        three = four;
        four = five;
    }else if(n2 === four){
        one = two;
        two = three;
        three = four;
        four = five;
    }else{
        one = one;
        two = three;
        three = four;

    }

    n3 = Math.min(one, two, three, four);

    if(n3 === first){
        one = two;
        two = three;
        three = four;

    }else if(n3 === two){
        one = two;
        two = three;
        three = four;
    }else if(n3 === three){
        one = two;
        two = three;
        three = four;
    }else{
        one = one;
        two = two;
        
    }

    n4 = Math.min(one, two, three);

    if(n4 === first){
        one = two;
        two = three;

    }else if(n4 === two){
        one = two;
        two = three;
    }else{
        one = one;
        two = two;
    }

    n5 = Math.min(one, two);

    if(n5 === first){
        one = two;
    }else{
        one = one;
    }


    output.innerHTML = n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5 + " " + n6;
}

// function mode(){
//     var one = parseFloat(doc1.value);
//     var two = parseFloat(doc2.value);
//     var three = parseFloat(doc3.value);
//     var four = parseFloat(doc4.value);
//     var five = parseFloat(doc5.value);
//     var six = parseFloat(doc6.value);

//     var o1 = 1;
//     var o2 = 1;
//     var o3 = 1;
//     var o4 = 1;
//     var o5 = 1;
//     var o6 = 1;
// }
/*Problem 2: Marriage Eligibility Check:
Create a JavaScript program to determine if a person is eligible for marriage
based on their gender and age. If the person is male, check if he is 21 years or
older; if yes, he is eligible. If the person is female, check if she is 18 years or
older; if yes, she is eligible. Print a message indicating whether the person is
eligible for marriage or not.
*/

var age = 24
var gender = "female"


if(gender == "female"){
    console.log(" gender varified successfully")

    if(age>=18){
        console.log("age varified successfully")
        console.log("congratullations, you are eligible for marriage")   
    }
    else{
        console.log("age is not varified , u r not eligible for marriage ")   
    } 
} 

else if(gender=="male"){
    console.log(" gender varified successfully")

    if(age>=21){
        console.log("age varified successfully")
        console.log("congratullations, you are eligible for marriage")
    }
    else{
        console.log("age is not varified ,you'r not eligible for marriage")
    }
}

else{
    console.log("invalid gender")
}

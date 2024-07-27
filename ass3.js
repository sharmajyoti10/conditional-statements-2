/*Problem 3: Driving Eligibility:
Day 6 Assignment: Conditional Statement-2 2
Create a program to determine if a person is eligible to obtain a driver's license.
If the person is 16 or older, check if they have passed the written test. If they
have passed the written test, they are eligible for a driver's license; otherwise,
they are not eligible.*/


var age = 18
var exam = "pass"

if(age>=16){
    console.log("age is verified")

    if(exam =="pass"){
        console.log("you have cleared written test so, you are eligible for driving licence")
    }
    else{
        console.log("you have'nt cleared written test so, you are not eligible for driving licence")
    }
}
else{
    console.log("age is not verified")
}
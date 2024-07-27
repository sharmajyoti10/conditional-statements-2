
/* Problem 4: Online Food Ordering:
 If the order total is $50 or more, the customer is eligible for free delivery.
 If the order total is less than $50, check the customer's loyalty status:
 If the customer is a loyalty member (yes/no), they are eligible for free
  delivery.
 If the customer is not a loyalty member, check the distance from the
 restaurant to the delivery address:
 If the distance is less than 5 miles, the customer is eligible for free
 delivery.
 If the distance is 5 miles or more, delivery is not free.*/

 
var total = 40
var loyalty = "no"
var distance = 6 

if(total>=50){
    console.log("customer is eligible for free delivery")
}
else if (total<50){
    console.log("Order total is less than 50, so let's check your loyalty")

    if(loyalty == "yes"){
        console.log("customer is loyalty member, so you are eligible for free delivery")
    }
    else {
        console.log("customer is  not a loyalty member, so let's check your distance")
          
        if(distance<5){
            console.log("distance is less than 5 miles, so you are eligible for free delivery")
        }
        else{
            console.log("distance is more than 5 miles, so you are not eligible for free delivery")
        }
    }
}

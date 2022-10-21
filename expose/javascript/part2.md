1. prints 3 because i increments from 0, 1, 2, and then to 3 before failing the for condition
2. prints 150 because it takes the value of the last discountedPrice in for loop which is 300*(1-0.5) = 150
3. prints 150 because it takes value of last finalPrice in for loop
4. [50, 100, 150] because the function applies the 0.5 discount to each element in prices
5. error, cannot print i outside the definition of i inside the for loop
6. error, cannot print discountedPrice outside the definition of discountedPrice inside the for loop
7. prints 150 because it takes value of last finalPrice in for loop, console.log(finalPrice) is called within the block in which finalPrice is defined
8. [50, 100, 150] because the function applies the 0.5 discount to each element in prices, discounted is returned in same block where it is defined by let
9. error, cannot print i outside the definition of i inside the for loop
10. prints length of prices which is 3, because console.log(length) is within block in which length is defined by const
11. [50, 100, 150] because the function can manipulate const discounted via push, but not reassign it
12.
    A. student.name  
    B. student['Grad Year']  
    C. student.greeting  
    D. student['Favorite Teacher'].name  
    E. student.courseLoad[0]  
13. Arithmetic  
    A. '3' + 2 = '32', because 2 is converted into a string and appended to '3'  
    B. '3' - 2 = 1, because '3' is converted into a number and so 3-2 = 1  
    C. 3 + null = 3, because null is interpreted as 0 so 3+0 = 3  
    D. '3' + null = 3null, because null is converted to a string and appended to '3'  
    E. true + 3 = 4, because true evaluates to 1 and 1+3 = 4  
    F. false + null = 0, because both false and null evaluate to 0  
    G. '3' + undefined = '3undefined', because undefined is converted to a string  
    H. '3' - undefined = NaN, because undefined evaluates to NaN  
14. Comparison  
    A. '2' > 1 = true, because '2' is converted to a number for comparison  
    B. '2' < '12' = false, because both are converted to numbers for comparison  
    C. 2 == '2' = true, because '2' is converted to a number for comparison  
    D. 2 === '2' = false, because triple equal compares typeof and number is not the same as string  
    E. true == 2, false because true is equal to 1  
    F. true === Boolean(2) = true, because both sides are of type boolean  
15. == is for comparing values of two variables , and === is for comparing values and data type of two variables  

17\. It will double the values of the original array, so it will return [2, 4, 6]. modifyArray first creates newArr and loops through the given array pushing the result of doSomething(array[i]), which returns 2 times the input, into the newArr.  

19\. the code outputs: 1 4 3 2  

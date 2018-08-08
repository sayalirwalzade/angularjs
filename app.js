console.log(`welcome`)
console.log(`............... if..else.............`)
var i=5

if(i<3)
{
    console.log(`number is less than 3`)
}
else{
    console.log(`number is greater than 3`)
}
console.log(`..........switch case.............`)
console.log('1.addition\n2.subtraction\n3.multiplication\n4.division\n Enter the choice')
var ch=1
var a=2,b=3
switch(ch)
{
    case 1:
    {
    ans=a+b
    console.log(`Choice:1\n addition: ${ans}`)
    break
    }
    case 2:
    {
    ans=a-b
    console.log(`Choice:2\n subtraction: ${ans}`)
    break
    }case 3:
    {
    ans=a*b
    console.log(`Choice:3\n multplcation: ${ans}`)
    break
    }case 4:
    {
    ans=a/b
    console.log(`Choice:4\n division: ${ans}`)
    break
    }
}
console.log(`............do-while...........`)
let sum=0
do{
    
    sum=sum+2
    console.log(`sum is:${sum}`)
}while(sum<10)
console.log(`............prime number...........`)
for(no=2;no<10;no++)
{
if((no%2)!=0)
{
    console.log(`no ${no} is prime`)
}
}
console.log(`......odd - even number from array....`)
 var b=[1,2,3,4,5,6,7,8,9,10]
 for(i=0;i<b.length;i++)
 {
    if((b[i]%2)!=0)
    {
        console.log(`odd number:${b[i]}`)
    }
    else{
        console.log(`even number:${b[i]}`)
    }
 }
console.log(`......table...........`)
 var n=3

 for(i=1;i<=10;i++)
 {  
    
     console.log(`${n*i}`)
     
 }
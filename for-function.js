nums=[5, 45, 78, 10,65]
for(let i=0;i< nums.length;i++)
{
    const num=nums[i];
    evenorOdd(num)
}
friends_age=[20,25,21,34,37]

function evenorOdd(age){
    if(age%2==0)
    {
        console.log(age, 'is a even number');
    }
    else{
        console.log(age*2, 'is odd number');
    }
}
for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenorOdd(age);
}

const sumAll = function(a, b) {
    let sum = 0;    let index = 0;
    
    if((a < 0) || (b<0) || (Number.isInteger(a) == false) || (Number.isInteger(b) == false)){ 
        return 'ERROR';
    }

    if(b<a){
        index=b;
        b=a;
        a=index;
    }
    for(let i=a; i<=b; i++)
        sum+=i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

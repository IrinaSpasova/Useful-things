const arr = [10,20,1,5,50,100];

for(let item of arr){
    setTimeout(()=>console.log(item),item);
}

// if you start debug mode in 4 row - output will be 10,20,1,5,50,100

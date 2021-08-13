//3'ün veya 5'in katı olan 1000'den küçük sayılar
var sum=0
var array=[]
for(var i=1; i<1000; i++){

    if(i%3==0 || i%5==0){
        array.push(i)
    }
}
array.forEach(a => {
    sum+=a    
});
console.log(sum);
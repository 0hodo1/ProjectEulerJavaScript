// fibonacci dizisi kendinden bir önceki sayıyla toplanan değerler dizisidir değeri 4milyonu geçmeyen çift değerlerin toplamı

var bir=1
var iki=2
var uc=0
var dizi=[]
dizi.push(bir,iki)
var sonuc=0
var ciftfibo=[]
var sonToplam=0
for(var i=0;uc<4000000;i++){
    uc=bir+iki
    bir=iki
    iki=uc
    if(uc<4000000){
        dizi.push(uc)
    }
}
console.log(dizi);
dizi.forEach(element => {
    if(element%2==0){
        ciftfibo.push(element)
    }
});
console.log(ciftfibo);
ciftfibo.forEach(eleman => {
    sonToplam+=eleman
})
console.log(sonToplam);

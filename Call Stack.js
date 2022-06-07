// let count=0;
// function a() {
//     console.log("INside Fun A " ,++count);
//   b();
// }

// function b() {
//   console.log("INside Fun B",++count);
//   a();
// }

// a();


//=---------------

function doWork(param) {
    let n = 9999999999;
    while (n > 0){
        n--;
    }
    console.log(param);
}

console.log('Start running code');
setTimeout(()=>{
    doWork(10);
},0);
console.log('ALl completed');


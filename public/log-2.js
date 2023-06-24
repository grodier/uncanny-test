console.log("2");
console.log("Before blocking");
performance.mark("before-blocking");
let startTime = performance.now();
while (performance.now() - startTime < 7000) {}
performance.mark("after-blocking");
console.log("After blocking");
console.log("2x2");

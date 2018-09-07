var count = 0;
function logStuff() {
  count = count + 1;
  console.log("Hello " + count);
}

setInterval(logStuff, 1000);

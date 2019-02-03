// Say hello.
console.log('Hello world!');

// Say hello again after 1 second.
setTimeout(function() {
  console.log('Hello again! It\'s been so long! Like 1 second long.')
}, 1000)

// Say hello repeatedly after every second for next 5 seconds.
var time = 0;
var timer = setInterval(function(){
  time += 1;
  console.log('Hello again after ' + time + ' seconds!')
  if (time >= 5) {
    clearInterval(timer);
  }
}, 1000);

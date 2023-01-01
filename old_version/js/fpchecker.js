var startTime = Date.now();
var frame = 0;

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      var fps = (frame / ((time - startTime) / 1000)).toFixed(1);
      console.log(fps)
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}
tick();
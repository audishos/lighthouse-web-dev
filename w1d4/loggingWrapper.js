// log name, input params and return calback value
var wrapLog = function (callback, name) {
  return function(a, b, c) {
    const result = callback(a, b, c);
    let args = "";
    // convert args to printable string
    for (let i = 0; i < arguments.length; i++) {
      args += ", " + arguments[i];
    };
    // remove extra ", " at the beginning
    args = args.substr(2);
    // output everything!
    console.log(name + "(" + args + ") => " + result);
  };
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24
var exec = require("child_process").exec;

// This function returns true if mongod is currently active
async function isActive() {
  var millis = 0;
  for (var i = 0; i < 1; i++) {
    const start = Date.now();
    var active = await new Promise((resolve, reject) => {
      exec("systemctl status mongod", function (err, stdout, stderr) {
        if (err) {
          console.warn(err);
        }
        resolve(stdout ? stdout : stderr);
      });
    });
    active = active.split("\n")[2].split(":")[1].split(" ")[1] === "active";
    millis += Date.now() - start;
  }
  console.log(`mean milliseconds elapsed = ${millis/1000}`);
}

isActive();

exports = {
  isActive: isActive
};

const exec = require("./exec");

const version = 0;

console.log(`Version ${version}`);

const doWork = () => {
  console.log("Doing work...");
  return new Promise(resolve => setTimeout(resolve, 5000));
};

const update = async () => {
  const result = await exec(`cp ./versions/${(version + 1) % 3}.js ./index.js`);
  console.log(result);

  await doWork();
};

update();

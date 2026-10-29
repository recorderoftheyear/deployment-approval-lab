const { getStatus } = require("./index");

if (getStatus() !== "ready") {
  console.error("Application validation failed");
  process.exit(1);
}

console.log("Application validation passed");

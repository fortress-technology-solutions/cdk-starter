
exports.handler = async function(event) {
  console.log("Received event:", JSON.stringify(event));
  return {
    statusCode: 200,
    body: "Hello from Lambda!"
  };
};

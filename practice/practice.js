import AWS from "aws-sdk";
import e from "express";
const lambda = new AWS.Lambda();
const app = e();

// After writing user to RDS
async function notifyNewUser(username, email) {
  const params = {
    FunctionName: "new-user-notification",
    InvocationType: "Event", // Async - don't wait for response
    Payload: JSON.stringify({
      username: username,
      email: email,
    }),
  };
  await lambda.invoke(params).promise();
}

// In your login/register route
app.post("/register", async (req, res) => {
  const { username, email } = req.body;

  // 1. Write to RDS
  await db.query("INSERT INTO users ...");

  // 2. Invoke Lambda
  await notifyNewUser(username, email);

  res.json({ message: "User registered!" });
});

app.listen(3000, "127.0.0.1");

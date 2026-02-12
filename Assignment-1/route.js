import { readFile, appendFile } from "fs/promises";

const handleRequest = async (req, res) => {
  const url = req.url;
  const method = req.method;

  const fetchUser = async function () {
    try {
      const data = await readFile("users.txt", "utf8");
      return data.split("\n").filter((user) => user.trim() !== "");
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  const storeUser = async function (user) {
    try {
      await appendFile("users.txt", `${user}\n`);
    } catch (err) {
      console.log(err);
    }
  };

  if (url === "/") {
    res.write("<html>");
    res.write(`<head><title>Assignment-1</title></head>`);
    res.write(
      `<body>
            <h1>Welcome to Assigment 1!</h1>
            <form action='/create-user' method='POST'>
                <label name='username'>Enter Username</label>
                <input type='text' name='username'>
                <button type='submit'>Create</button>
            </form>
            <form action='/users' method='POST'>
              <button type='submit'>Users</button>
            </form>
        </body>`,
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users" && method === "POST") {
    const users = await fetchUser();

    res.write(`<html>`);
    res.write("<head><title>Assignment-1_users</title></head>");
    res.write("<body>");
    res.write("<ul>");
    users.forEach((user) => res.write(`<li>${user}</li>`));
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", async () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      await storeUser(user);

      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
};

export default handleRequest;

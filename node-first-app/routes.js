import * as fs from "fs";

const requestHandler = (req, res) => {
  //route based server responsding
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message </title></head>");
    res.write(`
          <body>
            <form action="/message" method="POST">
              <input type = "text" name="message">
              <button type="submit">Send</Button>
            </form>
          </body>`);
    res.write("</html>");

    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1].split("+").join(" ");
      fs.writeFile("message.txt", message, (_err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
      console.log(parsedBody);
    });
    //   / console.log(req.url, req.method, req.headers);
  }
};

export default requestHandler;

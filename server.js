const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();

const port = 5000 || process.env.PORT;

async function startServer() {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
module.exports = {
  app,
};

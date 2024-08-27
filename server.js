const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = 
"mongodb+srv://Mike92:m80351644%40@cluster0.jdq2b.mongodb.net/Reja?retryWrites=true&w=majority&appName=Cluster0";
mongodb.connect(
    connectionString, {
     useNewUrlParser: true, 
     useUnifiedTopology: true,
    }, 
    (err, client) => {
      if(err) console.log("ERROR on connection MongoDB");
      else {
        console.log("MongoDB connection succeed");
        // console.log(client);
        module.exports = client;
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 4008;
        server.listen(PORT, function() {
          console.log(
            `The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`
          );  
        });
      }
    }
);


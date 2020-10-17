const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

app.all(
  "/echo",
  functions.https.onCall(async (data, context) => {
    return { data, auth: context.auth || null };
  })
);

app.listen(process.env.PORT || 8080, () => {
  functions.logger.log("Up and running...");
});

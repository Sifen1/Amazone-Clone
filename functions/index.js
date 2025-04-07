// // // /**
// // //  * Import function triggers from their respective submodules:
// // //  *
// // //  * const {onCall} = require("firebase-functions/v2/https");
// // //  * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
// // //  *
// // //  * See a full list of supported triggers at https://firebase.google.com/docs/functions
// // //  */

// // // const {onRequest} = require("firebase-functions/v2/https");
// // // const logger = require("firebase-functions/logger");

// // // // Create and deploy your first functions
// // // // https://firebase.google.com/docs/functions/get-started

// // // // exports.helloWorld = onRequest((request, response) => {
// // // //   logger.info("Hello logs!", {structuredData: true});
// // // //   response.send("Hello from Firebase!");
// // // // });
// // // const {onRequest} = require("firebase-functions/v2/https");
// // // const logger = require("firebase-functions/logger");
// // // const express = require("express")
// // // const cors =require("cors")
// // // const dotenv =require("dotenv")
// // // dotenv.config();
// // // const stripe = require("stripe")(process.env.STRIPE_KEY)


// // // const app = express()
// // // app.use(cors({origin:true}))
// // // app.use(express.json())

// // // app.get("/", (req, res) => {
// // //     res.status(200).json({
// // //       message: "Success !",
// // //     });
// // //   });

// // //   app.post("/payment/create", async (req, res) => {
// // //     const total = parseInt(req.query.total);
// // //     if (total > 0) {
// // //       const paymentIntent = await stripe.paymentIntents.create({
// // //         amount:total,
// // //         currency:"usd",
// // //       });
// // //       //console.log(paymentIntent);


// // //       res.status(201).json({
// // //         clientsecret:paymentIntent.client_secret,
// // //       });
// // //     }else{
// // //       res.status(403).json({
// // //         message:"total must be greater than 0",
// // //       });
// // //     }
// // // });


// // // exports.api = onRequest(app);
// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const app = express();
// app.use(cors({ origin: true }));
// app.use(express.json());

// // Simple health check route
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Success!",
//   });
// });

// // Payment route
// app.post("/payment/create", async (req, res) => {
//   // Now, access the `total` from the request body
//   const { total } = req.body;  // Use req.body instead of req.query

//   if (total > 0) {
//     try {
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "usd",
//       });

//       res.status(201).json({
//         clientSecret: paymentIntent.client_secret,
//       });
//     } catch (error) {
//       console.error("Error creating payment intent:", error);
//       res.status(500).json({
//         message: "Failed to create payment intent",
//       });
//     }
//   } else {
//     res.status(403).json({
//       message: "Total must be greater than 0",
//     });
//   }
// });

// exports.api = onRequest(app);
// // // index.js or app.js (in backend folder)

// // const express = require("express");
// // const cors = require("cors");
// // const stripe = require("stripe")(process.env.STRIPE_KEY); // Add Stripe key here

// // const app = express();
// // app.use(cors({ origin: true }));
// // app.use(express.json());

// // // Simple health check route (just to verify the server)
// // app.get("/", (req, res) => {
// //   res.status(200).json({
// //     message: "Server is up and running!",
// //   });
// // });

// // // Payment route to create payment intent
// // app.post("/api/payment/create", async (req, res) => {
// //   const { total } = req.body;  // Get total amount (in cents, e.g., $10 = 1000)

// //   if (total > 0) {
// //     try {
// //       // Create payment intent with Stripe
// //       const paymentIntent = await stripe.paymentIntents.create({
// //         amount: total,  // Total in cents
// //         currency: "usd",
// //       });

// //       res.status(201).json({
// //         clientSecret: paymentIntent.client_secret,
// //       });
// //     } catch (error) {
// //       console.error("Error creating payment intent:", error);
// //       res.status(500).json({
// //         message: "Failed to create payment intent",
// //       });
// //     }
// //   } else {
// //     res.status(403).json({
// //       message: "Total must be greater than 0",
// //     });
// //   }
// // });

// // // Start the Express server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port ${PORT}`);
// // });



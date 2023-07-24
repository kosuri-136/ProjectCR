// const { v4: uuidv4 } = require("uuid");
// const stripe = require("stripe")(
//   "sk_test_51NGGovSBxnGg6S0scsrsfFzatkI8oZTIBfSEAEDyvZv5on2LBeJiW93TFbawUWgYihZLAklkMUP1qAnAKdxxcmEU00OSZjn1lm"
// );
// const Booking = require("../Models/bookingModel");
// const Car = require("../Models/carModel");
// exports.bookCar = async (req, res) => {
//   const { token } = req.body;
//   try {
//     const customer =  stripe.customers.create({
//       email: token.email,
//       source: token.id,
//     });

//     const payment =  stripe.paymentIntents.create(
//       {
//         amount: req.body.totalAmount,
//         currency: "usd",
//         customer: customer.id,
//         receipt_email: token.email,
//         description: "Car rental services",
//       },
//       {
//         idempotencyKey: uuidv4(),
//       }
//     );

//     if (payment) {
//       req.body.transactionId = payment.source.id;
//       const newbooking = new Booking(req.body);
//       await newbooking.save();
//       const car = await Car.findOne({ _id: req.body.car });
//       console.log(req.body.car);
//       car.bookedTimeSlots.push(req.body.bookedTimeSlots);

//       await car.save();
//       res.send("Your booking is successfull");
//     } else {
//       return res.status(400).json(error);
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(400).json(error);
//   }
// };
// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find().populate("car").populate("user");
//     res.send(bookings);
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// };






const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51NGGovSBxnGg6S0scsrsfFzatkI8oZTIBfSEAEDyvZv5on2LBeJiW93TFbawUWgYihZLAklkMUP1qAnAKdxxcmEU00OSZjn1lm"
);
const Booking = require("../Models/bookingModel");
const Car = require("../Models/carModel");

exports.bookCar = async (req, res) => {
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: req.body.totalAmount,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: "Car rental services",
      },
      {
        idempotencyKey: uuidv4(),
      }
    );

    if (payment) {
      req.body.transactionId = payment.source ? payment.source.id : null; // Check if 'source' exists in 'payment'
      const newbooking = new Booking(req.body);
      await newbooking.save();
      const car = await Car.findOne({ _id: req.body.car });
      console.log(req.body.car);
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);
      await car.save();
      res.send("Your booking is successful");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("car").populate("user");
    res.send(bookings);
  } catch (error) {
    return res.status(400).json(error);
  }
};

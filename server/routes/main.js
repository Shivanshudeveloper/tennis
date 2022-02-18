const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51IdwfeH8KzFo5uc9YHKzp2HOPkZJvH0ij0qhWeg0wQ17G73o5fVJYjMkWOfAmWUgjVZe0DesJvrQKbmAPSacXsVP00qMXnEqFr"
);
const { v4: uuidv4 } = require("uuid");
// Getting Module
const Products_Model = require("../models/Products");
const MainStore_Model = require("../models/MainStore");
const FeaturedProduct_Model = require("../models/FeaturedProduct");
const Profile_Model = require("../models/Profile")
const Agreement_Model = require("../models/Agreement")
const Booking_Model = require("../models/Booking")
const RegisteredUser_Model = require("../models/RegisteredUser");

// TEST
// @GET TEST
// GET
router.get("/test", (req, res) => {
  res.send("Working");
});

// Database CRUD Operations
// @POST Request to GET the People
// GET
router.get("/getallproductapi", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  Products_Model.find({})
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Database CRUD Operations
// @POST Request to GET the People
// GET
router.get("/getallproductsmainstorefilters/:filter", (req, res) => {
  const { filter } = req.params;
  res.setHeader("Content-Type", "application/json");
  MainStore_Model.find({ gender: filter })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// Database CRUD Operations
// @POST Request to GET the Product Details
// GET
router.patch("/hidefeatured/:id", async (req, res) => {
  const { id } = req.params;
  res.setHeader("Content-Type", "application/json");
  const product = await FeaturedProduct_Model.find({ _id: id });
  await FeaturedProduct_Model.findByIdAndUpdate(
    id,
    { ...product, hidden: true },
    { new: true, useFindAndModify: false }
  )
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

// TEST
router.post("/profiles/test", async (req, res) => {
  res.json(req.body)
})

// Database CRUD Operations
// Post a new profile
// POST
router.post("/profiles", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  const newProfile = new Profile_Model({
    title: req.body.title,
    landlordName: req.body.landlordName,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    address1: req.body.address1,
    address2: req.body.address2,
    createdOn: req.body.createdOn,
    userId: req.body.userId
  });

  newProfile.save((err) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send("created a new profile")
  })
})

// Database CRUD Operations
// Get all the profiles corresponding to an userId
// GET
router.get("/profiles/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Profile_Model.find({ userId: req.params.userId }, (err, profiles) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(profiles)
  }
  )
})

// Database CRUD Operations
// Delete a profile based on _id
// DELETE
router.delete("/profiles/:profileId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Profile_Model.deleteOne({ _id: req.params.profileId }, (err) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send("Deleted one profile successfully!")
  })
})

// Database CRUD Operations
// Modify a profile based on _id
// PATCH
router.patch("/profiles/:profileId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Profile_Model.updateOne({ _id: req.params.profileId },
    {
      $set: req.body
    },
    (err) => {
      if (err)
        res.status(400).json(`Error: ${err}`)
      else
        res.status(200).send("Patched one profile")
    })
})

// Database CRUD Operations
// Get a profile based on _id
// GET
router.get("/getProfile/:profileId", async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  Profile_Model.findById({ _id: req.params.profileId }, (err, profile) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send(profile)
  })
})

// Database CRUD Operations
// Post a new agreement 
// POST
router.post("/agreements", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  console.log(req.body)

  const newAgreement = new Agreement_Model({
    title: req.body.title,
    date: req.body.date,
    template: req.body.template,
    landlord: req.body.landlord,
    propertyInfo: req.body.propertyInfo,
    propertyAddress: req.body.propertyAddress,
    leaseDurationInfo: req.body.leaseDurationInfo,
    monthlyRent: req.body.monthlyRent,
    deposit: req.body.deposit,
    userId: req.body.userId
  });

  newAgreement.save((err) => {
    if (err) {
      console.log(err)
      res.status(400).json(`Error: ${err}`)
    }
    else {
      res.status(200).send("created a new agreement")

    }
  })
})

// Database CRUD Operations
// Get all the agreements corresponding to a user_id
// GET
router.get("/agreements/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Agreement_Model.find({ userId: req.params.userId }, (err, agreements) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(agreements)
  }
  )
})

// Database CRUD Operations
// Delete an agreement based on _id
// DELETE
router.delete("/agreements/:agreement_id", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Agreement_Model.deleteOne({ _id: req.params.agreement_id }, (err) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send("Deleted one agreement successfully!")
  })
})

// Database CRUD Operations
// Post a new booking 
// POST
router.post("/bookings", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  // console.log(req.body)

  const newBooking = new Booking_Model({
    date: req.body.date,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    numberOfPeople: req.body.numberOfPeople,
    message: req.body.message,
    status: req.body.status,
    userId: req.body.userId
  });

  newBooking.save((err) => {
    if (err) {
      console.log(err)
      res.status(400).json(`Error: ${err}`)
    }
    else {
      res.status(200).send("created a new booking")

    }
  })
})

// Database CRUD Operations
// Get all the bookings corresponding to a user_id
// GET
router.get("/bookings/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Booking_Model.find({ userId: req.params.userId }, (err, bookings) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(bookings)
  }
  )
})

// Database CRUD Operations
// Get all the "Accepted" bookings corresponding to a user_id
// GET
router.get("/acceptedBookings/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Booking_Model.find({ userId: req.params.userId, status: "Accepted" }, (err, bookings) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(bookings)
  }
  )
})

// Database CRUD Operations
// Get an existing booking based on the booking id
// GET
router.get("/getBooking/:booking_id", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  // console.log(req.body, "\n", req.params)

  Booking_Model.findById({ _id: req.params.booking_id }, (err, booking) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send(booking)
  })
})

// Database CRUD Operations
// Delete a booking based on _id
// DELETE
router.delete("/bookings/:booking_id", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Booking_Model.deleteOne({ _id: req.params.booking_id }, (err) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send("Deleted one booking successfully!")
  })
})

// Database CRUD Operations
// Modify a booking based on _id
// PATCH
router.patch("/bookings/:booking_id", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  Booking_Model.updateOne({ _id: req.params.booking_id },
    {
      $set: req.body
    },
    (err) => {
      if (err)
        res.status(400).json(`Error: ${err}`)
      else
        res.status(200).send("Patched one booking")
    })
})

// Database CRUD Operations
// Register a new user
// POST
router.post("/users", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  const newUser = new RegisteredUser_Model({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    registrationDate: req.body.registrationDate,
    userId: req.body.userId
  });

  newUser.save((err) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).send("registered a new user")
  })
})

// Database CRUD Operations
// Get all the registered users
// GET
router.get("/users", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  RegisteredUser_Model.find({}, (err, users) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(users)
  }
  )
})

// Database CRUD Operations
// Get a user corresponding to the given userId
// GET
router.get("/users/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  RegisteredUser_Model.findOne({ userId: req.params.userId }, (err, user) => {
    if (err)
      res.status(400).json(`Error: ${err}`)
    else
      res.status(200).json(user)
  }
  )
})

router.patch("/users/:userId", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  RegisteredUser_Model.updateOne({ userId: req.params.userId },
    {
      $set: req.body
    },
    (err) => {
      if (err)
        res.status(400).json(`Error: ${err}`)
      else
        res.status(200).send("Patched one user")
    })
})

// Database CRUD Operations
// Get users whose names are like the given query
// GET
router.get("/findUsers/:query", async (req, res) => {

  res.setHeader("Content-Type", "application/json");

  let query = req.params.query

  RegisteredUser_Model.find({
    "$expr": {
      "$regexMatch": {
        "input": { "$concat": ["$firstName", " ", "$lastName", " ", "$email", " ", "$phoneNumber"] },
        "regex": query,
        "options": "i"
      }
    }
  },
    (err, users) => {
      if (err)
        res.status(400).json(`Error: ${err}`)
      else
        res.status(200).json(users)
    })
})

module.exports = router;
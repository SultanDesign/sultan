const express = require("express");
const router = express.Router();
const _ = require("lodash");

// import user model
const User = require("../../model/user/user");

// import error handling method
const ApiErrors = require("../../controller/utils/validation_error");

router.get("/:who_want", async (req, res, next) => {
  try {
    // find the admin
    const admin = await User.find();

    // create response
    const response = {
      admin_data: admin[0],
    };

    // send the response to the clint
    res.status(200).send(response);
  } catch (error) {
    // return the error
    return next(
      new ApiErrors(
        JSON.stringify({
          english: `${error} ...`,
          arabic: "... عذرا خطأ عام",
        }),
        500
      )
    );
  }
});

module.exports = router;

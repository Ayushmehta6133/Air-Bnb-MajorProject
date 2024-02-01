const express = require('express');
const app = express();
port = 8080;
const MethodOverride = require("method-override");
// ejs mate------------
const ejsMate = require('ejs-mate');

// Require------------------------------------
const mongoose = require('mongoose');
const Listing = require("./models/listings.js");
const Review = require('./models/review.js');
const { listingSchema, reviewSchema} = require('./SchemaValidation.js');  // Joi npm package

const wrapAsync = require('./utils/wrapAsync.js');
const expressError = require('./utils/ExpressError.js');
const path = require('path');


// -----------------------------
app.engine('ejs', ejsMate);
app.set('views engine', "views")
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(MethodOverride("_method"));


// -------------------------------Connecting to Database

main()
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/WanderLust');

}

// ------------------------------------

app.get("/", async (req, res) => {
   res.redirect("/listings");
});


app.get('/listings', async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
})

//  New route
app.get("/listings/new", (req, res) => {
    res.render('listings/new.ejs');
})
// --------------------------------------------
// Show route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs", { listing })
}));

function validateListing(req, res, next) {
    let { error } = listingSchema.validate(req.body) //JOI package validation
    if (error) {
        let errmsg = error.details.map((el)=>el.message).join(',')
        throw new expressError(400, errmsg);
    } else {
        next()
    }
}

// Review Validation
function validateReview(req, res, next) {
    let { error } = reviewSchema.validate(req.body) //JOI package validation
    if (error) {
        let errmsg = error.details.map((el) => el.message).join(',')
        throw new expressError(400, errmsg);
    } else {
        next()
    }
}

// ----------------------------------------------------------


app.post("/listings",validateListing, wrapAsync(async (req, res, next) => {
    // let {title,description,image,price,location,country} = req.body;   another method of doing same thing
    // listing object has been created inside the name attribute in new.ejs
    // if (!req.body.listing) {
    //     throw new expressError(404, "please send a valid data for listing");
    // }
    const newlisting = new Listing(req.body.listing);
    await newlisting.save();
    res.redirect("/listings");
}));

// --------------------------------------------
// Edit route 
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}))

// Update route---------------------------------
app.put("/listings/:id",validateListing, wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);

}));


// -------------------------
// Delete route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleted = await Listing.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/listings");

}))
// reviews Route-----------------------------------------------------------------
app.post("/listings/:id/reviews",validateReview,wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    let newReview= new Review(req.body.review);
    console.log(newReview);
    listing.reviews.push(newReview);

    await listing.save();
    await newReview.save();

    res.redirect(`/listings/${id}`);
}))

//  ------------Deleting Reviews Route
app.delete("/listings/:id/reviews/:reviewId",wrapAsync(async(req,res)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});  // Mongoose Pull operator
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}))


// -------------------------------------------------------------------





app.all("*", (req, res, next) => {
    next(new expressError(404, "Page not found"));
})

// Error handling middleware
app.use((err, req, res, next) => {
    // console.log(err);
    let { statuscode = 500, message = "Unknown error occured" } = err;
    res.status(statuscode).render('error.ejs', { err });
    next();
})


app.listen(port, () => {
    console.log('App is listening to port 8080');
}
);
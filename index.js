const assert = require('assert');

function genUID() {
    return Math.floor(Math.random() * 100000000)
}

let itemsBought = {} // global variable that keeps track of all the items a user has bought
// You'll need to add many more global variables


/*
initializeUserIfNeeded adds the UID to our global state unless it's already there
parameter: [uid] the UID of the user.
returns: undefined
*/
function initializeUserIfNeeded(uid) {
    // If the user is not in our global itemsBought variable, add him
    if(!(uid in itemsBought)) itemsBought[uid] = [];
    // If the user is not in our global itemsSold variable, add him
    // ...
}

/* 
createListing adds a new listing to our global state.
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [blurb] A blurb describing the item
    returns: the ID of the new listing
*/
function createListing(sellerID, price, blurb) {

}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: an object that contains the price and the blurb
*/
function getItemDescription(listingID) {

}

/* 
buy changes the global state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in his history of purchases
The seller will see the listing in his history of items sold
    parameters: 
     [buyerID] The ID of buyer
     [sellerID] The ID of seller
     [listingID] The ID of listing
    returns: undefined
*/
function buy(buyerID, sellerID, listingID) {

}


/* 
allItemsSold returns the IDs of all the items sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/
function allItemsSold(sellerID) {

}

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
function allItemsBought(buyerID) {

}

/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: an array of listing IDs
*/
function allListings() {

}

/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: an array of listing IDs
*/
function searchForListings(searchTerm) {

}


// The tests
let sellerID = genUID();
let buyerID = genUID();
initializeUserIfNeeded(sellerID);
initializeUserIfNeeded(buyerID);
let listing1ID = createListing(sellerID, 500000, "A very nice boat");
let listing2ID = createListing(sellerID, 1000, "Faux fur gloves");
let listing3ID = createListing(sellerID, 100, "Running shoes");
let product2Description = getItemDescription(listing2ID);

buy(buyerID, sellerID, listing2ID);
buy(buyerID, sellerID, listing3ID);

let allSold = allItemsSold(sellerID);
let soldDescriptions = allSold.map(getItemDescription);

let allBought = allItemsBought(buyerID);
let allBoughtDescriptions = allBought.map(getItemDescription)

let listings = allListings();
let boatListings = searchForListings("boat");
let shoeListings = searchForListings("shoes");

let boatDescription = getItemDescription(listings[0])
let boatBlurb = boatDescription.blurb;
let boatPrice = boatDescription.price;

assert(allSold.length == 2); // The seller has sold 2 items
assert(allBought.length == 2); // The buyer has bought 2 items
assert(listings.length == 1); // Only the boat is still on sale
assert(boatListings.length == 1); // The boat hasn't been sold yet
assert(shoeListings.length == 0); // The shoes have been sold
assert(boatBlurb == "A very nice boat");
assert(boatPrice == 500000);

// Modules
const webpush = require("web-push");
const urlsafeBase64 = require("urlsafe-base64");

// Vapid Keys
const vapid = require("./vapid.json");

// Subscriptions
let subscriptions = [];

// Create URL safe Vapid public key
module.export.getKey = () => {
    return urlsafeBase64.decode(vapid.publicKey)
};

// Store new subscription
module.export.addSubscription = (subscription) => {

    // Add to subscriptions array
    subscriptions.push(subscription);

    console.log(subscriptions);
};

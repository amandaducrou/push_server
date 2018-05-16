// Modules
const webpush = require("web-push");
const urlsafeBase64 = require("urlsafe-base64");
const Storage = require("node-storage");

// Vapid Keys
const vapid = require("./vapid.json");

// Subscriptions
const subscriptionsKey = "subscriptions";
const store = new Storage(`${__dirname}/db`);

let subscriptions = store.get(subscriptionsKey) || [];

// Create URL safe Vapid public key
module.exports.getKey = () => {
    return urlsafeBase64.decode(vapid.publicKey)
};

// Store new subscription
module.exports.addSubscription = (subscription) => {

    // Add to subscriptions array
    subscriptions.push(subscription);

    // Persist subscriptions
    store.put(subscriptionsKey, subscriptions);
};

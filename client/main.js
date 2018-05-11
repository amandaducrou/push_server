// Service Worker Registration
let swReg;

// Update UI for subscribed status
const setSubscribedStatus = (state) => {

    if(state) {
        document.getElementById("subscribe").className = "hidden";
        document.getElementById("unsubscribe").className = "";
    } else {
        document.getElementById("subscribe").className = "";
        document.getElementById("unsubscribe").className = "hidden";
    }
}

// Register Service Worker
navigator.serviceWorker.register("sw.js").then(registration => {

    // Reference registration globally
    swReg = registration;

    // Check if subscription exists, and if so, update the UI
    swReg.pushManager.getSubscription().then(setSubscribedStatus);

// Log errors
}).catch(console.error);

fetch("http://localhost:3333").then(res => res.text()).then(console.log);

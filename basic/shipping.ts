Object.defineProperty(window, "MySweetApp", { value: "v1.0.0", writable: true });

function deliveryMethod() {
    // TODO
    return "overnight";
}

function shipWeight(){
    var elem = document.getElementById('weight');
    var weight = elem ? elem.textContent : '0';
    return parseInt(weight || '0');
}

/*
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string[]) {
    function sendEmail(addr){
        // Default to standard delivery if empty
        console.log(`Shipping to ${addr} via ${deliveryMethod() || "standard"} delivery`);

        if (shipWeight() > 100){
            console.log("WARNING: Oversize package");
        }
    }
    // If it's an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val, idx) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
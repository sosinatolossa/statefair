const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair") //select the state-fair id from index.html

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", event => { //add event that listens for event that says rideTicketPurchased
        contentTarget.innerHTML += ` 
            <div class="person rider"></div>
        `
    }) //insert the change event in index.html
}




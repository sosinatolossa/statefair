export const contentTarget = document.querySelector(".entry") //give me a reference of the whole DOM
export const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "rideTicket") { //if the id of the button that is clicked is equal to 'rideTicket'...
        const rideEvent = new CustomEvent("rideTicketPurchased", { //create a new custom event, that lets the other components listen for the user clicking the 'Ride Ticket' button, and that event says rideTicketPurchased
            detail: {
                rideButton: event.target.value //and it will have a property of rideButton and the value will be from event that is created?
            }
        })
        eventHub.dispatchEvent(rideEvent) //this will say the rideEvent(the new event) is ready to be sent to the HTML element which is 'state-fair' id
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "foodTicket") { //if 
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                foodButton: event.target.value //
            }
        })
        eventHub.dispatchEvent(foodEvent) //
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                gameButton: event.target.value //
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                sideshowButton: event.target.value //
            }
        })
        eventHub.dispatchEvent(sideshowEvent)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
            <button id="foodTicket">Food Ticket</button>
            <button id="gameTicket">Game Ticket</button>
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
    `
}


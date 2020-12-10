export const contentTarget = document.querySelector(".entry") //give me a reference of the whole DOM
export const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased", {
            detail: {
                rideButton: event.target.value //when rideButton is clicked, it's gonna send that change to the one that is listening
            }
        })
        eventHub.dispatchEvent(rideEvent)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "foodTicket") {
        const foodEvent = new CustomEvent("foodTicketPurchased", {
            detail: {
                foodButton: event.target.value //when food button is clicked, it's gonna send that change to the one that is listening
            }
        })
        eventHub.dispatchEvent(foodEvent)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "gameTicket") {
        const gameEvent = new CustomEvent("gameTicketPurchased", {
            detail: {
                gameButton: event.target.value //when game button is clicked, it's gonna send that change to the one that is listening
            }
        })
        eventHub.dispatchEvent(gameEvent)
    }
})

eventHub.addEventListener("click", (event) => {
    if (event.target.id === "sideshowTicket") {
        const sideshowEvent = new CustomEvent("sideshowTicketPurchased", {
            detail: {
                sideshowButton: event.target.value //when game button is clicked, it's gonna send that change to the one that is listening
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


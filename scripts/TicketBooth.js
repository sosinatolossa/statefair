export const contentTarget = document.querySelector(".entry") //give me a reference of the whole DOM
export const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (event) => {
    if (event.id === ("rideTicket")) {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideTicketPurchased)
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}


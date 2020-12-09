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

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
    `
}


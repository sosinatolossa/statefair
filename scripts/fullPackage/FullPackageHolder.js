
const contentTarget = document.querySelector(".rides")
const contentTarget2 = document.querySelector(".food")
const contentTarget3 = document.querySelector(".games")
const contentTarget4 = document.querySelector(".sideshow")

const eventHub = document.querySelector("#state-fair")

export const FullPackageTicketHolders = () => {
    eventHub.addEventListener("fullPackageTicketPurchased", event => {
        contentTarget.innerHTML += `
            <div class="person bigSpender"></div>
        `
        contentTarget2.innerHTML += `
            <div class="person bigSpender"></div>
        `
        contentTarget3.innerHTML += `
            <div class="person bigSpender"></div>
        `
        contentTarget4.innerHTML += `
            <div class="person bigSpender"></div>
        `
    })
}
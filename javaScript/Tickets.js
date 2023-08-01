console.info("Ticket Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.data('tickets', {
        gotoDetailsPage() {
            localStorage.setItem("tickets", JSON.stringify(this.ticket));
            window.location.href = "Details.html";
        }
    });
});
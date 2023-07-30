console.info("Ticket Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.javaScript('tickets', {
        init() {
            console.log("Page Loaded");
        },
    });
});
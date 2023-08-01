console.info("Payment Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.data('payment', {
        init() {
            console.log("Page Loaded");
        },
    });
});
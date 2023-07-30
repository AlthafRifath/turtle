console.info("Payment Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.javaScript('payment', {
        init() {
            console.log("Page Loaded");
        },
    });
});
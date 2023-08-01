console.info("Confirmation Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.data('confirmation', {
        init() {
            console.log("Page Loaded");
        },
    });
});
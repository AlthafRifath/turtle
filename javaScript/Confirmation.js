console.info("Confirmation Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.javaScript('confirmation', {
        init() {
            console.log("Page Loaded");
        },
    });
});
console.info("Details Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.data('details', {
        init() {
            console.log("Page Loaded");
        },
    });
});
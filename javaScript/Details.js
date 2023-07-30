console.info("Details Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.javaScript('details', {
        init() {
            console.log("Page Loaded");
        },
    });
});
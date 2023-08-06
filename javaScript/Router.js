console.info("Router Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.store('router', {
        currentPage: '',

        goto(page) {
            this.currentPage = page;
            window.location.href = `${page}.html`;
        },
    });
});

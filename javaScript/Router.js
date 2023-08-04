console.info("Router Page Loaded");

document.addEventListener("alpine:init", () => {

    Alpine.store('router', {
        goto(page) {
            alert(page);
        }
    })

});
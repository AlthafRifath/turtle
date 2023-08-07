console.log("Details Page Loaded");

document.addEventListener('alpine:init', () => {
    Alpine.data('details', () => ({
        visitors: {
            fullname: '',
            mobile: '',
            email: '',
            confirmationEmail: '',
            gender: '',
        },
        init() {
            const input = document.querySelector("#mobile");
            window.intlTelInput(input, {
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });
        },
    }));
});
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
        selectedTimeSlot: [],
        durations: [],
        selectedDate: null,
        slAdultTickets: 0,
        slChildTickets: 0,
        foreignerAdultTickets: 0,
        foreignerChildTickets: 0,
        slAdultCharges: 0, 
        slChildCharges: 0,
        foreignerAdultCharges: 0,
        foreignerChildCharges: 0,
        totalCharges: 0,

        init() {
            const input = document.querySelector("#mobile");
            window.intlTelInput(input, {
                utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
            });
            this.initializeData(); // Call initializeData after data is fetched
        },

        calculateDurationHours() {
            const selectedTimeSlotParts = this.selectedTimeSlot.split('-');
            const startHour = parseFloat(selectedTimeSlotParts[0]);
            const endHour = parseFloat(selectedTimeSlotParts[1]);
            return endHour - startHour;
        },
        
        initializeData() {
            const storedData = localStorage.getItem('ticketsData');
            if (storedData) {
                const inputData = JSON.parse(storedData);
                this.selectedTimeSlot = inputData.selectedTimeSlot;
                this.durations = inputData.durations;
                this.selectedDate = inputData.selectedDate;
                this.slAdultTickets = inputData.slAdultTickets;
                this.slChildTickets = inputData.slChildTickets;
                this.foreignerAdultTickets = inputData.foreignerAdultTickets;
                this.foreignerChildTickets = inputData.foreignerChildTickets;
                this.slAdultCharges = inputData.slAdultCharges;
                this.slChildCharges = inputData.slChildCharges;
                this.foreignerAdultCharges = inputData.foreignerAdultCharges;
                this.foreignerChildCharges = inputData.foreignerChildCharges;
                this.totalCharges = inputData.totalCharges;
            }
        },

        saveData() {
            const inputData = {
                visitors: this.visitors,
            };
            localStorage.setItem('details', JSON.stringify(inputData));
        },
    }));
});
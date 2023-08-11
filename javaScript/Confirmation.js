console.log("Confirmation page loaded")
document.addEventListener("alpine:init", () => {
    Alpine.data('confirmation', () => ({
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
        visitors: {
            fullname: '',
            mobile: '',
            email: '',
            confirmationEmail: '',
            gender: '',
        },

        init() {
            this.initializeTicketsData(); // Call initializeData after data is fetched
            this.initializeDetailsData(); // Call initializeData after data is fetched
        },

        calculateDurationHours() {
            const selectedTimeSlotParts = this.selectedTimeSlot.split('-');
            const startHour = parseFloat(selectedTimeSlotParts[0]);
            const endHour = parseFloat(selectedTimeSlotParts[1]);
            return endHour - startHour;
        },

        initializeTicketsData() {
            const storedTicketsData = localStorage.getItem('ticketsData');
            if (storedTicketsData) {
                const inputData = JSON.parse(storedTicketsData);

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

        initializeDetailsData() {
            const storedDetailsData = localStorage.getItem('details');
            if (storedDetailsData) {
                const inputData = JSON.parse(storedDetailsData);

                this.visitors.fullname = inputData.visitors.fullname;
                this.visitors.mobile = inputData.visitors.mobile;
                this.visitors.email = inputData.visitors.email;
                this.visitors.confirmationEmail = inputData.visitors.confirmationEmail;
                this.visitors.gender = inputData.visitors.gender;
            }
        },
    }))        
});
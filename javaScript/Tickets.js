console.log("Tickets Page Loaded");

document.addEventListener("alpine:init", () => {
    Alpine.data('ticketsData', () => ({
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

        fetchData() {
            console.log("Tickets JSON Data Loaded");
            fetch('JSON/Tickets.json')
                .then(response => response.json())
                .then(jsonData => {
                    console.log('Data Fetched:', jsonData);
                    this.durations = jsonData.durations; // Assign durations from JSON
                    this.calculateCharges(); // Call calculateCharges after data is fetched
                    jsonData.durations.forEach(duration => {
                        const startHour = parseInt(duration.start);
                        const endHour = parseInt(duration.end);
                        duration.hours = endHour - startHour;
                    })
                })
                .catch(error => console.error('Error Fetching Data', error));
        },

        formatDuration(duration) {
            return `${duration.start} - ${duration.end} ${duration.duration === "Peak" ? "(Peak)" : ""}`;
        },

        getSelectedDuration() {
            return this.durations.find(duration => this.selectedTimeSlot.includes(duration.start));
        },

        calculateCharges() {
            const selectedDuration = this.getSelectedDuration();
            if (!selectedDuration) return; // Handle case when selectedDuration is not found
            const charges = selectedDuration.charges;

            this.slAdultCharges = charges.slAdult * this.slAdultTickets;
            this.slChildCharges = charges.slChild * this.slChildTickets;
            this.foreignerAdultCharges = charges.foreignerAdult * this.foreignerAdultTickets;
            this.foreignerChildCharges = charges.foreignerChild * this.foreignerChildTickets;

            this.totalCharges = this.slAdultCharges + this.slChildCharges + this.foreignerAdultCharges + this.foreignerChildCharges;
        },

        saveData () {
            const inputData = {
                selectedTimeSlot: this.selectedTimeSlot,
                durations: this.durations,
                selectedDate: this.selectedDate,
                slAdultTickets: this.slAdultTickets,
                slChildTickets: this.slChildTickets,
                foreignerAdultTickets: this.foreignerAdultTickets,
                foreignerChildTickets: this.foreignerChildTickets,
                slAdultCharges: this.slAdultCharges,
                slChildCharges: this.slChildCharges,
                foreignerAdultCharges: this.foreignerAdultCharges,
                foreignerChildCharges: this.foreignerChildCharges,
                totalCharges: this.totalCharges,
            };

            localStorage.setItem('ticketsData', JSON.stringify(inputData));
        },

    }));
});

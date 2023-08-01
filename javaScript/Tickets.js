console.info("Ticket Page Loaded");

document.addEventListener("alpine:init", () => {
    
    fetch('JSON/Tickets.json')
        .then(response => response.json())
        .then(jsonData => {
            console.log('Data fetched:', jsonData);
            initializeApp(jsonData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
    function initializeApp(jsonData) {
        Alpine.data('tickets', {
            selectedTimeSlot: '',
            selectedDate: '',
            slAdultTickets: 0,
            slChildTickets: 0,
            foreignerAdultTickets: 0,
            foreignerChildTickets: 0,
            durations: jsonData.durations,

            gotoDetailsPage() {
                const inputData = {
                    selectedTimeSlot: this.selectedTimeSlot,
                    selectedDate: this.selectedDate,
                    slAdultTickets: this.slAdultTickets,
                    slChildTickets: this.slChildTickets,
                    foreignerAdultTickets: this.foreignerAdultTickets,
                    foreignerChildTickets: this.foreignerChildTickets,
                };
                localStorage.setItem('ticketsData', JSON.stringify(inputData));
                window.location.href = "Details.html";
            }
        });
        console.log("Tickets JSON Data", JSON.stringify(jsonData));
    }
});
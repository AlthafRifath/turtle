console.info("Ticket Page Loaded");

// Alpine JS
document.addEventListener("alpine:init", () => {
  Alpine.store('ticketsModel', {

    // date : null,
    // duration: null,
    // guests: null,

    // user input values

    init() {

    }
  });
});


// Vanilla JS
console.log('data store loaded');
fetch('JSON/Tickets.json')
  .then(response => response.json())
  .then(jsonData => {
    console.log('Data fetched:', jsonData);
    this.duration = jsonData.duration;
    document.addEventListener('DOMContentLoaded', function () {
      const timeSlotSelect = document.getElementById('timeSlot');
      console.log('Select element:', timeSlotSelect); // Check if the select element is found

      jsonData.durations.forEach((duration => {
        const option = document.createElement('option');
        option.value = "${duration.start}-${duration.end}";
        option.textContent = `${duration.start} - ${duration.end} ${duration.duration === "Peak" ? "(Peak)" : ""}`;
        timeSlotSelect.appendChild(option);
        console.log('Appended option:', option); // Check if the option is being created and appended

      }))
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
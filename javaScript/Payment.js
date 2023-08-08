console.log("Payment Page Loaded");
document.addEventListener('alpine:init', () => {
    Alpine.data('payments', () => ({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        nameOnTheCard: '',

        saveData() {
            const inputData = {
                cardNumber: this.cardNumber,
                expiryDate: this.expiryDate,
                cvv: this.cvv,
                nameOnTheCard: this.nameOnTheCard,
            };
            localStorage.setItem('payments', JSON.stringify(inputData));
        },
    }));

});
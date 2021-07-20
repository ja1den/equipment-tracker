/* ----- Update ----- */

// Locate Elements
const startDate = document.getElementById('booking-start');
const endDate = document.getElementById('booking-end');

// Handle Update
startDate?.addEventListener('change', () => {
	// Update Minimum
	endDate.setAttribute('min', startDate.value);

	// Update Input
	if (new Date(startDate.value) > new Date(endDate.value)) endDate.value = startDate.value;
});

/* ----- Submit ----- */

// Locate Element
const bookingForm = document.getElementById('booking-form');

// Handle Submit
bookingForm?.addEventListener('submit', async event => {
	// Prevent Default
	event.preventDefault();

	// Check Form
	if (bookingForm.checkValidity()) {
		// Read Data
		const data = Object.fromEntries(new FormData(bookingForm).entries());

		// Log
		console.log(data);
	} else {
		// Show Input Errors
		bookingForm.showInputErrors();
	}
});
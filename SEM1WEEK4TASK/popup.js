
const modal = document.createElement('div');
const openModalBtn = document.getElementById('open-modal');

// Create the modal content
const modalContent = document.createElement('div');
modalContent.className = 'modal-content';
modalContent.innerHTML = 'This is the modal content. Click outside or on the close button to close.';

// Create the close button
const closeBtn = document.createElement('button');
closeBtn.className = 'close-btn';
closeBtn.textContent = 'Close';
closeBtn.addEventListener('click', closeModal);

// Add the close button to the modal content
modalContent.appendChild(closeBtn);

// Add the modal content to the modal
modal.className = 'modal';
modal.appendChild(modalContent);

// Add the modal to the body
document.body.appendChild(modal);

// Open the modal when the button is clicked
openModalBtn.addEventListener('click', openModal);

// Function to open the modal
function openModal() {
	modal.style.display = 'block';
}

// Function to close the modal
function closeModal(event) {
	if (event.target === modal || event.target === closeBtn) {
		modal.style.display = 'none';
	}
}

// Close the modal when clicking outside
document.addEventListener('click', closeModal);



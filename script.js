const form = document.getElementById('planningForm');
const card = document.querySelector('.card');
const confirmation = document.getElementById('confirmation');
const statusError = document.getElementById('statusError');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  statusError.classList.remove('show');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    form.classList.add('hidden');
    confirmation.classList.add('show');
  } catch (err) {
    statusError.textContent =
      "Hmm, that didn't go through. Please try again, or email me directly.";
    statusError.classList.add('show');
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send My Answers';
  }
});

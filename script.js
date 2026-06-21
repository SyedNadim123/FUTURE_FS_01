const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const payload = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  status.textContent = 'Sending...';

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      status.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
      status.style.color = 'green';
      form.reset();
    } else {
      status.textContent = result.error || 'Something went wrong.';
      status.style.color = 'red';
    }
  } catch (error) {
    status.textContent = 'Network error. Please try again later.';
    status.style.color = 'red';
  }
});
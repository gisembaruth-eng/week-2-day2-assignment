const textarea = document.getElementById('tweet');
const counter = document.getElementById('counter');
const submitButton = document.getElementById('submit');

function updateCounter() {
  const count = textarea.value.length;
  counter.textContent = `${count}/280 characters`;

  if (count > 280) {
    counter.style.color = 'red';
    textarea.style.borderColor = 'red';
  } else if (count >= 261) {
    counter.style.color = 'orange';
    textarea.style.borderColor = 'orange';
  } else {
    counter.style.color = 'inherit';
    textarea.style.borderColor = '#666';
  }

  submitButton.disabled = count > 280;
}

textarea.addEventListener('input', updateCounter);

document.getElementById('tweetForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const message = textarea.value.trim();

  if (!message) {
    alert('Please enter some text before submitting.');
    return;
  }

  alert('Submitted successfully!');
});

updateCounter();

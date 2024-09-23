function toggleMenu() {
  const sideMenu = document.getElementById('sideMenu');
  sideMenu.classList.toggle('open');
}

// JavaScript to toggle the active class
document.getElementById('annualReportsBtn').addEventListener('click', function () {
  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('interimStatementsBtn').classList.remove('active');
  document.getElementById('interimStatementsBtn').classList.add('inactive');
});

document.getElementById('interimStatementsBtn').addEventListener('click', function () {
  this.classList.add('active');
  this.classList.remove('inactive');
  document.getElementById('annualReportsBtn').classList.remove('active');
  document.getElementById('annualReportsBtn').classList.add('inactive');
});

// submission logic
function validateEmail() {
  const emailInput = document.getElementById('email-input');
  const errorMessage = document.getElementById('error-message');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(emailInput.value)) {
      errorMessage.style.display = 'none';
      alert('Email submitted successfully!');
      // You can add your form submission logic here
  } else {
      errorMessage.style.display = 'block';
  }
}
window.addEventListener("load",() =>{
const loader = document.querySelector(".loader");

loader.classList.add("loader-hidden");

loader.addEventListener("transitionend",() => {
document.body.removeChild("loader");
})
})

    function toggleForm() {
      const form = document.getElementById('bookingFormContainer');
      form.style.display = form.style.display === 'block' ? 'none' : 'block';
    }
  
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const message = document.getElementById('successMessage');
      message.textContent = `Booking successful, ${name}!`;
      document.getElementById('bookingForm').reset();
    });
  
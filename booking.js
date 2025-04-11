const form = document.getElementById('booking-form');
const totalEl = document.getElementById('total');
const summaryEl = document.getElementById('summary');

function calculateTotal() {
  const destination = document.getElementById('destination').value;
  const start = new Date(document.getElementById('start-date').value);
  const end = new Date(document.getElementById('end-date').value);
  const people = parseInt(document.getElementById('people').value);
  const accommodation = form.elements['accommodation'].value;
  const addOns = {
    tour: document.getElementById('tour').checked,
    transport: document.getElementById('transport').checked,
  };

  const days = (end - start) / (1000 * 3600 * 24);
  const basePrice = 100;
  const pricePerPerson = 80;
  const accommodationPrices = { budget: 0, boutique: 50, luxury: 100 };
  const addOnPrices = { tour: 30, transport: 20 };

  let total = basePrice + (people * pricePerPerson);
  total += accommodationPrices[accommodation] || 0;
  if (addOns.tour) total += addOnPrices.tour;
  if (addOns.transport) total += addOnPrices.transport;

  totalEl.textContent = total;

  summaryEl.innerHTML = `
    <p><strong>Destination:</strong> ${destination}</p>
    <p><strong>Dates:</strong> ${start.toLocaleDateString()} - ${end.toLocaleDateString()}</p>
    <p><strong>People:</strong> ${people}</p>
    <p><strong>Accommodation:</strong> ${accommodation}</p>
    <p><strong>Add-Ons:</strong> ${Object.entries(addOns).filter(([_, v]) => v).map(([k]) => k).join(', ') || 'None'}</p>
  `;
}

form.addEventListener('change', calculateTotal);
form.addEventListener('input', calculateTotal);
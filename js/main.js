const propertySeven = document.querySelector('[data-purpose="property-seven"]');
const contactCard = document.querySelector('[data-purpose="contact-card"]');

if (propertySeven && contactCard) {
	contactCard.parentElement.insertBefore(propertySeven, contactCard);
}

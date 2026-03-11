// JavaScript for Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');
for (let link of mobileMenuLinks) {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
}

// JavaScript for Contact Form Submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    
    // In a real website, you would send this data to a server.
    // For this demo, we'll just show a success message.
    alert('Thank you for your message! We will get back to you soon.');
    
    contactForm.reset(); // Clear the form fields
});

// Add this script at the end of your body, or in your script.js file

document.addEventListener('DOMContentLoaded', () => {
    const materialOrderForm = document.getElementById('materialOrderForm');

    if (materialOrderForm) {
        materialOrderForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get form values
            const stone6ft = document.getElementById('stone_6ft_qty').value;
            const stone7ft = document.getElementById('stone_7ft_qty').value;
            const stone8ft = document.getElementById('stone_8ft_qty').value;
            const chainlinkHeight = document.getElementById('chainlink_height').value;
            const chainlinkLength = document.getElementById('chainlink_length').value; // Now in feet
            const orderName = document.getElementById('order_name').value;
            const orderPhone = document.getElementById('order_phone').value;
            const orderMessage = document.getElementById('order_message').value;

            // Company Location to add to the message
            const companyLocation = "Erode, Tamil Nadu, India"; // Your company's specific location

            // Construct the WhatsApp message
            let message = `Hello Mayil Fencing, I would like to place an order inquiry:\n\n`;
            message += `--- Material Order ---\n`;

            if (parseInt(stone6ft) > 0) message += `Stones (6 ft): ${stone6ft} Nos\n`;
            if (parseInt(stone7ft) > 0) message += `Stones (7 ft): ${stone7ft} Nos\n`;
            if (parseInt(stone8ft) > 0) message += `Stones (8 ft): ${stone8ft} Nos\n`;

            if (chainlinkHeight && chainlinkLength) {
                message += `Twisted Chain Link: ${chainlinkHeight} ft height, ${chainlinkLength} feet length\n`; // Changed to feet
            } else if (chainlinkHeight) {
                message += `Twisted Chain Link Height selected: ${chainlinkHeight} ft (Please specify length in feet)\n`;
            } else if (chainlinkLength) {
                message += `Twisted Chain Link Length entered: ${chainlinkLength} feet (Please specify height)\n`;
            }

            if (orderMessage) {
                message += `\n--- Additional Notes ---\n${orderMessage}\n`;
            }

            message += `\n--- Customer Details ---\n`;
            message += `Name: ${orderName}\n`;
            message += `Phone: ${orderPhone}\n`;
            message += `Company Location: ${companyLocation}\n`; // Added company location

            // Encode the message for a URL
            const encodedMessage = encodeURIComponent(message);

            // BOYS Fencing's WhatsApp number (replace with the actual number if different)
            const whatsappNumber = '918056920076'; // **REMINDER: Replace with the actual 10-digit WhatsApp number of BOYS Fencing (e.g., 919942735235)**

            // Construct the WhatsApp API URL
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

            // Open WhatsApp
            window.open(whatsappUrl, '_blank');

            // Optional: Provide feedback to the user
            alert('Your order inquiry has been sent to WhatsApp! We will contact you shortly.');

            // Clear the form after submission
            materialOrderForm.reset();
        });
    }

    // Existing mobile menu toggle logic (ensure this is still present and working)
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });
    }
});
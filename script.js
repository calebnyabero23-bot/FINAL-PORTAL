document.addEventListener('DOMContentLoaded', () => {
    // Nav elements
    const loginSection = document.getElementById('login-section');
    const portalWrapper = document.getElementById('portal-wrapper');
    const homeSection = document.getElementById('home-section');
    const paymentSection = document.getElementById('payment-section');
    const sidebar = document.getElementById('sidebar');

    // Logic to switch between Home and Payment Gateway
    window.showSection = (sectionName) => {
        if (sectionName === 'home') {
            homeSection.classList.remove('hidden');
            paymentSection.classList.add('hidden');
        } else if (sectionName === 'payment') {
            homeSection.classList.add('hidden');
            paymentSection.classList.remove('hidden');
        }
        window.scrollTo(0, 0); // Always scroll to top
    };

    // Login logic
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const idValue = document.getElementById('reg-input').value;
        document.getElementById('p-reg').textContent = idValue;
        document.getElementById('p-name').textContent = idValue;
        
        loginSection.classList.add('hidden');
        portalWrapper.classList.remove('hidden');
    });

    // Make Payment Button click
    document.getElementById('goto-payment').addEventListener('click', () => {
        showSection('payment');
    });

    // Sidebar Toggle
    document.getElementById('menu-btn').addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    // Logout logic
    document.getElementById('logout-btn').addEventListener('click', () => {
        location.reload(); // Simple way to reset everything
    });
});
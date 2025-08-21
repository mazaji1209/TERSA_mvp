document.addEventListener('DOMContentLoaded', () => {
    const landingSection = document.getElementById('landing-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginFormContainer = document.getElementById('login-form-container');
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const welcomeMessage = document.getElementById('welcome-message');
    const tradesTableBody = document.getElementById('trades-table-body');
    const logoutBtn = document.getElementById('logout-btn');
    const logoutDropdown = document.getElementById('logout-dropdown');
    const showLoginBtn = document.getElementById('show-login-btn');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');

    // Mock data para trades recientes
    const mockTrades = [
        { id: 1, amount: 100, price: 500, date: '2025-08-20' },
        { id: 2, amount: 250, price: 1200, date: '2025-08-19' },
        { id: 3, amount: 50, price: 300, date: '2025-08-18' }
    ];

    // Mostrar formulario de login
    showLoginBtn.addEventListener('click', () => {
        loginFormContainer.classList.remove('hidden');
        showLoginBtn.classList.add('hidden');
    });

    // Función para mostrar dashboard
    function showDashboard(username) {
        landingSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        welcomeMessage.textContent = `¡Hola, ${username}! Aquí tu dashboard de trading de carbono.`;
        populateTradesTable();
    }

    // Poblar tabla de trades
    function populateTradesTable() {
        tradesTableBody.innerHTML = '';
        mockTrades.forEach(trade => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${trade.id}</td>
                <td>${trade.amount}</td>
                <td>${trade.price}</td>
                <td>${trade.date}</td>
            `;
            tradesTableBody.appendChild(row);
        });
    }

    // Login simulado
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'admin' && password === '123') {
            showDashboard(username);
        } else {
            loginMessage.textContent = 'Credenciales inválidas. Intenta de nuevo.';
        }
    });

    // Logout (desde sidebar o dropdown)
    function handleLogout() {
        dashboardSection.classList.add('hidden');
        landingSection.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
        showLoginBtn.classList.remove('hidden');
        loginMessage.textContent = '';
    }

    logoutBtn.addEventListener('click', handleLogout);
    if (logoutDropdown) logoutDropdown.addEventListener('click', handleLogout);

    // Toggle sidebar (para mobile)
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
});
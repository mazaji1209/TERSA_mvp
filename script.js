document.addEventListener('DOMContentLoaded', () => {
    const landingSection = document.getElementById('landing-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const loginFormContainer = document.getElementById('login-form-container');
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const tradesTableBody = document.getElementById('trades-table-body');
    const logoutDropdown = document.getElementById('logout-dropdown');
    const showLoginBtn = document.getElementById('show-login-btn');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Mock data para trades recientes (adaptado a CoreUI table)
    const mockTrades = [
        { user: 'John Doe', country: 'MX', usage: '25%', payment: 'Credit Card', activity: '10 min' },
        { user: 'Jane Smith', country: 'MX', usage: '42%', payment: 'PayPal', activity: '22 min' },
        { user: 'Mike Johnson', country: 'MX', usage: '74%', payment: 'Credit Card', activity: '1 hr' },
        { user: 'Anna Lee', country: 'MX', usage: '18%', payment: 'Wire', activity: '3 hr' },
        { user: 'David Brown', country: 'MX', usage: '65%', payment: 'Credit Card', activity: '5 hr' }
    ];

    // Mostrar formulario de login
    showLoginBtn.addEventListener('click', () => {
        loginFormContainer.classList.remove('hidden');
        showLoginBtn.classList.add('hidden');
    });

    // Función para mostrar dashboard
    function showDashboard() {
        landingSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        populateTradesTable();
    }

    // Poblar tabla de trades
    function populateTradesTable() {
        tradesTableBody.innerHTML = '';
        mockTrades.forEach(trade => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="text-center"><div class="avatar"><img src="https://via.placeholder.com/128x128" class="img-avatar" alt="${trade.user}"><span class="avatar-status bg-success"></span></div></td>
                <td><div>${trade.user}</div><div class="small text-muted"><span>New</span> | Registered: Jan 1, 2025</div></td>
                <td class="text-center"><i class="flag-icon flag-icon-mx h4 mb-0" title="Mexico"></i></td>
                <td><div class="small text-muted">Last login</div><strong>${trade.activity}</strong></td>
                <td><div class="chart-wrapper"><div class="chart-placeholder" style="height:20px; width: ${trade.usage}; background-color: #20a8d8;"></div></div></td>
                <td>${trade.payment}</td>
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
            showDashboard();
        } else {
            loginMessage.textContent = 'Credenciales inválidas. Intenta de nuevo.';
        }
    });

    // Logout
    function handleLogout() {
        dashboardSection.classList.add('hidden');
        landingSection.classList.remove('hidden');
        loginFormContainer.classList.add('hidden');
        showLoginBtn.classList.remove('hidden');
        loginMessage.textContent = '';
    }

    if (logoutDropdown) logoutDropdown.addEventListener('click', handleLogout);

    // Toggle sidebar
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });
});
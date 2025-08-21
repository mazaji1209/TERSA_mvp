document.addEventListener('DOMContentLoaded', () => {
    const loginSection = document.getElementById('login-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const tradeSection = document.getElementById('trade-section');
    const loginForm = document.getElementById('login-form');
    const loginMessage = document.getElementById('login-message');
    const welcomeMessage = document.getElementById('welcome-message');
    const creditsTableBody = document.querySelector('#credits-table tbody');
    const logoutBtn = document.getElementById('logout-btn');
    const tradeForm = document.getElementById('trade-form');
    const tradeMessage = document.getElementById('trade-message');
    const backBtn = document.getElementById('back-btn');

    // Mock data para créditos de carbono (simulando API)
    const mockCredits = [
        { id: 1, amount: 100, price: 500 },
        { id: 2, amount: 250, price: 1200 },
        { id: 3, amount: 50, price: 300 }
    ];

    // Función para mostrar dashboard
    function showDashboard(username) {
        loginSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        welcomeMessage.textContent = `¡Hola, ${username}! Aquí tus opciones para tradear bonos de carbono en MXN.`;
        populateCreditsTable();
    }

    // Poblar tabla de créditos
    function populateCreditsTable() {
        creditsTableBody.innerHTML = '';
        mockCredits.forEach(credit => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${credit.id}</td>
                <td>${credit.amount}</td>
                <td>${credit.price}</td>
                <td><button class="trade-btn" data-id="${credit.id}">Tradear</button></td>
            `;
            creditsTableBody.appendChild(row);
        });

        // Agregar event listeners a botones de trade
        document.querySelectorAll('.trade-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const creditId = e.target.dataset.id;
                dashboardSection.classList.add('hidden');
                tradeSection.classList.remove('hidden');
                document.getElementById('credit-id').value = creditId;
            });
        });
    }

    // Login simulado (sin backend, solo check básico)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Mock auth: usuario 'admin' / pass '123'
        if (username === 'admin' && password === '123') {
            showDashboard(username);
        } else {
            loginMessage.textContent = 'Credenciales inválidas. Intenta de nuevo.';
        }
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        dashboardSection.classList.add('hidden');
        loginSection.classList.remove('hidden');
        loginMessage.textContent = '';
    });

    // Trade simulado
    tradeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const creditId = document.getElementById('credit-id').value;
        const amount = document.getElementById('amount').value;
        tradeMessage.textContent = `¡Compra simulada! Crédito ID ${creditId} por ${amount} tCO2e. En producción, esto se integraría con blockchain y pagos.`;
    });

    // Volver al dashboard
    backBtn.addEventListener('click', () => {
        tradeSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        tradeMessage.textContent = '';
    });
});
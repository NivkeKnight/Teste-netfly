document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('toggle-theme');
    const activeUsersElement = document.getElementById('active-users');
    const totalSalesElement = document.getElementById('total-sales');
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const barChartCtx = document.getElementById('barChart').getContext('2d');

    // Troca de Tema Dinâmico
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    });

    // Simulação de Dados usando LocalStorage
    const salesData = JSON.parse(localStorage.getItem('salesData')) || [30, 50, 70, 90, 110];
    drawLineChart(lineChartCtx, salesData);

    const userActivity = JSON.parse(localStorage.getItem('userActivity')) || [40, 60, 80, 100, 120];
    drawBarChart(barChartCtx, userActivity);

    // Atualização de Vendas e Usuários com API Fake
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        activeUsersElement.textContent = users.length;
        totalSalesElement.textContent = `$${users.length * 100}`;
    }

    fetchData();
});

function drawLineChart(ctx, data) {
    ctx.beginPath();
    ctx.moveTo(0, 200 - data[0]);

    data.forEach((point, index) => {
        ctx.lineTo(index * 40, 200 - point);
    });

    ctx.strokeStyle = '#4CAF50';
    ctx.stroke();
}

function drawBarChart(ctx, data) {
    ctx.fillStyle = '#2196F3';
    data.forEach((value, index) => {
        ctx.fillRect(index * 50, 200 - value, 40, value);
    });
}

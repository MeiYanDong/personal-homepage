document.addEventListener('DOMContentLoaded', () => {
    const fireworksButton = document.querySelector('.fireworks-button');

    if (!fireworksButton) {
        console.error('找不到烟花按钮元素');
        return;
    }

    fireworksButton.addEventListener('click', createMultipleFireworks);

    function createFireworkAt(x, y, container, overlay) {
        const particleCount = 60;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            // 随机设置粒子的运动方向和距离
            const angle = (i / particleCount) * Math.PI * 2;
            const velocity = 80 + Math.random() * 80;
            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            // 设置粒子的颜色，使用更丰富的色彩
            const hue = Math.random() * 360;
            const saturation = 80 + Math.random() * 20;
            const lightness = 50 + Math.random() * 10;
            particle.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
            particle.style.setProperty('--tx', `${tx}px`);
            particle.style.setProperty('--ty', `${ty}px`);

            container.appendChild(particle);
        }
    }

    function createMultipleFireworks() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        document.body.appendChild(firework);

        // 创建遮罩层
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);

        // 淡入遮罩层
        requestAnimationFrame(() => {
            overlay.style.opacity = '1';
        });

        // 在页面上方随机位置创建多个烟花
        const fireworkCount = 5;
        for (let i = 0; i < fireworkCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = window.innerHeight * (0.2 + Math.random() * 0.3); // 在页面上方20%-50%的位置
            createFireworkAt(x, y, firework, overlay);
        }

        // 动画完成后移除烟花元素和遮罩层
        setTimeout(() => {
            firework.remove();
            overlay.style.opacity = '0';
            setTimeout(() => overlay.remove(), 500);
        }, 1200);
    }

    // 添加点击按钮的动画效果
    fireworksButton.addEventListener('mousedown', () => {
        fireworksButton.style.transform = 'scale(0.95)';
    });

    fireworksButton.addEventListener('mouseup', () => {
        fireworksButton.style.transform = '';
    });

    fireworksButton.addEventListener('mouseleave', () => {
        fireworksButton.style.transform = '';
    });
});
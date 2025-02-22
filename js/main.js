// 阅读统计数据
const readingStats = {
    weixinReading: '700h+',
    dedaoLearning: '250h+',
    englishReading: {
        days: 40,
        booksFinished: ['The little prince', 'The animal farm'],
        currentReading: 'Beyond feelings'
    }
};

// 其他统计数据
const otherStats = {
    btcInvestment: '每月定投BTC：300天',
    running: '每天跑步2公里：280天'
};

// 创作平台信息
const platforms = [
    {
        name: '微信公众号',
        account: 'MYanDong',
        description: '个人想法、工具分享、经验等等',
        url: 'https://mp.weixin.qq.com/s/KqzmG0kLO4W8eyX7Hswo3w', // 请替换为你的实际公众号链接
        image: 'images/wexin.jpg',
    },
    {
        name: '微信视频号',
        account: '炎栋',
        description: 'AI视频（之后会慢慢积累个人经验的视频）',
        url: '#', // 视频号暂时没有固定主页链接
        image:'images/channel.jpg',
    },
    {
        name: '小红书',
        account: '炎栋',
        description: 'AI绘画、AI视频',
        url: 'https://www.xiaohongshu.com/user/profile/64800729000000000f006c55' // 请替换为你的实际小红书主页链接
    }
];

// 个人历程
const journeyEvents = [
    {
        date: '20230726',
        event: '第一次打工后钱的去向',
        image1: 'images/money1.jpg',
        image2: 'images/money2.jpg',
        imageAlt: '第一次打工收入分配图'
    },
    {
        date: '20240503',
        event: '第一次挑战半马失败，完成度：88%（18.5/21.0975）（注：最后2.595公里是走的）',
        image: 'images/run.png',
        imageAlt: '半程马拉松记录'
    }
];

// 渲染阅读统计
function renderReadingStats() {
    const container = document.getElementById('reading-stats');
    container.innerHTML = `
        <h4>阅读成果</h4>
        <ul>
            <li>微信读书时长：${readingStats.weixinReading}</li>
            <li>得到学习时长：${readingStats.dedaoLearning}</li>
            <li>每天阅读英文书籍30min：${readingStats.englishReading.days}天
                <ul>
                    <li>已看完：${readingStats.englishReading.booksFinished.join('、')}</li>
                    <li>目前在看：${readingStats.englishReading.currentReading}</li>
                </ul>
            </li>
        </ul>
    `;
}

// 渲染其他统计
function renderOtherStats() {
    const container = document.getElementById('other-stats');
    container.innerHTML = `
        <h4>其他成果</h4>
        <ul>
            <li>${otherStats.btcInvestment}</li>
            <li>${otherStats.running}</li>
        </ul>
    `;
}

// 渲染创作平台
function renderPlatforms() {
    const container = document.querySelector('.platform-grid');
    container.innerHTML = platforms.map(platform => `
        <div class="platform-item">
            <h3><a href="${platform.url}" target="_blank" rel="noopener noreferrer">${platform.name}</a></h3>
            <p><strong>${platform.account}</strong></p>
            <p>${platform.description}</p>
            ${platform.image ? `<img src="${platform.image}" alt="${platform.name}" />` : ''}
        </div>
    `).join('');
}

// 渲染个人历程
function renderJourney() {
    const container = document.querySelector('.timeline');
    container.innerHTML = journeyEvents.map(event => `
        <div class="timeline-item">
            <div class="timeline-date">${event.date}</div>
            <div class="timeline-content">
                <p>${event.event}</p>
                ${event.image1 ? `<img src="${event.image1}" alt="${event.imageAlt}" class="timeline-image">` : ''}
                ${event.image2 ? `<img src="${event.image2}" alt="${event.imageAlt}" class="timeline-image">` : ''}
                ${event.image ? `<img src="${event.image}" alt="${event.imageAlt}" class="timeline-image">` : ''}
            </div>
        </div>
    `).join('');
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    renderReadingStats();
    renderOtherStats();
    renderPlatforms();
    renderJourney();
});
function loadSettings() {
    let theme = localStorage.getItem('theme');
    if (theme) {
        document.documentElement.setAttribute('theme', theme);
    } else {
        // 设置初始状态为白天模式
        document.documentElement.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }

    let showBanner = localStorage.getItem("showBanner");
    if (showBanner == null || showBanner == undefined || showBanner == "true") {
        document.documentElement.setAttribute('showBanner', true)
    } else {
        document.documentElement.setAttribute('showBanner', false)
    }
};
loadSettings();
if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/actspace/sw.js', { scope: '/actspace/' })})}
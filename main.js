const ua = navigator.userAgent;

const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Windows Phone|Opera Mini|Mobile/i.test(ua);

window.location.replace(
    isMobile
        ? "https://" // Mobile Link
        : "https://" // Desktop Link
);
console.log("Powered with Device Director v0.2 Github.com/nicopancakes/DeviceDirector");

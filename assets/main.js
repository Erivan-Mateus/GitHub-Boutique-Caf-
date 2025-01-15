const dfMessenger = document.querySelector('df-messenger');
dfMessenger.addEventListener('df-messenger-loaded', function () {
    // Handle event
    let dfIcon = dfMessenger?.shadowRoot?.querySelector("#widgetIcon");
    if (dfIcon) {
        dfIcon.style.bottom = "70px";
    }
});

const btnTopo = document.getElementById('botoes');

btnTopo.addEventListener('click', function () {
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
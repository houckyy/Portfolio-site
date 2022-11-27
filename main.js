let div = document.getElementById('contact');
function contact() {
    console.log('opening contact tab')
    div.style.cssText = "display: flex;";
    anime({
        targets: ".inner-contact",
        right: "0px",
        easing: 'linear',
        duration: '250',
        opacity: 1,
    });
}


function con_close() {
    let inner = document.getElementById('inner').style.cssText = "right: 200px;";
    anime({
        targets: ".contact-alert, inner-contact",
        opacity: 0,
        easing: 'linear',
        duration: '250'
    });
        setTimeout(() => {div.style.display = "none";}, 250);
}

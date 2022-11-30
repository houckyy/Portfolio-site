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

function purchase() {
    let paymentAmount = '10';
    document.getElementById('purchase').style.display = 'none'
    paypal.Buttons({
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: paymentAmount,
                    }
                }]
            });
        },
            onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
               document.getElementById('myForm').submit()
                alert('Transaction completed by ' + details.payer.name.given_name)
            });
        }
    }).render('#paypal')
}






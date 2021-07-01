function balanceScale() {
    // Développez la fonction
    let balance = document.getElementById('balance');
    balance.innerHTML = "&#xf516;";
    
    setTimeout(function(){
        balance.innerHTML = "&#xf515;";
    },1000);

    }

    balanceScale();
    setInterval(balanceScale, 2000);


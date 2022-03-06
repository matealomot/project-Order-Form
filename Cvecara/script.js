function izracunavanjePorudzbine() {
    /// Cvece - Broj cvetova i cena cvetova na osnovu njihovog broja

    let cvet1 = document.getElementById("ruza").value;
    let ruze;
    if(cvet1 == "") {
        ruze = 0;
    }
    else {
        ruze = parseInt(cvet1);
    }
    let ruza = ruze * 150;
    
    
    let cvet2 = document.getElementById("ljiljan").value;
    let ljiljani;
    if(cvet2 == "") {
        ljiljani = 0;
    }
    else {
        ljiljani = parseInt(cvet2);
    }
    let ljiljan = ljiljani * 120;
    

    let cvet3 = document.getElementById("gerber").value;
    let gerberi;
    if(cvet3 == "") {
        gerberi = 0;
    }
    else {
        gerberi = parseInt(cvet3);
    }
    let gerber = gerberi * 70;

    /// Dodatni pokloni - Bombonjera, Cokolada, Sampanjac

    let bombonjera = document.getElementById("bombone");
    let cokolada = document.getElementById("cokoladice");
    let sampanjac = document.getElementById("pice");

    //// Placanje - kes ili kartica

    let kes = document.getElementById("novac");
    let kartica = document.getElementById("karta");

    /// Rezultat - polje u kom ce se ispisati rezultat izracunavanja porudzbine

    let polje = document.getElementById("rezultat");
    let poljeRuze = document.getElementById("rezultatRuze");
    let poljeLjiljani = document.getElementById("rezultatLjiljani");
    let poljeGerberi = document.getElementById("rezultatGerberi");

    let porudzbina = 0;
    let porudzbinaPopust;

    /// Izracunavanje i ispisivanje porudzbine

    if(ruze >= 0) {
        porudzbina = porudzbina + ruza;
    }
    if(ljiljani >= 0) {
        porudzbina = porudzbina + ljiljan;
    }
    if(gerberi >= 0) {
        porudzbina = porudzbina + gerber;
    }
    

    if(bombonjera.checked) {
        porudzbina += 500;
    }

    if(cokolada.checked) {
        porudzbina += 500;
    }

    if(sampanjac.checked) {
        porudzbina += 500;
    }

    poljeRuze.innerHTML = "";
    poljeLjiljani.innerHTML = "";
    poljeGerberi.innerHTML = "";
    polje.innerHTML = "";

    if((kartica.checked) && (porudzbina > 2000)) {

        porudzbinaPopust = porudzbina - ((porudzbina / 100) * 10);
        

        for(i = 1; i <= ruze; i++) {
            poljeRuze.innerHTML += `<img class="flower" src="slike/ruza.png">`;
        }
        for(i = 1; i <= ljiljani; i++) {
            poljeLjiljani.innerHTML += `<img class="flower" src="slike/ljiljan.png">`;
        }
        for(i = 1; i <= gerberi; i++) {
            poljeGerberi.innerHTML += `<img class="flower" src="slike/gerber.png">`;
        }

        if(bombonjera.checked) {
            polje.innerHTML += `+ Bombonjera<br>`;
        }
    
        if(cokolada.checked) {
            polje.innerHTML += `+ Cokolada<br>`;
        }
    
        if(sampanjac.checked) {
            polje.innerHTML += `+ Sampanjac<br>`;
        }
        polje.innerHTML += `<br>Cena bez popusta je ${porudzbina} dinara. <br> Cena sa popustom je ${porudzbinaPopust} dinara.`;
    }
    else if((kartica.checked) || (kes.checked)) {

        for(i = 1; i <= ruze; i++) {
            poljeRuze.innerHTML += `<img class="flower" src="slike/ruza.png">`;
        }
        for(i = 1; i <= ljiljani; i++) {
            poljeLjiljani.innerHTML += `<img class="flower" src="slike/ljiljan.png">`;
        }
        for(i = 1; i <= gerberi; i++) {
            poljeGerberi.innerHTML += `<img class="flower" src="slike/gerber.png">`;
        }

        if(bombonjera.checked) {
            polje.innerHTML += `<br>+ Bombonjera<br>`;
        }
    
        if(cokolada.checked) {
            polje.innerHTML += `<br>+ Cokolada<br>`;
        }
    
        if(sampanjac.checked) {
            polje.innerHTML += `<br>+ Sampanjac<br>`;
        }
        polje.innerHTML += `<br>Cena vase porudzbine je ${porudzbina} dinara.`;
    }
}

function clearContent() {
    document.getElementById("rezultat").innerHTML = "";
    document.getElementById("rezultatRuze").innerHTML = "";
    document.getElementById("rezultatLjiljani").innerHTML = "";
    document.getElementById("rezultatGerberi").innerHTML = "";
}

let zavrsiti = document.getElementById("kraj");

zavrsiti.addEventListener('click', () => {
    alert("Uspesno ste kreirali vasu porudzbinu! Na sledecoj stranici prilozite neophodne podatke kako bi vam sto pre poslali vas buket!");
})



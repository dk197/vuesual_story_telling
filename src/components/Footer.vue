<template>
    <div class="footer section">
        <div class="overlay"></div>
        <div class="footer-content">
            <p class="footer-title">Quelle</p>
            <p class="text red"><strong>Clankriminalität - Lagebild NRW</strong></p>
            <p class="text"> 
                    Polizei Nordrhein-Westfalen<br>
                    Landeskriminalamt Nordrhein-Westfalen <br>
                    Völklinger Straße 49 <br>
                    40221 Düsseldorf </p>

            <p class="footer-title">Impressum</p>
            <p class="text footer-credit">Diese Webseite ist eine Semesterarbeit von: <br>
                    Johannes Manner, Dominik Schäfer, Jakob Schlagenhaufer <br> und Nathalie Wich
                    <br><br>
                    DBHW Mosbach Kurs ON17<br>
                    Dozent: Dipl.-Des. Lothar B. Blum.</p>
            <p class="text source">Bildquellen: <br> https://www.wz.de <br> https://ais.rtl.de/ </p>
        </div>
        <img class="banner" src="../assets/footer.png">
    </div>
    
</template>

<script>
export default {
	
};
</script>

<style scoped>

p, h2, h3 {
  color: white
}

.footer {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.footer-content {
    position: absolute;
    color: white;
    left: 4%;
    top: 10%;
    font-family: 'Jost';
}

.footer-title {
    font-size: 60px;
    width: 400px;
    margin: 10% 0 0 0;
}

.footer-credit {
    margin-bottom: 10%;
    font-size: 18px;
    width: 600px;
}

.footer-logo {
    width: 100px;
    height: auto;
}
.topic {
    font-size: 20px;
}

.banner {
    width: 100%;
}

.overlay {
    position: absolute;
    width: 54.8%;
    height: 100vh;
    background-color: #0D1321;
    bottom: 4px;
    left: -36%;
    transform: skewX(32deg);
    transform-origin: top left;
    /* z-index: 100; */
    border-bottom-left-radius: 0;
    right: auto;
    transform-origin: top left;
}

.banner {
    width: 100%;
    height: 100%;
    margin-left: 5%;
}

.text {
    font-family: 'Muli';
    font-size: 18px;   
    margin-top: none
}

.red {
    color: #700101;
    font-size: 22px;
}

.source {
    font-size: 15px;
}
</style>

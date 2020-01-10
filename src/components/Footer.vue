<template>
    <div class="footer">
        <div class="overlay"></div>
        <div class="footer-content">
            <p class="footer-title">Clankriminalität in NRW</p>
            <p class="footer-credit">Semesterarbeit Multimediales Informationsdesign
                des Fachbereiches Onlinemedien 2020</p>
            <img class="footer-logo" src="../assets/logo.svg">
        </div>
    </div>
    
</template>

<script>
export default {
	
};
</script>

<style scoped>

.footer {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.footer-content {
    position: absolute;
    color: white;
    left: 4%;
    bottom: 10%;
    font-family: 'Jost';
}

.footer-title {
    font-size: 60px;
    width: 400px;
    margin-top: 10%;
}

.footer-credit {
    margin-bottom: 10%;
    font-size: 18px;
    width: 400px;
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
    width: 52%;
    height: 100vh;
    background-color: #0D1321;
    bottom: 0;
    left: -32%;
    transform: skewX(32deg);
    transform-origin: top left;
    /* z-index: 100; */
    border-bottom-left-radius: 0;
    right: auto;
    transform-origin: top left;
}
</style>

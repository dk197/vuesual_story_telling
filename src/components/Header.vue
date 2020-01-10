<template>
    <div class="header">
        <div class="overlay"></div>
        <div class="header-content">
            <p class="header-number">14.225</p>
            <p class="header-text">Straftaten in 3 Jahren</p>
            <p class="header-title">Clankriminalität in NRW</p>
            <p class="header-credit">Semesterarbeit Multimediales Informationsdesign
                des Fachbereiches Onlinemedien</p>
            <img class="header-logo" src="../assets/logo.svg">
        </div>
        <img class="banner" src="../assets/header.png">
    </div>
    
</template>

<script>
export default {
	
};
</script>

<style scoped>

.header {
    height: 100vh;
    overflow: hidden;
}

/* .header-number, .header-text, .header-text, .header-title, .header-credit, .header-logo { */
.header-content {
    position: absolute;
    color: white;
    left: 4%;
    top: 10%;
    font-family: 'Jost';
}

.header-number {
    font-size: 120px;
    font-weight: bold;
    margin-top: 5%;
}

.header-text {
    font-size: 50px;
    margin-top: -35%;
}

.header-title {
    font-size: 80px;
    width: 400px;
    margin-top: 10%;
}

.header-credit {
    margin-top: 40%;
    font-size: 18px;
    width: 400px;
}

.header-logo {
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
    height: 100%;
    background-color: #0D1321;
    top: 0;
    left: 0;
    transform: skewX(-32deg);
    transform-origin: top left;
    /* z-index: 100; */
    border-bottom-left-radius: 0;
    right: auto;
    transform-origin: top left;
}
</style>

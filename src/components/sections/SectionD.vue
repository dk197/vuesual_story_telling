<template>
    <Wrapper>
	<h2 class="heading">Straftaten und ihre Täter</h2>
    <p class="text">Als Mehrfachtäter sind im Lagebild Personen ausgewiesen, die innerhalb eines Jahres mindestens fünfmal als 
            Tatverdächtige einer Straftat polizeilich erfasst sind. Dieses Verhältnis verdeutlicht das kriminelle Potential, welches
            von einzelnen Straftätern ausgeht.
    </p>
    <div class="content">
        <div class="left">
            <h3 class="subheading">Tatverdächtige</h3>
            <p class="number" id="num1">6.068</p>
            <p class="number" id="num2">9.562</p>
            <p class="number last-number" id="num3">1,5</p>
            <div class="icons" id=icon1>
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand-half.svg">
            </div>
        </div>
        <div class="middle">
            <div class="caption" id="cap1">
                <img src="../../assets/mask.svg">
                <p>Anzahl der Täter</p>
            </div>
            <div class="caption" id="cap2">
                <img src="../../assets/hand.svg">
                <p>Anzahl der Straftaten</p>
            </div>
            <div class="caption last-caption" id="cap3">
                <img src="../../assets/average.svg">
                <p>Durchschnittliche <br> Straftaten pro Täter</p>
            </div>
            <div class="line"></div>
        </div>
        <div class="right">
            <h3 class="subheading">Mehrfachtäter</h3>
            <p class="number" id=num4>381</p>
            <p class="number" id="num5">4.663</p>
            <p class="number last-number" id="num6">12,5</p>
            <div class="icons" id="icon2">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand.svg">
                <img src="../../assets/hand-half.svg">
            </div>
        </div>
        <div class="source">Die Daten beziehen sich nur auf das Bundesland NRW und sind kumuliert auf die Jahre 2016, 2017 und 2018.</div>
    </div>
            
    </Wrapper>
 
</template>

<script>
import Wrapper from "../Wrapper.vue";
import { EventBus } from '../../others/eventBus.js';

export default {
    components: {
      Wrapper
    }
};

EventBus.$on('slideChange', value => {
            if(value === 'page5') {
                console.log('abc');
                document.getElementById('cap1').style.transform = 'scale(1.0)';
                document.getElementById('cap2').style.transform = 'scale(1.0)';
                document.getElementById('cap3').style.transform = 'scale(1.0)';
                document.getElementById('num1').style.opacity = '1';
                document.getElementById('num2').style.opacity = '1';
                document.getElementById('num3').style.opacity = '1';
                document.getElementById('num4').style.opacity = '1';
                document.getElementById('num5').style.opacity = '1';
                document.getElementById('num6').style.opacity = '1';
                document.getElementById('icon1').style.opacity = '1';
                document.getElementById('icon2').style.opacity = '1';
            }
        })
</script>

<style scoped>

.text {
    font-size: 15px;
}

.content {
    display: flex;
}

.left, .middle, .right {
    display: flex;
    flex-direction: column;
}

.left > *, .middle > *, .right > * {
    text-align: center;
}

.left, .right {
    width: 40%;
}

.middle {
    width: 20%;
    padding-top: 80px;
    position: relative;
}

.subheading {
    font-size: 35px;
    font-weight: bold;
    font-family: 'Jost';
    margin-bottom: 10px;
}

.number {
    font-family: 'Muli';
    font-size: 75px;
    margin: 10px 0;
    border-bottom: 1px solid grey;
    opacity: 0;
    transition-delay: 0.5s;
    transition-duration: 1s;
}

.last-number {
    border: none;
    margin-bottom: 0;
}

.icons {
    border-bottom: 1px solid #707070;
    padding: 0 0 10px 10px;
    opacity: 0;
    transition-delay: 0.75s;
    transition-duration: 1s;
}

.icons > img {
    height: 25px;
}

.icons > img:hover {
    transform: scale(1.1);
}

.caption {
    margin-bottom: 20px;
    height: 100px;
    padding-top: 5px;
    background-color: white;
    transform: scale(0.8);
    transition-delay: 0.25s;
    transition-duration: 1s;
}

.caption:hover {
    transform: scale(1.1);
}

.last-caption {
    height: 120px;
}

.caption > p {
    margin: 0;
}

.caption > img {
    height: 70px;
}

.line {
    position: absolute;
    height: 95%;;
    width: 3px;
    left: 49%;
    top: 9%;
    background-color: #707070;
    z-index: -999
}

.source {
    position: absolute;
    bottom: 5%;
    font-size: 14px;
    opacity: 60%;
}

</style>
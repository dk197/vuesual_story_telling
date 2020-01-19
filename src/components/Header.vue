<template>
    <div class="header section">
        <div class="overlay"></div>
        <div class="header-content">
            <p class="header-title">Clankriminalität in NRW</p>
            <p class="header-credit">Semesterarbeit Multimediales Informationsdesign
                des Fachbereiches Onlinemedien 2020</p>
            <img class="header-logo" src="../assets/logo.svg">
        </div>
         <div class="overlay2"></div>
        <div class="header-content2">
            <p class="header-number" id="counting-number">{{counter}}</p>
            <p class="header-text">Straftaten in 3 Jahren</p>
        </div>
        <img class="banner" src="../assets/header.png">
    </div>
    
</template>

<script>
export default {
    data(){
        return {
            counter: 1
        }
    },
    created(){
        //this.animateValue()
    },
    methods:{
        // animateValue(){
        //     setInterval(function(){
        //         alert(this.counter);
        //         this.counter = this.counter + 1;    
        //     },5)
        //     //setTimeout(function(){ alert("Hello"); }, 3000);

        // }

    }
};

function animateValue(id, start, end, duration) {
    // assumes integer values for start and end
    
    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));
    
    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);
    
    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
  
    function run() {
        var now = new Date().getTime();
        var remaining = Math.max((endTime - now) / duration, 0);
        var value = Math.round(end - (remaining * range));
        obj.innerHTML = value;
        if (value == end) {
            clearInterval(timer);
        }
    }
    
    timer = setInterval(run, stepTime);
    run();
}

window.onload = function () {
        //console.log('lol');
        
        animateValue('counting-number', 0, 14225, 2500);
    }


</script>

<style scoped>

.header {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

/* .header-number, .header-text, .header-text, .header-title, .header-credit, .header-logo { */
.header-content {
    position: absolute;
    color: white;
    left: 45px;
    top: 10%;
    font-family: 'Jost';
}

.header-content2 {
    position: absolute;
    color: white;
    right: 15%;
    top: 360px;;
    font-family: 'Jost';
}

.header-number {
    font-size: 100px;
    font-weight: medium;
    margin: 0;
}

.header-text {
    font-size: 30px;
    margin-top: -10%;
    font-weight: 300;
}

.header-title {
    font-size: 80px;
    width: 500px;
    margin-top: 10%;
    font-weight: bold;
}

.header-credit {
    margin-top: 50%;
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
    height: 100%;
}

.overlay {
    position: absolute;
    width: 54%;
    height: 100vh;
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

.overlay2 {
    position: absolute;
    width: 50%;
    height: 230px;
    background-color: #0D1321;
    opacity: 0.75;
    top: 340px;
    right: -10%;
    transform: skewX(-32deg);
    transform-origin: top left;
    /* z-index: 100; */
    border-bottom-left-radius: 0;
    transform-origin: top left;
}

.overlay2 {

}
</style>

<template>
    <div class="hexagon-holder flip-container">
        <div class="flipper">
            <div class="front">
                <div class="hexagon-overlay">
                    <div class="hexTop"></div>
                    <div class="hexBottom"></div>
                    <div class="hexText" id="topFix">
                        <h4>{{ clan }}:</h4>
                    </div>
                </div>
            </div>
            <div class="back">
                <div class="hexagon-overlay">
                    <div class="hexTop"></div>
                    <div class="hexBottom"></div>
                </div>
                <div class="hexText">
                    <h4>{{ clan }}:</h4>
                    <p>{{ anzahlStraftaten }} Straftaten</p>
                </div>
                <div class="hexagon" style="transform:scaleX(-1);">
                    <div class="hexTop"></div>
                    <div class="hexBottom"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["width", "height", "clan", "anzahlStraftaten"]
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}
#topFix {
	top: 25px;
}
.flip-container {
    perspective: 1000;
    background: transparent;
    height: 280.48px !important;
}

.flip-container:hover .flipper,
.flip-container.hover .flipper {
    transform: rotateY(180deg);
}

.flip-container,
.front,
.back {
    width: auto;
    height: auto;
}

.flipper {
    transition: 0.6s;
    transform-style: preserve-3d;
    position: relative;
    top: 75px;
}

.front,
.back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
}

.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

.back {
    transform: rotateY(180deg);
}

.hexagons {
    width: 1100px;
    letter-spacing: 0;
    font-size: 0;
    margin: 0 auto;
}

.hexagon-holder {
    position: relative;
    margin: 65.24px 21.5px;
    width: 226px;
    height: 130.48px;
    display: inline-block;
    letter-spacing: 0;
    font-size: 0;
    transform: rotate(90deg)
}

.hexagon {
    position: relative;
    width: 226px;
    height: 130.48px;
    background-color: #b70404;
    background-size: auto 258.6529px;
    background-position: center;
    border-left: solid 1px #0d1321;
    border-right: solid 1px #0d1321;
    display: inline-block;
    z-index: 1;
}

.hexagon .hexTop,
.hexagon .hexBottom {
    position: absolute;
    z-index: 1;
    width: 159.81px;
    height: 159.81px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 32.1px;
    -webkit-backface-visibility: hidden;
}

/*counter transform the bg image on the caps*/
.hexagon .hexTop:after,
.hexagon .hexBottom:after {
    content: "";
    position: absolute;
    width: 224px;
    height: 129.32646029847618px;
    -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-64.6632px);
    -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-64.6632px);
    transform: rotate(45deg) scaleY(1.7321) translateY(-64.6632px);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    background: inherit;
}

.hexagon .hexTop {
    top: -79.9031px;
    border-top: solid 8px #0d1321;
    border-right: solid 8px #0d1321;
}

.hexagon .hexTop:after {
    background-position: center top;
}

.hexagon .hexBottom {
    bottom: -79.9031px;
    border-bottom: solid 8px #0d1321;
    border-left: solid 8px #0d1321;
}

.hexagon .hexBottom:after {
    background-position: center bottom;
}

.hexagon:after {
    content: "";
    position: absolute;
    top: 0.5774px;
    left: 0;
    width: 224px;
    height: 129.3265px;
    z-index: 2;
    background: inherit;
}

.hexagon:nth-child(7n-2) {
    margin-left: 156px;
}

.hexagon:nth-child(n + 5) {
    margin-top: 29px;
}

.hexText {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
    color: #000;
    opacity: 1;
    font-size: 20px;
    text-align: center;
    width: 100%;
    color: #fff;
	transform: rotate(-90deg)
}

@media (max-width: 1100px) {
    .hexagon:nth-child(5n-1) {
        margin-left: 156px;
    }

    .hexagon:nth-child(n + 4) {
        margin-top: 0;
    }

    .hexagon:nth-child(7n-2) {
        margin-left: 21px;
    }

    .hexagon:nth-child(n + 5) {
        margin-top: 0;
    }

    .hexagons {
        width: 820px;
    }
}

@media (max-width: 640px) {
    .hexagons {
        width: 405px;
    }

    .hexagon:nth-child(5n-1) {
        margin-left: 0px;
    }

    .hexagon:nth-child(3n) {
        margin-left: 102px;
    }

    .hexagon:nth-child(n + 3) {
        margin-top: -56px;
    }
}

@media (max-width: 450px) {
    .hexagons {
        width: 300px;
    }

    .hexagon:nth-child(3n) {
        margin-left: 0px;
    }

    .hexagon:nth-child(2n) {
        margin-left: 102px;
    }

    .hexagon:nth-child(n + 2) {
        margin-top: -56px;
    }
}

.hexagon-overlay {
    position: absolute;
    width: 226px;
    height: 130.48px;
    margin: 0;
    background-color: #b70404;
    background-size: auto 247.1059px;
    background-position: center;
    border-left: solid 6px #0d1321;
    border-right: solid 6px #0d1321;
    z-index: 3;
    top: 0;
    left: 0;
}

.hexagon-overlay .hexTop,
.hexagon-overlay .hexBottom {
    position: absolute;
    z-index: 1;
    width: 159.81px;
    height: 159.81px;
    overflow: hidden;
    -webkit-transform: scaleY(0.5774) rotate(-45deg);
    -ms-transform: scaleY(0.5774) rotate(-45deg);
    transform: scaleY(0.5774) rotate(-45deg);
    background: inherit;
    left: 27.1px;
}

/*counter transform the bg image on the caps*/
.hexagon-overlay .hexTop:after,
.hexagon-overlay .hexBottom:after {
    content: "";
    position: absolute;
    width: 214px;
    height: 123.55295760657991px;
    -webkit-transform: rotate(45deg) scaleY(1.7321) translateY(-61.7765px);
    -ms-transform: rotate(45deg) scaleY(1.7321) translateY(-61.7765px);
    transform: rotate(45deg) scaleY(1.7321) translateY(-61.7765px);
    -webkit-transform-origin: 0 0;
    -ms-transform-origin: 0 0;
    transform-origin: 0 0;
    background: inherit;
}

.hexagon-overlay .hexTop {
    top: -79.9031px;
    border-top: solid 8.4853px #0d1321;
    border-right: solid 8.4853px #0d1321;
}

.hexagon-overlay .hexTop:after {
    background-position: center top;
}

.hexagon-overlay .hexBottom {
    bottom: -79.9031px;
    border-bottom: solid 8.4853px #0d1321;
    border-left: solid 8.4853px #0d1321;
}

.hexagon-overlay .hexBottom:after {
    background-position: center bottom;
}

.hexagon-overlay .hexagon:after {
    content: "";
    position: absolute;
    top: 3.4641px;
    left: 0;
    width: 214px;
    height: 123.553px;
    z-index: 2;
    background: inherit;
}
</style>
<template>
    <Wrapper>
        <h2 class="heading">Mehr zu den Mehrfachtätern</h2>
        <div class="slide">
            <Altersverteilung></Altersverteilung>
        </div>
        <div class="slide">
            <MehrfachtaeterAufClan></MehrfachtaeterAufClan>
        </div>
        
        
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Altersverteilung from "../charts/Altersverteilung";
import MehrfachtaeterAufClan from '../charts/MehrfachtaeterAufClan'

export default {
    components: {
        Wrapper,
        Altersverteilung,
        MehrfachtaeterAufClan
    }
};
</script>

<style>
.fp-controlArrow {
    top: 60%;
}

.fp-controlArrow.fp-prev {
    left: 340px;
    height: 1px;
    border-color: transparent #0D1321 transparent transparent;
    border-width: 20px 24px 20px 0;
}

.fp-controlArrow.fp-next {
    right: 50px;
    height: 1px;
    border-color: transparent transparent transparent #0D1321;
    border-width: 20px 0 20px 24px;
}
</style>
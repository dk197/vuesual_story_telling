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
    display: none;
}
</style>
<template>
    <Wrapper>
        <h2 class="heading">Mehr zu den Mehrfachtätern</h2>
        <div class="slide">
            <Altersverteilung></Altersverteilung>
        </div>
        <div class="slide">
            <MerhfachtäterAufClan></MerhfachtäterAufClan>
        </div>
        
        
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Altersverteilung from "../charts/Altersverteilung";
import MerhfachtäterAufClan from '../charts/MehrfachtäterAufClan'

export default {
    components: {
        Wrapper,
        Altersverteilung,
        MerhfachtäterAufClan
    }
};
</script>

<style>
.fp-controlArrow {
    display: none;
}
</style>
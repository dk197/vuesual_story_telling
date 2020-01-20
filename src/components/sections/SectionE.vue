<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <Altersverteilung></Altersverteilung>
        <MerhfachtäterAufClan></MerhfachtäterAufClan>
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

<style scoped>
</style>
<template>
    <Wrapper>
        <h2 class="heading">Mehr zu den Mehrfachtätern</h2>
        <Altersverteilung></Altersverteilung>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Altersverteilung from "../charts/Altersverteilung";

export default {
    components: {
        Wrapper,
        Altersverteilung
    }
};
</script>

<style scoped>
</style>
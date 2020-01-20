<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <Honeycombs></Honeycombs>
    </Wrapper>
 
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Honeycombs from '../charts/Honeycombs'

export default {
    components: {
      Wrapper,
      Honeycombs
    }
};
</script>

<style scoped>

</style>
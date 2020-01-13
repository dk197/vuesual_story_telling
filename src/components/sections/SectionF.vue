<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <StrafKrimDelikt></StrafKrimDelikt>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import StrafKrimDelikt from "../charts/StrafKrimDelikt";

export default {
    components: {
        Wrapper,
        StrafKrimDelikt
    }
};
</script>

<style scoped>
</style>
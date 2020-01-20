<template>
    <Wrapper>
        <!-- <h2 class="heading">Die Clans</h2> -->
        <PackedBubble></PackedBubble>
    </Wrapper>
 
</template>

<script>
import Wrapper from "../Wrapper.vue";
import PackedBubble from '../charts/PackedBubble'

export default {
    components: {
      Wrapper,
      PackedBubble
    }
};
</script>

<style scoped>

</style>
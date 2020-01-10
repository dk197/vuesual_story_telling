<template>
        <div class="section">
            <div class="shape"> </div>
            <slot></slot>
        </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
/* Content */

#fullpage {
    height: 100vh;
}

.section {
    padding: 5% 10% 0 500px;
    position: relative;
}

.shape {
    position: absolute;
    left: 0;
    top:0;
    width: 20%;
    height: 100vh;
    background-color: #0D1321;
}
</style>
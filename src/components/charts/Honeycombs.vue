<template>
    <div class="hexagons" style="float: left">
        <Honeycomb :clan="'Clan O'" :anzahlStraftaten="'1738'" :scaling="'1.2'"></Honeycomb>
        <Honeycomb :clan="'Clan E'" :anzahlStraftaten="'1017'" :scaling="'0.78'"></Honeycomb>
        <Honeycomb :clan="'Clan K'" :anzahlStraftaten="'680'" :scaling="'0.59'"></Honeycomb>
        <Honeycomb :clan="'Clan S'" :anzahlStraftaten="'585'" :scaling="'0.53'"></Honeycomb>
        <Honeycomb :clan="'Clan Y'" :anzahlStraftaten="'481'" :scaling="'0.51'"></Honeycomb>
        <Honeycomb :clan="'Clan I'" :anzahlStraftaten="'473'" :scaling="'0.47'"></Honeycomb>
        <Honeycomb :clan="'Clan F'" :anzahlStraftaten="'459'" :scaling="'0.46'"></Honeycomb>
        <Honeycomb :clan="'Clan M'" :anzahlStraftaten="'455'" :scaling="'0.46'"></Honeycomb>
        <Honeycomb :clan="'Clan T'" :anzahlStraftaten="'409'" :scaling="'0.43'"></Honeycomb>
    </div>
</template>

<script>
import Honeycomb from './Honeycomb'
export default {
    components: {
        Honeycomb
    }
};
</script>

<style scoped>
.hexagons {
    width: 1100px;
    letter-spacing: 0;
    font-size: 0;
    margin: 0 auto;
}

@media (max-width: 1100px) {
    .hexagons {
        width: 820px;
    }
}

@media (max-width: 640px) {
    .hexagons {
        width: 405px;
    }
}

@media (max-width: 450px) {
    .hexagons {
        width: 300px;
    }
}
</style>
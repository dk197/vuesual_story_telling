<template>
    <Wrapper>
        <h2 class="heading">Die Clans</h2>
        <p>Für den Begriff "Clan" existiert keine eindeutige Definition. Jedoch lassen sie sich durch ethnische Geschlossenheit 
            und abgeschottete, auf Familienzugehörigkeit reduzierte Strukturen charakterisieren. Die illegalen Aktivitäten der 
            kriminellen Mitglieder sind meist keine Straftaten durch einzelne Personen, sondern organisierte, profitorientierte und 
            auf Dauer angelegte Aktionen. Eine Auswertung der 14.225 Straftaten, die auf Clans zurückzuführen waren, in den Jahren 2016 
            bis 2018 führt zu einer Liste der zehn Clans mit den höchsten Anzahlen an Straftaten:</p>
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
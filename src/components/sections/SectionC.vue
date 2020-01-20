<template>
    <Wrapper>
        <h2 class="heading">Die Tatverdächtigen</h2>
        <div class="chart-wrapper">
			<div style="float: left;">
				<Geschlechterverteilung></Geschlechterverteilung>
			</div>
			<div>
				<Staatsangehörigkeit></Staatsangehörigkeit>
			</div>
		</div>
    </Wrapper>
</template>

<script>
import Wrapper from "../Wrapper.vue";
import Geschlechterverteilung from "../charts/Geschlechterverteilung";
import Staatsangehörigkeit from "../charts/Staatsangehörigkeit";

export default {
    components: {
        Wrapper,
        Geschlechterverteilung,
        Staatsangehörigkeit
    }
};
</script>

<style scoped>
.chart-wrapper{
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
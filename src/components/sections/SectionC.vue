<template>
    <Wrapper>
        <h2 class="heading">Die Tatverdächtigen</h2>
        <div>
			<div class="container">
				<div class="chart-wrapper">
                    <Geschlechterverteilung></Geschlechterverteilung>
                </div>
                <div>
                    <p>Die Analyse zum Geschlecht der registrierten<br>
					Tatverdächtigen verschiedener Clans weist 20 Prozent <br>
					der identifizierten Personen als weiblich und 80% als <br>
					männlich aus.</p>
                    <p>Der Schwerpunkt der Straftaten liegt im Bereich von <br>
					Rohheitsdelikten und einfachen Eigentums-<br>
                    und Vermögensdelikten.</p>
                </div>
			</div>
			<div class="container">
                <div class="chart-wrapper">
					<Staatsangehörigkeit></Staatsangehörigkeit>
                </div>
                <div>
                    <p>
                        Bei der Zusammenstellung des Datenbestandes ist die <br>
                        Migrationsbiographie relevanter Clans mitein-<br>
                        geflossen. Die Datenanalyse beschränkte sich da-<br>
                        her auf Tatverdächtige mit libanesischer, türkischer, <br>
                        syrischer oder deutscher Staatsangehörigkeit.
                    </p>
                </div>
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
	float:left; 
	width: 60%;
}
.container {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
</style>
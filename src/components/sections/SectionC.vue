<template>
    <Wrapper>
        <h2 class="heading">Die Tatverdächtigen</h2>
        <div class="container">
            <div class="charts">
                <Geschlechterverteilung></Geschlechterverteilung>
                <Staatsangehörigkeit></Staatsangehörigkeit>
            </div>
            <div class="content">
                <img src="../../assets/man.svg">
                <img src="../../assets/woman.svg">
                <p>Die Analyse zum Geschlecht der registrierten<br>
                Tatverdächtigen verschiedener Clans weist 20 Prozent <br>
                der identifizierten Personen als weiblich und 80% als <br>
                männlich aus. <br> Der Schwerpunkt der Straftaten liegt im <br> Bereich von
                Rohheitsdelikten und einfachen Eigentums-<br>
                und Vermögensdelikten.</p>
                <p>
                    Bei der Zusammenstellung des Datenbestandes ist die <br>
                    Migrationsbiographie relevanter Clans mitein-<br>
                    geflossen. Die Datenanalyse beschränkte sich da-<br>
                    her auf Tatverdächtige mit libanesischer, türkischer, <br>
                    syrischer oder deutscher Staatsangehörigkeit.
                </p>
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

.container {
    width: 100%;
    display: flex;
}
.charts{
	width: 50%;
    align-items: left;
}
.content {
    width: 50%;
}

.content > img {
    width: 180px;
    height: 180px;
    text-align: left;
    margin: 40px 20px 30px 0;
}
</style>
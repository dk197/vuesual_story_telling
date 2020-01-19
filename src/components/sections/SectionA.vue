<template>
    <Wrapper>
	<h2 class="heading">Die Studie</h2>
             <div class="text">
                 <div class="text-section">
                     <h3 class="sub-heading">Hintergrund der Studie</h3>
                    <p>
                        In einigen Städten in NRW stellen die Polizei- und 
                        Ordnungsbehörden zunehmend fest, dass Mitglieder 
                        türkisch-arabischstämmiger Großfamilien teilweise in 
                        größeren Gruppenverbänden durch <strong>aggressives 
                        Auftreten, Ordnungsstörungen und Straftaten</strong> die 
                        Bevölkerung einschüchtern und versuchen, bestimmte 
                        <strong>regionale Räume</strong> augenscheinlich für sich zu 
                        reklamieren.
                        <br>
                        <br>
                        Einsatzkräfte berichten von einer offenen Feindseligkeit, 
                        einer hohen und unmittelbar geäußerten <strong>Aggressivität, 
                        Respektlosigkeit und Gewalteskalation</strong>, die das Ziel 
                        verfolgen, <strong>behördliche Maßnahmen</strong> zu beeinflussen oder zu unterbinden. Deshalb hat das Ministerium des Innern des Landes Nordrhein-Westfalen das zugehörige 
                        Landeskriminalamt 2017 mit der Erstellung eines landesweiten Lagebildes zur vorherrschenden 
                        “Clankriminalität” beauftragt.
                    </p>
                </div>
                <div class="text-section">
                    <h3 class="sub-heading">Der Begriff Clankriminalität</h3>
                    <p>
                        Der Begriff Clankriminalität umfasst die vom Gewinn- 
                        oder Machtstreben bestimmte Begehung von Straftaten 
                        <strong>unter Beteiligung Mehrerer</strong>, wobei in die Tatbegehung 
                        bewusst die gemeinsame familiäre oder ethnische 
                        Herkunft als verbindende, die Tatbegehung fördernde 
                        oder die Aufklärung der Tat hindernde Komponente 
                        einbezogen wird die Tatbegehung von einer <strong>fehlenden 
                        Akzeptanz der deutschen Rechts- oder Werteordnung</strong> 
                        geprägt ist und die Straftaten einzeln oder in ihrer 
                        Gesamtheit von erheblicher Bedeutung sind.
                    </p>
                </div>
                <div class="background"></div>
            </div>
    </Wrapper>
 
</template>

<script>
import Wrapper from "../Wrapper.vue";

export default {
    components: {
      Wrapper
    }
};
</script>

<style scoped>

.text {
    display: flex;
    position: relative;
}

.text-section {
    width: 50%;
    line-height: 25px;
}

.text > .text-section:first-child {
    margin-right: 30px;
}

.sub-heading {
    font-size: 35px;
    font-family: 'Jost';
}

.background {
    width: 400px;
    height: 1000px;
    background-image: url('../../assets/paragraph.svg');
    background-repeat: no-repeat;
    background-size: 400px auto;
    position: absolute;
    left: 30%;
    top: 15%;
    opacity: 10%;

}
</style>
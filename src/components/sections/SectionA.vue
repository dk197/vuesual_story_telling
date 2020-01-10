<template>
    <Wrapper>
	<h2 class="heading">Die Studie</h2>
             <div class="text">
                 <div class="text-section">
                    <p>
                        In einigen Städten in NRW stellen die Polizei- und Ordnungsbehörden zunehmend fest, 
                        dass Mitglieder türkisch-arabischstämmiger Großfamilien teilweise in größeren Gruppenverbänden 
                        durch aggressives Auftreten, Ordnungsstörungen und Straftaten die Bevölkerung einschüchtern und versuchen, 
                        bestimmte regionale Räume augenscheinlich für sich zu reklamieren.
                        <br><br>
                        Einsatzkräfte berichten von einer offenen Feindseligkeit, 
                        einer hohen und unmittelbar geäußerten Aggressivität, Respektlosigkeit und Gewalteskalation, die das Ziel verfolgen, behördliche 
                        Maßnahmen zu beeinflussen oder zu unterbinden.
                        
                        Deshalb hat das Ministerium des Innern des Landes Nordrhein-Westfalen das zugehörige Landeskriminalamt 2017 mit der Erstellung 
                    </p>
                </div>
                <div class="text-section">
                    <p>
                        eines landesweiten Lagebildes zur vorherrschenden “Clankriminalität” beauftragt. Im Zuge dessen wurde der Begriff “Clan” im Hinblick 
                        auf die Delinquenz seiner Anhänger noch weiter definiert: 
                    </p>
                    <p>
                        Der Begriff Clankriminalität umfasst die vom Gewinn- oder Machtstreben bestimmte Begehung von Straftaten unter Beteiligung 
                        Mehrerer, wobei in die Tatbegehung bewusst die gemeinsame familiäre oder ethnische Herkunft als verbindende, die Tatbegehung 
                        fördernde oder die Aufklärung der Tat hindernde Komponente einbezogen wird
                        die Tatbegehung von einer fehlenden Akzeptanz der deutschen Rechts- oder Werteordnung geprägt ist und
                        die Straftaten einzeln oder in ihrer Gesamtheit von erheblicher Bedeutung sind.
                    </p>
                </div>
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
}

.text-section {
    width: 50%;
}

.text > .text-section:first-child {
    margin-right: 30px;
}
</style>
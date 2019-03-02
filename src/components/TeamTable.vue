<template>
    <div class="container-table">
        <div>
            <div class="table">
                <div class="row-header">
                    <div class="cell">
                        <h3>Team tag</h3>
                    </div>
                    <div class="cell">
                        <h3>Team name</h3>
                    </div>
                    <div class="cell">
                        <h3>Team captain</h3>
                    </div>
                    <div class="cell">
                        <h3>Competitions</h3>
                    </div>
                    <div class="cell">
                        <h3>Created</h3>
                    </div>
                </div>
                <div v-for="team in teams" :key="team.name" class="row">
                    <div class="cell">
                        {{team.tag}}
                    </div>
                    <div class="cell">
                        {{team.name}}
                    </div>
                    <div class="cell">
                        {{team.captain}}
                    </div>
                    <div class="cell">
                        {{team.tag}}
                    </div>
                    <div class="cell">
                        {{team.compos}}
                    </div>                    
                    <div class="cell">
                        {{team.creationdate}}
                    </div>
                    <div>
                        <button class="show_more_button" @click="toggleModal(team.members)">Show more</button>
                    </div>
                </div>
                <modal :visible="showModal" :content="content"></modal>
            </div>
        </div>
    </div>
</template>
<script>
export default class TeamTable extends Vue{
    showModal = false;
    teams = teams();
    mounted(){
        //this.fetchTeams();
    }
    toggleModal(members){
        this.content = members;
        this.showModal = !this.showModal;
    }
    get teams(){
        return [
            {
                tag: "1337warriors",
                name: "H4xoor",
                captain: "Faker",
                compos: ["CSGO", "League of legends", "Overwatch"],
                creationdate: "12/11/2008",
                members: 
                    [
                        {
                            player: "Poohmandu",
                            elo: "Gold IV"
                        },
                        {
                            player: "Piglet",
                            elo: "Platinum 4"
                        },
                        {
                            player: "Impact",
                            elo: "Platinum 3"
                        },
                        {
                            player: "Bengi",
                            elo: "Diamond 2"
                        },
                        {
                            player: "faker",
                            elo: "God"
                        }
                    ]
            }
        ]
    }
}
</script>

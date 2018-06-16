
<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    Status : {{data_api.status}}
                    <hr/>

                    Timer : {{data_api.time}}
                    <hr/>
                    แรงขุดเฉลี่ย : {{data_api.averageHashrate}}
                    <hr/>
                    รายได้ต่อวัน : {{data_api.usdPerMin*60*24}} $
                </b-col>
                
            </b-row>
            
        </b-container> 
    </div>
</template>

<script>
    export default {
        data(){
            return {
                data_api:[],
                items:[]
            }
        },
        mounted()
        {
            this.fetchSomething();
        },
        methods: {
            async fetchSomething() {
                this.data_api = await this.$axios.$get('https://api-zcash.flypool.org/miner/:t1WFGi3k3LBYnjdi4chD1HPtXjhrYCzuGDm/currentStats')
                this.data_api.time = this.data_api.data.time/(60*60)
                this.data_api.averageHashrate = this.data_api.data.averageHashrate

                this.data_api.usdPerMin = this.data_api.data.usdPerMin 
                console.log(this.data_api.time)
                console.log(this.data_api)
            }
        }
    }
</script>
  
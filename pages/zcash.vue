
<template>
    <div>
        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                Status : {{data_api.status}}
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <b-col>
                    Unconfirmed : {{data_api.unconfirmed}}
                </b-col>
                <b-col>
                    Unpaid : {{data_api.unpaid}}
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <b-col>
                    แรงขุดเฉลี่ย : {{data_api.averageHashrate}}
                </b-col>
            </b-row>  
            <hr/>
            <b-row>
                <b-col>
                    รายได้ต่อวัน : {{data_api.usdPerMin}} $
                </b-col>

                <b-col>
                    รายได้ต่อเดือน : {{data_api.usdPerMonth}} $
                </b-col>
            </b-row>    
            <hr/>        
            <b-row>
                <b-col>
                    Zcoin ต่อวัน : {{data_api.coinsPerMin}}
                </b-col>

                <b-col>
                    Zcoin ต่อเดือน : {{data_api.coinsPerMonth}} $
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
            this.getAsyncData();
        },
        methods: {
            async getAsyncData() {
                this.data_api = await this.$axios.$get('https://api-zcash.flypool.org/miner/:t1WFGi3k3LBYnjdi4chD1HPtXjhrYCzuGDm/currentStats')
                this.data_api.averageHashrate = this.data_api.data.averageHashrate.toFixed(2)
                this.data_api.btcPerMin = this.data_api.data.btcPerMin
                this.data_api.coinsPerMin = (this.data_api.data.coinsPerMin*60*24).toFixed(5)
                this.data_api.coinsPerMonth= (this.data_api.data.coinsPerMin*60*24*31).toFixed(5)
                this.data_api.unconfirmed = (this.data_api.data.unconfirmed/10000000).toFixed(4)
                this.data_api.unpaid = (this.data_api.data.unpaid/10000000).toFixed(4)
                this.data_api.usdPerMin = (this.data_api.data.usdPerMin*60*24).toFixed(3)
                this.data_api.usdPerMonth = (this.data_api.data.usdPerMin*60*24*30).toFixed(3)
            }
        }
    }
</script>
  
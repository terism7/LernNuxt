
<template>
    <div>
        <!-- <div class="col-sm-12">
            <div class="row">
                <div class="col-sm-12 col-md-6 text-center">
                    <span class="badge badge-dark">Status</span> : {{data_api.status}}
                </div>
                <div class="col-sm-12 col-md-6 text-center">
                    <span class="badge badge-dark">Status</span> : {{data_api.status}}
                </div>
            </div>
        </div> -->

        <b-container class="bv-example-row">
            <b-row>
                <b-col>
                    <span class="badge badge-dark">Status</span> : {{data_api.status}}
                </b-col>
                <b-col>
                    <b-badge variant="dark">Unpaid</b-badge> : {{data_api.unpaid}} Zec
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <b-col>
                    <b-badge variant="dark">Unconfirmed</b-badge> : {{data_api.unconfirmed}} Zec
                </b-col>
                <b-col>
                    <b-badge variant="dark">Unpaid</b-badge> : {{data_api.unpaid}} Zec
                </b-col>
            </b-row>
            <hr/>
            <b-row>
                <b-col>
                    <b-badge variant="dark">แรงขุดเฉลี่ย</b-badge> : {{data_api.averageHashrate}} Hash/Sec
                </b-col>
            </b-row>  
            <hr/>
            <b-row>
                <b-col>
                    <b-badge variant="dark">รายได้ต่อวัน</b-badge> : {{data_api.usdPerMin}} $
                </b-col>

                <b-col>
                    <b-badge variant="dark">รายได้ต่อเดือน</b-badge> : {{data_api.usdPerMonth}} $
                </b-col>
            </b-row>    
            <hr/>        
            <b-row>
                <b-col>
                    <b-badge variant="dark">Zcash ต่อวัน</b-badge> : {{data_api.coinsPerMin}} 
                </b-col>

                <b-col>
                    <b-badge variant="dark">Zcash ต่อเดือน</b-badge> : {{data_api.coinsPerMonth}} $
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
                this.data_api.unconfirmed = (this.data_api.data.unconfirmed/100000000).toFixed(4)
                this.data_api.unpaid = (this.data_api.data.unpaid/10000000).toFixed(4)
                this.data_api.usdPerMin = (this.data_api.data.usdPerMin*60*24).toFixed(3)
                this.data_api.usdPerMonth = (this.data_api.data.usdPerMin*60*24*30).toFixed(3)
            }
        }
    }
</script>
  
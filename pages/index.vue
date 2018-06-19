<template>

  <section class="container">
    <b-container class="bv-example-row" style="margin-top:100px;">
      <b-row>
          <b-col class="text-center">
            <app-logo/>
          </b-col>
      </b-row>
      <hr/>
      <b-row>
        <b-col class="text-center">
          <h1 class="title">
            TERiSM7
          </h1>
        </b-col>
        
      </b-row>
      <b-row>
        <b-col class="text-center">
          <h2 class="subtitle">
            Nuxt.js project
          </h2>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>



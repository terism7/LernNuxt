<template>
      <b-container class="bv-example-row">
        <b-row>
            <b-col class="text-center">
              <app-logo/>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="text-center">
              <hello/>
            </b-col>
        </b-row>
      </b-container>
        
</template>

<script>
import Hello from '~/components/Hello.vue'
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    Hello,
    AppLogo
  }
}

</script>
<style>

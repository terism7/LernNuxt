<template>
  <section class="container">
    <div>
        <app-logo/>
        <div class="title">
          <hello/>
        </div>
    </div>
    
  </section>
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

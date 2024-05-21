<template>
  <div class="container mt-5 pt-5"><h2>4464846</h2></div>
  <VForm>
    <VField
      name="email"
      type="email"
      rules="required|email"
    />
    <ErrorMessage name="email"/>
  </VForm>

  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
   data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1"
 id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
    <button type="button" class="btn-close text-reset"
     data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    ...
  </div>
</div>

</template>

<script>
import { mapActions } from 'pinia';

import cartStore from '../../stores/cartStore';

export default {
  methods: {

    ...mapActions(cartStore, ['getCarts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style scoped>
</style>

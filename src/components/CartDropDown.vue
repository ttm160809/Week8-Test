<template>
  <div class="dropdown">
    <!-- <button class="nav-cart-btn btn btn-secondary m-0 text-end position-relative"
            type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
            aria-expanded="false" :disabled="this.$route.path === '/cart'">
      <i class="bi bi-cart-fill fs-3"></i>
      <span class="position-absolute top-0 start-100
       translate-middle badge rounded-pill bg-change"> -->
        <!-- ?. 可選串聯，用來精簡判斷物件是否存在時的寫法 -->
        <!-- {{ tempCarts?.length }} -->
      <!-- </span>
    </button> -->
    <div class="dropdown-menu dropdown-menu-end p-2"
         style="min-width: 360px; background-color: #EDF1F6;">
      <h3 class="text-center mb-2">目前品項</h3>
      <div v-for="cart in tempCarts" :key="cart.id" class="mb-1">
        <hr class="my-1">
        <div class="row justify-content-around">
          <div class="cart-delete col-1 d-flex align-items-center"
                @click.prevent="deleteCart(cart)">
            <i class="cart-delete bi bi-trash3-fill bg-dark text-light rounded p-1 fs-6"></i>
          </div>
          <div class="col-3">
            <img :src="cart.product.imageUrl" class="card-img-top rounded-0 "
                style="object-fit: cover;" height="60" alt="...">
          </div>
          <div class="col-7 d-flex flex-column justify-content-around">
            <div class="d-flex justify-content-between">
              <span class="text-primary fw-bold fs-6">{{cart.product.title}}</span>
              <span class="text-change fw-bold fs-6">¥ {{cart.total}}</span>
            </div>
            <div class="input-group input-group-sm">
              <button type="button" class="btn btn-primary" v-if="cart.qty > 1"
                      @click.prevent="cart.qty--; changeCartQty($event, cart, cart.qty)">
              - </button>
              <button type="button" class="btn btn-secondary"
                      disabled v-else
                      @click.prevent="cart.qty--; changeCartQty(cart, cart.qty)"> - </button>
              <input min="1" type="number" class="form-control" v-model="cart.qty" readonly>
              <button type="button" class="btn btn-primary"
                      @click.prevent="cart.qty++; changeCartQty($event, cart, cart.qty)">
              + </button>
            </div>
          </div>
        <div>
        </div>
        </div>
      </div>
      <hr style="border: 1px solid;" class="my-2">
      <div class="text-center">
        <RouterLink to="/cart" class="m-0">
          <button type="button" class="btn btn-outline-primary">
            <span class="px-5">結帳去</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';

import cartStore from '../stores/cartStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  props: {
    carts: [],
  },
  data() {
    return {
      tempCarts: [],
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    changeCartQty(event, cart, qty) {
      const newQty = {
        product_id: cart.product_id,
        qty,
      };
      axios.put(`${VITE_URL}/v2/api/${VITE_NAME}/cart/${cart.id}`, { data: newQty })
        .then(() => {
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
      // event.stopPropagation();
      console.log(this.$route);
    },
    deleteCart(cart) {
      axios.delete(`${VITE_URL}/v2/api/${VITE_NAME}/cart/${cart.id}`)
        .then((res) => {
          console.log(res);
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  watch: {
    carts() {
      this.tempCarts = this.carts.carts;
    },
  },
  // mounted() {
  //   this.getCarts();
  // },
};
</script>

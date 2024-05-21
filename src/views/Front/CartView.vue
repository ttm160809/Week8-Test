<template>
  <div class="container mt-md-5 pt-5">
    <div class="d-flex flex-column d-md-none align-items-center mb-5">
      <div class="border border-primary bg-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down-fill col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4">3.訂單成立</sapn>
      </div>
    </div>
    <div class="d-none d-md-flex justify-content-center mb-5 centerWrap mx-auto">
      <div class="border border-primary bg-primary px-7 py-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right-fill col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary px-7 py-4">
        <sapn class="fs-4">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary px-7 py-4">
        <sapn class="fs-4">3.訂單成立</sapn>
      </div>
    </div>
      <div class="row">
        <div class="col-md-8">
          <div class="bg-white p-3 mb-3 mb-md-0">
            <div class="d-flex justify-content-between align-items-end mb-3">
              <h2>カート内の商品</h2>
              <div class="text-end">
                <button class="btn btn-outline-danger" type="button"
                        @click="deleteAllCart()" :disabled="carts.length === 0">
                  <i class="cart-delete bi bi-trash3-fill rounded me-1 fs-6"></i>
                  全て削除
                </button>
              </div>
            </div>
            <div v-if="carts.length === 0" class="d-flex flex-column align-items-center mb-4">
              <i class="bi bi-cart-x-fill fs-8r text-secondary"></i>
              <span class="fs-3 mb-4 text-secondary">購物車還沒有任何商品</span>
              <RouterLink to="/products">
                <button type="button" class="btn btn-primary fs-3 py-2 px-5">
                <span class="text-white">選購去</span>
              </button>
              </RouterLink>
            </div>
            <table v-else class="table align-middle cart-list">
              <tbody>
                <tr v-for="cart in carts" :key="cart.id" class="my-1">
                    <td class="cart-delete me-3">
                      <button class="btn btn-outline-danger" type="button"
                              @click="deleteCart(cart)" :disabled="carts.length === 0">
                        <i class="cart-delete bi bi-trash3-fill rounded fs-6"></i>
                      </button>
                    </td>
                    <td class="d-flex flex-column-reverse d-md-block">
                      <img :src="cart.product.imageUrl"
                           class="cart-list-img card-img-top rounded-0" alt="...">
                        <span class="text-primary fw-bold fs-6 ms-0 ms-md-3">
                          {{ cart.product.title }}
                        </span>
                    </td>
                    <td class="text-end text-change fw-bold fs-5">
                      <div class="d-md-flex">
                        <select name="" id="" class="form-select mb-3 mb-md-0"
                                v-model="cart.qty" @change="changeCartQty(cart)">
                          <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                        </select>
                        <span class="w-100 ms-0 ms-md-5">¥ {{ cart.total }}</span>
                      </div>
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-md-4">
          <div class="bg-dark p-2">
            <h3 class="text-center text-white">訂單摘要</h3>
          </div>
          <div class="bg-white p-3">
            <div v-if="final_total === total"
                 class="d-flex justify-content-between align-items-end mb-4">
              <h4 class="fw-bold">總價</h4>
              <span class="text-danger fw-bold fs-5">¥ {{ total }}</span>
            </div>
            <div v-else>
              <div class="d-flex justify-content-between align-items-end mb-1">
                <h4 class="fw-bold fs-5"><del>總價</del></h4>
                <span class="text-danger fw-bold fs-6"><del>¥ {{ total }}</del></span>
              </div>
              <div class="d-flex justify-content-between align-items-end mb-4">
                <h4 class="fw-bold fs-3">折扣價</h4>
                <span class="text-danger fw-bold fs-4">¥ {{ Math.round(final_total) }}</span>
              </div>
            </div>
            <div v-if="final_total === total" class="input-group mb-3">
              <input type="text" class="form-control" placeholder="請輸入優惠代碼" v-model="coupon"
                     aria-label="請輸入優惠代碼" aria-describedby="button-addon2"
                     :disabled="carts.final_total !== carts.total">
              <button class="btn btn-dark" type="button" id="button-addon2"
                      @click="useCoupon(coupon)" >
                使用
              </button>
            </div>
            <div v-else class="input-group mb-3">
                <input type="text" class="form-control" placeholder="您已使用優惠券" v-model="coupon"
                      aria-label="您已使用優惠券" aria-describedby="button-addon2" disabled>
                <button class="btn btn-dark" type="button" id="button-addon2"
                        @click="useCoupon(coupon)" disabled>
                  使用
                </button>
            </div>
          </div>
          <RouterLink to="/cartinfo">
            <button type="button" class="btn btn-primary w-100 py-3 rounded-0">
              <span class="text-warning fw-bold fs-5">前往結帳資訊</span>
            </button>
          </RouterLink>

        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapState } from 'pinia';

import cartStore from '@/stores/cartStore';
import sweetAlertStore from '@/stores/sweetAlertStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      // carts: [],
      // coupon: '',
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    ...mapActions(cartStore, ['deleteAllCart']),
    ...mapActions(cartStore, ['deleteCart']),
    ...mapActions(cartStore, ['changeCartQty']),
    ...mapActions(sweetAlertStore, ['successToast']),
    ...mapActions(sweetAlertStore, ['errorToast']),
    useCoupon(coupon) {
      const couponData = {
        code: coupon,
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/coupon`, { data: couponData })
        .then(() => {
          this.getCarts();
          this.coupon = '';
          this.successToast('クーポンを使用しました');
        })
        .catch(() => {
          this.coupon = '';
          this.errorToast('クーポンコードが正しくありません');
        });
    },
    checkTotal() {
      const couponData = {
        code: 'OPEN30',
      };
      for (let i = 0; i < this.carts.length; i += 1) {
        if (this.carts[i].coupon === undefined && this.final_total !== this.total) {
          axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/coupon`, { data: couponData })
            .then(() => {
              this.getCarts();
            })
            .catch((err) => {
              this.coupon = '';
              alert(err.response.data.message);
            });
        }
      }
    },
  },
  mounted() {
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['final_total']),
    ...mapState(cartStore, ['total']),
  },
};
</script>

<style scoped></style>

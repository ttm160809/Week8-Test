<template>
  <div class="container pt-5">
    <div class="d-flex flex-column d-md-none align-items-center mb-5">
      <div class="border border-secondary bg-secondary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-primary bg-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down-fill col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4">3.訂單成立</sapn>
      </div>
    </div>
    <div class="d-none d-md-flex justify-content-center mb-5">
      <div class="border border-secondary bg-secondary px-7 py-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-primary bg-primary px-7 py-4">
        <sapn class="fs-4 text-white">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right-fill col fs-1 text-primary"></i>
      </div>
      <div class="border border-primary px-7 py-4">
        <sapn class="fs-4">3.訂單成立</sapn>
      </div>
    </div>
      <div class="row">
        <div class="col-md-8">
          <div class="bg-white p-3">
            <div class="d-flex justify-content-between align-items-end mb-3">
              <h2>客戶資訊</h2>
            </div>
            <div class="row justify-content-center">
      <!-- v-slot把元件本身功能提取出來使用 -->
      <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <!-- rules加入所需要的規則 -->
          <VField id="email" name="email" type="email"
                  class="form-control" :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></VField>
          <!-- 需與VField的name欄位進行對應 -->
          <!-- nvalid-feedback需搭配VField的is-invalid -->
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <v-field id="name" name="姓名" type="text"
                   class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required" v-model="form.user.name"></v-field>
          <error-message name="姓名" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <v-field id="tel" name="電話" type="text"
                   class="form-control" :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" :rules="isPhone" v-model="form.user.tel"></v-field>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <v-field id="address" name="地址" type="text" class="form-control"
                   placeholder="請輸入地址" rules="required" :class="{ 'is-invalid': errors['地址'] }"
                   v-model="form.user.address"></v-field>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea id="message" class="form-control" cols="30"
                    rows="10" v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </VForm>
    </div>
          </div>
        </div>
        <div class="col-md-4">
          <!-- <div class="bg-dark p-2" id="flush-headingOne">
            <h3 class="text-center text-white">訂單內容</h3>
          </div> -->
          <div class="bg-dark p-2">
            <h3 class="text-center text-white">訂單摘要</h3>
            <!-- <hr> -->
          </div>
          <div class="bg-white p-3">
            <table class="table align-middle mb-2">
                <thead></thead>
                <tbody>
                  <tr v-for="cart in carts" :key="cart.id">
                    <!-- class="d-flex flex-column-reverse d-md-block" -->
                    <td>
                      <!-- <img :src="cart.product.imageUrl"
                           class="cart-list-img card-img-top rounded-0" alt="..."> -->
                        <span class="text-primary fw-bold fs-6">
                          {{ cart.product.title }}
                        </span>
                    </td>
                    <td class="text-danger fs-5 text-end">x {{ cart.qty }}</td>
                    <td class="text-change fw-bold fs-5 text-end">
                      ¥ {{ Math.round(cart.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            <div v-if="final_total === total"
                 class="d-flex justify-content-between align-items-end mb-4">
              <h4 class="fw-bold p-2">總價</h4>
              <span class="text-danger fw-bold fs-5 p-2">¥ {{ total }}</span>
            </div>
            <div v-else>
              <div class="d-flex justify-content-between align-items-end mb-1">
                <h4 class="fw-bold fs-5 p-2"><del>總價</del></h4>
                <span class="text-danger fw-bold fs-6 p-2"><del>¥ {{ total }}</del></span>
              </div>
              <div class="d-flex justify-content-between align-items-end mb-4">
                <h4 class="fw-bold fs-3 p-2">折扣價</h4>
                <span class="text-danger fw-bold fs-4 p-2">¥ {{ Math.round(final_total) }}</span>
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
          <RouterLink to="/cart">
            <button type="button" class="btn btn-primary w-100 py-3 rounded-0">
              <span class="text-warning fw-bold fs-5">退回確認品項</span>
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
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon: '',
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    ...mapActions(sweetAlertStore, ['swalError']),
    ...mapActions(sweetAlertStore, ['successToast']),
    ...mapActions(sweetAlertStore, ['errorToast']),
    // getCarts() {
    //   axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/cart`)
    //     .then((res) => {
    //       this.carts = res.data.data;
    //       this.pages = res.data.pagination;
    //     })
    //     .catch(() => {
    //       this.swalError();
    //     });
    // },
    createOrder() {
      const order = this.form;
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/order`, { data: order })
        .then((res) => {
          this.$refs.form.resetForm();
          this.form.message = '';
          this.getCarts();
          this.$router.push(`/cartfinish/${res.data.orderId}`);
        })
        .catch(() => {
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      if (value === '') {
        return '電話號碼 為必填';
      }
      return phoneNumber.test(value) ? true : '請填寫正確的電話號碼';
    },
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
  },
  mounted() {
    this.getCarts();
    console.log(this.carts);
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(cartStore, ['final_total']),
    ...mapState(cartStore, ['total']),
  },
};
</script>

<style scoped></style>

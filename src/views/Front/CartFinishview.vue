<template>
  <div class="container pt-5">
    <div class="d-flex flex-column d-md-none align-items-center mb-5">
      <div class="border border-secondary bg-secondary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-secondary bg-secondary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-down-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-primary bg-primary w-100 text-center py-2 py-md-4">
        <sapn class="fs-4 text-white">3.訂單成立</sapn>
      </div>
    </div>
    <div class="d-none d-md-flex justify-content-center mb-5">
      <div class="border border-secondary bg-secondary d-flex align-items-center px-7 py-4">
        <sapn class="fs-4 text-white">1.確認品項</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-secondary bg-secondary d-flex align-items-center px-7 py-4">
        <sapn class="fs-4 text-white">2.結帳資訊</sapn>
      </div>
      <div class="d-flex align-items-center">
        <i class="bi bi-caret-right-fill col fs-1 text-secondary"></i>
      </div>
      <div class="border border-primary bg-primary d-flex align-items-center px-7 py-4">
        <sapn class="fs-4 text-white">3.訂單成立</sapn>
      </div>
    </div>
      <div class="row justify-content-center">
        <div class="col-md-10">
          <div class="bg-white p-3">
            <div class="d-flex flex-column align-items-center mb-4">
              <i class="bi bi-check-circle-fill fs-8r text-primary"></i>
              <span class="fs-3 fw-bold text-primary mb-4">訂單已成立，感謝您的訂購！</span>
                <span class="fs-5">您的訂單編號：</span>
                <span class="fs-3 text-change">{{ order_id }}</span>

            </div>

          </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';

import cartStore from '@/stores/cartStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      carts: [],
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
      order_id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(cartStore, ['getCarts']),
    // getCarts() {
    //   axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/cart`)
    //     .then((res) => {
    //       this.carts = res.data.data;
    //       this.pages = res.data.pagination;
    //     })
    //     .catch((err) => {
    //       alert(err.response.data.message);
    //     });
    // },
    deleteAllCart() {
      axios.delete(`${VITE_URL}/v2/api/${VITE_NAME}/carts`)
        .then((res) => {
          console.log(res);
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
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
    changeCartQty(cart) {
      const newQty = {
        product_id: cart.product_id,
        qty: cart.qty,
      };
      axios.put(`${VITE_URL}/v2/api/${VITE_NAME}/cart/${cart.id}`, { data: newQty })
        .then((res) => {
          console.log(res);
          this.getCarts();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    createOrder() {
      const order = this.form;
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/order`, { data: order })
        .then((res) => {
          this.$refs.form.resetForm();
          this.form.message = '';
          this.getCarts();
          alert(res.data.message);
          this.order_id = res.data.orderId;
          console.log(this.order_id);
        })
        .catch((err) => {
          alert(err.response.data.message);
          this.$route.push();
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      if (value === '') {
        return '電話號碼 為必填';
      }
      return phoneNumber.test(value) ? true : '請填寫正確的電話號碼';
    },
    checkCoupon() {
      const userCoupon = {
        code: this.coupon,
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/coupon`, { data: userCoupon })
        .then((res) => {
          alert(res.data.message);
          this.getCarts();
        })
        .catch((err) => {
          this.coupon = '';
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style scoped></style>

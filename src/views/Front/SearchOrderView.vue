<template>
  <VLoading :active="isLoading"></VLoading>
  <div class="container mt-md-5 pt-5">
    <div class="row justify-content-center mb-5">
      <div class="col-md-10 d-flex flex-column align-items-center">
        <h2 class="mb-5">訂單查詢</h2>
        <div class="input-group mb-5">
          <input type="text" class="form-control" placeholder="請輸入訂單編號" v-model="order_id"
                 aria-label="請輸入訂單編號" aria-describedby="button-addon2">
            <button class="btn btn-dark" type="button" id="button-addon2"
                    @click="getOrder()">
              查詢
            </button>
        </div>
      </div>
      <div v-if="isSearch === true && tempOrder === null"
            class="d-flex flex-column align-items-center">
        <i class="bi bi-clipboard-x-fill fs-8r text-secondary"></i>
        <span class="fs-3 mb-4 text-secondary">查無此訂單</span>
      </div>
      <div v-else-if="isSearch === true && tempOrder !== null" class="col-md-10">
        <div class="row d-flex flex-column-reverse flex-md-row">
          <div class="col-md-7">
            <div class="bg-white p-3">
              <h2>訂購品項</h2>
              <table class="table align-middle mb-2">
                <thead></thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <td class="d-flex flex-column-reverse d-md-block">
                      <img :src="item.product.imageUrl"
                           class="cart-list-img card-img-top rounded-0" alt="...">
                        <span class="text-primary fw-bold fs-6 ms-0 ms-md-3">
                          {{ item.product.title }}
                        </span>
                    </td>
                    <td class="text-danger fs-5 text-end">x {{ item.qty }}</td>
                    <td class="text-change fw-bold fs-5 text-end">
                      ¥ {{ Math.round(item.final_total) }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- <ul v-for="item in tempOrder.products" :key="item.id" class="cart-list mb-4">
                <li class="my-1">
                  <hr>
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img :src="item.product.imageUrl" class="cart-list-img card-img-top rounded-0"
                          alt="...">
                    </div>
                    <span class="text-primary fw-bold fs-5 me-auto">{{ item.product.title }}</span>
                    <span class="text-danger fs-6">
                      ¥ {{ item.product.origin_price }} x {{ item.qty }}
                    </span>
                    <span class="text-change fw-bold fs-5">¥ {{ item.total }}</span>
                  </div>
                </li>
              </ul> -->
              <div class="text-end">
                <span class="text-danger fw-bold fs-3 me-4">總價</span>
                <span class="text-danger fw-bold fs-4 me-2">¥ {{ tempOrder.total }}</span>
              </div>
            </div>
          </div>
        <div class="col-md-5 mb-3 mb-md-0">
          <div class="bg-dark p-2">
            <h3 class="text-center text-white">客戶資訊</h3>
          </div>
          <div class="bg-white p-3">
            <!-- <div
                 class="d-flex justify-content-between align-items-end mb-4">
              <h4>總價</h4>
              <span class="text-danger fw-bold fs-5">¥ {{ tempOrder.total }}</span>
            </div>
            <div
                 class="d-flex justify-content-between align-items-end mb-4">
              <h4>總價</h4>
              <span class="text-danger fw-bold fs-5">¥ {{ tempOrder.total }}</span>
            </div> -->
            <table class="table mb-2">
            <thead>
              <!-- <tr>
                <th scope="1" colspan="2" class="text-center">{{ $t('Order.tableTitle') }}</th>
              </tr> -->
            </thead>
            <tbody>
              <tr>
                <th>訂單編號</th>
                <td class="text-end">{{ tempOrder.id }}</td>
              </tr>
              <tr>
                <th>下單時間</th>
                <td class="text-end">{{ switchDate(tempOrder.create_at) }}</td>
              </tr>
              <tr>
                <th>姓名</th>
                <td class="text-end">{{ tempOrder.user.name }}</td>
              </tr>
              <tr>
                <th>電話</th>
                <td class="text-end">{{ tempOrder.user.tel }}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td class="text-end">{{ tempOrder.user.email }}</td>
              </tr>
              <tr>
                <th>地址</th>
                <td class="text-end">{{ tempOrder.user.address }}</td>
              </tr>
              <tr>
                <th>留言</th>
                <td v-if="tempOrder.message === undefined"
                    class="text-end">-</td>
                <td v-else class="text-end">{{ tempOrder.message }}</td>
              </tr>
              <tr>
                <th>付款狀態</th>
                <td v-if="tempOrder.is_paid === true"
                    class="text-success text-end fw-bold">已付款</td>
                <td v-else class="text-danger text-end fw-bold">尚未付款</td>
              </tr>
            </tbody>
          </table>
          <div class="text-end">
            <button class="btn btn-change" type="button" id="button-addon2"
                    @click="checkPaid()">
              確認已付款
            </button>
          </div>
            <!-- <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="請輸入優惠代碼" v-model="coupon"
                     aria-label="請輸入優惠代碼" aria-describedby="button-addon2">
              <button class="btn btn-dark" type="button" id="button-addon2"
                      @click="checkCoupon()">
                使用
              </button>
            </div>
          <RouterLink to="/cartinfo">
            <button type="button" class="btn btn-primary w-100 py-3 rounded-0">
              <span class="text-warning fw-bold fs-5">前往結帳資訊</span>
            </button>
          </RouterLink> -->
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';

import sweetAlertStore from '@/stores/sweetAlertStore';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      isLoading: false,
      tempOrder: [],
      order_id: '',
      isSearch: false,
    };
  },
  methods: {
    ...mapActions(sweetAlertStore, ['swalError']),
    ...mapActions(sweetAlertStore, ['successToast']),
    ...mapActions(sweetAlertStore, ['errorToast']),
    getOrder() {
      this.isLoading = true;
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/order/${this.order_id}`)
        .then((res) => {
          this.tempOrder = res.data.order;
          this.isSearch = true;
          this.isLoading = false;
        })
        .catch(() => {
          this.swalError();
        });
    },
    switchDate(timestamp) {
      const date = new Date(timestamp * 1000);
      let Y = `${date.getFullYear()}-`;
      // date.getMonth()返回日期對應的月份，範圍從 0 到 11，所以需要加 1 才能得到正確的月份。
      let M = `${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1}-`;
      let D = `${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()} `;
      let h = `${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}:`;
      let m = (date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes());
      let formattedDate = Y + M + D + h + m;
      return formattedDate;
    },
    checkPaid() {
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/pay/${this.tempOrder.id}`)
        .then(() => {
          this.getOrder();
          this.successToast('お支払いが完了しました');
        })
        .catch(() => {
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
  },
};
</script>

<style scoped>
</style>

<template>
  <div class="modal fade" id="orderModal" tabindex="-1"
       role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true" ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <button type="button" class="btn-close btn-close-white"
                  data-bs-dismiss="modal" aria-label="Close">
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>用戶資料</h3>
              <table class="table">
                <tbody v-if="editOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ editOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ editOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ editOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ editOrder.user.address }}</td>
                  </tr>
                  <tr>
                    <th>留言</th>
                    <td>{{ editOrder.message }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ editOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ create_at }}</td>
                  </tr>
                  <!-- <tr>
                    <th>付款時間</th>
                    <td>
                      <span v-if="editOrder.paid_date">
                        {{ editOrder.paid_date }}
                      </span>
                      <span v-else>-</span>
                    </td>
                  </tr> -->
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="editOrder.is_paid" class="text-success">已付款</strong>
                      <span v-else class="fw-bold text-danger">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ editOrder.total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in editOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                    v-model="editOrder.is_paid" />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="editOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary"
                  @click="$emit('update-paid', this.paid)">
            確認
          </button>
          <!-- , editOrder -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    tempOrder: {
      type: Object,
      default() {
        return {
        };
      },
    },
  },
  data() {
    return {
      modal: null,
      create_at: '',
      status: {},
      editOrder: {},
    };
  },
  methods: {
    switchDate(timestamp) {
      // const date = new Date(timestamp * 1000);
      // const formattedDate = date.toISOString().slice(0, 10);
      // return formattedDate;
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
  },
  watch: {
    tempOrder() {
      this.editOrder = this.tempOrder;
      this.create_at = this.switchDate(this.tempOrder.create_at);
    },
  },
  emits: ['update-paid'],
  mixins: [modalMixin],
};
</script>

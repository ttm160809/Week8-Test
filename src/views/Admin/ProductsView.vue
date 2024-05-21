<template>
  <VLoading :active="isLoading"></VLoading>
  <div class="container p-3">
    <h2 class="mb-2">商品列表</h2>
      <div class="text-end mt-4">
        <button class="btn btn-primary" @click="openModal('new')">
          <i class="bi bi-plus"></i>
          建立新商品
        </button>
      </div>
      <table class="table mt-4 align-middle">
        <thead class="table-primary">
          <tr class="my-2">
            <th>分類</th>
            <th width="200">
              圖像
            </th>
            <th>產品名稱</th>
            <th>原價</th>
            <th>售價</th>
            <th>是否啟用</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="product in products" :key="product.id">
            <td>{{ product.category }}</td>
            <td>
              <img :src="product.imageUrl" class="card-img-top rounded-0 "
                   style="object-fit: cover;" height="120"
                   alt="...">
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.origin_price }}</td>
            <td>{{ product.price }}</td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                :checked="product.is_enabled" @change="changeIsEnabled(product)">
                <label class="form-check-label" for="flexSwitchCheckDefault">
                  <span class="text-success" v-if = "product.is_enabled">啟用</span>
                  <span v-else>未啟用</span>
                </label>
              </div>
            </td>
            <td class="text-end">
              <div class="btn-group me-4">
                <button type="button" class="btn btn-change btn-sm py-2"
                @click="openModal('edit', product)">
                  <i class="bi bi-pencil-fill mx-2"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm py-2"
                @click="openModal('del', product)">
                  <i class="bi bi-trash3-fill mx-2"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationCard :pages="pages"
                      :get-products="getProducts">
      </PaginationCard>
    </div>
    <!-- Modal -->
    <ProductsModal :temp-product="tempProduct"
                    @update-product="updateProduct"
                    :is-new="isNew"
                    :create-images="createImages"
                    ref="pModal">
    </ProductsModal>
    <!-- 前內後外，當內層觸發update-product時會觸發外層的updateProduct方法 -->
    <DelModal :temp-product="tempProduct"
              @delete-product="deleteProduct"
              ref="dModal">
    </DelModal>
    <!-- Modal -->
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';

import sweetAlertStore from '@/stores/sweetAlertStore';

import ProductsModal from '@/components/ProductsModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationCard from '@/components/PaginationCard.vue';

const { VITE_URL, VITE_NAME } = import.meta.env;
const myToken = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
axios.defaults.headers.common.Authorization = myToken;

export default {
  data() {
    return {
      isLoading: false,
      products: [],
      pages: {
      },
      isNew: false,
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    ...mapActions(sweetAlertStore, ['swalError']),
    ...mapActions(sweetAlertStore, ['checkError']),
    ...mapActions(sweetAlertStore, ['successToast']),
    ...mapActions(sweetAlertStore, ['errorToast']),
    checkLogin() { /* 判斷登入狀態 */
      this.isLoading = true;
      axios.post(`${VITE_URL}/v2/api/user/check`)
        .then(() => {
          this.getProducts();
        })
        .catch(() => {
          this.$router.push('/login');
          this.checkError();
        });
    },
    getProducts(page = 1) { /* 獲取商品資料 */
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/admin/products?page=${page}`)
        .then((res) => {
          this.products = res.data.products;
          this.pages = res.data.pagination;
          this.isLoading = false;
        })
        .catch(() => {
          this.swalError();
        });
    },
    openModal(status, item) { /* 開啟商品視窗 */
      if (status === 'new') { /* 新增商品 */
        this.isNew = true;
        this.tempProduct = {
          imagesUrl: [''],
        };
        this.$refs.pModal.openModal();
      } else if (status === 'edit') { /* 編輯商品 */
        this.isNew = false;
        this.tempProduct = { ...item };
        this.$refs.pModal.openModal();
      } else if (status === 'del') { /* 刪除商品 */
        this.tempProduct = { ...item };
        this.$refs.dModal.openModal();
      }
    },
    updateProduct() {
      let updateStatus = 'post'; /* 先設定上傳變數 */
      let message = '商品データが作成されました';
      let updateUrl = `${VITE_URL}/v2/api/${VITE_NAME}/admin/product`;

      if (this.isNew === false) { /* 若is.New為false則updateStatus值變為put，以啟動put的api來上傳新商品 */
        updateStatus = 'put';
        message = 'アップデートしました';
        updateUrl = `${VITE_URL}/v2/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`;
      }

      axios[updateStatus](updateUrl, { data: this.tempProduct })
        .then(() => {
          this.$refs.pModal.hideModal();
          this.getProducts();
          this.successToast(message);
        })
        .catch(() => {
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
    deleteProduct() {
      axios.delete(`${VITE_URL}/v2/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
        .then(() => {
          this.$refs.dModal.hideModal();
          this.getProducts();
          this.successToast('データが削除されました');
        })
        .catch(() => {
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
    createImages() {
      this.tempProduct.imagesUrl = [];
      this.tempProduct.imagesUrl.push('');
    },
    changeIsEnabled(product) {
      this.tempProduct = { ...product };
      this.tempProduct.is_enabled = !product.is_enabled;
      axios.put(`${VITE_URL}/v2/api/${VITE_NAME}/admin/product/${this.tempProduct.id}`, { data: this.tempProduct })
        .then(() => {
          this.getProducts();
          if (this.tempProduct.is_enabled === true) {
            this.successToast('商品がアクティベートされました');
          } else {
            this.successToast('商品がインアクティブされました');
          }
        })
        .catch(() => {
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
  },
  // mounted() {
  //   this.checkLogin();
  // },
  created() {
    this.checkLogin();
  },
  components: {
    PaginationCard,
    ProductsModal,
    DelModal,
  },
};
</script>

<template>
  <div id="delProductModal" ref="modal"
       class="modal fade" tabindex="-1"
       aria-labelledby="delProductModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
         <button type="button" class="btn-close"
                 data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          是否刪除商品
          <strong class="text-danger"></strong> {{ tempProduct.title }} (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-product')">
            確認刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  props: {
    tempProduct: {},
  },
  data() {
    return {
      modal: null,
    };
  },
  emits: ['delete-product'],
  mixins: [modalMixin],
};
</script>

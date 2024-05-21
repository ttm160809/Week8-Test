<template>
  <div id="delOrderModal" ref="modal"
       class="modal fade" tabindex="-1"
       aria-labelledby="delOrderModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delOrderModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
         <button type="button" class="btn-close"
                 data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          是否刪除訂單
          <strong class="text-danger"></strong> {{ tempOrder.id }} (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-order')">
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
    tempOrder: {},
  },
  data() {
    return {
      modal: null,
    };
  },
  emits: ['delete-Order'],
  mixins: [modalMixin],
};
</script>

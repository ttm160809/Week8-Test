<template>
  <div id="delCouponModal" ref="modal"
       class="modal fade" tabindex="-1"
       aria-labelledby="delCouponModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-danger text-white">
          <h5 id="delCouponModalLabel" class="modal-title">
            <span>刪除優惠券</span>
          </h5>
         <button type="button" class="btn-close"
                 data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-start">
          是否刪除優惠券
          <strong class="text-danger"></strong> {{ tempCoupon.title }} (刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="$emit('delete-coupon')">
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
    tempCoupon: {},
  },
  data() {
    return {
      modal: null,
    };
  },
  emits: ['delete-Coupon'],
  mixins: [modalMixin],
};
</script>

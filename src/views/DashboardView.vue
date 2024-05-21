<template>
  <AdminAside></AdminAside>
  <main class="aside-main">
    <RouterView></RouterView>
  </main>

</template>

<script>
import axios from 'axios';

import AdminAside from '@/components/AdminAside.vue';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    signOut() {
      axios.post(`${VITE_URL}/v2/logout`)
        .then((res) => {
          alert(res.data.message);
          document.cookie = 'hexToken=; expires=; path=/'; /* 登出時清除 cookie，只要將原先設定的值留白即可 */
          this.$router.push('/'); /* 登出成功後再將路由重新導向回前台 */
        }).catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  components: {
    AdminAside,
  },
};
</script>

<style scoped>
</style>

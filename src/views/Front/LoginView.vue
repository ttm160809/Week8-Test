<template>
    <hr>
      <div class="container d-flex justify-content-center">
        <div class="row justify-content-center">
          <!-- <h1 class="h3 mb-3 font-weight-normal">
            請先登入
          </h1> -->
          <div class="login col-8">
            <form id="form" class="form-signin" @submit.prevent ="login">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="username" v-model="user.username"
                  placeholder="name@example.com" required autofocus disabled>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="password" v-model="user.password"
                       placeholder="Password" required disabled>
                <label for="password">Password</label>
              </div>
              <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
                登入
              </button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'pinia';

import sweetAlertStore from '@/stores/sweetAlertStore';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: 'eatburger@test.com',
        password: 'eatburgertest',
      },
    };
  },
  methods: {
    ...mapActions(sweetAlertStore, ['errorToast']),
    login() {
      axios.post(`${VITE_URL}/v2/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expired=${new Date(expired)}`;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          this.user = {};
          this.errorToast('お手数ですが、もう一度やり直してください');
        });
    },
  },
};
</script>

<style scoped>
</style>

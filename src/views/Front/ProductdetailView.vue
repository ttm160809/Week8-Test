<template>
   <div class="container mt-md-5">
      <div class="row justify-content-around">
        <div class="col-md-5">
          <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img :src="product.imageUrl" class="d-block w-100" alt="...">
              </div>
            </div>
          </div> -->
          <img :src="product.imageUrl" class="card-img-top rounded-0 "
                      style="object-fit: cover;" height="300"
                      alt="...">
        </div>
        <div class="col-md-6">
          <!-- <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
              <li class="breadcrumb-item"><a class="text-muted"
                  href="./product.html">Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav> -->
          <div class="product-detail row align-content-between">
            <div>
              <h2 class="fw-bold h1 mb-1 text-primary">{{ product.title }}</h2>
              <p class="my-1">{{ product.description }}</p>
            </div>
            <!-- <p class="mb-0 text-muted text-end"><del>¥ {{ product.origin_price }}</del></p>
            <p class="h4 fw-bold text-end">¥ {{ product.price }}</p> -->
            <p class="card-text mb-0">
              <span class="fw-bold fs-4 me-3 text-change">¥ {{ product.price }}</span>
              <span class="text-muted "><del>¥ {{ product.origin_price }}</del></span>
            </p>
          </div>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group">
                <select name="" id="" class="form-select" v-model="qty">
                  <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
                </select>
              </div>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-dark"
                      @click="addToCart()">加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted "><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted "><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted "><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted "><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" class="card-img-top rounded-0" alt="...">
              <a href="#" class="text-dark">
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="card-text mb-0">
                  NT$1,080
                  <span class="text-muted "><del>NT$1,200</del></span>
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light py-4">
      <div class="container">
        <div class="d-flex flex-column flex-md-row justify-content-between
                    align-items-md-center align-items-start">
          <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input type="text" class="form-control rounded-0" placeholder="" />
            <div class="input-group-append">
              <button class="btn btn-dark rounded-0" type="button" id="search">
                Lorem ipsum
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between
                    align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL, VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: {},
      pages: {
      },
      qty: 1,
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      axios.get(`${VITE_URL}/v2/api/${VITE_NAME}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    addToCart() {
      const order = {
        product_id: this.product.id,
        qty: this.qty,
      };
      axios.post(`${VITE_URL}/v2/api/${VITE_NAME}/cart`, { data: order })
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<style scoped>
</style>

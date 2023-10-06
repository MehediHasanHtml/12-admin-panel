<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'

const product = ref([])
onBeforeMount(()=> {
    axios.get('https://dummyjson.com/products')
    .then(res=>{
        product.value = res.data.products
    })
   
});



</script>


<template>

    <section class="product-grid">
        <div class="row">
            <div class="col-md-6 col-lg-4 col-xl-3" v-for="(products, index) in product" :key="index">
                <div class="card text-start">
                  <router-link :to="{name: 'product', params: {id: products.id} }"><img class="card-img-top" :src="products.thumbnail" :alt="products.title"></router-link>
                  <div class="card-body">
                    <h4 class="card-title">{{ products.title }}</h4>
                    <p class="card-text">{{products.description}}</p>
                    <router-link class="btn btn-success" :to="{name: 'product', params: {id: products.id} }">View <i class="bi bi-arrow-right-circle"></i></router-link> 
                  </div>
                </div>
            </div>
        </div>
    </section>


</template>


<style scoped>
.card-img-top {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.card {
    margin-bottom: 30px;
}
.card-text {
    margin-bottom: 15px;
}

@media (max-width: 1024px)  {
.card-img-top {
  height: 200px;
}


}

</style>
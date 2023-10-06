<script setup>
import{ref, reactive, onBeforeMount, onMounted, computed} from 'vue'

import axios from 'axios'
import {useRoute } from 'vue-router'

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const currentSlide = ref(0);


const slideTo = (val)=> {
  currentSlide.value = val
};
const carousel = ref(null)

const updateCarouselWith = () => {
    carousel.value.updateSlideWidth()
};



const route = useRoute()

const id = route.params.id
const product = reactive({})


onBeforeMount(()=> {
 
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res =>{
        product.title = res.data.title
        product.description = res.data.description
        product.images = res.data.images
        product.price = res.data.price
        product.discountPercentage = res.data.discountPercentage
        product.rating = res.data.rating
        product.brand = res.data.brand
        product.category = res.data.category
    })


});


</script>


<template>

        <section class="deatals-area">
           <div class="row">
            <div class="col-lg-6">
                <Carousel id="gallery" :autoplay="8000" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
                    <Slide v-for="(image, index) in product.images" :key="index">
                    <div class="carousel__item"><img class="img-fluid" :src="image" :alt="product.title"></div>
                    </Slide>
                    
                    <template #addons>
                        <Navigation  />
                    </template>
                </Carousel>
                

                <Carousel
                    id="thumbnails"
                    :items-to-show="4"
                    :wrap-around="true"
                    v-model="currentSlide"
                    ref="carousel"
                >
                    <Slide id="thumbnails"  v-for="(image, index) in product.images" :key="index">
                    <div class="carousel__item" @click="slideTo(index - 1), updateCarouselWith()"><img class="img-fluid" :src="image" :alt="product.title"></div>
                    </Slide>
                    
                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>

            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h1 class="card-title">{{ product.title }}</h1>
                        <p class="card-text">description: {{ product.description }}</p>
                        <p class="card-text">discount: {{ product.discountPercentage }} %</p>
                        <p class="card-text">brand: {{ product.brand }} </p>
                        <p class="card-text">rating: {{ product.rating }} <i class="bi bi-star-fill"></i></p>
                        <p class="card-text">category: {{ product.category }}</p>
                        <h3>price: {{ product.price }} $</h3>
                    </div>
                </div>

            </div>

            </div>

        </section>


</template>



<style >



.deatals-area {
    padding: 30px 0;
}
#gallery {
    margin-bottom: 20px;
}
#gallery img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}
#thumbnails img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    cursor: pointer;
}
#thumbnails  .carousel__slide--active {
    border: 1px solid #000;
}

.card-title {
    font-size: 36px;
    font-weight: 600;
}
.card-body p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
    text-transform: capitalize;
}

.card-body h3 {
    font-size: 30px;
    font-weight: 600;
    line-height: 1.5;
    margin-bottom: 15px;
    text-transform: capitalize;
}


.carousel__prev, .carousel__next {
    height: 30px;
    width: 30px;
    background: #fff;
    border-radius: 30px;
    border: 1px solid #000;
}


@media (max-width: 1024px) {
#gallery img {
    width: 100%;
    height: 200px;
}
#thumbnails img {
    width: 100%;
    height: 50px;
}

.carousel__slide {
    margin: 10px;
}
}


</style>
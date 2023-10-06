<script setup>
import {ref, reactive, onBeforeMount} from 'vue'
import axios from 'axios'
// import DataTable from 'datatables.net-vue3';
// import DataTablesCore from 'datatables.net';
 
// DataTable.use(DataTablesCore);



const searchValue = ref("");
const headers = [
  { text: "image", value: "thumbnail",  fixed: true, width: 100 },
  { text: "title", value: "title"},
  { text: "brand", value: "brand", sortable: true},
  { text: "discuout", value: "discountPercentage", sortable: true},
  { text: "rating", value: "rating"},
  { text: "stock", value: "stock", sortable: true},
  { text: "price", value: "price", sortable: true},
  { text: "action", value: "id" },
];

const items = ref([]);

onBeforeMount(async () => {
  const res = await fetch('https://dummyjson.com/products')
  .then(res => {
    return res.json();
  })

  items.value = res.products;
})



// const product = ref([])


// onBeforeMount(()=> {
//     axios.get('https://dummyjson.com/products')
//     .then(res=>{
//         product.value = res.data.products
//     })
   
// });


</script>


<template>
    <div>
      <!-- <DataTable :data="product" class="display">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">title</th>
          <th scope="col">stock</th>
          <th scope="col">rating</th>
          <th scope="col">discount</th>
          <th scope="col">price</th>
          <th scope="col">action</th>
        </tr>
      </thead>
    </DataTable> -->


    <div>

      <div class="col-md-4">
        <div class="search mb-3">
          <span>search value: </span>
          <input type="text" class="" v-model="searchValue">
        </div>
      </div>

    <EasyDataTable
      :headers="headers"
      :items="items"
      :search-value="searchValue"
    >
    <template #item-thumbnail="{ thumbnail, title, id }">
        <div class="images">
          <router-link class="link" :to="{name: 'product', params: {id: id} }"><img class="thumbnail" :src="thumbnail" :alt="title" /></router-link> 
        </div>
      </template>

    <template #item-id="{ id }">
        <div class="action">
          <router-link class="btn btn-success" :to="{name: 'product', params: {id: id} }">View <i class="bi bi-arrow-right-circle"></i></router-link>
        </div>
      </template>
    </EasyDataTable>
    
    </div>


    <!-- <div class="table-responsive-lg">
        <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">title</th>
            <th scope="col">stock</th>
            <th scope="col">rating</th>
            <th scope="col">discount</th>
            <th scope="col">price</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="products in product" :key="products.id">
            <td> <router-link :to="{name: 'product', params: {id: products.id} }"><img class="img-fluid thumbnail" :src="products.thumbnail" :alt="products.title"></router-link> </td>
            <td> <p>{{ products.title }}</p> </td>
            <td> <p>{{ products.stock }}</p> </td>
            <td> <p>{{ products.rating }} <i class="bi bi-star-fill"></i></p> </td>
            <td> <p>{{ products.discountPercentage }}</p> </td>
            <td> <p>{{ products.price }}</p> </td>
            <td> <router-link class="btn btn-success" :to="{name: 'product', params: {id: products.id} }">View <i class="bi bi-arrow-right-circle"></i></router-link> </td>
          </tr>
        </tbody>
      </table>
      </div> -->


    </div>
</template>


<style>
.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.table>:not(caption)>*>* {
  vertical-align: middle;
  font-size: 16px;
  text-transform: capitalize;
}

.search span {
  font-size: 16px;
  text-transform: capitalize;
}
.search input {
  border: 1px solid #ccc;
  padding: 8px 15px;
  border-radius: 6px;
}
.vue3-easy-data-table__header th{
    font-size: 16px;
    padding: 6px 5px !important;
    font-weight: 600;
  text-transform: capitalize !important;
}

.vue3-easy-data-table__main.fixed-header th{
  box-shadow: inherit!important;
}
.shadow.direction-left {
  box-shadow: inherit!important;
}
.vue3-easy-data-table__body td{
    position: relative;
    vertical-align: middle;
    padding: 10px 4px !important;
    font-size: 14px;
}


@media (max-width: 1024px) {
  .thumbnail {
    width: 50px;
    height:50px;
  }
}

</style>
<script setup>
import { createToaster } from "@meforma/vue-toaster";

const toaster = createToaster({});


const TostSuccess = () => {
    toaster.show(`Success Message`, {type: "success", position: "top-right"})
};

const TostDanger = () => {
    toaster.show(`Danger Message`, {type: "error", position: "top-right"})
};

const TostWarning = () => {
    toaster.show(`Warning Message`, {type: "warning", position: "top-right"})
};
const TostInfo = () => {
    toaster.show(`Info Message`, {type: "info", position: "top-right"})
};


</script>

<template>
    <div>
        <button type="button" class="btn btn-success" @click="TostSuccess()">Success</button>
        <button type="button" class="btn btn-danger" @click="TostDanger ()">Danger</button>
        <button type="button" class="btn btn-warning" @click="TostWarning()">Warning</button>
        <button type="button" class="btn btn-info" @click="TostInfo()">Info</button>
    </div>
</template>


<style scoped>

button {
    margin: 8px;
}
</style>

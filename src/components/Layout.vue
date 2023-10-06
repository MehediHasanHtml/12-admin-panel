<script setup>
import {ref, reactive} from 'vue'

const navOpren = ref();
function NavToggle(){
    navOpren.value = !navOpren.value
}

const subItem = ref()

function ToogleSub(){
    subItem.value = !subItem.value
}

// const subItem2 = ref()

// function ToogleSub2(){
//     subItem2.value = !subItem2.value
// }

// const subItem3 = ref()

// function ToogleSub3(){
//     subItem3.value = !subItem3.value
// }


</script>

<template>


    <!-- leftsdemenu -->
    <div class="leftsidemenu shadow-sm" :class="{ active: navOpren }" >
        <div class="logo">
            <img class="img-fluid" src="../assets/vue.svg" alt="logo">
        </div>
        <nav>
            <ul>
                <li><router-link to="/"><i class="bi bi-house"></i> <span class="nav-name">Home</span> </router-link></li>
                <li><router-link to="/product"><i class="bi bi-list-task"></i> <span class="nav-name">Products</span> </router-link>
                    <span class="subicon"  @click="ToogleSub()" ><i class="bi bi-chevron-down"></i></span>
                    <ul class="sub" :class="{active: subItem}">
                        <li><a href="#">Sub menu 1</a></li>
                        <li><a href="#">Sub menu 2</a></li>
                        <li><a href="#">Sub menu 3</a></li>
                        <li><a href="#">Sub menu 4</a></li>
                    </ul>
                </li>
                <li><router-link to="/contact"><i class="bi bi-envelope"></i> <span class="nav-name">Contact</span></router-link></li>
            </ul>
        </nav>
    </div>
    <!-- leftsdemenu -->
    

    <main>

    <!-- main-content -->
    <div class="main-content" :class="{ active: navOpren }">

     <!-- header-area -->
        <header class="header-area shadow-sm" :class="{ active: navOpren }">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid p-0">
                                <div class="nav-toggle" @click="NavToggle()" :class="{ active: navOpren }">
                                    <i class="bi bi-chevron-double-left"></i>
                                </div>
                                <router-link class="navbar-brand" to="/">Navbar</router-link>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><hr class="dropdown-divider"></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                    </li>
                                </ul>
                                <div class="d-flex">
                                    <ul>
                                        <li class="nav-item"><a class="nav-link" href="#">Logout <i class="bi bi-box-arrow-in-right"></i> </a></li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <!-- header-area -->

        <!-- .contents -->
        <div class="contents">
            <slot></slot>
        </div>
        <!-- .contents -->

    </div>
    <!-- main-content -->
    </main>


    
</template>


<style scoped>
.contents {
    padding: 15px;
    padding-top: 75px;
}
.main-content {
    position: relative;
    transition: all 0.4s ease;
    margin-left: 300px;
}
.main-content.active {
    transition: all 0.4s ease;
    margin-left: 80px;
}


.leftsidemenu.active {
    transition: all 0.4s ease;
    width: 80px;
}
.header-area {
    position: fixed;
    top: 0;
    left: 300px;
    right: 0;
    z-index: 33;
    background: #fff;
    transition: all 0.4s ease;
}
.header-area.active {
    left: 80px;
    transition: all 0.4s ease;
}
.nav-link {
    font-size: 16px;
    color: #222;
}


.leftsidemenu {
    width: 300px;
    background: #f4f4f4;
    position: -webkit-sticky;
    position: sticky;
    top: 0rem;
    display: block !important;
    height: calc(100vh - 0rem);
    padding-left: 0.25rem;
    margin-left: -0.25rem;
    overflow-y: auto;
    float: left;
    transition: all 0.4s ease;
}

.leftsidemenu li{
    position: relative;
}
.leftsidemenu li a {
    display: block;
    color: #222;
    font-size: 16px;
    line-height: 1.5;
    padding: 10px 15px;
    transition: all 0.4s ease;
    white-space: nowrap;
    padding-left: 25px;
}

.leftsidemenu li a:hover {
    color: #fff;
    background: #222;
    transition: all 0.4s ease;
}
.leftsidemenu.active span {
    display: none;
}

.logo img {
    height: 50px;
}

.leftsidemenu.active .logo img {
    height: 30px;
}
.logo {
    margin: 15px 0;
    text-align: center;
    height: 60px;
}


.nav-toggle i{
    padding: 10px;
    cursor: pointer;
    font-size: 32px;
    color: #222;
}

.sub {
    display: none;
    transition: all 0.4s ease;
}
.sub.active {
    display: block;
    background: #fff;
    transition: all 0.4s ease;
}
.sub li a{
    margin-left: 20px;
    font-size: 15px;
    padding: 8px 10px;
}

.subicon i {
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 9;
    padding: 5px 5px;
    background: #fff;
    border-radius: 50%;
    line-height: 5px;
    color: #222 !important;
    cursor: pointer;
}
.nav-toggle  {
    transition: all 0.4s ease;
}

.nav-toggle.active {
    transition: all 0.4s ease;
    transform: rotate(180deg);
}









@media (max-width: 1024px) {
    .leftsidemenu {
        width: 0;
        position: fixed;
        top: 4rem;
        float: left;
        z-index: 99;
    }
    .header-area {
        left: 0;
    }
    .main-content {
        margin-left: 0;
    }
    .main-content.active {
        margin-left: 0px;
    }
    .leftsidemenu.active {
        width: 300px;
    }
    .leftsidemenu.active span {
        display: inline;
    }
    .header-area.active {
        left: 0;
    }
}




</style>
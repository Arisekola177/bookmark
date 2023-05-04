<template>
  <nav>
    <div class="w-full mx-auto p-4 mt-5 md:w-10/12">
      <div class="flex justify-between items-center">
        <!-- logo -->
        <div>
          <a href="/">
            <img src="../assets/images/logo-bookmark.svg" alt=""
          /></a>
        </div>
        <!-- desktop menu -->
        <div class="hidden md:block">
          <ul class="flex items-center gap-8">
            <li class="uppercase text-sm cursor-pointer hover:text-red-400">
              <router-link to="/"> Features </router-link>
            </li>
            <li class="uppercase text-sm cursor-pointer hover:text-red-400">
              <router-link to="/"> Pricing</router-link>
            </li>
            <li class="uppercase text-sm cursor-pointer hover:text-red-400">
              <router-link to="/"> Contact </router-link>
            </li>
            <li
              class="uppercase text-sm soft-red py-2 px-6 rounded-lg cursor-pointer text-white hover:bg-transparent hover:text-red-400 hover:border-solid hover:border-red-500"
            >
              <router-link to="/"> Login </router-link>
            </li>
          </ul>
        </div>
        <!-- button -->
        <div class="md:hidden">
          <button @click="showMobileMenu = !showMobileMenu">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="18">
              <path
                fill="#242A45"
                fill-rule="evenodd"
                d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- mobile menu -->

      <div
        class="mt-6 text-center uppercase bg-gray-500 text-gray-800 h-screen"
        :class="{ hidden: showMobileMenu }"
      >
        <ul class="p-6">
          <li class="p-6 text-xl font-semibold">
            <router-link to="/"> features </router-link>
          </li>
          <p class="border-b"></p>
          <li class="p-6 text-xl font-semibold">
            <router-link to="/"> Pricing </router-link>
          </li>
          <p class="border-b"></p>
          <li class="p-6 text-xl font-semibold">
            <router-link to="/"> Contact </router-link>
          </li>
          <p class="border-b mb-4"></p>
          <li class="p-6 mt-2 text-xl border-4 rounded-lg font-semibold">
            <router-link to="/"> Login </router-link>
          </li>
        </ul>
        <div class="flex justify-center gap-6 mt-10 items-center">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              />
            </svg>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
              <path
                fill="#FFF"
                fill-rule="evenodd"
                d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
const showMobileMenu = ref(true);
</script>

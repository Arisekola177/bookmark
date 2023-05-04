<template>
  <div class="lg:mt-44">
    <div class="container m-auto text-center">
      <h1 class="dark-blue text-2xl font-semibold mb-5 md:text-3xl">
        {{ down }}
      </h1>
      <p class="grayish-blue text-normal mb-5 p-2 md:text-lg">{{ para }}</p>
    </div>
    <div
      class="w-full m-auto flex flex-col justify-between items-center mb-5 md:flex-row md:w-full lg:w-8/12"
    >
      <div class="w-full p-6 mt-4 text-center shadow-lg">
        <img class="mx-auto" src="../assets/images/logo-chrome.svg" alt="" />
        <h2 class="dark-blue text-xl font-semibold mt-5 mb-5 md:text-3xl">
          Add to Chrome
        </h2>
        <p class="grayish-blue text-md mb-5 md:text-xl">Minimum version 62</p>
        <button
          class="soft-blue p-2 text-sm mt-12 text-white rounded-md md:py-4 px-8 md:text-xl hover:bg-transparent hover:text-blue-600"
        >
          Add & Install Extention
        </button>
      </div>
      <div class="w-full p-6 mt-4 text-center shadow-lg md:mt-24">
        <img class="mx-auto" src="../assets/images/logo-firefox.svg" alt="" />
        <h2 class="dark-blue text-xl font-semibold mt-5 mb-5 md:text-3xl">
          Add to Firefox
        </h2>
        <p class="grayish-blue text-md mb-5 md:text-xl">Minimum version 62</p>
        <button
          class="soft-blue p-2 text-sm mt-12 text-white rounded-md md:py-4 px-8 md:text-xl hover:bg-transparent hover:text-blue-500"
        >
          Add & Install Extention
        </button>
      </div>
      <div class="w-full p-6 mt-4 text-center shadow-lg md:mt-36">
        <img class="mx-auto" src="../assets/images/logo-opera.svg" alt="" />
        <h2 class="dark-blue text-xl font-semibold mt-5 mb-5 md:text-3xl">
          Add to Opera
        </h2>
        <p class="grayish-blue text-md mb-5 md:text-xl">Minimum version 62</p>
        <button
          class="soft-blue p-2 text-sm mt-12 text-white rounded-md md:py-4 px-8 md:text-xl hover:bg-transparent hover:border-blue-600 hover:text-blue-500"
        >
          Add & Install Extention
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      down: 'Download the extention',
      para: ' We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
    };
  },
};
</script>

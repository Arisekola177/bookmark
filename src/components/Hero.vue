<template>
  <div class="relative h-full mb-32">
    <div>
      <div
        class="mt-12 container mx-auto flex flex-col-reverse md:flex-row justify-between items-center"
      >
        <div class="text-center dark-blue md:w-5/12 mx-auto">
          <h1 class="text-3xl font-bold md:text-left md:text-2xl lg:text-4xl">
            {{ heading }}
          </h1>
          <p
            class="mt-4 px-2 grayish-blue text-center text-normal md:text-left mb-6 md:text-normal lg:text-lg"
          >
            {{ para }}
          </p>
          <div
            class="mt-8 flex flex-col justify-center gap-4 items-center md:flex-row md:justify-start"
          >
            <button
              class="soft-blue px-8 py-4 text-white text-base font-semibold rounded-md shadow-md md:p-2 hover:bg-transparent hover:text-gray-600"
            >
              {{ btn1 }}
            </button>
            <button
              class="bg-gray-300 px-8 py-4 text-base font-semibold rounded-lg shadow-3xl md:p-2 hover:bg-transparent"
            >
              {{ btn2 }}
            </button>
          </div>
        </div>
        <div class="md:w-7/12 m-auto z-10">
          <img
            class="mr-12"
            src="../assets/images/illustration-hero.svg"
            alt="illustration"
          />
        </div>
      </div>
    </div>
    <div
      class="hidden md:block overflow-hidden soft-blue rounded-l-full absolute top-44 h-40 w-2/4 right-0 lg:h-80 lg:-right-26"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: ' A Simple Bookmark Manager',
      para: ' A clean and simple interface to organize your favourite websites. Open a new  browser tab and see your sites load instantly. Try it for free.',
      btn1: ' Get it on Chrome ',
      btn2: 'Get it on Firefox',
    };
  },
};
</script>

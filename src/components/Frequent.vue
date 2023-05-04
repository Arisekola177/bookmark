<template>
  <div class="py-5">
    <div class="container m-auto text-center">
      <h1 class="dark-blue text-xl font-semibold mb-5 mt-14 md:text-3xl">
        Frequently Asked Questions
      </h1>
      <p class="grayish-blue text-sm p-2 mb-5 md:text-lg">
        Here are some of our FAQs. If you have any other questions <br />
        you’d like answered please feel free to email us.
      </p>
    </div>
    <div class="w-full m-auto p-6 md:w-8/12 lg:w-4/12">
      <p class="border-b-2 mb-4"></p>
      <div class="flex justify-between items-center mb-5">
        <h2
          class="dark-blue text-lg font-semibold cursor-pointer md:text-xl hover:text-red-500"
        >
          What is Bookmark?
        </h2>
        <img
          class="cursor-pointer"
          :class="{ 'rotate-180': isRotated, 'filter hue-rotate-90': show1 }"
          @click="handleClick1"
          src="../assets/images/icon-arrow.svg"
          alt=""
        />
      </div>
      <div v-if="show1">
        <p class="grayish-blue p-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
          tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis
          quam ornare mattis.
        </p>
      </div>
      <p class="border-b-2 mb-4"></p>
      <div class="flex justify-between items-center mb-5">
        <h2
          class="dark-blue text-lg font-semibold cursor-pointer md:text-xl hover:text-red-500"
        >
          How can i request a new browser?
        </h2>
        <img
          class="cursor-pointer"
          :class="{ 'rotate-180': isRotated, 'filter hue-rotate-90': show2 }"
          @click="handleClick2"
          src="../assets/images/icon-arrow.svg"
          alt=""
        />
      </div>
      <div v-if="show2">
        <p class="grayish-blue p-6">
          Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
          ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros
          aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
          Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
          Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
        </p>
      </div>
      <p class="border-b-2 mb-4"></p>
      <div class="flex justify-between items-center mb-5">
        <h2
          class="dark-blue text-lg cursor-pointer font-semibold md:text-xl hover:text-red-500"
        >
          Is there a mobile app?
        </h2>
        <img
          class="cursor-pointer"
          :class="{ 'rotate-180': isRotated, 'filter hue-rotate-90': show3 }"
          @click="handleClick3"
          src="../assets/images/icon-arrow.svg"
          alt=""
        />
      </div>
      <div v-if="show3">
        <p class="grayish-blue p-6">
          Sed consectetur quam id neque fermentum accumsan. Praesent luctus
          vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula
          quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex
          et ultricies bibendum.
        </p>
      </div>
      <p class="border-b-2 mb-4"></p>
      <div class="flex justify-between items-center mb-5">
        <h2
          class="dark-blue text-lg cursor-pointer font-semibold md:text-xl hover:text-red-500"
        >
          What about other Chromium browsers?
        </h2>
        <img
          class="cursor-pointer"
          :class="{ 'rotate-180': isRotated, 'filter hue-rotate-90': show4 }"
          @click="handleClick4"
          src="../assets/images/icon-arrow.svg"
          alt=""
        />
      </div>
      <div v-if="show4">
        <p class="grayish-blue p-6">
          <!-- Answer 4 -->
          Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat
          mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque
          non ut velit.
        </p>
      </div>
      <p class="border-b-2 mb-4"></p>
    </div>
    <div class="container m-auto text-center">
      <button
        class="soft-blue text-white text-lg p-2 rounded-md mt-4 md:text-xl py-3 px-6"
      >
        More Info
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      isRotated: false,
    };
  },
  methods: {
    handleClick1() {
      this.show1 = !this.show1;
      this.isRotated = !this.isRotated;
    },
    handleClick2() {
      this.show2 = !this.show2;
      this.isRotated = !this.isRotated;
    },
    handleClick3() {
      this.show3 = !this.show3;
      this.isRotated = !this.isRotated;
    },
    handleClick4() {
      this.show4 = !this.show4;
      this.isRotated = !this.isRotated;
    },
  },
};
</script>

<template>
  <div class="relative mb-10">
    <div class="container m-auto text-center">
      <h2 class="dark-blue text-2xl font-bold mb-5 md:text-3xl">
        {{ feature }}
      </h2>
      <p
        class="grayish-blue text-normal mb-5 p-2 md:w-10/12 m-auto md:text-lg md:text-start"
      >
        {{ para }}
      </p>
    </div>

    <div
      class="container grayish-blue cursor-pointer font-semibold mx-auto flex flex-col md:flex-row text-center justify-evenly items-center"
    >
      <h2
        class="mb-5 hover:text-red-400"
        :class="{ 'border-b-4 border-red-400': activeTab === 'tab1' }"
        @click.prevent="activeTab = 'tab1'"
      >
        Simple Bookmarking
      </h2>
      <h2
        class="mb-5 hover:text-red-400"
        :class="{ 'border-b-4 border-red-400': activeTab === 'tab2' }"
        @click.prevent="activeTab = 'tab2'"
      >
        Speedy Searching
      </h2>
      <h2
        class="mb-5 hover:text-red-400"
        :class="{ 'border-b-4 border-red-400': activeTab === 'tab3' }"
        @click.prevent="activeTab = 'tab3'"
      >
        Easy Sharing
      </h2>
    </div>

    <div
      v-if="activeTab === 'tab1'"
      class="container mx-auto mt-24 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="w-full p-4 mb-10 md:w-7/12 z-10">
        <img
          class="mx-auto md:w-8/12"
          src="../assets/images/illustration-features-tab-1.svg"
          alt=""
        />
      </div>
      <div class="w-full text-center md:w-5/12 mx-auto md:text-start">
        <h1 class="text-2xl font-semibold dark-blue mb-5">
          Bookmark in one click
        </h1>
        <p class="grayish-blue text-normal mb-5">
          Organize your bookmarks however you like. Our simple drag-and-drop
          interface gives you complete control over how you manage your
          favourite sites.
        </p>
        <button class="soft-blue text-white font-semibold rounded-md py-3 px-6">
          More Info
        </button>
      </div>
      <p
        class="hidden md:block soft-blue w-1/3 h-1/3 absolute rounded-r-full overflow-hidden left-0 top-96 lg:w-2/4 lg:h-2/4"
      ></p>
    </div>

    <div
      v-if="activeTab === 'tab2'"
      class="container mx-auto mt-24 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="w-full p-4 mb-10 md:w-7/12 z-10">
        <img
          class="mx-auto md:w-7/12"
          src="../assets/images/illustration-features-tab-2.svg"
          alt=""
        />
      </div>

      <div class="w-full text-center md:w-5/12 mx-auto md:text-start">
        <h1 class="text-2xl font-semibold dark-blue mb-5">
          Intelligent search
        </h1>
        <p class="grayish-blue text-normal mb-5">
          Our powerful search feature will help you find saved sites in no time
          at all. No need to trawl through all of your bookmarks.
        </p>
        <button class="soft-blue text-white font-semibold rounded-md py-3 px-6">
          More Info
        </button>
      </div>
      <p
        class="hidden md:block soft-blue w-1/3 h-1/3 absolute rounded-r-full overflow-hidden left-0 top-96 lg:w-2/4 lg:h-2/4"
      ></p>
    </div>

    <div
      v-if="activeTab === 'tab3'"
      class="container mx-auto mt-24 flex flex-col md:flex-row justify-between items-center"
    >
      <div class="w-full mb-10 md:w-7/12 z-10">
        <img
          class="mx-auto w-7/12"
          src="../assets/images/illustration-features-tab-3.svg"
          alt=""
        />
      </div>
      <div class="w-full text-center md:w-5/12 mx-auto md:text-start">
        <h1 class="text-2xl font-semibold dark-blue mb-5">
          Share your bookmarks
        </h1>
        <p class="grayish-blue text-normal mb-5">
          Easily share your bookmarks and collections with others. Create a
          shareable link that you can send at the click of a button.
        </p>
        <button class="soft-blue text-white font-semibold rounded-md py-3 px-6">
          More Info
        </button>
      </div>
      <p
        class="hidden md:block soft-blue w-1/3 h-1/3 absolute rounded-r-full overflow-hidden left-0 top-96 lg:w-2/4 lg:h-2/4"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feature: 'Features',
      para: ' Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
      activeTab: 'tab1',
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style></style>

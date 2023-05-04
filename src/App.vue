<template>
  <div>
    <Navbar />
    <Hero />
    <Feature />
    <Extention />
    <Frequent />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Feature from './components/Feature.vue';
import Extention from './components/Extention.vue';
import Frequent from './components/Frequent.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    Feature,
    Extention,
    Frequent,
    Contact,
    Footer,
  },
  data() {
    return {
      users: [
        {
          name: 'azeez',
          age: 20,
        },
        {
          name: 'osinachi',
          age: 19,
        },
      ],
    };
  },
};
</script>

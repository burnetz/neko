<template>
  <div id="app">
    <Neko
      v-for="i in num_cat"
      :key="i"
      :ref="'neko' + i"
      @mouseenter="
        () => {
          randomWalk(i);
        }
      "
    />
    <Nekojarashi
      @njmove="
        e => {
          NJx = e[0];
          NJy = e[1];
        }
      "
      @grab="njGrab"
    />
  </div>
</template>

<script>
import Neko from "./components/Neko.vue";
import Nekojarashi from "./components/Nekojarashi.vue";
const MAX_NUM_CAT = 10;

export default {
  name: "App",
  components: {
    Neko,
    Nekojarashi
  },
  data() {
    return {
      randtimer: [null],
      num_cat: 0,
      NJx: window.innerWidth - 10,
      NJy: window.innerHeight - 10,
      isGrabbing: false
    };
  },
  created() {
    this.num_cat = Math.floor(Math.random() * Math.floor(MAX_NUM_CAT)) + 1;
  },
  mounted() {
    for (var i = 1; i <= Object.keys(this.$refs).length; i++) {
      this.randtimer.push(null);
      this.$refs["neko" + i][0].x =
        Math.floor(Math.random() * (window.innerWidth - 100)) + 50;
      this.$refs["neko" + i][0].y =
        Math.floor(Math.random() * (window.innerHeight - 100)) + 50;
      this.randomWalk(i);
    }
  },
  methods: {
    randomWalk(i) {
      clearTimeout(this.randtimer[i]);
      // Do random walk
      const self = this;
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);
      this.$refs["neko" + i][0].walkToTarget(x, y, () => {
        // Set timer for next random walk
        var ms = Math.floor(Math.random() * 50) * 100;
        if (ms > 4000) {
          ms = 60 * 1000;
        }
        self.randtimer[i] = setTimeout(() => {
          self.randomWalk(i);
        }, ms);
      });
    },
    njGrab(isGrab) {
      this.isGrabbing = isGrab;
      for (var i = 1; i <= Object.keys(this.$refs).length; i++) {
        if (this.isGrabbing) {
          this.nekojarashiWalk(i, this.setNekojarashiWalk);
        } else {
          this.randomWalk(i);
        }
      }
    },
    nekojarashiWalk(i) {
      clearTimeout(this.randtimer[i]);
      if (!this.isGrabbing) return;
      const self = this;
      // Move to nj
      this.$refs["neko" + i][0].walkToTarget(this.NJx, this.NJy, () => {
        clearTimeout(this.randtimer[i]);
        self.randtimer[i] = setTimeout(() => {
          self.randomWalk(i);
        }, 1000);
      });
      // Check terget again
      this.randtimer[i] = setTimeout(() => {
        self.nekojarashiWalk(i);
      }, 200);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body {
  overflow: hidden;
  width: 100%;
  height: 100%;
  margin: 0;
}
html {
  width: 100%;
  height: 100%;
}
</style>

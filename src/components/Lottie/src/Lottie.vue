<template>
  <div ref="animation" :style="{ width, height }"></div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import lottie from "lottie-web";

export default defineComponent({
  name: "Lottie",
  props: {
    width: {
      type: String,
      default: "100px",
    },
    height: {
      type: String,
      default: "100px",
    },
    src: {
      type: String,
      default: "https://assets10.lottiefiles.com/packages/lf20_dyiqnus5.json",
    },
    jsonData: {
      type: Object,
      default: () => null,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    let animation = ref(null);

    onMounted(() => {
      if (animation.value) {
        lottie.loadAnimation({
          container: animation.value,
          renderer: "svg",
          loop: props.loop,
          autoplay: props.autoplay,
          path: props.src,
          // animationData只能加载本地json，优先级高于path
          animationData: props.jsonData,
        });
      }
    });

    return {
      animation,
    };
  },
});
</script>

<style scoped lang="scss"></style>

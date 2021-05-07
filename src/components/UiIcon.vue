<template>
  <div
    v-if="name != null"
    class="icon"
    :style="[{ width: width }, { height: height }]"
  >
    <svg
      v-if="name === 'basket'"
      :width="width"
      :height="height"
      :fill="fill"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.666748 2.66659H2.00008L4.40008 7.72659L3.50008 9.35325C3.01341 10.2466 3.65341 11.3333 4.66675 11.3333H12.6667V9.99992H4.66675L5.40008 8.66659H10.3667C10.8667 8.66659 11.3067 8.39325 11.5334 7.97992L13.9201 3.65325C14.1667 3.21325 13.8467 2.66659 13.3401 2.66659H3.47341L2.84675 1.33325H0.666748V2.66659ZM4.66674 11.9999C3.93341 11.9999 3.34008 12.5999 3.34008 13.3333C3.34008 14.0666 3.93341 14.6666 4.66674 14.6666C5.40008 14.6666 6.00008 14.0666 6.00008 13.3333C6.00008 12.5999 5.40008 11.9999 4.66674 11.9999ZM10.0067 13.3333C10.0067 12.5999 10.6001 11.9999 11.3334 11.9999C12.0667 11.9999 12.6667 12.5999 12.6667 13.3333C12.6667 14.0666 12.0667 14.6666 11.3334 14.6666C10.6001 14.6666 10.0067 14.0666 10.0067 13.3333Z"
      />
    </svg>

    <svg
      v-else-if="name === 'plus'"
      :width="width"
      :height="height"
      :fill="fill"
      viewBox="0 0 12 12"
    >
      <path
        d="M11.8332 6.83317H6.83317V11.8332H5.1665V6.83317H0.166504V5.1665H5.1665V0.166504H6.83317V5.1665H11.8332V6.83317Z"
      />
    </svg>

    <svg
      v-else-if="name === 'minus'"
      :width="width"
      :height="height"
      :fill="fill"
      viewBox="0 0 12 2"
    >
      <path d="M11.8332 1.83317H0.166504V0.166504H11.8332V1.83317Z" />
    </svg>
  </div>
</template>

<script>
export default {
  name: "UiIcon",
  props: {
    name: {
      type: String,
      require: true,
    },
    width: {
      type: String,
      default: "16px",
    },
    height: {
      type: String,
      default: "16px",
    },
    fill: {
      type: String,
      default: "#fff",
    },
  },
};
</script>

<style scoped>
.icon {
  display: flex;
}
</style>

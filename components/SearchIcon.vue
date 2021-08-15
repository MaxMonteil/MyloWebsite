<template functional>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    viewBox="0 0 16 16"
    :aria-labelledby="props.labelledby"
    role="presentation"
    class="inline-block align-top fill-current"
    :class="[data.class, data.staticClass]"
  >
    <title lang="en">Search Icon</title>
    <path
      d="M10.025 11.012a4.513 4.513 0 01-2.688.888 4.587 4.587 0 112.688-.888v0zm1.175-.062l-.287-.287.25-.313a4.888 4.888 0 10-3.825 1.863 4.838 4.838 0 003.025-1.05l.312-.25.287.287 2.476 2.475.25-.25L11.2 10.95z"
      stroke-miterlimit="10"
    />
  </svg>
</template>

<script>
export default {
  name: 'SearchIcon',
  props: {
    labelledby: {
      type: String,
      required: true,
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
}
</script>

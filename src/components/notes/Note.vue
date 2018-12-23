<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <p>{{ note.content }}</p>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.note {
  border: 1px solid $lightGrey;
  border-radius: 8px;
  padding: 20px;

  h1 {
    font-size: 18px;
  }
}
</style>

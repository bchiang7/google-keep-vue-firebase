<template>
  <div
    class="note"
    @click="selectNote(note)"
  >
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
  methods: {
    selectNote(note) {
      console.log(note);
      // console.log(key, title, content);

    },
  },
};
</script>

<style lang="scss">
.note {
  border: 1px solid $light-grey;
  border-radius: 8px;
  padding: 20px;
  cursor: default;
  transition: $transition;

  &:hover,
  &:focus {
    box-shadow: $shadow;
  }

  h1 {
    font-size: 18px;
  }
}
</style>

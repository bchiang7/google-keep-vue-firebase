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
import { EventBus } from '@/EventBus.js';

export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectNote(note) {
      EventBus.$emit('note-selected', note);
    },
  },
};
</script>

<style lang="scss">
.note {
  background-color: $white;
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

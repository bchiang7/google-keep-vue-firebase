<template>
  <div @click="selectNote(note)" class="note">
    <EditIcon />

    <div v-if="note.title || note.content">
      <h1 v-if="note.title">
        {{ note.title }}
      </h1>
      <p v-if="note.content">
        <pre>{{ note.content }}</pre>
      </p>
    </div>

    <div v-else class="empty">
      Empty Note
    </div>
  </div>
</template>

<script>
import { EventBus } from '@/EventBus.js';
import EditIcon from '@/components/icons/EditIcon';

export default {
  components: {
    EditIcon,
  },
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
  position: relative;
  padding: 20px;
  background-color: $white;
  border: 1px solid $light-grey;
  border-radius: 8px;
  cursor: default;
  transition: $transition;
  overflow-wrap: break-word;

  &:hover,
  &:focus {
    box-shadow: $shadow;
    svg {
      opacity: 0.75;
    }
  }

  h1 {
    font-size: 18px;
  }

  pre {
    font-family: $ff-roboto;
    white-space: pre-wrap;
  }

  svg {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 25px;
    height: 25px;
    opacity: 0;
    transition: $transition;
    cursor: pointer;
  }

  .empty {
    color: $grey;
    font-size: $fz-xl;
    font-family: $ff-product;
  }
}
</style>

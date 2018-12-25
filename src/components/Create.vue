<template>
  <div class="create-form">
    <div v-if="titleFieldVisible" class="backdrop" @click="hideTitleField" />
    <form class="create-note" @submit.prevent="createNote()">
      <input
        v-if="titleFieldVisible"
        v-model="title"
        name="title"
        placeholder="Title"
        @focus="showTitleField"
      >
      <textarea
        v-model="content"
        name="content"
        placeholder="Take a note..."
        @focus="showTitleField"
      />
      <button type="submit">
        <span>&#43;</span>
      </button>
    </form>
  </div>
</template>

<script>
import { db } from '@/firebase';

export default {
  data() {
    return {
      title: '',
      content: '',
      titleFieldVisible: false,
    };
  },
  methods: {
    createNote() {
      if (this.title || this.content) {
        db.createNote(this.title.trim(), this.content.trim()).then(
          () => {
            this.title = '';
            this.content = '';
            this.titleFieldVisible = false;
          },
          e => console.error(e),
        );
      }
    },
    showTitleField() {
      this.titleFieldVisible = true;
    },
    hideTitleField() {
      this.titleFieldVisible = false;
    },
  },
};
</script>

<style lang="scss">
.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.create-note {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: $white;
  border-radius: $radius;
  box-shadow: $shadow;
  z-index: 10;

  input,
  textarea {
    width: 100%;
    display: block;
  }
  input {
    font-family: $ff-product;
    font-weight: 700;
    font-size: $fz-md;
    margin-bottom: 10px;
  }
  textarea {
    resize: none;
  }
  button {
    @include flex-center;
    position: absolute;
    right: 18px;
    bottom: -18px;
    background: $vue-green;
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    box-shadow: $shadow;
    font-size: $fz-xl;
    line-height: 1;
    text-align: center;
    span {
      margin-top: -3px;
    }
  }
}
</style>

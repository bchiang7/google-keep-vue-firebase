<template>
  <form
    class="create-note"
    @submit.prevent="createNote()"
  >
    <input
      v-model="title"
      name="title"
      placeholder="Title"
    >
    <textarea
      v-model="content"
      name="content"
      placeholder="Take a note..."
      rows="3"
    />

    <button type="submit">
      <span>+</span>
    </button>
  </form>
</template>

<script>
import { db } from '@/firebase';

export default {
  data() {
    return {
      title: '',
      content: '',
    };
  },
  methods: {
    createNote() {
      if (this.title || this.content) {
        db.createNote(this.title.trim(), this.content.trim()).then(
          () => {
            this.title = '';
            this.content = '';
          },
          e => console.error(e),
        );
      }
    },
  },
};
</script>

<style lang="scss">
.create-note {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: $shadow;
  input,
  textarea {
    display: block;
  }
  input {
    font-family: $ff-product;
    font-weight: 700;
    font-size: $fz-md;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    font-size: $fz-lg;
    line-height: 1;
    text-align: center;
  }
}
</style>

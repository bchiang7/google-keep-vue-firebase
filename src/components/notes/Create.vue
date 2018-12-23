<template>
  <form class="create-note" @submit.prevent="createNote()">
    <input v-model="title" name="title" placeholder="Title">
    <textarea v-model="content" name="content" placeholder="Take a note..." rows="3" />
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
      // console.log(this.title, this.content);
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

<style>
.create-note {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
}
form.create-note input,
form.create-note textarea {
  width: 100%;
  border: none;
  padding: 4px;
  outline: none;
  font-size: 1.2em;
}
form.create-note button {
  position: absolute;
  right: 18px;
  bottom: -18px;
  background: #41b883;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  outline: none;
}
</style>

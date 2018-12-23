<template>
  <div class="notes">
    <Note v-for="(note, index) in notes" :key="index" :note="note" />
  </div>
</template>

<script>
import { db } from '@/firebase';
import Note from './Note';

export default {
  components: {
    Note,
  },
  data() {
    return {
      notes: [],
    };
  },
  created() {},
  mounted() {
    db.getNotes(snapshot => {
      const notes = snapshot.val();
      this.notes = Object.keys(notes)
        .map(i => notes[i])
        .reverse();
    });
  },
};
</script>

<style>
.notes {
  max-width: 1000px;
  margin: 100px auto;
  position: relative;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

<template>
  <div class="notes">
    <Note
      v-for="(note, index) in notes"
      :key="index"
      :note="note"
    />
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
  mounted() {
    db.getNotes(snapshot => {
      const notes = snapshot.val();
      // TODO: need note ID!
      this.notes = Object.keys(notes)
        .map(i => notes[i])
        .reverse();
    });
  },
};
</script>

<style lang="scss">
.notes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  position: relative;
  margin: 100px auto;
}
</style>

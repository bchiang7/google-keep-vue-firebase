<template>
  <div id="app">
    <CreateNoteForm />
    <Notes />
    <UpdateModal :note.sync="selectedNote" />
  </div>
</template>

<script>
import Notes from './components/notes/Index';
import CreateNoteForm from './components/notes/Create';
import UpdateModal from './components/notes/UpdateModal';

export default {
  name: 'App',
  components: {
    Notes,
    CreateNoteForm,
    UpdateModal,
  },
  data() {
    return {
      selectedNote: null,
    };
  },
  events: {
    'note.selected': note => {
      this.selectedNote = note;
    },
  },
};
</script>

<style src="./styles/main.scss" lang="scss"></style>

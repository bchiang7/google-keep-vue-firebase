<template>
  <div id="app">
    <CreateNoteForm />
    <Notes />
  </div>
</template>

<script>
import Notes from './components/notes/Index';
import CreateNoteForm from './components/notes/Create';

export default {
  name: 'App',
  components: {
    Notes,
    CreateNoteForm,
  },
};
</script>

<style src="./styles/main.scss" lang="scss"></style>

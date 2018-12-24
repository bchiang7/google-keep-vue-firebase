<template>
  <div
    id="app"
  >
    <div class="logos">
      <span class="logo keep">
        <img
          src="./assets/images/keep-logo.png"
          alt="Google Keep"
        >
      </span>
      <span class="plus">
        &#43;
      </span>
      <span class="logo vue">
        <img
          src="./assets/images/vue-logo.png"
          alt="Vue"
        >
      </span>
    </div>

    <CreateNoteForm />

    <Notes />

    <UpdateModal :note.sync="selectedNote" />
  </div>
</template>

<script>
import Notes from '@/components/Notes';
import CreateNoteForm from '@/components/Create';
import UpdateModal from '@/components/UpdateModal';
import { EventBus } from '@/EventBus.js';

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
  created() {
    EventBus.$on('note-selected', note => {
      this.selectedNote = note;
      console.log(note);
    });
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';

.logos {
  @include flex-between;
  max-width: 200px;
  margin: 0 auto 50px;

  span {
    color: $vue-navy;
    font-family: $ff-product;
    font-weight: 700;
    font-size: $fz-xl;
  }

  .logo {
    display: inline-block;
    max-width: 40%;
    &.vue {
      padding: 7px;
    }
  }
}
</style>

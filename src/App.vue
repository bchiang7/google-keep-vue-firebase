<template>
  <div id="app">
    <div class="logos">
      <span class="logo keep">
        <img src="./assets/images/keep-logo.png" alt="Google Keep">
      </span>
      <span class="plus">
        +
      </span>
      <span class="logo vue">
        <img src="./assets/images/vue-logo.png" alt="Vue">
      </span>
      <span class="plus">
        +
      </span>
      <span class="logo firebase">
        <img src="./assets/images/firebase-logo.png" alt="Firebase">
      </span>
    </div>

    <CreateNoteForm />

    <Notes />

    <UpdateModal v-if="showModal" :note="selectedNote" />
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
      showModal: false,
    };
  },
  created() {
    EventBus.$on('note-selected', note => {
      this.selectedNote = note;
      this.showModal = true;
      document.body.classList.add('freeze');
    });

    EventBus.$on('modal-dismissed', () => {
      this.selectedNote = null;
      this.showModal = false;
      document.body.classList.remove('freeze');
    });
  },
};
</script>

<style lang="scss">
@import './styles/main.scss';

.logos {
  @include flex-center;
  margin: 0 auto 30px;

  & > * {
    vertical-align: middle;
  }

  span {
    color: $vue-navy;
    font-family: $ff-product;
    font-weight: 700;
    font-size: $fz-lg;
  }

  .logo {
    width: 50px;

    &.vue {
      width: 40px;
    }
    &.firebase {
      width: 30px;
      margin: 0 8px;
    }
  }

  .plus {
    margin: 0 10px;
    font-weight: 400;
  }
}
</style>

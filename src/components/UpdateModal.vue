<template>
  <Transition name="modal">
    <div v-if="note" class="modal-backdrop" @click="dismissModal">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalContent"
      >
        <form class="edit-form" @submit.prevent="update" @click.stop>
          <input
            id="modalTitle"
            v-model="mutableNote.title"
            name="title"
            placeholder="Title"
          >

          <textarea
            id="modalContent"
            v-model="mutableNote.content"
            name="content"
            placeholder="Take a note..."
            rows="8"
          />

          <footer class="modal-footer">
            <button type="button" class="delete-button" @click="remove">
              <DeleteIcon />
            </button>
            <button type="submit" class="submit-button">
              <span>Done</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
import { db } from '@/firebase';
import { EventBus } from '@/EventBus.js';
import DeleteIcon from '@/components/icons/DeleteIcon';

export default {
  components: {
    DeleteIcon,
  },
  props: {
    note: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      mutableNote: this.note,
    };
  },
  methods: {
    dismissModal() {
      EventBus.$emit('modal-dismissed');
    },
    update() {
      const id = this.mutableNote.id;
      const title = this.mutableNote.title;
      const content = this.mutableNote.content;

      db.updateNote(
        id,
        title,
        content,
        () => {
          this.dismissModal();
        },
        err => {
          console.error(err);
        },
      );
    },
    remove() {
      const id = this.mutableNote.id;

      if (window.confirm('Do you really want to delete this note?')) {
        db.deleteNote(id).then(
          () => {
            this.dismissModal();
          },
          err => {
            console.error(err);
          },
        );
      }
    },
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(229, 229, 229, 0.75);
  z-index: 100;
}
.edit-form {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 25vh auto 0;
  background: $white;
  padding: 20px 20px 8px;
  border-radius: $radius;
  box-shadow: $shadow;
  transition: $transition;

  input,
  textarea {
    width: 100%;
    display: block;
  }
  input {
    font-family: $ff-product;
    font-weight: 700;
    font-size: $fz-lg;
    margin-bottom: 20px;
  }
  textarea {
    resize: none;
    line-height: 1.5;
  }
  .modal-footer {
    @include flex-between;

    .submit-button {
      height: 36px;
      padding: 8px 24px;
      border-radius: 4px;
      font-family: $ff-product;
      font-weight: 700;
      font-size: $fz-sm;

      &:hover,
      &:focus {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
    .delete-button {
      width: 35px;
      padding: 8px;
      margin-left: -8px;
      opacity: 0.5;

      &:hover,
      &:focus {
        opacity: 1;
      }
    }
  }
}

.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter,
.modal-leave-to {
  form {
    transform: scale(0.75);
  }
}
.modal-enter-active,
.modal-leave-active {
  transition: $transition;
}
</style>

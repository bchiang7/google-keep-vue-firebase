<template>
  <Transition name="modal">
    <div
      v-if="note"
      class="modal-backdrop"
      @click="dismissModal"
    >
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <form
          class="edit-form"
          @submit.prevent="update"
          @click.stop
        >
          <input
            id="modalTitle"
            v-model="note.title"
            name="title"
            placeholder="Title"
          >
          <textarea
            id="modalDescription"
            v-model="note.content"
            name="content"
            placeholder="Text goes here..."
            rows="8"
          />

          <footer class="modal-footer">
            <button
              type="button"
              class="delete-button"
              @click="remove"
            >
              <img
                src="https://img.icons8.com/metro/1600/delete.png"
                alt="Trash Icon"
              >
            </button>

            <button
              type="submit"
              class="submit-button"
            >
              <span>Close</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
import { db } from '@/firebase';

export default {
  props: {
    note: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    dismissModal() {
      this.note = null;
    },
    update() {
      db.updateNote(this.note, err => {
        if (err) {
          throw err;
        }

        this.dismissModal();
      });
    },
    remove() {
      db.deleteNote(this.note, err => {
        if (err) {
          throw err;
        }

        this.dismissModal();
      });
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
  padding: 20px;
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
    margin-bottom: 10px;
  }
  textarea {
    resize: none;
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
      opacity: 0.5;

      &:hover,
      &:focus {
        background-color: rgba(0,0,0,0.08);
        opacity: 1;
      }
    }
    .delete-button {
      width: 35px;
      padding: 8px;
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

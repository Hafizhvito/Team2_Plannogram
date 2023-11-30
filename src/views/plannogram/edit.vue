<template>
  <div>
    <Menu />
    <div class="container">
      <div class="row">
        <div class="mr40 mt20">
          <router-link to="/list-plannogram">
            <img src="../../assets/icons/back.svg" />
          </router-link>
        </div>
        <div>
          <h1 class="m0">Update Plannogram</h1>
          <p class="mt5 mb20 tc-green">Increase the visibility of promotional products in our store highlights</p>
        </div>
      </div>
      <hr class="uline-grey" />
      <div class="mt50 row">
        <div class="w20">
          <label class="form-label">Background Image</label>
        </div>
        <div class="w80">
          <!-- Add an input type=file hidden behind the visible image -->
          <label for="imageUpload" class="image-upload">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              @change="handleImageChange"
              style="display: none;"
            />
            <img
              v-if="imageUrl"
              :src="imageUrl"
              alt="Voucher Image"
              @click="openFileExplorer"
              class="clickable-image"
            />
            <img
              v-else
              src="../../assets/icons/add.png"
              alt="Default Image"
              @click="openFileExplorer"
              class="clickable-image"
            />
          </label>
        </div>
      </div>
      <div class="mt50 row">
        <div class="w20">
          <label class="form-label">Plannogram Name</label>
        </div>
        <div class="w80">
          <input
            class="form-text"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div class="mt50 row">
        <div class="w20">
          <label class="form-label">Broadcast Schedule</label>
        </div>
        <div class="w80">
          <input
            class="form-text"
            type="text"
            placeholder=""
          />
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label">Valid From</label>
        </div>
        <div class="w80">
          <input class="form-text" type="date" />
        </div>
      </div>
      <div class="mt30 row">
        <div class="w20">
          <label class="form-label">Valid Until</label>
        </div>
        <div class="w80">
          <input class="form-text" type="date" />
        </div>
      </div>
      <div class="mt50 row">
        <div class="w20">
          <label class="form-label">Product List</label>
        </div>
        <div class="w80">
          <input
            class="form-text"
            type="text"
            placeholder="Listing"
          />
        </div>
      </div>
      <div class="flex mt30">
        <router-link to="/list-plannogram">
          <button class="bt-submit-green">Update Plannogram</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/menu.vue";

export default {
  name: "edit-plannogram",
  components: {
    Menu,
  },
  data() {
    return {
      imageUrl: null,
    };
  },
  methods: {
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    openFileExplorer() {
      // Trigger the file input click when the image is clicked
      document.getElementById("imageUpload").click();
    },
  },
};
</script>

<style scoped>
/* Additional styling for the file input */
.clickable-image {
  cursor: pointer;
  max-width: 100%; /* Enforce image size limit */
  outline: 1px dashed #ccc; /* Add outline */
  padding: 5px; /* Provide spacing */
}

/* Additional styling for the file input */
.image-upload {
  position: relative;
  overflow: hidden;
  display: inline-block;
}
</style>

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
          <p class="mt5 mb20 tc-green">Increase the visibility of promotial products in our store highlights</p>
        </div>
      </div>
      <hr class="uline-grey" />
      <div class="mt50 row">
        <div class="w20">
          <label class="form-label">Background Image</label>
        </div>
        <div class="w80">
          <input type="file" @change="handleImageChange" accept="image/*" />
          <img v-if="imageUrl" :src="imageUrl" alt="Voucher Image" />
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
          <button class="bt-submit-green">Add Plannogram</button>
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
  },
};
</script>

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
          <h1 class="m0">Detail Plannogram</h1>
          <p class="mt5 mb20 tc-green">Your plannogram details</p>
        </div>
      </div>
      <hr class="uline-grey" />
      <div class="mt50">
        <p>Name:</p>
        <h2>Fill the name here</h2>
      </div>
      <div class="mt10">
        <p class="detail-title-bold">Username:</p>
        <p>Fill username here</p>
      </div>
      <div class="mt10">
        <p class="detail-title-bold">Email:</p>
        <p>Fill the email here</p>
      </div>
      <div>
        <p class="detail-title-bold">Roles</p>
        <label class="label-green">Active</label>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/menu.vue";

export default {
  name: "detail-plannogram",
  components: {
    Menu,
  },
};
</script>

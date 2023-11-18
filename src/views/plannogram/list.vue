<template>
  <div>
    <Menu />
    <div class="container">
      <h1 class="m0">Plannogram</h1>
      <div class="row">
        <div class="col">
          <p class="mt5 mb20 tc-green">Manage your plannogram</p>
        </div>
        <div class="col flex">
          <router-link to="/add-plannogram">
            <button class="bt-green">+ Add Plannogram</button>
          </router-link>
        </div>
      </div>
      <div class="row bg-blue mt10 p10">
        <div class="col">
          <input
            class="search-field"
            type="text"
            id="deskripsi"
            placeholder="Tambah deskripsi..."
          />
        </div>
        <div class="col flex">
          <button class="bt-blue">Filter</button>
        </div>
      </div>
      <div class="mt50">
        <table>
          <thead>
            <tr>
              <th>PLANNOGRAM NAME</th>
              <th>BACKROUND IMAGE</th>
              <th>BROADCAST SCHEDULE</th>
              <th>VALID FROM</th>
              <th>VALID UNTIL</th>
              <th>PLANNOGRAM STATUS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item of list_user" :key="item.id">
              <td class="center">{{ item.plannogramname }}</td>
              <td class="center">
                <img
                  v-if="item.displayimages"
                  :src="item.displayimages"
                  alt="Plannogram Image"
                />
              </td>
              <td class="center">{{ item.broadcastschedule }}</td>
              <td class="center">
                <span class="label-green">{{ item.validFrom }}</span>
              </td>
              <td class="center">
                <span class="label-green">{{ item.validUntil }}</span>
              </td>
              <td class="center">
                <div v-if="item.status === 'Active'">
                  <label class="label-green">Active</label>
                </div>
                <div v-else-if="item.status === 'Inactive'">
                  <label class="label-blue">Inactive</label>
                </div>
                <div v-else-if="item.status === 'None'">
                  <label class="label-yellow">None</label>
                </div>
              </td>
              <td class="center">
                <div class="mt5"> 
                  <router-link :to="'/edit-plannogram/' + item.id">
                    <img src="../../assets/icons/edit.svg" />
                  </router-link>
                </div>
                <div class="mt5">
                  <router-link :to="'/detail-plannogram/' + item.id">
                    <img src="../../assets/icons/detail.svg" />
                  </router-link>
                </div>
                <div class="mt5">
                  <img src="../../assets/icons/delete.svg" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../../components/menu.vue";

export default {
  name: "list-plannogram",
  components: {
    Menu,
  },
  data() {
    return {
      list_user: [
        {
          id: "",
          plannogramname: "Flash Sale Minggu Ini",
          displayimages: "../../assets/icons/add.png", // Placeholder image URL
          broadcastschedule: "Senin",
          validFrom: "10-10-2020",
          validUntil: "10-11-2020",
          status: "Active",
        },
        {
          id: "",
          plannogramname: "Produk Terbaru",
          displayimages: "https://example.com/image2.jpg", // Placeholder image URL
          broadcastschedule: "Senin",
          validFrom: "11-11-2020",
          validUntil: "11-12-2020",
          status: "Active",
        },
      ],
    };
  },
};
</script>

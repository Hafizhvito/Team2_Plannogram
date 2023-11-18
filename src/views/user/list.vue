<template>
    <div>
        <Menu/>
        <div class="container">
            <h1 class="m0">User</h1>
            <div class="row">
                <div class="col">
                    <p class="mt5 mb20 tc-green">Manage user data here</p>
                </div>
                <div class="col flex">
                    <router-link to="/add-user">
                        <button class="bt-green">+ Add User</button>
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
                            <th>NAME</th>
                            <th>USERNAME</th>
                            <th>EMAIL</th>
                            <th>ROLES</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of list_user" :key="item.id">
                            <td class="center">{{ item.name }}</td>
                            <td class="center">{{ item.username }}</td>
                            <td class="center">{{ item.email }}</td>
                            <td class="center">
                                <div v-if="item.role === 1">
                                    <label class="label-green">Super Admin</label>
                                </div>
                                <div v-if="item.role === 2">
                                    <label class="label-blue">Sales</label>
                                </div>
                                <div v-if="item.role === 3">
                                    <label class="label-yellow">Marketing</label>
                                </div>
                            </td>
                            <td class="center">
                                <div class="mt5">
                                    <router-link to="/edit-user">
                                        <img src="../../assets/icons/edit.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <router-link to="/detail-user">
                                        <img src="../../assets/icons/detail.svg">
                                    </router-link>
                                </div>
                                <div class="mt5">
                                    <img src="../../assets/icons/delete.svg">
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
import Menu from "../../components/menu.vue"

export default {
	name: 'list-user',
	components: {
		Menu
	},
    data(){
        return {
            list_user: [
                {
                    id: "1",
                    name: "Vioni Wita Elya",
                    username: "viowelya",
                    email: "vioniwitaelya@gmail.com",
                    role: 1
                },
                {
                    id: "2",
                    name: "Haifah Nur Zakiah",
                    username: "nifaza",
                    email: "nifaza@gmail.com",
                    role: 2
                },
                {
                    id: "3",
                    name: "Nabila Hasyimie",
                    username: "bilamie",
                    email: "bilamie07@gmail.com",
                    role: 3
                },
                {
                    id: "4",
                    name: "Naufal Al-Ghifary",
                    username: "naufary",
                    email: "naufary@gmail.com",
                    role: 3
                },
                {
                    id: "5",
                    name: "Hafidz Zaki Makarim",
                    username: "fidzki",
                    email: "fidzki@gmail.com",
                    role: 3
                }
            ]
        }
    }
}
</script>
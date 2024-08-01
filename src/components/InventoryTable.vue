<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="displayedProducts"
    :sort-by="[{ key: 'prod_id', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">
          Inventory Table
        </v-toolbar-title>
        <v-text-field
          v-model="search"
          class="w-auto mr-4"
          density="compact"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
        <router-link to="/inventory/form">
          <v-btn class="mb-2 rounded-l" color="primary" dark prepend-icon="mdi-plus">
            Add Product / Medicine
          </v-btn>
        </router-link>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td class="text-center">{{ item.medicine_id }}</td>
        <td class="text-center">{{ item.medicine_name }}</td>
        <td class="text-center">{{ item.unit }}</td>
        <td class="text-center">{{ item.size }}</td>
        <td class="text-center">{{ item.quantity }}</td>
        <td class="text-center">{{ item.expiration_date }}</td>
        <td class="text-center">
          <v-icon class="me-2" size="small" style="color: #2F3F64" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon size="small" style="color: #2F3F64" @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    search: "",
    headers: [
      { title: "ID", align: "center", key: "prod_id" },
      { title: "Name", align: "center", key: "prod_name" },
      { title: "Unit", align: "center", key: "prod_unit" },
      { title: "Dosage", align: "center", key: "prod_size" },
      { title: "Quantity", align: "center", key: "prod_qty" },
      { title: "Expiration Date", align: "center", key: "prod_exp" },
      { title: "Date Acquisition", align: "center", key: "prod_acq" },
      { title: "Stock Status", align: "center", key: "prod_status" },
      { title: "Actions", align: "center", sortable: false },
    ],
    product: [],
    editedIndex: -1,
    editedItem: {
      medicine_id: '',
      medicine_name: '',
      unit: '',
      size: '',
      quantity: '',
      expiration_date: '',
    },
    defaultItem: {
      medicine_id: '',
      medicine_name: '',
      unit: '',
      size: '',
      quantity: '',
      expiration_date: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add Product" : "Edit Product Information";
    },
    displayedProducts() {
      const searchTerm = this.search.toLowerCase(); // Convert search input to lowercase for case-insensitive comparison
      return this.product.filter((product) =>
        Object.values(product).some(
          (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm)
        )
      );
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      axios.get('medicines')
        .then(response => {   
          console.log(response);
          // Handle successful response
          this.product = response.data;
          console.log(response.data);
        })
        .catch((error) => {
          // Handle error
          console.log(error);
        });
      this.product.forEach(product => {
        if (product.qty = 0) {
          // Remove the strand property
          product.qty = "Out of Stock";
        }
      });
    },

    editItem(item) {
      this.editedIndex = this.product.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // Navigate to the edit form with the item data
      this.$router.push({ name: 'InventoryEditForm', params: { id: item.medicine_id } });
    },

    deleteItem(item) {
      this.editedIndex = this.product.indexOf(item);
      this.medicine_id = item.medicine_id;
      this.editedItem = Object.assign({}, item);
      this.deleteItemConfirm();
    },

    deleteItemConfirm() {
      this.product.splice(this.editedIndex, 1);

      axios
        .delete("http://127.0.0.1:8000/api/medicines/" + this.medicine_id)
        .then((response) => {
          this.initialize();
        })
        .catch((error) => {
          // Handle error
          console.error("There was an error!", error);
        });

      this.resetEditedItem();
    },

    resetEditedItem() {
      this.editedItem = Object.assign({}, this.defaultItem);
      this.editedIndex = -1;
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put(
            "http://127.0.0.1:8000/api/medicines/" + this.editedItem.medicine_id,
            this.editedItem
          )
          .then((response) => {
            this.initialize();
          })
          .catch((error) => {
            // Handle error
            console.error("There was an error!", error);
          });

        Object.assign(this.product[this.editedIndex], this.editedItem);
      } else {
        axios.post('http://127.0.0.1:8000/api/medicines', this.editedItem)
        .then(response => {
          this.initialize();
        }).catch(error => {
          // Handle error
          console.error('There was an error!', error);
        });
      }
      this.resetEditedItem();
    },
  },
};
</script>

<style lang="scss">
.v-data-table {
  height: 100%;
  width: auto;
}
</style>

<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="displayedStudents"
    :sort-by="[{ key: 'studentId', order: 'asc' }]"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">Student Table</v-toolbar-title>
        
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

        <v-dialog v-model="dialog" max-width="1000px">
          <v-card>
            <v-card-title>
              <span class="text-h6 m-2" style="color: #2F3F64">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row dense>
                  <v-col cols="12" md="3" sm="6">
                    <v-text-field
                      v-model="editedItem.student_lrn"
                      label="LRN*"
                      required
                    ></v-text-field>
                  </v-col>
                  <!-- Other form fields go here -->
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>

    <template v-slot:item="{ item }">
      <v-hover v-slot:default="{ isHovering }">
        <tr
          @click="editItem(item)"
          :class="['student-row', { 'hover-effect': isHovering }]"
          style="cursor: pointer;"
        >
          <td>{{ item.first_name }} {{ item.middle_name }} {{ item.last_name }} {{ item.extension }}</td>
          <td>{{ item.student_id }}</td>
          <td>{{ item.student_lrn }}</td>
          <td>{{ item.grade_level }}</td>
            <td>
          <v-icon class="me-2" size="large" style="color: #2F3F64" @click="editItem(item)">mdi-information</v-icon>
           </td>
        </tr>
      </v-hover>
    </template>
  </v-data-table>
</template>

<script>

import axios from 'axios';

export default {
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      { title: 'Name', align: 'start', key: 'full_name' },
      { title: 'Student ID', key: 'student_id' },
      { title: 'LRN', key: 'student_lrn' },
      { title: 'Grade Level', key: 'grade_level' },
      { title: 'Actions', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      student_id: '',
      student_lrn: '',
      grade_level: '',
      strand: '',
      email: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      extension: '',
      sex_at_birth: '',
      birth_date: '',
      birth_place: '',
      civil_status: '',
      citizenship: '',
      religion: '',
      street: '',
      barangay: '',
      city: '',
      province: '',
      region: '',
      zip_code: '',
    },
    defaultItem: {
      student_id: '',
      student_lrn: '',
      grade_level: '',
      strand: '',
      email: '',
      first_name: '',
      middle_name: '',
      last_name: '',
      extension: '',
      sex_at_birth: '',
      birth_date: '',
      birth_place: '',
      civil_status: '',
      citizenship: '',
      religion: '',
      street: '',
      barangay: '',
      city: '',
      province: '',
      region: '',
      zip_code: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Student' : 'Edit Student Information';
    },
    displayedStudents() {
      const searchTerm = this.search.toLowerCase();
      return this.students.filter((student) => {
        const fullName = `${student.first_name} ${student.middle_name} ${student.last_name} ${student.extension}`.toLowerCase();
        return Object.values(student).some(
          (value) =>
            typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        ) || fullName.includes(searchTerm);
      });
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {

      axios.get('students')
        .then(response => {
          // Handle successful response
          let tmp = response.data;
          console.log(tmp);
          this.students = tmp.student;
        })
        .catch(error => {
          // Handle error
          console.error('There was an error!', error);
      });

    },
    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
      } else {
        this.students.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style scoped>
.hover-effect {
  background-color: #f5f5f5;
}
.student-row:hover {
  background-color: #f5f5f5;
}
</style>

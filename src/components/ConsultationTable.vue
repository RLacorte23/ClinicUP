<template>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="displayedLogs"
    :sort-by="[{ key: 'studentId', order: 'asc' }]">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">
          Consultation Records
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

        <router-link to="/consultationrecords/form">
          <v-btn class="mb-2 rounded-l" color="primary" dark prepend-icon="mdi-plus">
            Add Log
          </v-btn>
        </router-link>
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.student_id }}</td>
        <td>{{ item.complaint }}</td>
        <td>{{ item.medicine_id }}</td>
        <td>{{ item.blood_pressure }}</td>
        <td>{{ item.pulse_rate }}</td>
        <td>{{ item.oxygen_sat }}</td>
        <td>{{ item.temp }}</td>
        <td>{{ item.treatment }}</td>
        <td>{{ item.time_in }}</td>
        <td>{{ item.time_out }}</td>
        <td>
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
export default {
  data: () => ({
    search: '',
    headers: [
      { title: 'Student ID', align: 'start', key: 'student_id' },
      { title: 'Diagnosis' },
      { title: 'Medicine' },
      { title: 'Blood Pressure' },
      { title: 'Pulse Rate' },
      { title: 'Oxygen Sat' },
      { title: 'Temperature' },
      { title: 'Treatment' },
      { title: 'Time-In' },
      { title: 'Time-Out' },
      { title: 'Actions', sortable: false },
    ],
    logs: [
      {
        student_id: '202301',
        complaint: 'Headache',
        medicine_id: 'MED123',
        blood_pressure: '120/80',
        pulse_rate: '70',
        oxygen_sat: '98%',
        temp: '36.5°C',
        treatment: 'Paracetamol',
        time_in: '08:00 AM',
        time_out: '08:30 AM',
      },
      {
        student_id: '202302',
        complaint: 'Stomach ache',
        medicine_id: 'MED124',
        blood_pressure: '110/70',
        pulse_rate: '75',
        oxygen_sat: '97%',
        temp: '37.0°C',
        treatment: 'Antacid',
        time_in: '09:00 AM',
        time_out: '09:20 AM',
      },
      {
        student_id: '202303',
        complaint: 'Fever',
        medicine_id: 'MED125',
        blood_pressure: '130/85',
        pulse_rate: '80',
        oxygen_sat: '96%',
        temp: '38.0°C',
        treatment: 'Ibuprofen',
        time_in: '10:00 AM',
        time_out: '10:45 AM',
      },
    ],
    editedIndex: -1,
    editedItem: {
      complaint: '',
      medicine_id: '',
      student_id: '',
      treatment: '',
      blood_pressure: '',
      pulse_rate: '',
      oxygen_sat: '',
      temp: '',
      time_in: '',
      time_out: '',
      is_timeout: '',
    },
    defaultItem: {
      complaint: '',
      medicine_id: '',
      student_id: '',
      treatment: '',
      blood_pressure: '',
      pulse_rate: '',
      oxygen_sat: '',
      temp: '',
      time_in: '',
      time_out: '',
      is_timeout: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Add Log' : 'Edit Student Information';
    },
    displayedLogs() {
      const searchTerm = this.search.toLowerCase(); // Convert search input to lowercase for case-insensitive comparison
      return this.logs.filter(log =>
        Object.values(log).some(value =>
          typeof value === 'string' && value.toLowerCase().includes(searchTerm)
        )
      );
    },
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.logs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.logs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
      this.id = item.id;
    },

    deleteItemConfirm() {
      this.logs.splice(this.editedIndex, 1);
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
        Object.assign(this.logs[this.editedIndex], this.editedItem);
      } else {
        this.logs.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style lang="scss">
.v-data-table {
  height: 100%;
}
</style>

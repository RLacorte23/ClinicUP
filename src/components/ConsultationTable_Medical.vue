<template>
  <v-container>
    <v-card outlined>
      <v-card-title class="headline">Student Information</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="6">
            <!-- Left column content (if any) -->
            <v-container class="table-container">
              <v-simple-table class="outlined-table">
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td class="table-header">Student ID</td>
                      <td>{{ student.studentId }}</td>
                    </tr>
                    <tr>
                      <td class="table-header">Full Name</td>
                      <td>{{ student.fullName }}</td>
                    </tr>
                    <tr>
                      <td class="table-header">Birthdate</td>
                      <td>{{ student.birthdate }}</td>
                    </tr>
                    <tr>
                      <td class="table-header">Gender</td>
                      <td>{{ student.gender }}</td>
                    </tr>
                    <tr>
                      <td class="table-header">Grade</td>
                      <td>{{ student.grade }}</td>
                    </tr>
                    <tr>
                      <td class="table-header">Strand</td>
                      <td>{{ student.strand }}</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-col>
          <v-col cols="6">
            <v-container class="table-container">
              <v-data-table
                :headers="headers"
                :items="logs"
                :items-per-page="5">
                <template v-slot:top>
                  <v-toolbar flat>
                    <v-toolbar-title class="text-h6 font-weight-black" style="color: #2F3F64">
                      Consultation Records
                    </v-toolbar-title>
                    <router-link to="/consultationrecords/form">
                      <v-btn class="mb-2 rounded-l" color="primary" dark prepend-icon="mdi-plus">
                        Add Log
                      </v-btn>
                    </router-link>
                  </v-toolbar>
                </template>
                <template v-slot:item="{ item }">
                  <tr>
                    <td>{{ item.date }}</td>
                    <td>
                      <router-link :to="`/consultationrecords/${item.id}`">
                        <v-btn small color="primary">Details</v-btn>
                      </router-link>
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-container>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      student: {
        studentId: '202301',
        fullName: 'John Doe',
        birthdate: '2005-01-15',
        gender: 'Male',
        grade: '11',
        strand: 'STEM',
      },
      headers: [
        { title: 'Date of Consultation', align: 'start', key: 'date' },
        { title: 'Action', sortable: false },
      ],
      logs: [
        { id: 1, date: '2024-07-01' },
        { id: 2, date: '2024-07-02' },
        { id: 3, date: '2024-07-03' },
      ],
    };
  },
};
</script>

<style scoped>
.v-container {
  padding: 20px;
}

.v-card {
  border: 2px solid #2F3F64;
  border-radius: 10px;
}

.v-card-title {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}

.table-container {
  padding: 20px;
}

.outlined-table {
  width: 100%;
  border-collapse: collapse;
}

.outlined-table td {
  padding: 10px;
  border: 1px solid #2F3F64;
  text-align: left;
}

.table-header {
  font-weight: bold;
}
</style>

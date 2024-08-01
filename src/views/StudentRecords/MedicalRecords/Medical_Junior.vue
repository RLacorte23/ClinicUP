<template>
  <v-container>
    <main>
      <div class="top-container">
        <h1 class="bg-title">Medical Information</h1>
        <div class="studentProfile">
          <span class="material-icons">personal_injury</span>
          <span class="text">Medical Information</span>
        </div>
      </div>
      <hr>
      <v-card outlined>
        <v-card-title class="headline">Student Information</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="3"> <!-- Left column: 25% -->
              <v-img
                src="/src/assets/SNA Logo with BG.png"
                alt="Profile Picture"
                aspect-ratio="1"
                class="profile-picture"
                contain
              />
            </v-col>
            <v-col cols="9"> <!-- Right column: 75% -->
              <v-container class="table-container">
                <v-simple-table class="outlined-table">
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td class="table-header">Student ID</td>
                        <td class="table-body">{{ student.studentId }}</td>
                      </tr>
                      <tr>
                        <td class="table-header">LRN</td>
                        <td class="table-body">{{ student.lrn }}</td>
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
                        <td class="table-header">Grade Level</td>
                        <td>{{ student.grade }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-container>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- New Container Below -->
      <v-row>
        <v-col cols="6"> <!-- Left column: 50% -->
          <v-card class="card" outlined>
            <v-card-title class="text-left">Medical Status</v-card-title>
            <v-container class="table-container">
              <v-simple-table class="outlined-table">
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td class="table-header">Medical Examinations</td>
                      <td class="table-header">Status</td>
                      <td class="table-header">Action</td>
                    </tr>
                    <tr>
                      <td class="table-header">Physical Examination</td>
                      <td class="table-body">Done</td>
                      <td class="table-body">
                        <router-link to="/junior-records/medical/physical">
                          <v-btn small color="primary">Details</v-btn>
                        </router-link>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-header">Dental <br> Examination</td>
                      <td class="table-body">N/A</td>
                      <td class="table-body">
                        <router-link to="/junior-records/medical/dental">
                          <v-btn small color="primary">Details</v-btn>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="6"> <!-- Right column: 50% -->
          <v-card class="card scrollable-card" outlined>
            <v-card-title class="text-left">Consultation History</v-card-title>
            <v-container class="table-container scrollable-table-container">
              <v-simple-table class="outlined-table">
                <template v-slot:default>
                  <tbody>
                    <tr>
                      <td class="table-header">Date of Consultation</td>
                      <td class="table-header">Action</td>
                    </tr>
                    <tr v-for="(consultation, index) in consultations" :key="index">
                      <td class="table-body">{{ consultation.date }}</td>
                      <td class="table-body">
                        <router-link to="/junior-records/medical/consultation/edit">
                        <v-btn small color="primary">Details</v-btn>
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </main>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      student: {
        studentId: '202301',
        lrn: '123456789',
        fullName: 'John Doe',
        birthdate: '2005-01-15',
        gender: 'Male',
        grade: '9',
      },
      consultations: [
        { date: '2024-01-10' },
        { date: '2024-02-15' },
        { date: '2024-01-10' },
        { date: '2024-02-15' },
        { date: '2024-01-10' },
        { date: '2024-02-15' },
      ],
    };
  },
};
</script>

<style scoped>
.top-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem;
}

.bg-title {
  z-index: -1;
  position: absolute;
  opacity: 10%;
  font-size: 100px;
  font-family: Impact, fantasy;
}

.text {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 0.5rem;
}

.material-icons {
  color: var(--dark);
  font-size: 2.5rem;
}

.v-container {
  padding: 20px;
}

.v-card {
  border-style: solid;
  border-color: #2F3F64;
  border-width: 1px 1px 2px 4px;
  border-radius: 4px;
}

.v-card-title {
  background-color: #2F3F64;
  color: white;
  font-size: 25px;
}

.table-container {
  padding: 20px;
  width: 100%; /* Ensure the container takes full width */
}

.outlined-table {
  width: 100%; /* Table will occupy the full width of the container */
  border-collapse: collapse;
}

.outlined-table td {
  padding: 10px;
  border: 1px solid #2F3F64;
  text-align: center; /* Center the text */
  width: 10%; /* Adjust the width of each cell if necessary */
}

.table-header {
  font-weight: bold;
  text-align: center; /* Center the header text */
}

.profile-picture {
  margin-top: 30px;
  border-radius: 50%; /* Make the image circular */
  margin-bottom: 15px; /* Space between the image and name */
  padding: 10px; /* Add padding around the image */
  background-color: #f0f0f0; /* Optional: background color for the padding */
}

.card {
  margin-top: 20px; /* Add space above the empty cards */
}

.scrollable-card {
  height: 300px; /* Set a fixed height for the card */
}

.scrollable-table-container {
  overflow: auto;
  height: calc(100% - 50px); /* Adjust the height to account for card title */
}
</style>

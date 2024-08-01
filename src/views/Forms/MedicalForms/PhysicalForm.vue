<template>
  <main>
    <div class="top-container">
      <h1 class="bg-title">Physical Form</h1>
      <div class="studentProfile">
        <span class="material-icons">personal_injury</span>
        <span class="text">Physical Examination Form</span>
      </div>
    </div>
    <hr>
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-column">
            <div class="form-group">
              <label for="studentId">Student ID</label>
              <input type="text" v-model="studentId" id="studentId" placeholder="*Ex. 202412345" required @input="validateStudentId" maxlength="9">
            </div>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <div class="form-group">
              <label for="bloodPressure">Blood Pressure (BP)</label>
              <input type="text" v-model="bloodPressure" id="bloodPressure" placeholder="*Insert Blood Pressure" required>
            </div>
            <div class="form-group">
              <label for="visionLeft">Vision (Left)</label>
              <input type="text" v-model="visionLeft" id="visionLeft" placeholder="*Insert Left Vision" required>
            </div>
            <div class="form-group">
              <label for="height">Height (Cm)</label>
              <input type="text" v-model="height" id="height" placeholder="*Insert Height in Centimeters" required>
            </div>
            <div class="form-group">
              <label for="cl">C\L</label>
              <input type="text" v-model="cl" id="cl" placeholder="*Insert C\L" required>
            </div>
            <div class="form-group">
              <label for="extremities">Extremities</label>
              <input type="text" v-model="extremities" id="extremities" placeholder="*Insert Finding\s" required>
            </div>
          </div>
          <div class="form-column">
            <div class="form-group">
              <label for="contactNumber">Date</label>
              <input type="date" v-model="date" id="date" required>
            </div>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <div class="form-group">
              <label for="pulseRate">Pulse Rate (PR)</label>
              <input type="text" v-model="pulseRate" id="pulseRate" placeholder="*Insert Pulse Rate" required>
            </div>
            <div class="form-group">
              <label for="visionRight">Vision (Right)</label>
              <input type="text" v-model="visionRight" id="visionRight" placeholder="*Insert Right Vision" required>
            </div>
            <div class="form-group">
              <label for="weight">Weight (Kg)</label>
              <input type="text" v-model="weight" id="weight" placeholder="*Insert Weight in Kilograms" required>
            </div>
            <div class="form-group">
              <label for="abdomen">Abdomen</label>
              <input type="text" v-model="abdomen" id="abdomen" placeholder="*Insert Finding\s" required>
            </div>
            <div class="form-group">
              <label for="skin">Skin</label>
              <input type="text" v-model="skin" id="skin" placeholder="*Insert Finding\s" required>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full-width">
            <label for="cvs">CVS</label>
            <input type="text" v-model="cvs" id="cvs" placeholder="*Insert Finding\s" required>
          </div>
          <div class="form-group full-width">
            <label for="personalFamilyHistory">Personal and Family Medical History</label>
            <textarea v-model="personalFamilyHistory" id="personalFamilyHistory" rows="3" placeholder="*Ex. Diabetes, High Blood Pressure, Etc." required></textarea>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full-width">
            <label for="remarks">Remarks</label>
            <textarea v-model="remarks" id="remarks" rows="3" placeholder="*Insert Major Medical Finding\s" required></textarea>
          </div>
        </div>
        <hr>
        <div class="form-row">
          <div class="form-group half-width">
            <v-btn type="submit" color="primary">Submit</v-btn>
          </div>
          <div class="form-group half-width">
            <v-btn class="remove" type="button" @click="clearForm" color="red">Clear</v-btn>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MedicalForm',
  setup() {
    // Define reactive variables using ref()
    const studentId = ref('');
    const bloodPressure = ref('');
    const pulseRate = ref('');
    const visionLeft = ref('');
    const visionRight = ref('');
    const skin = ref('');
    const cvs = ref('');
    const height = ref('');
    const weight = ref('');
    const cl = ref('');
    const abdomen = ref('');
    const extremities = ref('');
    const personalFamilyHistory = ref('');
    const remarks = ref('');

    // Method to submit form data
    const submitForm = () => {
      alert(`
        Student ID: ${studentId.value}
        Blood Pressure: ${bloodPressure.value}
        Pulse Rate: ${pulseRate.value}
        Vision (Left): ${visionLeft.value}
        Vision (Right): ${visionRight.value}
        Skin: ${skin.value}
        CVS: ${cvs.value}
        Height: ${height.value}
        Weight: ${weight.value}
        C\\L: ${cl.value}
        Abdomen: ${abdomen.value}
        Extremities: ${extremities.value}
        Personal and Family Medical History: ${personalFamilyHistory.value}
        Remarks: ${remarks.value}
      `);
    };

    // Method to validate Student ID input
    const validateStudentId = (event) => {
      event.target.value = event.target.value.replace(/\D/g, ''); // Allow only digits
      studentId.value = event.target.value;
    };

    // Method to clear all form fields
    const clearForm = () => {
      studentId.value = '';
      bloodPressure.value = '';
      pulseRate.value = '';
      visionLeft.value = '';
      visionRight.value = '';
      skin.value = '';
      cvs.value = '';
      height.value = '';
      weight.value = '';
      cl.value = '';
      abdomen.value = '';
      extremities.value = '';
      personalFamilyHistory.value = '';
      remarks.value = '';
    };

    // Return reactive variables and methods to be used in template
    return {
      studentId,
      bloodPressure,
      pulseRate,
      visionLeft,
      visionRight,
      skin,
      cvs,
      height,
      weight,
      cl,
      abdomen,
      extremities,
      personalFamilyHistory,
      remarks,
      submitForm,
      validateStudentId,
      clearForm,
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
  margin-top: 20px;
  font-size: 100px;
  font-family: Impact, fantasy;
}

hr {
  margin-top: 30px;
}

.studentProfile {
  display: flex;
  align-items: center;
}

.material-icons {
  color: var(--dark);
  font-size: 2.5rem;
  margin-top: 15px;
}

.text {
  color: var(--dark);
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 0.5rem;
  margin-top: 20px;
}

.form-container {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
}

.form-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.form-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

input,
textarea {
  padding: 0.5rem;
  border-style: solid;
  border-color: #2F3F64;
  border-width: 1px 1px 2px 4px;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #435888;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
}

.full-width {
  width: 100%;
}

.half-width {
  width: 49%;
}


button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #2F3F64;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.remove {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: rgb(200, 52, 52);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.remove:hover {
  background-color: rgb(195, 75, 75);
}

button:hover {
  background-color: #4562a2;
}
</style>

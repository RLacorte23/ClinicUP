<template>
    <main>
      <div class="top-container">
        <h1 class="bg-title">Consultation Form</h1>
        <div class="studentProfile">
          <span class="material-icons">personal_injury</span>
          <span class="text">Consultation Form</span>
        </div>
      </div>
      <hr>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-column">
              <div class="form-group">
                <label for="Time-In">Time-In</label>
                <input type="text" v-model="timeIn" id="timeIn"  required>
              </div>
              <div class="form-group">
                <label for="studentId">Student ID</label>
                <input type="text" v-model="studentId" id="studentId" required @input="validateStudentId" maxlength="9">
              </div>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <div class="form-group">
                <label for="bloodPressure">Blood Pressure (BP)</label>
                <input type="text" v-model="bloodPressure" id="bloodPressure" required>
              </div>
              <div class="form-group">
                <label for="pulseRate">Pulse Rate (PR)</label>
                <input type="text" v-model="pulseRate" id="pulseRate"  required>
              </div>
              <div class="form-group">
                <label for="oxygenSaturation">Oxygen Saturation</label>
                <input type="text" v-model="oxygenSaturation" id="oxygenSaturation" required>
              </div>
            </div>
            <div class="form-column">
              <div class="form-group">
                <label for="Time-In">Time-In</label>
                <input type="text" v-model="timeIn" id="timeIn"  required>
              </div>
              <div class="form-group">
                <label for="date">Date</label>
                <input type="date" v-model="date" id="date" required>
              </div>
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
              <div class="form-group">
                <label for="diagnosis">Diagnosis</label>
                <input type="text" v-model="diagnosis" id="diagnosis"  required>
              </div>
              <div class="form-group">
                <label for="medicine">Medicine</label>
                <input type="text" v-model="medicine" id="medicine" required>
              </div>
              <div class="form-group">
                <label for="temperature">Temperature</label>
                <input type="text" v-model="temperature" id="temperature" required>
              </div>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group full-width">
              <label for="treatment">Treatment</label>
              <input type="text" v-model="treatment" id="treatment" required>
            </div>
          </div>
          <hr>
          <div class="form-row">
            <div class="form-group half-width">
              <v-btn type="submit" color="green">Update</v-btn>
            </div>
            <div class="form-group half-width"> 
                <v-btn class="remove" type="button" color="red">Cancel</v-btn>
            </div>
          </div>
        </form>
      </div>
    </main>
  </template>  
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'ConsultationForm',
    setup() {
      const studentId = ref('');
      const date = ref('');
      const diagnosis = ref('');
      const medicine = ref('');
      const bloodPressure = ref('');
      const pulseRate = ref('');
      const oxygenSaturation = ref('');
      const temperature = ref('');
      const treatment = ref('');
      const remarks = ref('');
  
      const submitForm = () => {
        alert(`
          Student ID: ${studentId.value}
          Date: ${date.value}
          Diagnosis: ${diagnosis.value}
          Medicine: ${medicine.value}
          Blood Pressure: ${bloodPressure.value}
          Pulse Rate: ${pulseRate.value}
          Oxygen Saturation: ${oxygenSaturation.value}
          Temperature: ${temperature.value}
          Treatment: ${treatment.value}
          Remarks: ${remarks.value}
        `);
      };
  
      const validateStudentId = (event) => {
        event.target.value = event.target.value.replace(/\D/g, '');
        studentId.value = event.target.value;
      };
  
      const clearForm = () => {
        studentId.value = '';
        date.value = '';
        diagnosis.value = '';
        medicine.value = '';
        bloodPressure.value = '';
        pulseRate.value = '';
        oxygenSaturation.value = '';
        temperature.value = '';
        treatment.value = '';
        remarks.value = '';
      };
  
      return {
        studentId,
        date,
        diagnosis,
        medicine,
        bloodPressure,
        pulseRate,
        oxygenSaturation,
        temperature,
        treatment,
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
  
  button.update {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: rgb(61, 164, 61);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button.update:hover {
    background-color: rgb(86, 186, 86);
  }
  
  button:hover {
    background-color: #4a68a8;
  }
  </style>
  
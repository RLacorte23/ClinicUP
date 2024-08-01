<template>
    <main>
      <div class="top-container">
        <h1 class="bg-title">Dental Form</h1>
        <div class="patientProfile">
          <span class="material-icons">medical_services</span>
          <span class="text">Dental Examination Form</span>
        </div>
      </div>
      <hr>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-column">
              <div class="form-group">
                <label for="studentId">Student ID</label>
                <input type="text" v-model="studentId" id="studentId" placeholder="*Insert Student ID" required @input="validateStudentId" maxlength="11">
              </div>
            </div>
            <div class="form-column">
              <div class="form-group">
                <label for="contactNumber">Date</label>
                <input type="date" v-model="date" id="date" required>
              </div>
            </div>
          </div>
          <hr>
          <div class="picture-container">
            <img src="/src/assets/Dental_Chart.png" alt="Dental Examination Image" class="examination-image">
          </div>
          <hr>
          
          <!-- Dental History 
          <div class="form-row">
            <div class="form-group full-width">
              <label for="dentalHistory">Dental History</label>
              <textarea v-model="dentalHistory" id="dentalHistory" rows="3" placeholder="*Insert Dental History (Ex. Previous Treatments, Allergies, Etc.)" required></textarea>
            </div>
          </div>
          -->
          <!-- Current Dental Issues -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="currentIssues">Current Dental Issues</label>
              <textarea v-model="currentIssues" id="currentIssues" rows="3" placeholder="*Insert Current Dental Issues (Ex. Pain, Sensitivity, Etc.)" required></textarea>
            </div>
          </div>
          <!-- Dental Examination -->
          <div class="form-row">
            <div class="form-group full-width">
              <label for="examinationFindings">Examination Findings</label>
              <textarea v-model="examinationFindings" id="examinationFindings" rows="3" placeholder="*Insert Examination Findings" required></textarea>
            </div>
          </div>
          <hr>
          <!-- Submit and Clear Buttons -->
          <div class="form-row">
            <div class="form-group half-width">
              <v-btn type="submit" color="green">Update</v-btn>
            </div>
            <div class="form-group half-width">
              <v-btn class="remove" type="button" color="primary">Close</v-btn>
            </div>
          </div>
        </form>
      </div>
    </main>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
  name: 'DentalForm',
  setup() {
    const studentId = ref('');
    const date = ref('');
    const dentalHistory = ref('');
    const currentIssues = ref('');
    const examinationFindings = ref('');
  
    const submitForm = () => {
      alert(`
        Student ID: ${studentId.value}
        Contact Number: ${contactdate.value}
        Dental History: ${dentalHistory.value}
        Current Dental Issues: ${currentIssues.value}
        Examination Findings: ${examinationFindings.value}
      `);
    };
  
    const validateStudentId = (event) => {
      event.target.value = event.target.value.replace(/\D/g, '');
      studentId.value = event.target.value;
    };
  
    const clearForm = () => {
      studentId.value = '';
      date.value = '';
      dentalHistory.value = '';
      currentIssues.value = '';
      examinationFindings.value = '';
    };
  
    return {
      studentId,
      date,
      dentalHistory,
      currentIssues,
      examinationFindings,
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
  
  .patientProfile {
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
  background-color: rgb(217, 86, 86);
  }
  
  button:hover {
  background-color: #4a68a8;
  }
  
  .picture-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  }
  
  .examination-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  }
  </style>
  
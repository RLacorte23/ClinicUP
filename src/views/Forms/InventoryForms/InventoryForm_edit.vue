<template>
    <main>
      <div class="top-container">
        <h1 class="bg-title">Inventory Form</h1>
        <div class="productProfile">
          <span class="material-icons">inventory</span>
          <span class="text">Inventory Form</span>
        </div>
      </div>
      <hr>
      <div class="form-container">
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-column">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" v-model="name" id="name" required>
              </div>
              <div class="form-group">
                <label for="dosage">Dosage</label>
                <input type="text" v-model="dosage" id="dosage" required>
              </div>
              <div class="form-group">
                <label for="expirationDate">Expiration Date</label>
                <input type="date" v-model="expirationDate" id="expirationDate" required>
              </div>
            </div>
            <div class="form-column">
              <div class="form-group">
                <label for="quantity">Quantity</label>
                <input type="number" v-model="quantity" id="quantity" required>
              </div>
               <div class="form-group">
                <label for="unit">Unit</label>
                <input type="text" v-model="unit" id="unit" required>
               </div> 
              <div class="form-group">
                <label for="dateAcquisition">Date Acquisition</label>
                <input type="date" v-model="dateAcquisition" id="dateAcquisition" required>
              </div>
              <v-spacer></v-spacer>
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
    name: 'ProductForm',
    setup() {
      const productId = ref('');
      const name = ref('');
      const unit = ref('');
      const dosage = ref('');
      const quantity = ref('');
      const expirationDate = ref('');
      const dateAcquisition = ref('');
     
      const submitForm = () => {
        alert(`
          Product ID: ${productId.value}
          Name: ${name.value}
          Unit: ${unit.value}
          Dosage: ${dosage.value}
          Quantity: ${quantity.value}
          Expiration Date: ${expirationDate.value}
          Date Acquisition: ${dateAcquisition.value}
        `);
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
  
  .productProfile {
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
  
  .close-button {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #2F3F64;
    color: white;
    text-align: center;
    border-radius: 4px;
    transition: background-color 0.3s;
    text-decoration: none;
  }
  
  .close-button:hover {
    background-color: #4a68a8;
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

  </style>
  
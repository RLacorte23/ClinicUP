<template>
  <v-app class="app">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="7" md="8">
          <v-card class="elevation-12">
            <v-window v-model="step">
              <v-row>
                <v-col cols="12" md="6" class="rectangle-color">
                  <v-card-text class="white--text mt-16 pt-14 mx-auto">
                    <div class="logo-container">
                      <!-- Logo positioned at the right side -->
                      <img src="/src/assets/schoolLogo3.png" max-height="900" max-width="900" class="logo">
                    </div>
                    <div class="text-container text-center">
                      <h1 class="mt-10 h2 font-weight-black">ST.NICHOLAS ACADEMY OF CASTILLEJOS INC.</h1>
                      <p class="h6 font-weight-normal">CASTILLEJOS, ZAMBALES</p>
                    </div>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-1">
                    <div class="text-center mb-1">
                      <img src="/src/assets/schoolLogo.png" class="logo-logo">
                    </div>
                    <span class="sna-text"><h4 class="text-center pt-2 pb-3 fs-7 font-weight-black">
                      CLINIC ADMINISTRATION
                    </h4></span>
                    <v-form novalidate autocomplete="off">
                      <v-text-field
                        v-model="email" 
                        label="Email Address/ Student ID"
                        placeholder="e.g. 202407360@sna.edu.ph"
                        name="Email"
                        prepend-icon="mdi-email"
                        type="text"
                        color="var(--dark)"
                      />
                      <v-text-field
                        v-model="password"
                        :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append-inner="showPassword = !showPassword"
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        name="Password"
                        prepend-icon="mdi-lock"
                        color="var(--dark)"
                      />
                    </v-form> 
                  </v-card-text>
                  <div class="text-center pb-5" style="margin-top: -15px">
                    <v-btn rectangle color="var(--dark)" @click="login" style="color:white; text-decoration: none; font-size: 15px;">Log in</v-btn>
                  </div>
                  <div class="text-center pb-2">
                    <a href="#" @click.prevent="showPrivacyNotice" style="display: inline-block;">
                      St. Nicholas Academy General Privacy Notice
                    </a>
                  </div>
                </v-col>
              </v-row>
            </v-window>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Privacy Notice Modal -->
    <v-dialog v-model="privacyNoticeVisible" max-width="800px">
      <v-card class="rounded-card">
        <v-card-title class="blue darken-1 white--text text-center">Privacy Notice</v-card-title>
        <v-card-text>
          <div class="privacy-content">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <h3>1. Introduction</h3>
            <p>Welcome to Saint Nicholas Academy. We are dedicated to safeguarding the privacy of our users. This Privacy Notice explains how we collect, use, disclose, and protect your information when utilizing our Clinic Management System.</p>
            <h3>2. Information We Collect</h3>
            <p>We gather and process the following data:</p>
            <ul>
              <li>Students' Basic Personal Details: Including name, date of birth, gender, contact information, etc.</li>
              <li>Students' School Clinic Records: Encompassing physical and dental examination records, consultation logs, and treatment details.</li>
              <li>User Information: Comprising usernames and passwords of the clinic staff.</li>
            </ul>
            <h3>3. How We Use Your Information</h3>
            <p>We employ the acquired information for the following purposes:</p>
            <ul>
              <li>Dashboard: To monitor and report the number and percentage of students seeking consultation at the clinic.</li>
              <li>Student Records: To manage and store students' basic information, physical and dental examination records, and consultation details.</li>
              <li>Consultation Logs: To maintain a comprehensive log of daily consultation activities for students who are not feeling well.</li>
              <li>Medicine Inventory: To oversee and track the clinic's medicine brand, stock levels, and consumption.</li>
            </ul>
            <h3>4. How We Share Your Information</h3>
            <p>We do not share your personal information with external parties unless:</p>
            <ul>
              <li>Required by law or to adhere to legal procedures.</li>
              <li>To safeguard the rights, property, or well-being of Saint Nicholas Academy, our users, or others.</li>
            </ul>
            <h3>5. Data Security</h3>
            <p>We implement administrative, technical, and physical security measures to safeguard your personal information. Despite our efforts, perfection in security measures or impregnability is unattainable, and no method of data transmission is entirely impervious to interception or misuse.</p>
            <h3>6. Your Rights</h3>
            <p>You are entitled to:</p>
            <ul>
              <li>Access the personal data we possess about you.</li>
              <li>Request correction of any inaccurate or incomplete data.</li>
              <li>Request deletion of your personal data.</li>
              <li>Object to the processing of your personal data.</li>
              <li>Request restriction of processing your personal data.</li>
              <li>Request transfer of your personal data.</li>
            </ul>
            <p>To exercise any of these rights, kindly contact us at [contact information].</p>
            <h3>7. Changes to This Privacy Notice</h3>
            <p>We may periodically update this Privacy Notice to reflect alterations in our practices or for operational, legal, or regulatory purposes. Any revisions will be communicated by posting the new Privacy Notice on this page.</p>
            <h3>8. Contact Us</h3>
            <p>For any inquiries or concerns regarding this Privacy Notice or our data practices, please contact us at:</p>
            <p><b>Saint Nicholas Academy<br>[Address]<br>[Email]<br>[Phone Number]</b></p>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="v-btn" @click="privacyNoticeVisible = false">I Accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    email: '',
    password: '',
    errorMessage: '',
    showPassword: false,
    privacyNoticeVisible: false, // Data property for controlling modal visibility
  }),
  methods: {
    showPrivacyNotice() {
      this.privacyNoticeVisible = true; // Method to open the modal
    },
    login() {
      // Your login method here
    },
  },
};
</script>

<style scoped>
.app {
  position: relative; /* Ensure the parent is positioned relative */
  background-image: url('../assets/SNA_login.png');
  background-size: cover;
  background-repeat: no-repeat;
}

.app::before {
  content: ''; /* Required for pseudo-elements */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust the opacity value as needed */
}

.logo-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  height: 100%;
  right: 100%; /* Adjust this value to move the container to the left */
}

.logo {
  width: 600px; 
  height: 100%; 
  object-fit: cover; 
  filter: brightness(250%) grayscale(0%); 
  opacity: 12%;
}

.logo-logo {
  max-height: 150px;
  max-width: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.sna-text {
  color: var(--dark);
  font-size: 20px;
}

.text-container {
  position: relative;
  z-index: 1; 
  color: white;
}

.rectangle-color {
  background-color: var(--dark);
}

.privacy-content {
  font-family: 'Roboto', sans-serif; /* Match the font family used in the login page */
  font-size: 16px; /* Adjust to match the login page if needed */
  line-height: 1.5;
  color: var(--dark); /* Match the text color used in the login page */
}

.privacy-content h3 {
  color: var(--dark); /* Match the header color used in the login page */
  font-size: 18px; /* Adjust font size if needed */
  font-weight: 700; /* Match the font weight */
}

.privacy-content p {
  margin: 8px 0;
}

.privacy-content ul {
  padding-left: 20px;
}

.privacy-content ul li {
  margin: 4px 0;
}

.v-card-title {
  font-family: 'Roboto', sans-serif; /* Match the font family used in the login page */
  font-size: 30px; /* Increase font size for the modal title */
  font-weight: 700; /* Bold font weight */
  color: white; /* Title text color */
  background-color: #3f51b5; /* Blue background color */
  padding: 16px; /* Add padding for better spacing */
  text-align: center; /* Center the title text */
  letter-spacing: 12px; /* Add spacing between characters */
  position: sticky; /* Make the title sticky */
  top: 0; /* Stick to the top of the container */
  z-index: 10; /* Ensure the title is above other content */
}

.rounded-card {
  border-radius: 8px; /* Ensure the modal itself has rounded corners */
  max-width: 800px; /* Make the modal a bit wider */
  overflow-y: auto; /* Enable vertical scrolling */
}

.rounded-card::-webkit-scrollbar {
  width: 0; /* Hide the scrollbar in WebKit browsers (Chrome, Safari) */
}

.rounded-card {
  scrollbar-width: none; /* Hide the scrollbar in Firefox */
}

/* Optional: For smooth scrolling */
.rounded-card {
  scroll-behavior: smooth;
}


.v-btn {
  background-color: var(--dark); /* Background color for the button */
  color: white; /* Text color */
  font-size: 15px; /* Font size */
  text-decoration: none; /* Remove underline */
  border-radius: 4px; /* Rounded corners */
  padding: 10px 20px; /* Padding for button */
  font-weight: bold; /* Bold text */
}

.v-btn:hover {
  background-color: #333; /* Darker shade on hover */
  color: white; /* Ensure text color remains white on hover */
}

.v-btn:focus {
  outline: none; /* Remove outline on focus */
}


</style>
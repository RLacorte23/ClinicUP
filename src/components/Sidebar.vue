<script setup>
import { ref, watchEffect } from 'vue';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value);
};

const toggleSidebar = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem("is_expanded", is_expanded.value.toString());
};

const handleMediaQuery = (event) => {
    if (event.matches) {
        is_expanded.value = false;
    } else {
        is_expanded.value = localStorage.getItem("is_expanded") === "true";
    }
};

watchEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1170px)');
    handleMediaQuery(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaQuery);
});

const isStudentRecordsDropdownOpen = ref(false);
const isMedicalFormsDropdownOpen = ref(false);

const toggleStudentRecordsDropdown = () => {
    isStudentRecordsDropdownOpen.value = !isStudentRecordsDropdownOpen.value;
};

const toggleMedicalFormsDropdown = () => {
    isMedicalFormsDropdownOpen.value = !isMedicalFormsDropdownOpen.value;
};
</script>


<template>
    <aside :class="`${is_expanded && 'is_expanded'}`">
        <img class="sna-logo" src="/src/assets/SNA Logo with BG.png" alt="">

        <h2 class="sp-text">Clinic Administrator</h2>
        <br>
        <hr>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu"> 
                <span class="material-icons">keyboard_double_arrow_right</span>
            </button>
        </div>
      
        <div class="menu">
            <router-link class="button" to="/dashboard">
                <span class="material-icons">dashboard</span>
                <span class="text">Dashboard</span>
            </router-link>

            <router-link class="button" to="/consultationrecords">
                <span class="material-icons">medical_information</span>
                <span class="text">Consultation Records</span>
            </router-link>
    
            <div class="dropdown" @click="toggleStudentRecordsDropdown" :class="{ 'open': isStudentRecordsDropdownOpen }">
                <button class="dropbtn">
                    <span class="material-icons">dvr</span>
                    <span class="text">Student Records</span>
                </button>
                <transition name="fade">
                    <div class="dropdown-content" v-if="isStudentRecordsDropdownOpen" @click.stop>
                        <router-link to="/junior-records">
                            <span class="material-icons">groups</span>
                            <span class="text">Junior High</span>
                        </router-link>
                        <router-link to="/senior-records">
                            <span class="material-icons">groups</span>
                            <span class="text">Senior High</span>
                        </router-link>
                    </div>
                </transition>
            </div>

            <div class="dropdown" @click="toggleMedicalFormsDropdown" :class="{ 'open': isMedicalFormsDropdownOpen }">
                <button class="dropbtn">
                    <span class="material-icons">post_add</span>
                    <span class="text">Medical Forms</span>
                </button>
                <transition name="fade">
                    <div class="dropdown-content" v-if="isMedicalFormsDropdownOpen" @click.stop>
                        <router-link to="/physicalform">
                            <span class="material-icons">personal_injury</span>
                            <span class="text">Physical Form</span>
                        </router-link>
                        <router-link to="/dentalform">
                            <span class="material-icons">medical_services</span>
                            <span class="text">Dental Form</span>
                        </router-link>
                    </div>
                </transition>
            </div>

            <router-link class="button" to="/inventory">
                <span class="material-icons">inventory</span>
                <span class="text">Inventory</span>
            </router-link>
        </div>

        <hr class="hr">

        <div class="menu-logout">
            <router-link class="button" to="/login" @click="logoutAlert">
                <span class="material-icons">logout</span>
                <span class="text">Logout</span>
            </router-link>
        </div>
    </aside>
</template>

<script>
export default {
    name: "Sidebar",
};
</script>

<style lang="scss" scoped>
  aside {
      display: flex;
      flex-direction: column;
      width: calc(2.5rem + 40px);
      min-height: 100vh;
      overflow: hidden;
      padding: 1rem;
      background-color: var(--dark);
      color: var(--light);
  
      transition: 0.2s ease-out;
  
      .sna-logo {
        height: 2.5rem;
        width: 2.5rem;
        transition: 0.2s ease-out;
        border-radius: 1.1rem;
      }

      .sp-text{
        display: none;
        transition: 0.2s ease-out;
      }
      .menu-toggle-wrap {
          display: flex;
          justify-content: flex-end;
  
          position: relative;
          bottom: 0.5rem;
          transition: 0.2s ease-out;
  
          margin: 5px;
          .menu-toggle {
              transition: 0.2s ease-out;
              .material-icons{
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover {
                  .material-icons {
                      color: var(--primary);
                      transform: translateX(0.5rem);
                  }
              }
          }
      }
       .button .text {
          opacity: 0;
          transition: 0.3s ease-out;
      }
  
  
      .menu {
          margin: -0 -1rem;
          position: relative;
          bottom: 0.5rem;
          .button{
              display: flex;
              align-items: center;
              text-decoration: none;
              
  
              padding: 0.8rem 1rem;
              margin-bottom: 0.5rem;
              transition: 0.2s ease-out;
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              .text{
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover, &.router-link-exact-active{
                  background-color: #fff;
                  margin-left: 0.5rem;
                  border-top-left-radius: 20px;
                  border-bottom-left-radius: 20px;
                  .material-icons, .text {
                      color: var(--dark);
                  }
              }
          }

          .dropdown {
            padding: 0.8rem 1rem;
            transition: 0.2s ease-out;
            margin-top: -10px;
            margin-bottom: 10px;

            .dropbtn{
                .material-icons {
                        font-size: 2rem;
                        color: var(--light);
                        transition: 0.2s ease-out;

                }

                .text{
                    opacity: 0;
                    transition: 0.2s ease-out;
;
                }
            }   
            .dropdown-content a {
                color: var(--light);
                padding: 1rem 5.3rem 1rem ; 
                margin-bottom: 0.5rem;
                text-decoration: none;
                display: flex;
                transition: background-color 0.3s ease;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
              
              &:hover, &.router-link-active{
                background-color: #fff;
                margin-left: 0.5rem;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
                color: var(--dark);
              }
              .material-icons{
                font-size: 2rem;
                position: relative;
                right: 75px;
                transition: 0.2s ease-out;

            }
            
            .text{
                opacity: 0;
                transition: 0.2s ease-out;
            }
              }
            
              .fade-enter-active, .fade-leave-active {
                transition: opacity 0.3s;
              }
              
              .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
                opacity: 0;
              }
          }
      }
  
      .menu-logout {
          margin: -0 -1rem ;
          transition: 0.2s ease-out;
          flex: 1;
          display: flex;
          align-items: flex-end;
          .button{
              display: flex;
              align-items: center;
              text-decoration: none;
  
              padding: 0.8rem 1rem;
              margin-bottom: 0.5rem;
              transition: 0.2s ease-out;
              .material-icons {
                  font-size: 2rem;
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              .text{
                  color: var(--light);
                  transition: 0.2s ease-out;
              }
  
              &:hover{
                  .material-icons, .text {
                      color: var(--primary);
                  }
              }
          }
      }
      &.is_expanded {
          width: var(--sidebar-width);
  
          .menu-logout{
              display: flex;
              align-items: flex-end;
              margin: -0 2rem ;
              transition: 0.2s ease-out;
              color: var(--light);
  
          }
          .sna-logo{
                height: 9rem;
                width: 9rem;
                transition: 0.2s ease-out;
                align-self: center;
                border-radius: 5rem;
          }

          .sp-text {
            margin-top: 1rem;
            margin-bottom: 0.5rem;
            color: #fff;
            opacity: 1;
            display: block;
            transition: 0.2s ease-out;
            text-align: center;
          }
  
          .menu-toggle-wrap {
              top:-4rem;
              left: 0.5rem;
              .menu-toggle{
                  transform: rotate(-180deg);
              }
              
          }
          .button .text {
              opacity: 1;
          }
          
          .button {
              .material-icons {
                  margin-right: 1rem;
              }
          }
          .dropdown {
            position: relative;
            align-items: center;
            text-decoration: none;
            padding: 0.8rem 1rem;
            transition: 0.2s ease-out;

            .dropbtn{
                
                .material-icons {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                    position: relative;
                    top: 10px;
                }

                .text{
                    color: var(--light);
                    transition: 0.2s ease-out;
                    margin-left: 1rem;
                    opacity: 1;
                }
            }  
             
            .dropdown-content a {
                position: relative;
                top: 1rem;
                left: 1rem;
                color: var(--light);
                padding: 1rem 4rem 0.7rem ; 
                margin-bottom: 0.5rem;
                text-decoration: none;
                display: flex;
                transition: background-color 0.3s ease;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
             
              
              &:hover, &.router-link-exact-active {
                background-color: #fff;
                border-top-left-radius: 20px;
                border-bottom-left-radius: 20px;
                transition: 0.2s ease-out;
                color: var(--dark);
              }

              .material-icons{
                font-size: 2rem;
                position: relative;
                right: 30px;
                transition: 0.2s ease-out;

            }
            
            .text{
                position: relative;
                right: 30px;
                transition: 0.2s ease-out;
                margin-left: 1rem;
                opacity: 1;
            }
              }
            
              .fade-enter-active, .fade-leave-active {
                transition: opacity 0.3s;
              }
              
              .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
                opacity: 0;
              }
          }
          .menu {
            bottom: 2.5rem;
          }
          
          .hr{
            position: relative;
            bottom: 2rem;
          }
        
        }

        @media (max-width: 1050px){
          .menu-toggle-wrap{
            opacity: 0;
            pointer-events: none;
          }
        }
    }
  </style>
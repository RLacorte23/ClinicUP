<template>  
        <main>     
            <section>            
            <div class="top-container">
                <h1 class="bg-title">Dashboard</h1>
                <div class="studentProfile">
                    <span class="material-icons">dashboard</span>
                    <span class="text">Dashboard</span>   
                </div>    
            </div> 
            <hr>
        </section>

            <div class="left-container">
    <div class="top-left">
        <div class="total-student">
            <h2 class="info-text">
                <span class="material-icons">school</span>
                Total Students 
                <br>    
                <span class="card-1">100</span> 
            </h2>  
         
            <!--
            <table class="enrollment-table">
                <thead>
                    <tr>
                        <th class="fs-5 ">Grade Level</th>
                        <th class="fs-5">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <th class="grade">Junior High School</th>
                        <td class="grade">0000</td>
                    </tr>
                    <tr>
                        <td>Grade 7</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 8</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 9</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 10</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <th class="grade">Senior High School</th>
                        <td class="grade">0000</td>
                    </tr>
                    <tr>
                        <td>Grade 11</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 12</td>
                        <td>0000</td>
                    </tr>
                </tbody>
            </table>
            -->
        </div>
    </div>

    <div class="buttom-left">
        <div class="total-student">
            <h2 class="info-text">
                <span class="material-icons">personal_injury</span>
                Total Annual Patients
            </h2>  
            <canvas ref="chart1Canvas"></canvas>
            <!--        
            <table class="enrollment-table">
                <thead>
                    <tr>
                        <th class="fs-5 ">Grade Level</th>
                        <th class="fs-5">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <th class="grade">Junior High School</th>
                        <td class="grade">0000</td>
                    </tr>
                    <tr>
                        <td>Grade 7</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 8</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 9</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 10</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <th class="grade">Senior High School</th>
                        <td class="grade">0000</td>
                    </tr>
                    <tr>
                        <td>Grade 11</td>
                        <td>0000</td>
                    </tr>
                    <tr>
                        <td>Grade 12</td>
                        <td>0000</td>
                    </tr>
                </tbody>
            </table>
            -->
        </div>
    </div>
</div>

 
        <div class="right-container">
            <div class="top-right">
                <div class="total-students">
            <h1 class="info-text">
                <span class="material-icons">personal_injury</span>
                Total Daily Patients
                  <br>    
                <span class="card-2">10</span> 
            </h1>

     <!--
                <table class="enrollment-table">
                    <thead>
                        <tr>
                            <th class="fs-5 ">Grade Level</th>
                            <th class="fs-5">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr> 
                            <th class="grade">Junior High School</th>
                            <td class="grade">0000</td>
                        </tr>
                        <tr>
                            <td>Grade 7</td>
                            <td>0000</td>
                        </tr>
                        <tr>
                            <td>Grade 8</td>
                            <td>0000</td>
                        </tr>
                        <tr>
                            <td>Grade 9</td>
                            <td>0000</td>
                        </tr>
                        <tr>
                            <td>Grade 10</td>
                            <td>0000</td>
                        </tr>
                        <tr>
                            <th class="grade">Senior High School</th>
                            <td class="grade">0000</td>
                        </tr>
                        <tr>
                            <td>Grade 11</td>
                            <td>0000</td>
                        </tr>
                        <tr>
                            <td>Grade 12</td>
                            <td>0000</td>
                        </tr>
                    </tbody>
                </table>
            -->
            </div>
        </div>
            <div class="buttom-right">
            <h1 class="info-text">
                <span class="material-icons">source</span>
                Consultation Cases
            </h1>
            <canvas ref="chart2Canvas"></canvas>
        </div>
    </div>  
</main>
</template>

<script>
export default {
  data() {
    return {
      chart1: null,
      chart2: null,
      sidebarCollapsed: false, 
    };
  },
  mounted() {
    this.renderChart1();
    this.renderChart2();
  },
  computed: {
    chartContainerWidth() {
      return this.sidebarCollapsed ? 'calc(100% - 80px)' : '100%'; 
    },
    chartContainerHeight() {
      return this.sidebarCollapsed ? '400px' : '400px'; 
    }
  },
  watch: {
    sidebarCollapsed(newValue) {
      if (this.chart1 && this.chart2) {
        this.chart1.resize(); 
        this.chart2.resize(); 
      }
    }
  },
  methods: {
    renderChart1() {
      this.chart1 = new Chart(this.$refs.chart1Canvas.getContext('2d'), {
        type: 'bar',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: ['Junior High Students'],
            data: [100, 300,200,300,200,200,100,200,200,120,230,103], // Junior and Senior High total enrollees
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              
            ],  
            borderColor: [
              'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
          },
          {
            label: ['Senior High Students'],
            data: [30, 40,100,150,200,100,50,180,140,190,200,57], // Junior and Senior High total enrollees
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],  
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive: true,
          aspectRatio: 1, // Set the aspect ratio to maintain a square shape
          maintainAspectRatio: true
        }
      });
    },
    renderChart2() {
  this.chart2 = new Chart(this.$refs.chart2Canvas.getContext('2d'), {
    type: 'bar',
        data: {
          labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
          datasets: [{
            label: ['Diarrhea'],
            data: [10,32,53,63,23,64,31,39,84,5,7,10], // Junior and Senior High total enrollees
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              
            ],  
            borderColor: [
              'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
          },
          {
            label: ['Fever'],
            data: [23, 47, 12, 36, 4, 18, 29, 33, 5, 41, 26, 9, 48], // Junior and Senior High total enrollees
            backgroundColor: [
              'rgba(75, 250, 192, 0.2)',
              
            ],  
            borderColor: [
              'rgba(75, 280, 192, 1)',
              
            ],
            borderWidth: 1
          },
          {
            label: ['Headache'],
            data: [15, 38, 24, 47, 7, 33, 19, 42, 10, 50, 28, 5, 37], // Junior and Senior High total enrollees
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],  
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          },
          responsive: true,
          aspectRatio: 1, // Set the aspect ratio to maintain a square shape
          maintainAspectRatio: true
        }
  });
}
  }
};
</script>

<style lang="scss" scoped>
main {
    display: flex;
}


.left-container{
    flex: 0.5;
    margin-right: 1rem;
    margin-top: 100px;

    .top-left{
        padding: 1rem;
        background-color: #f0f0f0;
        margin-bottom: 2rem;
        color: black;
        width: 100%;
        height: 120px;
        border-style: solid;
        border-color: #2F3F64;
        border-width: 1px 1px 1px 6px;
        text-align: center;

        .total-student{
            display: flex;
            flex-direction: column;
            
            .info-text{
                text-shadow: 0 0 1px;
                font-size: 25px;
                margin-bottom: 1rem;
                font-weight: bold;
        
                
                .material-icons{
                    position: relative;
                    font-size: 38px;
                    top:8px;
                }
                .card-1{
                    font-size: 30px;
                }
            }
            h2{
                align-self: left;
                margin-bottom: 1rem;
                font-weight: 900;
                
            }

            h3{
                font-weight: 600;
            }

            .student-count{
                display: flex;

                h4{
                    font-weight: 600;
                }
            
            .jhs{
                flex: 0.8;
                padding: 0.5rem;

                .jhs-total{
                    display: flex;
                    margin: 1rem;

                    h5{
                        margin-right: 1.5rem;
                        width: 3.5rem;
                    }

                    h3{
                        text-shadow: 0 0 1px;
                    }
                }


            }

            .shs{
                padding: 0.5rem;

                .shs-total{
                    display: flex;
                    margin: 1rem;

                    h5{
                        margin-right: 1.5rem;
                        width: 3.5rem;
                    }
                    h3{
                        text-shadow: 0 0 1px;
                    }
                }
            }

            }
        }
    }
    
    .buttom-left{
        padding: 1rem;
        background-color: #f0f0f0;
        margin-bottom: 2rem;
        color: black;
        width: 100%;
        border-style: solid;
        border-color: #2F3F64;
        border-width: 1px 1px 1px 6px;
        @media (min-width: 768px) {
            width: calc(100% - 1px); 
            transition: width 0.1s; 
        }

        .total-student{
            display: flex;
            flex-direction: column;
            
            .info-text{
                text-shadow: 0 0 1px;
                font-size: 25px;
                margin-bottom: 1rem;
                font-weight: bold;

                
                .material-icons{
                    position: relative;
                    font-size: 38px;
                    top:8px;
                }
            }
        }
    }
}
section{
    position: absolute;
    width: 100%;
}
.bg-title{
    z-index: -1;
    position: absolute;
    opacity: 10%;
    margin-top: -40px;
    font-size: 100px;
    font-family: Impact, fantasy;
}
.top-container{
    display: flex;
    margin: 0.5rem;
    .studentProfile{
        flex: 1;

        .material-icons{
            position: relative;
            color: var(--dark);
            font-size: 2.5rem;
            top: -0.01rem;
        }
        .text{
            position: relative;
            color: var(--dark);
            font-size: 1.5rem;
            font-weight: 900;
            bottom: 0.6rem;
            left: 0.5rem;   
        }
    }

} 

.right-container {
    flex: 0.5;
    margin-left: 1rem;
    margin-top: 100px;
    
    .top-right{
        padding: 1rem;
        background-color: #f0f0f0;
        margin-bottom: 2rem;
        color: black;
        width: 100%;
        height: 120px;
        border-style: solid;
        border-color: #2F3F64;
        border-width: 1px 1px 1px 6px;
        text-align: center;

        .total-student{
            display: flex;
            flex-direction: column;
            
            .info-text{
                text-shadow: 0 0 1px;
                font-size: 25px;
                margin-bottom: 1rem;
                font-weight: bold;
                
                .material-icons{
                    position: relative;
                    font-size: 38px;
                    top:8px;
                }
                .card-2{
                    font-size: 30px;
                }
            }
            h2{
                align-self: left;
                margin-bottom: 1rem;
                font-weight: 900;
                
            }

            h3{
                font-weight: 600;
            }

            .student-count{
                display: flex;

                h4{
                    font-weight: 600;
                }
            
            .jhs{
                flex: 0.8;
                padding: 0.5rem;

                .jhs-total{
                    display: flex;
                    margin: 1rem;

                    h5{
                        margin-right: 1.5rem;
                        width: 3.5rem;
                    }

                    h3{
                        text-shadow: 0 0 1px;
                    }
                }


            }

            .shs{
                padding: 0.5rem;

                .shs-total{
                    display: flex;
                    margin: 1rem;

                    h5{
                        margin-right: 1.5rem;
                        width: 3.5rem;
                    }
                    h3{
                        text-shadow: 0 0 1px;
                    }
                }
            }

            }
        }
    }
}

.buttom-right{
    padding: 1rem;
    background-color: #f0f0f0;
    margin-bottom: 2rem;
    color: black;
    width: 100%;
    border-style: solid;
    border-color: #2F3F64;
    border-width: 1px 1px 1px 6px;
    @media (min-width: 768px) {
        width: calc(100% - 1px); 
        transition: width 0.1s ease; 
    }

        .info-text{
            text-shadow: 0 0 1px;
            font-size: 25px;
            margin-bottom: 1rem;
            font-weight: bold;
            
            
            .material-icons{
                position: relative;
                font-size: 38px;
                top:8px;
            }
        }
    }

.buttom-container{
        flex: 1;
        margin-right: 1rem;
        margin-top: 100px;
        position: relative;
    }

    .buttom{
        padding: 1rem;
        background-color: #f0f0f0;
        margin-bottom: 2rem;
        color: black;
        width: 100%;
        border-style: solid;
        border-color: #2F3F64;
        border-width: 1px 1px 1px 6px;
        @media (min-width: 768px) {
            width: calc(100% - 1px); 
            transition: width 0.1s ease; 
        }
    
            .info-text{
                text-shadow: 0 0 1px;
                font-size: 25px;
                margin-bottom: 1rem;
                font-weight: bold;
                
                
                .material-icons{
                    position: relative;
                    font-size: 38px;
                    top:8px;
                }
            }
        }
    

.enrollment-table {
    width: 100%;
    border-collapse: collapse;
    opacity: 100%;
}

.enrollment-table th, .enrollment-table td {
    border: 2px solid #a09e9e90;
    text-align: left;
    padding: 8px;
    font-size: 14px;
}

.enrollment-table th {
    background-color: #f2f2f2;
}
.grade{
    font-weight: bold;
    font-size: 17px;
}
.info-text{
    text-shadow: 0 0 1px;
    font-size: 25px;
    margin-bottom: 1rem;
    color: var(--dark);
    font-weight: bold;
}
.material-icons{
    position: relative;
    font-size: 38px;
    top:8px;
}


</style>
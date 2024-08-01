    <template>
        <main>
            <div class="top-container">
                <h1 class="bg-title">Consultation Records</h1>
                <div class="studentProfile">
                    <span class="material-icons">medical_information</span>
                    <span class="text">Consultation Records</span>
                </div>
            </div>  
            <hr>

            <div class="main-content">

                <div class="student-table">
                    <DailyLog/>
                </div>
            </div>
            <div class="flex align-center">
                <i
                    class="i-Calendar-2 text-6xl text-yellow-200"
                ></i>
            </div>
            
    </main>

    </template>

    <script>
    // import AddStudent from '../components/AddStudent.vue';
    import DailyLog from '../components/ConsultationTable.vue';

    export default {
    components: {
        // AddStudent,
        DailyLog
    }
    };
    </script>

    <style lang="scss" scoped>
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
                color: var(--dark);
                font-size: 2.5rem;
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

    .main-content {
        display: flex;
        flex-direction: column;

        .student-table{
            border-style: solid;
            border-color: #2F3F64;
            border-width: 1px 1px 1px 6px;
            border-radius: 10px;
            background-color: #f0f0f0;
            padding: 0.5rem;
            height: 100vh;
        }
    }


    </style>
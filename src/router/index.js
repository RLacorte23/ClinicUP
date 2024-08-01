import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: 'login'

        },
        {
            path: '/login',
            component: () => import('../views/AdminLogin.vue')

        },
        {
            path: '/dashboard',
            component: () => import('../views/Dashboard.vue')
        },
        {
            path: '/senior-records',
            component: () => import('../views/StudentRecords/Senior.vue')
        },
         {
            path: '/senior-records/medical',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Senior.vue')
        },
        {
            path: '/senior-records/medical/physical',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Senior_physical_edit.vue')
        },
        {
            path: '/senior-records/medical/dental',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Senior_dental_edit.vue')
        },
        {
            path: '/senior-records/medical/consultation/edit',
            component: () => import('../views/Forms/ConsultationForms/ConsultationForm_edit.vue')
        },
        {
            path: '/junior-records',
            component: () => import('../views/StudentRecords/Junior.vue')
        },
        {
            path: '/junior-records/medical',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Junior.vue')
        },
        {
            path: '/junior-records/medical/physical',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Junior_physical_edit.vue')
        },
        {
            path: '/junior-records/medical/dental',
            component: () => import('../views/StudentRecords/MedicalRecords/Medical_Junior_dental_edit.vue')
        },
        {
            path: '/junior-records/medical/consultation/edit',
            component: () => import('../views/Forms/ConsultationForms/ConsultationForm_edit.vue')
        },
        {
            path: '/consultationrecords',
            component: () => import('../views/ConsultationRecords.vue')
        },
        {
            path: '/consultationrecords/form',
            component: () => import('../views/Forms/ConsultationForms/ConsultationForm.vue')
        },
        //for editing the existing record
        {
            path: '/consultationrecords/medical/edit',
            component: () => import('../views/Forms/ConsultationForms/ConsultationForm_edit.vue')
        },
        {
            path: '/physicalform',
            component: () => import('../views/Forms/MedicalForms/PhysicalForm.vue')
        },
        {
            path: '/dentalform',
            component: () => import('../views/Forms/MedicalForms/DentalForm.vue')
        },
        {
           path: '/inventory',
            component: () => import('../views/Inventory.vue')
        },  
        {
            path: '/inventory/form',
             component: () => import('../views/Forms/InventoryForms/InventoryForm.vue')
        },  
        {   //Inventory Editing
            path: '/inventory/form/edit',
             component: () => import('../views/Forms/InventoryForms/InventoryForm_edit.vue')
         },  
        {
            path: '/medicalcertificate',
             component: () => import('../views/Med_Cert.vue')
        },

    ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

import AttendanceLogView from '../views/AttendanceLog.vue'
import ExportedFileView from '../views/ExportedFile.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/attendance-logs',
        name: 'attendance-logs',
        component: AttendanceLogView
      },
      {
        path: '/export-files',
        name: 'export-files',
        component: ExportedFileView
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        redirect: { path: '/attendance-logs' }
      }
    ],
    linkActiveClass: 'active',
  })
  
  export default router
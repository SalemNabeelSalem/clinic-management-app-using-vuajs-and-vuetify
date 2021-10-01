import Vue from "vue";
import VueRouter from "vue-router";

// Viwes Importing:-
import Home from "../views/Home"; // or Home.vue
import ManagerDashboard from "../views/ManagerDashboard";
import ReceptionistDashboard from "../views/ReceptionistDashboard";

// Manager-Dashboard Components Importing:-
import Receptionists from "../components/manager-dashboard/Receptionists";
import Doctors from "../components/manager-dashboard/Doctors";
import Laboratories from "../components/manager-dashboard/Laboratories";
import Managers from "../components/manager-dashboard/Managers";
import Reports from "../components/manager-dashboard/Reports";

import PatientsReservations from "../components/PatientsReservations";
import PatientsReservationsReports from "../components/PatientsReservationsReports";
import Login from "../components/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/manager-dashboard",
    name: "Manager-Dashboard",
    component: ManagerDashboard,
    children: [
      {
        path: "/manager-dashboard/receptionists",
        name: "Receptionists",
        component: Receptionists,
      },
      {
        path: "/manager-dashboard/doctors",
        name: "Doctors",
        component: Doctors,
      },
      {
        path: "/manager-dashboard/laboratories",
        name: "Laboratories",
        component: Laboratories,
      },
      {
        path: "/manager-dashboard/managers",
        name: "Managers",
        component: Managers,
      },
      {
        path: "/manager-dashboard/reports",
        name: "Reports",
        component: Reports,
      },
    ],
  },
  {
    path: "/recep-dashboard/:recepId",
    name: "Receptionist-Dashboard",
    component: ReceptionistDashboard,
    children: [
      {
        path: "/recep-dashboard/:recepId/patients-reservations",
        name: "PatientsReservations",
        component: PatientsReservations,
      },
      {
        path: "/recep-dashboard/:recepId/patients-reservations-reports",
        name: "PatientsReservationsReports",
        component: PatientsReservationsReports,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

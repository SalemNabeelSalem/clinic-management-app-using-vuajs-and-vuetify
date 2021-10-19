import http from "./http-common";

class PatientCheckDataService {
  findPatientCheckByReservationId(reservationId) {
    return http.get(
      "/patients-reservations/" + reservationId + "/patients-checks"
    );
  }

  createNewPatientCheck(newPatientCheck) {
    return http.post("/patients-checks", newPatientCheck);
  }
}

export default new PatientCheckDataService();
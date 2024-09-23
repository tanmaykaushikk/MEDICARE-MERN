import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import DoctorCard from "./../../components/Doctors/DoctorCard";

const MyBookings = () => {
  const { data: appointments } = useFetchData(
    `${BASE_URL}/users/appointments/my-appointments`
  );
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {appointments.map((doctor) => (
          <DoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>

      {appointments.length === 0 && (
        <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">
          You did not book any doctor yet.
        </h2>
      )}
    </div>
  );
};

export default MyBookings;

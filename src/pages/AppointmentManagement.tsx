import {useEffect, useState} from 'react';
import {  Clock, Plus,MoreVertical } from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.tsx";
import {deleteAppointment, getAllAppointment} from "../redux/AppointmentSlice.ts";
import AddAppointmentForm from "../components/appointment/AddAppointmentForm.tsx";
import EditAppointmentForm from "../components/appointment/EditAppointmentForm.tsx";

const AppointmentManagement = () => {
  // const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentAppoinmentData, setCurrentAppoinmentData] = useState();

  const appointments = useSelector((state:RootState)=>state.appointment);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllAppointment());
  }, [dispatch]);

  async function handleDeleteAppoinment(id:string) {
    console.log("Deleting appoinment with code:", id);
    await dispatch(deleteAppointment(id));
    dispatch(getAllAppointment());
    setOpenMenu(null)
  };

  const handleEditButtonClick = (appointment) => {
    setCurrentAppoinmentData(appointment);
    setShowEditModal(true);
    setOpenMenu(null)
  };

  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (id:any) => {
    setOpenMenu(openMenu === id ? null : id);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointment Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-teal-700 text-white rounded-lg hover:bg-gradient-to-r hover:from-green-400 hover:to-teal-600"
        >
          <Plus className="w-4 h-4" />
          New Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
            <div className="space-y-4">
              {appointments.map((apt) => (
                <div key={apt.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-50 p-2 rounded-lg">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">chamika</div>
                      <div className="text-sm text-gray-600">{apt.appointmentType}</div>
                      <div className="text-sm text-gray-500">{apt.time}</div>
                      <div className="text-sm text-gray-500">{apt.notes}</div>
                    </div>
                  </div>
                  <div>

                    <div className="flex flex-col items-end space-y-1">
                      <div className="relative mb-5">
                        <button onClick={() => toggleMenu(apt.id)} className="p-2 rounded-full hover:bg-gray-200">
                          <MoreVertical className="w-5 h-5 text-gray-600"/>
                        </button>
                        {openMenu === apt.id && (
                            <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md p-2">
                              <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                onClick={()=>handleEditButtonClick(apt)}
                              >Edit
                              </button>
                              <button className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                                onClick={()=>handleDeleteAppoinment(apt.id)}
                              >Delete
                              </button>
                            </div>
                        )}
                      </div>
                      <span className={`px-3 py-1 text-sm rounded-full ${
                          apt.appointmentStatus === 'SCHEDULED' ? 'bg-blue-50 text-blue-600' :
                              apt.appointmentStatus === 'COMPLETED' ? 'bg-green-50 text-green-600' :
                                  'bg-yellow-50 text-yellow-600'
                      }`}>
                      {apt.appointmentStatus}
                    </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Calendar</h2>
          <div className="calendar-placeholder bg-gray-50 rounded-lg p-4 text-center text-gray-500">
            Calander
          </div>
          <div className="mt-4">
            <h3 className="font-medium mb-2">Upcoming Appointments</h3>
            <div className="space-y-2">
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">March 21</div>
                <div className="text-gray-600">5 appointments</div>
              </div>
              <div className="p-2 bg-gray-50 rounded text-sm">
                <div className="font-medium">March 22</div>
                <div className="text-gray-600">3 appointments</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showAddModal && (
          <AddAppointmentForm  setShowAddModal={setShowAddModal} />
      )}

      {showEditModal && (
          <EditAppointmentForm showEditModal={showEditModal} setShowEditModal={setShowEditModal} appointment={currentAppoinmentData} />
      )}
    </div>
  );
};

export default AppointmentManagement;
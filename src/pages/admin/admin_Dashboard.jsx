import React, { useEffect, useState } from 'react'
// import StatsCard from '../../components/admin/StatsCard'
import teacher from '../../assets/dashboard/teacher.png'
import parcours from '../../assets/dashboard/Parcours.png'
import labs from '../../assets/dashboard/labs.png'
import cours from '../../assets/dashboard/cours.png'
import student from '../../assets/dashboard/student.png'
import Traficcard from '../../components/admin/Traficcard'
import StatsCard from '../../components/admin/StatsCard'
import { getUserCountByRole, getUsersByRole } from '../../api/users'
import { getPathCount } from '../../api/paths'
import { getLabsCount } from '../../api/labs'
import { getCoursesCount } from '../../api/courses'


export default function Dashboard() {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);
  const [pathCount, setPathCount] = useState(0);
  const [labsCount, setLabsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [teacherList, setTeacherList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const studentCount = await getUserCountByRole('student');;
      const teacherCount = await getUserCountByRole('teacher');
      const pathCount = await getPathCount();
      const labsCount = await getLabsCount();
      const coursesCount = await getCoursesCount();
      const teacherList = await getUsersByRole('teacher');
      setTeacherList(teacherList);
      setCoursesCount(coursesCount);
      setLabsCount(labsCount);
      setPathCount(pathCount);
      setStudentCount(studentCount);
      setTeacherCount(teacherCount);
    };
    fetchData();
  }, []);
  console.log(teacherList);

  return (
    <div>
      <div className="p-4 lg:ml-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre d’enseignants</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">{teacherCount}</h2>
              <img src={teacher} className="w-10" alt="icon_drapau" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre d'Étudiants</h4>

            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">{studentCount}</h2>
              <img src={student} className="w-10" alt="icon_drapau" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de parcours</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">{pathCount}</h2>
              <img src={parcours} className="w-10" alt="icon_drapau" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de cours</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">{coursesCount}</h2>
              <img src={cours} className="w-10" alt="icon_drapau" />
            </div>
          </div>
          <div className="bg-white p-4 py-8 rounded-lg shadow-md">
            <h4 className=' text-xl font-medium'>Nombre de labs</h4>
            <div className=" flex justify-between items-center pt-3">
              <h2 className="text-4xl font-bold">{labsCount}</h2>
              <img src={labs} className="w-10" alt="icon_drapau" />
            </div>
          </div>
        </div>
        <div className=' lg:flex mt-4'>
          <div className="grid grid-cols-1 my-4 lg:w-1/2">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">Liste des Enseignants</h3>
                <a href="/admin/user" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                  Voir tous
                </a>
              </div>
              <div className="flow-root">
                <ul className="divide-y divide-gray-200">
                  {teacherList.map((teacher, index) => (
                    <li key={index} className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <span className="inline-block bg-blue-100 p-2 rounded-full fw-bold">
                            {teacher.name.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {teacher.name}
                          </p>
                          <p className="text-sm text-gray-500 truncate">
                            <a href={`mailto:${teacher.email}`}>{teacher.email}</a>
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900">
                          {teacher.isActivated === true ? 'Actif' : 'Inactif'}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className=' lg:w-1/2 ml-3'>
            <Traficcard />
          </div>
        </div>

        <div>
          <StatsCard />
        </div>
      </div>
    </div>
  )
}

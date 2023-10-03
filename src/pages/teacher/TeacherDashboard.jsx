import React from 'react'

export default function TeacherDashboard() {
    return (
        <div className='p-4 lg:ml-64'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <div className="bg-white p-4 py-8 rounded-lg shadow-md">
                    <h4 className=' text-xl font-medium'>Nombre de parcours</h4>
                    <div className=" flex justify-between items-center pt-3">
                        <h2 className="text-4xl font-bold">0</h2>
                        {/* <img src={icon_drapau} className="" alt="icon_drapau"/> */}
                    </div>
                </div>
                <div className="bg-white p-4 py-8 rounded-lg shadow-md">
                    <h4 className=' text-xl font-medium'>Nombre d’étudiants par Parcours</h4>
                    <div className=" flex justify-between items-center pt-3">
                        <h2 className="text-4xl font-bold">0</h2>
                        {/* <img src={icon_point} className="" alt="icon_drapau"/> */}
                    </div>
                </div>
                <div className="bg-white p-4 py-8 rounded-lg shadow-md">
                    <h4 className=' text-xl font-medium'>Nombre de Labs créés</h4>
                    <div className=" flex justify-between items-center pt-3">
                        <h2 className="text-4xl font-bold">0</h2>
                        {/* <img src={icon_trophy} className="" alt="icon_drapau"/> */}
                    </div>
                </div>
                <div className="bg-white p-4 py-8 rounded-lg shadow-md">
                    <h4 className=' text-xl font-medium'>Nombre de labs lancés</h4>
                    <div className=" flex justify-between items-center pt-3">
                        <h2 className="text-4xl font-bold">0</h2>
                        {/* <img src={icon_trophy} className="" alt="icon_drapau"/> */}
                    </div>
                </div>
                <div className="bg-white p-4 py-8 rounded-lg shadow-md">
                    <h4 className=' text-xl font-medium'>Nombre Total de Labs</h4>
                    <div className=" flex justify-between items-center pt-3">
                        <h2 className="text-4xl font-bold">0</h2>
                        {/* <img src={icon_certification} className="" alt="icon_drapau"/> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

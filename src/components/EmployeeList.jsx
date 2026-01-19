import React from 'react'
import EmployeeCard from './EmployeeCard'

const EmployeeList = ({employees}) => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "40px"}}>
        {employees.map((emp) => (
          <div key={emp.id}>
            <EmployeeCard name={emp.name} department={emp.department} score={emp.score} active={emp.active} years={emp.years} image={emp.image}/>
          </div>
        ))}
    </div>
  )
}

export default EmployeeList
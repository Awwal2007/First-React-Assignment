import React from 'react'
import { images } from './components/App';
import EmployeeCard from './components/EmployeeCard';
import EmployeeList from './components/EmployeeList';


const App = () => {
  const employees = [
    {
      id: 1,
      name: "Aisha Bello",
      department: "Engineering",
      score: 92,
      active: true,
      years: 5,
      image: images.emp1
    },
    {
      id: 2,
      name: "John Mark",
      department: "Support",
      score: 58,
      active: false,
      years: 2,
      image: images.emp2
    },
    {
      id: 3,
      name: "Sadiq Musa",
      department: "Design",
      score: 76,
      active: true,
      years: 3,
      image: images.emp3
    }
  ];

  return (
    <div style={{width: "100%", height: "100%", padding: "20px", display: "flex", flexDirection: "column", gap: "80px", marginTop: "40px"}}>
      <h1 style={{color: "white", fontSize: "30px", textAlign: "center", fontWeight: "bold"}}>Employee Performance Dashboard</h1>
      <EmployeeList employees={employees} />
    </div>
  )
}

export default App
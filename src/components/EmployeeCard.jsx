import React from 'react'

const EmployeeCard = ({name, department, score, active, years, image}) => {
    let performanceLevel = "";

    if(score >= 85){
        performanceLevel = "Excellent";
    }else if(score >= 70){
        performanceLevel = "Good";
    }else if(score >= 50){
        performanceLevel = "Average";
    }else{
        performanceLevel = "Poor";
    }

    let borderColor = "";

    switch (performanceLevel) {
        case "Excellent":
            borderColor = "green";
            break;
        case "Good":
            borderColor = "blue";
            break;
        case "Average":
            borderColor = "orange";
            break;
        case "Poor":
            borderColor = "red";
            break;
        default:
            borderColor = "gray";
            break;
    }

    let bgColor = "";

    if(active === true){
        bgColor = "black";
    }else{
        bgColor = "lightgray";
    }

  return (
    <div style={{border: `1px solid ${borderColor}`, backgroundColor: `${bgColor}`,padding: "10px", borderRadius: "10px", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "white", minHeight: "380px"}} >
        <div>
            <h1 style={{color: "white", fontSize: "30px", lineHeight: "40px", fontWeight: "bold"}}>{name}</h1>
            <p style={{color: "gray"}}>{department}</p>
            <p>Score: {score}</p>
            <p style={!active ? {color: "red"} : {color: "green"}}>{active ? "Active Employee" : "Warning: Inactive Employee"}</p>
            <p>{years} years old</p>
            <p>Performance: {performanceLevel}</p>
            {score >= 80 && years >= 3 && active === true && <p style={{color: "green"}}>Promotion Eligible</p>}
        </div>
        <div>
            <img style={{height: "160px", width: "100%"}} src={image} alt={name}  loading='lazy'/>
        </div>
    </div>
  )
}

export default EmployeeCard
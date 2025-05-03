import React, { useEffect, useState } from 'react'
import { projectsData, projectsNav } from './Data';
import WorksItems from './WorksItems';


const Works = () => {
      const [item, setItem] = useState({name: "all"});
      const [projects, setProjects] = useState([])
      const [active, setActive] = useState(0);
      useEffect(()=>{
            if(item.name === 'all'){
                  setProjects(projectsData);
            }
            else{
                  const newProjects = projectsData.filter((project) =>{
                       return project.category === item.name;
                  });
            }

      })
  return (
      <div>
                <div className="work_filters">
      {projectsNav.map((item, index) => {
            return(
                  <span className="work_item" key={index}>
                        {item.name}
                  </span>
            )
      })}
    </div>

    <div className="work_container container grid"> 
      {projectsData.map((item) =>{
            return <WorksItems item={item} key={item.id}></WorksItems>
      })}
    </div>
      </div>
  )
}

export default Works;
// import React from 'react'

// const WorksItems = ({item}) => {
//   return (
//     <div className="work_card" key={item.id}>
//       <img src={item.image} alt="" className='work_img'/>
//       <h3 className="work_title">{item.title}</h3>
//       <a href="#" className="work_button">
//             Demo <i className="ri-arrow-right-line work_button-icon"></i>
//       </a>
//     </div>
//   )
// }

// export default WorksItems

const WorkItems = ({ item, deploymentLink }) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img'/>
        <h3 className="work__title">{item.title}</h3>
        <a href={deploymentLink} target="_blank" className="work__button" rel="noreferrer">
            Deployed Link <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorkItems
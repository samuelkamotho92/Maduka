import React,{useState} from 'react'
const Accordion = ({title,content,id}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item" key={id}>
    <div className="accordion-title" onClick={()=>setIsActive(!isActive)}>
      <div>{title}</div>
      <div>{isActive ? '-':'+'}</div>
    </div>
{isActive && <div className="accordion-content">{content}</div>}
  </div>
  )
}

export default Accordion

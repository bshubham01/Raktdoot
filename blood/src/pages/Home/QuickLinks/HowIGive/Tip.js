
export default function Tip({data}) {
  return (
    <div className="day">

        <h1 className="card-title">{data.heading}</h1>
        
        <ul className="tips">
        
            {data.tips.map((tip)=>(
                <li key={tip}>{tip}</li>
            ))}
        </ul>
      
    </div>
  )
}

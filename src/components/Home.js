import { useNavigate } from "react-router-dom"
export function Home(){
    const navigate = useNavigate()
    return(
        <div>
            <h2>
                Home page
            </h2>
            <button onClick={()=>{navigate('/orderSummary',{replace: true})}}>Place order</button>
        </div>
    )
}
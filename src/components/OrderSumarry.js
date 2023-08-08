import { useNavigate } from "react-router-dom"
export  function Order() {
    const navigate = useNavigate();
  return (
    <>
    <div>
      Order confirmed!
    </div>
    <button onClick={()=>{
        navigate(-1)
    }}>Back to home</button>
    </>
  )
}

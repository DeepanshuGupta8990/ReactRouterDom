import { Link, Outlet, useNavigate } from "react-router-dom"
export function NewProducts() {
  const navigate = useNavigate();
    return (
      <>
      <div>
        List of new products
      </div>
      {/* <nav>
        <Link to='featured'>Featured products</Link>
        <Link to='new'>New products</Link>
    </nav> */}
    <button onClick={()=>{navigate('/orderSummary')}}>Place order</button>
    {/* <Outlet/> */}
      </>
    )
  }
  
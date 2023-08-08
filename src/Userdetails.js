import { useParams } from "react-router-dom"

export function Userdetails() {
    const params = useParams()
    const userId = params.userId;
    console.log(window.location.pathname)
  return (
    <>
    <div>
      Details about {window.location.pathname.split("/")[window.location.pathname.split("/").length-1]}
    </div>
    <h2>{userId}</h2>
    </>
  )
}

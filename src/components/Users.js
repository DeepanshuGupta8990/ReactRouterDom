import { Outlet, Link, useSearchParams } from "react-router-dom"

export function Users() {
    const [searchparams, setSearchParams] = useSearchParams()
    const showActiveusers = searchparams.get('filter') === 'active';
  return (
    <div>
      <Link to='user1'>User 1</Link>
      <Link to='user2'>User 2</Link>
      <Link to='user3'>User 3</Link>
      <Outlet/>
      <div>
        <button onClick={()=> setSearchParams({filter: "active"})}>Active users</button>
        <button onClick={()=> setSearchParams({})}>reset filters</button>
      </div>
      {
        showActiveusers ? <h2>Showing active users</h2> : <h2>All users</h2>
      }
      {
        searchparams
      }
    </div>
  )
}

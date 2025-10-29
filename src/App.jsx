import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const [users, Setusers] = useState([])
  const [name, Setname] = useState('')
  const [email, Setemail] = useState('')
  const [comments,Setcomments] = useState('')
  const handleadd=()=>{
    if (name.trim === '' || email.trim === '')return 
        const newUser = {id:Date.now() , name, email}
        Setuser([...users,newUser])
        Setname('')
        Setemail('')
        Setcomments('')
  }
  return (
    <>
      <div>
        <h1>Survay Form</h1>
        <input
         type="text"
         placeholder="Enter name"
         value = {name}
         onChange={(e)=>Setname(e.target.value)}
        />
        <input 
         type = "email"
         placeholder="Enter email id"
         value={email}
         onChange={(e)=>Setemail(e.target.value)}
        />
        <input
         type ="text"
         placeholder="Enter comments"
         value={comments}
         onChange={(e)=>Setcomments(e.target.value)}
        />
        
        <button onclick={handleadd}>Add</button> 
        <ul>
          {users.map((user) => {
            return (
              <li key={user.id}>
                {user.name}({user.email})
              </li>
            )
          })}
        </ul>
        </div>      
    </>
  )
}

export default App

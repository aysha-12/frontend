
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [user, setuser] = useState([]);
  useEffect(() => {
    fetch('http://localhost:300/users')
      .then(res => res.json())
      .then(data => setuser(data))
  }, [])
  // react post request api

  const handle = (e) => {
    e.preventDefault()

    const name = e.target.name.value;
    const email = e.target.email.value;
    const profession = e.target.profession.value;

    const user = { name, email, profession }
    console.log(user)

    fetch('http://localhost:300/users', {

      method: "POST",
      headers: {
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.acknowledged) {
          alert(`${name}:is ok`)
          form.reset()
        }

      })


  }


  return (
    <div>



      <div className='grid grid-cols-3 gap-4 mt-10'>
        {
          user.map(data => <div key={data.id} className="card  bg-base-500 card-md shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Name: {data.name}</h2>
              <p>Email: {data.email}</p>
              <p>ID: {data.id}</p>
              <div className="justify-end card-actions">
                <button className="btn btn-primary">Add user</button>
              </div>
            </div>
          </div>)
        }
      </div>

      <div className='flex justify-center'>
        <div className='py-12 px-10 bg-neutral-100 w-96 my-20  rounded-2xl shadow-2xl'>
          <form onSubmit={handle}>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">name</legend>
              <input type="text" name='name' className="input border-0" placeholder="name" />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl"> email</legend>
              <input type="email" name='email' className="input border-0" placeholder="email" />

            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl"> profession</legend>
              <input type="text" name='profession' className="input border-0" placeholder="profession" />

            </fieldset>
            <button className='input border-0 flex justify-center mt-5 text-xl font-black cursor-pointer hover:bg-green-400'>Add user</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default App

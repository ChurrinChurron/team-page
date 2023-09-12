import './App.css'

function App() {

  const users = [

    {
      id: 1,
      name: 'Bill Mahoney',
      position: 'Product Owner',
      profile: '/assets/user1.png'
    },
    {
      id: 2,
      name: 'Saba Cabrera',
      position: 'Art Director',
      profile: '/assets/user2.png'
    },
    {
      id: 3,
      name: 'Shae Le',
      position: 'Tech Lead',
      profile: '/assets/user3.png'
    },
    {
      id: 4,
      name: 'Skylah Lu',
      position: 'Ux Designer',
      profile: '/assets/user4.png'
    },
    {
      id: 5,
      name: 'Griff Richards',
      position: 'Developer',
      profile: '/assets/user5.png'
    },
    {
      id: 6,
      name: 'Stan John',
      position: 'Developer',
      profile: '/assets/user6.png'
    }
  ]

  return (
    <main className='container'>
      <div className='container__text'>
        <h1 className='container__tit'>The creative crew</h1>
        <div className='text__parr'>
          <h2 className='container__subtit'>Who we are</h2>
          <h3 className='container__parr'>We are a team of creatively diverse. driven. innovative individuals working in various locations from the world.</h3>
        </div>
      </div>
      <section className='container__users'>
        {users.map(user => {
            return <div key={user.id} className='users__box'>
                <div>
                  <img src={user.profile} alt={user.name} />
                  <h3>{user.position}</h3>
                </div>
                <h2>{user.name}</h2>
              </div>
        })}
      </section>
    </main>
  )
}

export default App

// import React, { useEffect, useState } from 'react'
// import ServiceTable from './components/ServiceTable'

// const App = () => {

//   // const services = async () => {
//   //   const res = await fetch("http://20.193.149.47:2242/salons/service/")
//   //   const data = await res.json()
//   //   console.log(data)
//   // }

//   // services()

//   // useEffect(() => {
//   //   services()
//   // }, [])

//   const [data, setData] = useState([])


//   return (
//     <>
      
//       <ServiceTable />
      
//     </>
//   )
// }

// export default App



// import ServiceTable from './components/ServiceTable';
import './App.css';
import ServiceTable from './components/ServiceTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Service Catalog</h1>
      </header>
      <ServiceTable />
    </div>
  );
}

export default App;
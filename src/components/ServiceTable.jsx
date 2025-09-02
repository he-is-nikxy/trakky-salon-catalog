import React, { useState, useEffect, useCallback } from 'react';
import './ServiceTable.css';

// const API_BASE_URL = "http://20.193.149.47:2242/salons/service/";
// const API_BASE_URL = "http://20.193.149.47:2242/salons/service/";

const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  // const [currentPage, setCurrentPage] = useState(API_BASE_URL);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  const [test, setTest] = useState([])


  // const fetchData = useCallback(async (url) => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setServices(data.results || []);
  //     setNextPage(data.next);
  //     setPrevPage(data.previous);
  //     console.log(data)

  //   } catch (error) {
  //     console.error("Failed to fetch data:", error);
  //     setServices([]);
  //     setNextPage(null);
  //     setPrevPage(null);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  const fetchData = async () => {
    const res = await fetch('http://20.193.149.47:2242/salons/service/')
    const data = await res.json()
    // console.log(data)
    setTest(data)
    setServices(data.results || []);
    setNextPage(data.next);
    setPrevPage(data.previous);
    setLoading(false);
  }



  useEffect(() => {
    fetchData(test);
  }, []);
  // }, []);

  //   useEffect(() => {
  //   fetchData(currentPage);
  //   console.log('Services:', services);
  //   console.log('Loading:', loading);
  // }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const filteredServices = services.filter(service =>
  //   service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredServices = test.filter(service =>
    service.service_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

      <div className="table-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        <table className="service-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Salon Type</th>
              <th>Gender</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* {loading ? (
              <tr>
                <td colSpan="5" className="loading-state">Loading...</td>
              </tr>
            ) : filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <tr key={service.id}>
                  <td>{service.id}</td>
                  <td>{service.service_name}</td>
                  <td>{service.category_name}</td>
                  <td>{service.description}</td>
                  <td>₹{service.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data-state">No Data Available</td>
              </tr>
            )} */}
            {loading ? (
              <tr>
                <td colSpan="5" className="loading-state">Loading...</td>
              </tr>
            ) :
              test.length < 0 ? (
                <tr>
                  <td colSpan="5" className="no-data-state">No Data Available</td>
                </tr>
              ) :
                filteredServices.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.service_name}</td>
                    <td>{item.salon_type}</td>
                    <td>{item.gender}</td>
                    <td>₹{item.price}</td>
                  </tr>
                ))
            }
          </tbody>
        </table>
        <div className="pagination-controls">
          <button
            // onClick={() => setCurrentPage(prevPage)}
            onClick={() => setTest(prevPage)}
            disabled={!prevPage || loading}
          >
            Previous
          </button>
          <button
            // onClick={() => setCurrentPage(nextPage)}
            onClick={() => setTest(nextPage)}
            disabled={!nextPage || loading}
          >
            Next
          </button>
        </div>
      </div>

    </>

  );
};

export default ServiceTable;
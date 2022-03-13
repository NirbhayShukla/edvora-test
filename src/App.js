import { useEffect, useState } from "react";
import { Navbar, Loading, Main } from "./components";

function App() {
  // To store user and rides
  const [user, setUser] = useState({});
  const [allRides, setAllRides] = useState([]);
  const [loading, setLoading] = useState(true);

  // To load data from API
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  async function loadData() {
    const response = await fetch("https://assessment.api.vweb.app/user");
    const data = await response.json();
    const rideResponse = await fetch("https://assessment.api.vweb.app/rides");
    const rideData = await rideResponse.json();

    setUser(data);
    setAllRides(rideData);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Navbar user={user} />
          <Main allRides={allRides} station_code={user.station_code} />
        </div>
      )}
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";

function App() {
  const [currLocationJs, setCurrLocationJs] = useState({});
  const [locationMatched, setLocationMatched] = useState(false);

  useEffect(() => {
    getLocationJs();
  }, []);

  const getLocationJs = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCurrLocationJs({ latitude, longitude });
        // const upperlatitude=19.123065
        // const upperlongitutde=72.836779
      // Check if the user's location matches the desired location
      if (latitude<= upperlatitude && longitude === desiredLongitude) {
        setLocationMatched(true);
      }
    });
  };

  const previewStyle = {
    height: 350,
    width: 320,
  };

  // Set the latitude and longitude of the desired location
  const desiredLatitude = 19.1159576;
  const desiredLongitude = 72.8397202;

  return (
    <div>
      {locationMatched ? (
        <QrReader
          delay={100}
          style={previewStyle}
          onError={(err) => console.error(err)}
          onScan={(data) => console.log(data)}
        />
      ) : (
        <p>You are not in the correct location.</p>
      )}
    </div>
  );
}

export default App;

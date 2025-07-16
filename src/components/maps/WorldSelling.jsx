import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';

function WorldSelling() {

const geoUrl = "https://raw.githubusercontent.com/BolajiBI/topojson-maps/master/world-countries-sans-antarctica.json";

  return (
    <>
    <ComposableMap  className='dashboard-map'>
        <Geographies geography={geoUrl}>
        {({ geographies }) =>
            geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} style={{
                default: {
                fill: '#2196f3',
                border: 'black'
                },
                hover: {
                fill: 'black'
                }
            }} />
            ))
        }
        </Geographies>
    </ComposableMap>
    </>
  )
}

export default WorldSelling
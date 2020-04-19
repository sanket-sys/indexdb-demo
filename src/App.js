import React from 'react'
import ErrorBoundary from './ErrorBoundry'

class Location extends React.Component {
  state = {
    locations: [
      {
        "name": "Ojo",
        "zone": "Lagos State",
        "region": "South West"
      },
      {
        "name": "Ahiazu Mbaise",
        "zone": "Imo State",
        "region": "South East"
      },
      {
        "name": "Akoko-Edo",
        "zone": "Edo State",
        "region": "South South"
      },
      {
        "name": "Anka",
        "zone": "Zamfara State",
        "region": "North West"
      },
      {
        "name": "Akwanga",
        "zone": "Nasarawa State",
        "region": "North Central"
      },
      {
        // Empty!
      }
    ]
  }
  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Locations</h2>
          </div>
        </div>
        <div>
          {this.state.locations
            .map(location => 
            <ErrorBoundary>
              <LocationCard key={location.id} {...location} />
            </ErrorBoundary>
          )}
        </div>
      </div>
    )
  }
}

const LocationCard = (props) => {
  return (
    <div>
      <hr />
      <p><b>Name:</b> {props.name.toUpperCase()}</p>
      <p><b>Zone:</b> {props.zone}</p>
      <p><b>Region:</b> {props.region}</p>
      <hr />
    </div>
  )
}

const App = () => (
  <div>
  <ErrorBoundary>
    <Location />
  </ErrorBoundary>
</div>
)

export default App
import React from 'react'

const MapInfo = ({building}) => {
    return (
        <div>
            <h4>Building overview</h4>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Address</th>
                        <td>{building.address}</td>
                    </tr>
                    <tr>
                        <th>Build year</th>
                        <td>{building.build_year}</td>
                    </tr>
                    <tr>
                        <th>Property type</th>
                        <td>{building.property_type}</td>
                    </tr>
                    <tr>
                        <th>Property registry ID</th>
                        <td>{building.cadastral_building_id}</td>
                    </tr>
                    <tr>
                        <th>Floor area</th>
                        <td>{building.floorArea}</td>
                    </tr>
                    <tr>
                        <th>Floors</th>
                        <td> {building.floors}</td>
                    </tr>
                    <tr>
                        <th>Rooms</th>
                        <td> {building.rooms}</td>
                    </tr>
                    <tr>
                        <th>Building material</th>
                        <td> {building.building_material} </td>
                    </tr>
                    <tr>
                        <th>Heating</th>
                        <td> {building.heating_dist} </td>
                    </tr>
                    <tr>
                        <th>Heat source</th>
                        <td> {building.heating_source} </td>
                    </tr>
                    <tr>
                        <th>Sauna</th>
                        <td> {building.sauna ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <th>Solar energy potential</th>
                        <td> {building.elec} kWh/year </td>
                    </tr>
                    <tr>
                        <th>CO2 emission</th>
                        <td> {building.co2} kg/year </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MapInfo;
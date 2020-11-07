import React from 'react'

const MapInfo = ({building}) => {
    return (
        <div>
            <h4>Building overview</h4>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Address</th>
                        <td>{building.street_fi} {building.building_number}, {building.postal_code}</td>
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
                        <th>Building total floor area</th>
                        <td>{building.total_floor_area}</td>
                    </tr>
                    <tr>
                        <th>Floors</th>
                        <td> {building.floors} m2</td>
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
                        <th>Solar energy potential</th>
                        <td> {building.elec} kWh/year </td>
                    </tr>
                    <tr>
                        <th>Solar panel area</th>
                        <td> {building.co2} m2 </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default MapInfo;
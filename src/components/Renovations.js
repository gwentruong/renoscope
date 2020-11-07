import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const pastRenovationList = [
    {
        id: 1,
        year: 1990,
        renovation: "Heating",
        description: "Upgraded to water central heating"
    },
    {
        id: 2,
        year: 1995,
        renovation: "Pipe",
        description: "Replacement of previous pipe system"
    }, 
    {
        id: 3,
        year: 1997,
        renovation: "Kitchen tile and flooring",
        description: "Laminate kitchen tiles and waterproof flooring"
    },
    {
        id: 4,
        year: 1999,
        renovation: "Electrical cabling",
        description: "Remodeled and rerun to modern cabling"
    }
]

const upcomingRenovationList = [
    {
        id: 1,
        year: 2021,
        renovation: "Window",
        description: "Remodel all windows and insulation",
        estimateCost: 5000
    },
    {
        id: 2,
        year: 2025,
        renovation: "Facade",
        description: "Reinforce facade material",
        estimateCost: 1500
    },
    {
        id: 3,
        year: 2028,
        renovation: "Pipe",
        description: "Scheduled renovation",
        estimateCost: 8000
    },
    {
        id: 4,
        year: 2030,
        renovation: "Flooring",
        description: "Check for mold and leaking",
        estimateCost: 2000
    }
]

const RenovationUnit = ({unit}) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6" component="h2">
                    {unit.renovation}
                </Typography>
                <Typography color="textSecondary">
                    {unit.year}
                </Typography>
                <Typography variant="body2" component="p">
                    {unit.description}
                </Typography>
                {unit.estimateCost ? <Typography variant="body2" component="p">
                    € {unit.estimateCost}
                </Typography>
                : null}
            </CardContent>
        </Card>
    );
}

const Renovations = () => {
    const [pastRenovations, setPastRenovations] = useState(pastRenovationList)
    const [upcomingRenovation, setUpcomingRenovation] = useState(upcomingRenovationList)
    const [renovationUnit, setRenovationUnit] = useState({})

    return (
        <div>
            <Typography variant="h5" component="h2">
                Past renovations
            </Typography>
            <div>
                {pastRenovations.map(renovation => <RenovationUnit
                                                        key={renovation.id} 
                                                        unit={renovation} />)}
            </div>
            <Typography variant="h5" component="h2">
                Upcoming renovations
            </Typography>
            <div>
                {upcomingRenovation.map(renovation => <RenovationUnit
                                                        key={renovation.id} 
                                                        unit={renovation} />)}
            </div>
        </div>
    );
}

export default Renovations;
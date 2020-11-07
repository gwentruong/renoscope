import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

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
        estimateCost: 5000,
        accuracy: 2
    },
    {
        id: 2,
        year: 2025,
        renovation: "Facade",
        description: "Reinforce facade material",
        estimateCost: 1500,
        accuracy: 4
    },
    {
        id: 3,
        year: 2028,
        renovation: "Pipe",
        description: "Scheduled renovation",
        estimateCost: 8000,
        accuracy: 2
    },
    {
        id: 4,
        year: 2030,
        renovation: "Flooring",
        description: "Check for mold and leaking",
        estimateCost: 2000,
        accuracy: 1
    }
]

const RenovationUnit = ({unit}) => {
    return (
        <Paper>
            <Typography variant="h6" component="h2">
                {unit.renovation}
            </Typography>
            <Typography color="textSecondary">
                {unit.year}
            </Typography>
            <Typography variant="body2" component="p">
                Details: {unit.description}
            </Typography>
            {unit.estimateCost ? <Typography variant="body2" component="p">
                Estimation cost: € {unit.estimateCost}
            </Typography>
            : null}
            {unit.accuracy ? <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Accuracy</Typography>
                                <Rating name="read-only" value={unit.accuracy} readOnly />
                            </Box> : null}
        </Paper>
    );
}
const RenovationTimeline = ({unit}) => {
    return (
        <div>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <RenovationUnit unit={unit} />
                </TimelineContent>
            </TimelineItem>
        </div>
    );
}
const Renovations = () => {
    const [pastRenovations, setPastRenovations] = useState(pastRenovationList)
    const [upcomingRenovation, setUpcomingRenovation] = useState(upcomingRenovationList)
    const [renovationUnit, setRenovationUnit] = useState({})

    return (
        <Container>
            <Typography variant="h5" component="h2">
                Past renovations
            </Typography>
            <Timeline>
                {pastRenovations.map(renovation => <RenovationTimeline
                                                        key={renovation.id} 
                                                        unit={renovation} />)}
            </Timeline>
            <Typography variant="h5" component="h2">
                Upcoming renovations
            </Typography>
            <Timeline>
                {upcomingRenovation.map(renovation => <RenovationTimeline
                                                        key={renovation.id} 
                                                        unit={renovation} />)}
            </Timeline>
        </Container>
    );
}

export default Renovations;
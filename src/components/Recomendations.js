import React, {useState} from 'react'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';

const energyStatus = {
    rank: "D",
    consumption: 36000,
    recomendation: "Upgrade to more energy efficient electrical applicants, change heater model"
}

const sustainability = [
    {
        target: "Green roof",
        compatibility: true,
        url: "https://www.nps.gov/tps/sustainability/new-technology/green-roofs/define.htm#:~:text=A%20green%20roof%20is%20a,as%20vegetative%20or%20eco%E2%80%93roofs."
    },
    {
        target: "Solar panels",
        compatibility: false,
        url: "https://www.helen.fi/en/solar-panels/own-solar-power-plant"
    }
]

const Recomendations = () => {
    const [energy, setEnergy] = useState(energyStatus)
    const [sustain, setSustainability ] = useState(sustainability)

    const preventDefault = (event) => event.preventDefault();

    return (
        <Container>
            <Paper>
                <div>
                    <Typography variant="h5" component="h2">
                        Energy consumption status
                    </Typography>
                </div>
                <div>
                    <Typography variant="body2" component="h">
                        Rank : {energy.rank}
                    </Typography>
                </div>
                <div>
                    <Typography variant="body2" component="h">
                        Energy consumption : {energy.consumption} kW/year
                    </Typography>
                </div>
                <div>
                    <Typography variant="body2" component="h">
                        Recommendation : {energy.recomendation}
                    </Typography>
                </div>
            </Paper>
            <Paper>
                <div>
                    <Typography variant="h5" component="h2">
                        How to increase sustainable value of the building
                    </Typography>
                </div>
                {sustain.map(sus => <div>
                        <div>
                            <Typography variant="body2" component="h">
                                Type : {sus.target}
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" component="h">
                                compatibility : <Checkbox disabled checked={sus.compatibility} />
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" component="h">
                                <Link href={sus.url} onClick={preventDefault}>
                                    More information
                                </Link>
                            </Typography>
                        </div>
                </div>)}
            </Paper>
        </Container>
    );
}

export default Recomendations;
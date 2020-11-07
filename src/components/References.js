import React from 'react'
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const References = () => {
    const preventDefault = (event) => event.preventDefault();

    const references = [
        {
            id: 1,
            url: 'https://kartta.hel.fi/?setlanguage=en&e=25496825&n=6673044&r=4&w=&l=Karttasarja&o=100&swtab=kaikki',
            description: 'Building information of city of Helsinki',
            organization: 'City of Helsinki'
        },
        {
            id: 2,
            url: 'https://hri.fi/data/en_GB/dataset/paakaupunkiseudun-aurinkosahkopotentiaali',
            description: 'Photovoltaic potential in Helsinki Region',
            organization: 'Helsingin seudun ympäristöpalvelut HSY'
        },
        {
            id: 3, 
            url: 'https://www.urakkamaailma.fi/remonttien-hinnat',
            description: 'Price samples of renovation work in Finland',
            organization: 'URAKKAMAAILMA'
        }
    ]

    return (
        <div>
            {references.map(ref => {
                <div key={ref.id}>
                    <h6>{ref.description}</h6>
                    <p><b>{ref.organization}</b></p>
                    <p><link href={ref.url} onClick={preventDefault}>URL</link></p>
                </div>
            })}
        </div>
    );
}

export default References;

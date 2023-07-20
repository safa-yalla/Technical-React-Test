import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import Info from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';

import { Client } from '../pages/Clients';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

const Customer = ({ client }) => {
    return (
        <Grid item>
            <span
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
            >
                {/*<Tooltip title={client.id?.toString()}>*/}
                    <PersonIcon fontSize="small" style={{ marginRight: 5 }} />
                {/*</Tooltip>*/}
                {client.name}
            </span>
            <p>{client.address}</p>
            <Link
                href={{
                    pathname: '/orders',
                    query: {
                        customerId: client.id?.toString(),
                    },
                }}
            >
                <Button variant="contained">View Orders</Button>
            </Link>
        </Grid>
    );
};

export default Customer;
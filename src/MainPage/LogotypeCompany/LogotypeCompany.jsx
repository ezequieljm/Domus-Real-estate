import "./logotype.css";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const LogotypeCompany = ({ eventIngresar }) => 
    <div className='content-logo'>
        <section className='section-cont'>
            <Typography variant='h1'>DOMUS</Typography>
            <p>Propiedad exclusiva, asesoramiento personal.</p>
        </section>
        <Button variant='contained' color='primary' onClick={eventIngresar}>
            Ingresar
        </Button>
    </div>

export default LogotypeCompany;

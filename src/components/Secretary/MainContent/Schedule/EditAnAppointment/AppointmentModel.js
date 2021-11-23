export class ClientModel
{
    constructor(id,fullname, cellphone, email)
    {
        this.idClient = id;
        this.fullname = fullname;
        this.cellphone = cellphone;
        this.email = email;
    }

    getId()
    {
        return this.id;
    }

    getFullname() 
    {
        return this.fullname;
    }

    getCellphone()
    {
        return this.cellphone;
    }

    getEmail()
    {
        return this.email
    }

    setFullname(fullname)
    {
        this.fullname = fullname;
    }

    setCellphone(cellphone)
    {
        this.cellphone = cellphone;
    }

    setEmail(email)
    {
        this.email = email;
    }

    setId(id)
    {
        this.id = id;
    }
}

export class AppointmentModel 
{
    constructor(id, title, shortDescription, dateAppointment, hour, agent, propertie, stateAppointment, client) 
    {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.dateAppointment = dateAppointment;
        this.hour = hour;
        this.agent = agent;
        this.propertie = propertie;
        this.stateAppointment = stateAppointment;
        this.client = client;
    }

    getId()
    {
        return this.id;
    }

    getTitle()
    {
        return this.title;
    }

    getShortDescription()
    {
        return this.shortDescription;
    }

    getDateAppointment()
    {
        return this.dateAppointment;
    }

    getHour()
    {
        return this.hour;
    }

    getAgent()
    {
        return this.agent;
    }

    getPropertie()
    {
        return this.propertie;
    }

    getStateAppointment()
    {
        return this.stateAppointment;
    }

    getClient()
    {
        return this.client;
    }

    //setters

    setId(id)
    {
        this.id = id
    }

    setTitle(title)
    {
        this.title = title
    }

    setShortDescription(shortDescription)
    {
        this.shortDescription = shortDescription
    }

    setDateAppointment(dateAppointment)
    {
        this.dateAppointment = dateAppointment
    }

    setHour(hour)
    {
        this.hour = hour
    }

    setAgent(agent)
    {
        this.agent = agent
    }

    setPropertie(propertie)
    {
        this.propertie = propertie
    }

    setStateAppointment(stateAppointment)
    {
        this.stateAppointment = stateAppointment
    }

    setCellphone(client)
    {
        this.client = client;
    }
}
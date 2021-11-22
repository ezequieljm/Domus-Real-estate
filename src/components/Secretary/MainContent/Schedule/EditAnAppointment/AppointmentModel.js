export class AppointmentModel 
{
    constructor(id, title, shortDescription, dateAppointment, hour, agent, propertie, stateAppointment, cellphone, fullname, email) 
    {
        this.id = id;
        this.title = title;
        this.shortDescription = shortDescription;
        this.dateAppointment = dateAppointment;
        this.hour = hour;
        this.agent = agent;
        this.propertie = propertie;
        this.stateAppointment = stateAppointment;
        this.cellphone = cellphone;
        this.fullName = fullname;
        this.email = email;
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

    getCellphone()
    {
        return this.cellphone;
    }

    getFullname()
    {
        return this.fullName;
    }

    getEmail()
    {
        return this.email;
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

    setCellphone(cellphone)
    {
        this.cellphone = cellphone
    }

    setFullname(fullname)
    {
        this.fullname = fullname
    }

    setEmail(email)
    {
        this.email = email
    }
}
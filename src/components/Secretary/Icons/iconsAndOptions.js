import { FormatListBulleted, Update, Print, Build, Settings } from "@material-ui/icons";
import { Refresh, Report, MenuBook, AddBox, Schedule, PersonAdd, Person, Business } from "@material-ui/icons";

const listIcons = [
	<FormatListBulleted />,
	<Update />,
	<Print />,
	<Build />,
	<Settings />,
	<Refresh />,
	<Report />,
	<MenuBook />,
];

const scheduleIcons = [
    <AddBox />, 
    <Schedule />
];

const clientIcons = [
	<Update />,
	<PersonAdd />,
	<Business />,
	<Person />,
];

export const iconsAndOptions = {
    pageTool: {
        type: "Page tool",
        icons: listIcons,
        options:[ "Configuración", "Recargar página", "Reportar problema", "Consultar manual" ]
    },
    requests: {
        type: "Request",
        icons: listIcons,
        options:[ "Listar Solicitudes", "Actualizar Lista", "Imprimir", "Herramientas" ]
    },
    schedule: {
        type: "Schedule",
        icons: scheduleIcons,
        options:["Agendar Cita", "Mostrar Agenda"]
    },
    client: {
        type: "Client",
        icons: clientIcons,
        options: []
    }
}
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },
    {
        title: 'Respostas',
        path: '/Respostas',
        icon: <IoIcons.IoMdPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Downloads',
        path: '/Download',
        icon: <AiIcons.AiOutlineCloudDownload  />,
        cName: 'nav-text'
    },
    {
        title: 'Atualizações',
        path: '/Atualizacao',
        icon: <MdIcons.MdOutlineSystemSecurityUpdate />,
        cName: 'nav-text'
    },
    {
        title: 'Reportar Bug',
        path: '/ReportBug',
        icon: <AiIcons.AiOutlineBug />,
        cName: 'nav-text'
    },

]
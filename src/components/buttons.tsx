import { Link } from "react-router-dom";
import { LeftArrowIcon } from "./icons";

type ButtonProps = {
    link: string
    title?: string
    className?: string
}

export const BackButton = ({ link, title, className }: ButtonProps) => (
    <Link to={link} className={"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " + className}>
        <LeftArrowIcon className="w-4 h-4 mr-2 -ml-1" />
        {title}
    </Link>
)
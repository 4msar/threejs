import { Link } from "react-router-dom"
import { RightArrowIcon } from "./icons"

export type CardProps = {
    className?: string
    title: string
    description?: string
    link?: {
        title: string
        url: string
    }
}

export function Card({ title, description, link, className }: CardProps) {

    return (
        <div className={"max-w-sm w-64 p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 " + className}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

            {description && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>}

            {link && <Link to={link.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {link.title}
                <RightArrowIcon className="w-4 h-4 ml-2 -mr-1" />
            </Link>}
        </div>
    )
}


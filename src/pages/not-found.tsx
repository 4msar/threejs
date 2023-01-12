import { BackButton, Box } from "src/components"

function NotFound() {

    return (
        <Box className="flex h-screen w-screen justify-center items-center flex-col text-center">
            <h1 className="my-4 font-bold text-8xl">404</h1>
            <p className="text-4xl">Page not found</p>
            <BackButton className="my-4" link="/" title="Back to Home" />
        </Box>
    )
}

export default NotFound

import { Card, CardProps, Container } from "src/components"

const PROJECTS: CardProps[] = [
    {
        title: "S2WT Kamdo",
        link: {
            title: "View Project",
            url: "/s2wt-kamdo"
        }
    }
]

function Home() {

    return (
        <Container className="flex flex-col">
            <h1 className="font-bold text-5xl my-10 text-center">Three JS Projects</h1>
            <div className='flex flex-wrap items-center my-4 justify-center m-4'>
                {PROJECTS.map((item, index) => (
                    <Card key={index} {...item} className="m-1" />
                ))}
            </div>
        </Container>
    )
}

export default Home

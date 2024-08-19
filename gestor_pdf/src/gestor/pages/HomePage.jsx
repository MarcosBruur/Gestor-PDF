import { InputPDF } from "../components/InputPDF"
import { Navbar } from "../components/Navbar"
import { Title } from "../components/Title"


export const HomePage = () => {
    return (
        <>
            <div className="mb-5">
                <Navbar />
            </div>
            <div className="mb-2">
                <Title />
            </div>
            <div>
                <InputPDF />
            </div>


        </>
    )
}

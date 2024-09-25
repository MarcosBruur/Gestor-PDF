import { InputPDF } from "../components/InputPDF"
import { Navbar } from "../components/Navbar"
import {Footer} from "../components/Footer"
import { OffCanvas } from "../components/OffCanvas"
import { Title } from "../components/Title"
import "../css/styles.css"

export const HomePage = () => {
    return (
        <>  
            <nav>
                <div className="mb-5">
                    <Navbar />
                </div>
            </nav>
    
           <main>
                <div className="mb-2">
                    <Title />
                </div>
                <div>
                    <InputPDF />
                </div>
                
           </main>

           <footer>
                <Footer/>
           </footer>
            

            
        </>
    )
}

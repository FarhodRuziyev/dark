
import Navbar from '../navbar'

export default function Leyout({children}) {
    return(
        <>
            <div>
                <Navbar/>
                {children}
            </div>
        </>
    )
}
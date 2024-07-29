import '../index.css';
import programming from '../pictures/programming.webp';
function Medaillion() {
    return(
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${programming})` }}>
            <div className="bg-gray-700 bg-opacity-85 p-10">
                <h2 className="text-2xl font-bold text-white">Medailonek</h2>
                <p className="text-white p-4">
                    Jsem studentem aplikované informatiky na Univerzitě Jana Evangelisty Purkyně, kde se specializuji na softwarové inženýrství a databáze. 
                    Během studia jsem získal hluboké znalosti v programování, návrhu systémů a práci s databázemi. 
                    Univerzita mi poskytla silný teoretický základ, který aplikuji při řešení praktických problémů.
                </p>
                <p className="text-white p-4">
                    Mojí zálibou je vývoj webových aplikací s CRUD operacemi. 
                    Rád navrhuji a implementuji uživatelsky přívětivé a efektivní aplikace, které umožňují uživatelům snadno spravovat data. 
                    Práce na těchto projektech mě baví, protože spojuje moji kreativitu s technickými dovednostmi, a zároveň mi umožňuje neustále se zlepšovat a učit nové technologie.
                </p>
            </div>
        </div>
    )
}

export default Medaillion;
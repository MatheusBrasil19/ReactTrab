
import './style.css'
import game from '../../assets/game.png'


function Aside(){
     return (
     <aside className="left">
          
            <img src={game} width="160px" alt="Logo dos games"/>
          
            <ul>
                <li>
                    <a href="#inicio" className="active">Inicio</a>
                </li>
                <li>
                    <a href="#carreira">Categorias</a>
                </li>
                <li>
                    <a href="#contato">Contatos</a>
                </li>
                <li>
                    <a href="#sobre">Sobre</a>
                </li>
            </ul>
        </aside>
        )
    
}
export default Aside
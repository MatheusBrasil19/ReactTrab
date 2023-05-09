import './style.css'
import arma from '../../assets/arma.png'
import livros from '../../assets/livros.png'
import terror from '../../assets/terror.png'

function table(){

return(


            
            <table>
                <thead>
                <tr>
                    <th>Terror</th>
                    <th>Ação</th>
                    <th>RPG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
               
                    <img src={terror} width="40px" alt="Logo dos games"/>
                    </td>
                    <td>
                    <img src={arma} width="40px" alt="Logo dos games"/>
                    </td>
                    <td>
                    <img src={livros} width="40px" alt="Logo dos games"/>
                    </td>
                </tr>
               </tbody>
               
                <tr>
                    <td>Buscando se assustar</td>
                    <td>Que tal um pouco de ação</td>
                    <td>Sobrando tempo vem de RPG</td>
                </tr>
            </table>

           
       

        


)

}
export default table
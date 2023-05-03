import Container from '../node_modules/react-bootstrap/Container';
import Button from '../node_modules/react-bootstrap/Button';

export const Task = (props) => {
    return(
        <tr className="" style={{backgroundColor: props.completed ? "green" : "white"}}>
                  <th scope="row">{props.id}</th>
                  <td>{props.taskName}</td>
                  <td><Button className="btn-success" onClick={()=>props.completeTask(props.id)}>x</Button></td>{/* Add an arrow function when using params in func */}
                  <td><Button className="btn-danger" onClick={()=>props.deleteTask(props.id)}>x</Button></td>{/* Add an arrow function when using params in func */}
                
                </tr>
    );
}
import { CiBellOn, CiBellOff, CiPhone, CiWarning, CiTrash } from 'react-icons/ci';
import Button from '../components/Button';

function ButtonPage() {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button primary rounded className="my-2 ml-2" onClick={handleClick}>
                    <CiBellOn />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary rounded className="my-2 ml-2">
                    <CiBellOff />
                    Secondary
                </Button>
            </div> 
            <div>
                <Button success rounded className="my-2 ml-2">
                    <CiPhone /> 
                    Success
                </Button>
            </div>
            <div>
                <Button warning rounded outline className="my-2 ml-2">
                    <CiWarning />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger rounded className="my-2 ml-2">
                  <CiTrash />
                  Danger
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;
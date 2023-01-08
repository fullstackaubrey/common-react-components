import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = (event) => {
        setShowModal(false);
    };

    const actionBar = 
    <div>
        <Button onClick={handleClose} danger outline>Exit Modal</Button> 
    </div>

    const modal = 
    <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
            <p className="mb-3">To close this modal, click anywhere on the gray background. Or, click the exit button.</p>
        </p>
    </Modal>

    return (
        <div>
            <div className="flex justify-center">
                <Button onClick={handleClick} primary>
                    Open Modal
                </Button>
            {showModal && modal}
           </div>

            <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget augue a nisi condimentum fermentum. Vivamus dolor felis, dignissim sed aliquam in, rhoncus in turpis. In hac habitasse platea dictumst. Nam vel accumsan libero, a porta orci. Ut at interdum massa, a ultricies magna. Donec interdum ipsum in consectetur tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris elit risus, suscipit eu euismod et, posuere quis arcu. Integer placerat et lorem ut sodales. Donec vehicula non est eget venenatis. Aenean quis facilisis mauris. In eleifend augue id ligula feugiat, ut aliquam risus iaculis.
            </p>
           <p className="mt-3">
            Morbi ligula nisl, sollicitudin sit amet felis nec, blandit lacinia libero. Phasellus volutpat urna vitae blandit vulputate. Suspendisse laoreet libero ligula, ac facilisis odio hendrerit in. Sed fringilla, eros at suscipit facilisis, augue velit tincidunt nisl, ut eleifend ante lorem vel ipsum. Proin dapibus arcu nec mauris gravida, sed semper purus scelerisque. Pellentesque eu quam id lacus ultricies volutpat semper vitae dui. Quisque ac dui eros. In volutpat porta tincidunt. Pellentesque id augue eu eros varius imperdiet. Duis semper vulputate eros, id tempus nulla scelerisque id. Cras et risus vel dolor fringilla congue. Nullam luctus neque a elementum convallis. Sed vitae ligula odio. Nunc fermentum quis lorem quis consectetur. Nam placerat felis nisi, interdum finibus leo finibus et.
           </p>
           <p className="mt-3">
            Maecenas interdum arcu eros, eget pharetra nisl sodales et. Pellentesque vel leo scelerisque, consequat orci nec, molestie turpis. Suspendisse potenti. Proin vulputate sagittis consectetur. Suspendisse non dignissim magna. Aliquam orci ex, luctus nec euismod ac, aliquam porttitor leo. Suspendisse nisl felis, iaculis eu tempus tristique, luctus at dui. Mauris lobortis at odio gravida hendrerit. Sed sem lectus, faucibus a volutpat a, suscipit ac elit. Phasellus sed nisl eu diam pharetra bibendum et sit amet nunc. Nullam sed est sit amet dui tincidunt consectetur. Cras a dapibus dolor, non euismod leo. Aenean at justo elementum, efficitur lectus congue, interdum ipsum. Nullam at felis orci. Duis ac purus iaculis, tincidunt ipsum vel, mollis erat. Mauris sem ipsum, volutpat non elit id, lobortis interdum ipsum.
           </p>
           <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend eget felis ut tristique. Nulla ultrices porttitor ante eu egestas. Aliquam lobortis pellentesque placerat. Donec tempus pellentesque nunc ac semper. Duis ultrices, elit ac varius interdum, nisi sapien facilisis felis, at finibus sapien nibh accumsan nisi. Cras vehicula diam ut arcu suscipit commodo. Integer lectus odio, fermentum eget sagittis sed, eleifend vel elit. Suspendisse ac dui nec ex scelerisque rhoncus in vitae augue.
           </p>
           <p className="mt-3">
            Sed a aliquam orci, a bibendum nulla. Fusce vitae libero interdum, dignissim tellus in, venenatis ligula. Nunc eu tellus sed dolor vehicula dapibus eu sit amet orci. Morbi cursus sem in justo varius pretium. Mauris ac mauris venenatis, laoreet dolor ac, consectetur eros. Fusce interdum vehicula arcu vitae vestibulum. Pellentesque convallis laoreet risus, a fermentum libero rutrum eu.
           </p>
           <p className="mt-3 mb-3">
           Aliquam auctor condimentum ante, ac porttitor quam gravida sit amet. Etiam sed auctor nunc, eu eleifend justo. Sed mattis porta rutrum. Fusce dui purus, blandit laoreet tempus id, vestibulum id eros. Vestibulum venenatis massa eleifend nibh rutrum, vitae fermentum magna faucibus. Curabitur lorem sem, blandit vel rutrum elementum, varius a turpis. Curabitur non gravida est. Maecenas id dui eget velit pharetra laoreet. Integer a molestie ex. Proin placerat purus ante, quis congue odio fermentum ut. Sed sagittis nunc odio, ac suscipit quam sollicitudin varius. Suspendisse eget eleifend felis, ut placerat neque. Suspendisse vitae orci eget ligula laoreet eleifend. Integer rhoncus consectetur massa, vel ultrices nunc.
           </p>
           <div className="flex justify-center mb-4">
                <Button onClick={handleClick} primary>
                    Open Modal
                </Button>
            </div>
        </div>
    );
}

export default ModalPage;
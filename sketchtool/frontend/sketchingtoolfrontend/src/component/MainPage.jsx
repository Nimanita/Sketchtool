
import React from 'react';
import {useSelector} from 'react-redux';
import Alert from 'react-popup-alert'

function MainPage() {
  
 
  
  const component = useSelector(state=>state.component);
  const alertMessage = useSelector(state=>state.alertmessage);
  const alertType = useSelector(state=>state.alerttype);
  const alertShow = useSelector(state=>state.alertshow);
  console.log("alertMessage" , alertMessage)
  return (
   
    <div className="container App">
    <div>
      {component}</div>
      <div>
      <Alert
        header={'Header'}
        btnText={'Close'}
        text={alertMessage}
        type={alertType}
        show={alertShow}
       
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      /></div>
     </div>
    
  );
}

export default MainPage;

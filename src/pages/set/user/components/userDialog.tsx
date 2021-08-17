import React from "react";
import { Modal } from 'antd';

interface interfaceState {
  visible: boolean;
}

export default class Dialog extends React.Component<any> {

  state:interfaceState {
    visible: true
  }
 
  render() {
    return (

      <Modal title="Basic Modal">
        
      </Modal>
    )
  }
}
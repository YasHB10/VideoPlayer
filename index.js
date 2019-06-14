import React from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';
//import Player from './src/javascript/Player';
import CapsulesCtrl from './CapsulesCtrl';


export default class FB01 extends React.Component {
    /* 
     * Forma provisional de la clase index  esta estructura deben de tener 
     * los componentes que correspondan a los controladores de las capsulas
     */
    render() {
        return (
            <View>
                <CapsulesCtrl>
                </CapsulesCtrl>
            </View>
            );
        
    }
}


AppRegistry.registerComponent('FB01', () => FB01);
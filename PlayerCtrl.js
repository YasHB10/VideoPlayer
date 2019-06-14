import * as React from 'react';
import {
    Environment, VrButton, Text, View, StyleSheet, NativeModules,
} from 'react-360';
import VideoModule from 'VideoModule';
/*
 *  Permite pausar y reaunar la reproduccion de los videos
 *  dado que trabaja directamente con el Video module una sola 
 *  instancia de este componente puede se usado para todoslos 
 *  videos de las capsulas
 */
export default class PlayerCtrl extends React.Component {
    /*
     * Permite saber si el video esta pausado para saber
     * que funcion debe de tener este boton, ya sea 
     * para pausar o reanudar el video
     */
    state = {
        isPaused: false,
    }

    pauseVideo() {
        this.setState({ isPaused: true });
        VideoModule.pause('myplayer');
    }

    resumeVideo() {
        this.setState({ isPaused: false });
        VideoModule.resume('myplayer');
    }

    render() {
        const isPausedAux = this.state.isPaused;
        const isPlayingAux = this.props.IsPlayingVideo;
        if (isPlayingAux) {
            if (isPausedAux) {
                return (
                    <View  >
                        <VrButton style={styles.PauseBtn}
                            onClick={() => this.resumeVideo()}
                        >
                            <Text style={styles.PauseBtnText}>
                                Play
                        </Text>
                        </VrButton>
                    </View>
                );
            } else {
                return (
                    <View  >
                        <VrButton style={styles.PauseBtn}
                            onClick={() => this.pauseVideo()}
                        >
                            <Text style={styles.PauseBtnText}>
                                Pausa
                        </Text>
                        </VrButton>
                    </View>
                );
            }
        } else {
            return null;
        }
    }
}

const styles = StyleSheet.create({
    PauseBtn: {
        width: 150,
        height: 100,
        padding: 20,
        backgroundColor: '#9f04ce',
        borderColor: '#52036b',
        borderWidth: 5,
        justifyContent: 'center',
        marginBottom: 20,
        transform: [
            {
                translate: [2700, -60, 0],
            }
        ],
    },
    PauseBtnText: {
        fontSize: 30,
        textAlign: 'center',

    },

});

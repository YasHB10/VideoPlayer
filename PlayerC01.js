import * as React from 'react';

import {
    Environment,
    VrButton,
    Text,
    View,
    StyleSheet,
    staticAssetURL,
    Animated
} from 'react-360';
import VideoModule from 'VideoModule';
//import staticResourceURL from 'staticResourceURL';
const FOCUS_SCALE = 1.3;
/*
 *  Componente de tipo boton encargado de mostrar el video en el fondo 
 *  contiene un estado que permite saber si el boton ha sido oprimido
 *  o no
 *  
 *  
 */
export default class PlayerC01 extends React.Component {
    state = {
        isClicked: false,
        hasFocus: false,
        scaleAnim: new Animated.Value(0),
    }

    /*
     * Funcion que permite generar la direccion del video que se 
     * quiera mostrar
     * 
     * Esta funcion debe de recibir un string de tres caracteres como 110
     * donde el primer caracter es el numero de capsula, el segundo
     * caracter es el estado actual de la capsula y el ultimo el numero 
     * de la respuesta
     */
    GetVideoPath(videoId, IsFemale) {
        const capsuleNum = videoId.charAt(0);
        const capsulePartNum = videoId.charAt(1);
        const capsulSubPartNum = videoId.charAt(2);
        gender = '';

        if (IsFemale === true)
            gender = 'F';
        else
            gender = 'M';
        const route = './Video/Capsula' + capsuleNum +
            '/Video' + capsulePartNum + "_" + capsulSubPartNum + gender + '.mp4';
            //'/Video' + capsulePartNum + "_" + capsulSubPartNum + '.mp4';
        console.log("route " + route);
        return (route);
    }

    /*
     * Esta funcion crea una instancia del video player en el modulo de video
     * La funcion recibe varios argumentos
     * 
     *  videoPath   ->  direccion del video
     *  UpdateState -> Funcion de la clase que controle la capusla permite 
     *                  actualizar el estado de la capsula una vez finalizado 
     *                  el video
     *  updateIsPlayingVideo -> Funcion de la clase que controle la capsula
     *                          actualiza el estado que permite conocer si 
     *                          se esta reproduciendo un video o no
     *  nextState   ->  string, Es siguiente estado al que se actualiza la capsula
     *                  un vez que se termina la reproduccion del video
     *  CanDestroyPlayer    ->  booleano, permite saber si se debe de destruir la instancia 
     *                          del video player
     */
    CreateVideoPlayer(videoPath, UpdateState, updateIsPlayingVideo, nextState, UpdateTellTruth, TellingTruthValue, idAnswer, UpdateUserAnswer) {
        // indica que ya se selecciono ese boton
        this.setState({ isClicked: true })
        //
        //if (CanDestroyPlayer)
        try {
            VideoModule.destroyPlayer('myplayer');
        } catch (error) {
            console.error(error);
        }

        const player = VideoModule.createPlayer('myplayer');

        player.play({
            source: {
                url: staticAssetURL(videoPath)
            },
            stereo: '3DBT',
            volume: 1,
            muted: false,
        });

        /*
         *  Se agrega un evento al video player para hacer la transicion de estado
         *  cuando el video haya terminado
         */
        player.addListener('onVideoStatusChanged', (event: VideoStatusEvent) => {
            if (event.status === 'finished') {
                console.log('Video is finished');
                UpdateState(nextState);
                updateIsPlayingVideo(false);
            }
        });

        UpdateTellTruth(TellingTruthValue)
        updateIsPlayingVideo(true);
        Environment.setBackgroundVideo('myplayer');
        UpdateUserAnswer(idAnswer);
        //const player = VideoModule._videoPlayers.getPlayer('myplayer');
        // the evet should be here
    }


    _focus = () => {
        // start an animation
        Animated.timing(this.state.scaleAnim, {
            toValue: 1,
            duration: 300,
        }).start();
        this.setState({ hasFocus: true });
    };

    _blur = () => {
        // start an animation
        Animated.timing(this.state.scaleAnim, {
            toValue: 0,
            duration: 300,
        }).start();
        this.setState({ hasFocus: false });
    };



    /*
     *  Cuando se intancia este componente se le deben de asignar algunos parametros 
     *  para su correcto funcionamiento
     *  
     *  videoId ->  string que contiene el tres digitos de donde se construira la ruta 
     *              al video, ver comentario de la funcion GetVideoPath
     *  
     */

    render() {

        const VideoId = this.props.videoId;
        console.log("IsFemale props " + this.props.IsFemale);
        const isfemale = this.props.IsFemale;
        const videoPath = this.GetVideoPath(VideoId, isfemale);
        const ButtonMessage = this.props.ButtonMessage;        
        const isClickedAux = this.state.isClicked;
        const videoPlaying = this.props.IsPlayingVideo;


            if (!isClickedAux && !videoPlaying) {
                return (
                    //<View style={styles.greetingBox}>
                    <VrButton
                        onClick={() => this.CreateVideoPlayer(videoPath, this.props.UpdateState, this.props.UpdateIsPlayingVideo, this.props.nextState, this.props.UpdateTellTruth, this.props.TellingTruthValue, this.props.answerID, this.props.updateAnswerUser)}
                        onExit={this._blur}
                        onEnter={this._focus} 
                    >
                        <Animated.View
                            style={[
                                styles.VrButton,
                                this.state.hasFocus && styles.buttonFocused,
                                {
                                    // With this the width of the this view
                                    // is animated with the value of scaleAnim
                                    // by an interpolation
                                    width: this.state.scaleAnim.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [450, 450 * FOCUS_SCALE],
                                    }),
                                }]}>
                            <Text style={styles.VrTextBtn}>
                                {ButtonMessage}
                            </Text>
                        </Animated.View>
                    </VrButton>
                    //</View>
                );
            } else {
                return (
                    null
                );
            }
  
    }
}


const styles = StyleSheet.create({
    VrButton: {
        //width: 450,
        height: 100,
        padding: 20,
        backgroundColor: '#275472',
        borderColor: '#162f3f',
        borderWidth: 5,
        justifyContent: 'center',
        marginBottom: 20,
    },

    buttonFocused: {
        backgroundColor: '#141e68',
        borderColor: '#f407e4',
    },

    VrTextBtn: {
        fontSize: 30,
        textAlign: 'center',

    }
});
 
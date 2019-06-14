import * as React from 'react';

import {
    Environment, staticAssetURL
} from 'react-360';
import VideoModule from 'VideoModule';

//import staticResourceURL from 'staticResourceURL';

/*
 *  Componente de tipo boton encargado de mostrar el video en el fondo 
 *  contiene un estado que permite saber si el boton ha sido oprimido
 *  o no
 *  
 *  
 */
export default class PlayerAuto extends React.Component {
    state = {
        isClicked: false,
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
        console.log("IsFemale player" + IsFemale);
        const route = './Video/Capsula' + capsuleNum +
            //const route = 'https://qnafactbot13812c.blob.core.windows.net/capsula' + capsuleNum +
            //'/Video' + capsulePartNum + "_" + capsulSubPartNum + '.mp4';
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
    CreateVideoPlayer(videoPath, UpdateState, updateIsPlayingVideo, nextState) {
        // indica que ya se selecciono ese boton
        //this.setState({ isClicked: true })
        //
        //if (CanDestroyPlayer)
        try {
            VideoModule.destroyPlayer('myplayer');
        } catch (error) {
            console.error(error);
        }
        
        const player = VideoModule.createPlayer('myplayer');
        if (player)
            console.log("player");

        player.play({
            source: {
                //url: videoPath
                url: staticAssetURL(videoPath)
            },
            stereo: '3DBT',
            volume: 1,
            muted: false,
        });
        //
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

        updateIsPlayingVideo(true);
        Environment.setBackgroundVideo('myplayer');

        //const player = VideoModule._videoPlayers.getPlayer('myplayer');
        // the evet should be here
    }


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
        //this.setState({ isClicked: this.props.buttonClicked });
        const isClickedAux = this.state.isClicked;
        if (!isClickedAux) {
            this.CreateVideoPlayer(videoPath, this.props.UpdateState, this.props.UpdateIsPlayingVideo, this.props.nextState);
            this.setState({ isClicked: true });
        }
        return (
            null
        );
    }
}
 
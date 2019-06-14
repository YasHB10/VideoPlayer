import React from 'react';
import Player from './Player';
import PlayerAuto from './PlayerAuto';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Environment,
    asset
} from 'react-360';

export default class Capsule04Ctrl extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            CapsuleState: "1",
            //isPlayingVideo: false,
            StateUpdated: false,
            AnswerUser: []
        }

        this.updateCapsuleState = this.updateCapsuleState.bind(this);
        this.updateAnswerUser = this.updateAnswerUser.bind(this);
        //this.upDateisPlayingVideo = this.upDateisPlayingVideo.bind(this);
    }

    updateCapsuleState(value) {
        this.setState({ CapsuleState: value });
    }

    updateAnswerUser(IdButton) {
        aux = this.state.AnswerUser.slice();
        aux[aux.length] = IdButton;
        this.setState({ AnswerUser: aux });
    }

    render() {
        messageBtn01 = "";
        messageBtn02 = "";
        
        auxState = this.state.CapsuleState;
        isPlayingVideoAux = this.props.IsPlayingVideo;
        //console.log("values " + auxState);
        switch (auxState) {
            case "1":
                return (
                    <View key="00">
                        <PlayerAuto
                            videoId="411"
                            ButtonMessage="Empezar"
                            UpdateState={this.updateCapsuleState}
                            UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                            nextState="2"
                            IsFemale={this.props.IsFemale}
                        >
                        </PlayerAuto>
                    </View>
                );
            case "2":
                if (this.props.IsFemale)
                {
                    messageBtn01 = "Hago lo que \u00E9l dice";
                    messageBtn02 = "Le digo que yo tambi\u00E9ln tengo fotos de \u00E9l y que las voy a compartir";
                }
                else
                {
                    messageBtn01 = "Hago lo que ella dice";
                    messageBtn02 = "Le digo que yo tambi\u00E9ln tengo fotos de ella y que las voy a compartir";
                }
                return (
                        <View style={styles.Dialog01} key="02">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId="422"
                                    ButtonMessage={messageBtn01}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="2"
                                    answerID={"13,39,48"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="421"
                                    ButtonMessage={messageBtn02}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="2"
                                    answerID={"13,39,47"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="423"
                                    ButtonMessage="Hablo con la Orientadora (Profesora de confianza)"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"13,39,49"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>
                            </View>
                        </View>
                );
            case "3":            
                console.log("Capsula terminada");
                auxIdAnswer = this.state.AnswerUser.slice();
                answertoBD = [[]];
                for (i = 0; i < auxIdAnswer.length; i++) {
                    answertoBD[i] = [];
                    auxBD = auxIdAnswer[i].split(",");
                    a = parseInt(auxBD[0][0]) * 10;
                    b = parseInt(auxBD[0][1]);
                    a = a + b;
                    //console.log(a + " " + b);
                    answertoBD[i][0] = a;
                    a = parseInt(auxBD[1][0]) * 10;
                    b = parseInt(auxBD[1][1]);
                    a = a + b;
                    // console.log(a + " " + b);
                    answertoBD[i][1] = a;
                    a = parseInt(auxBD[2][0]) * 10;
                    b = parseInt(auxBD[2][1]);
                    a = a + b;
                    //console.log(a + " " + b);
                    answertoBD[i][2] = a;

                    console.log(answertoBD[i][0] + " " + answertoBD[i][1] + " " + answertoBD[i][2]);
                }
                this.props.UpdateCapsuleNumber(7);
                return (
                    null
                );
        }
    }
}

const styles = StyleSheet.create({
    Dialog01: {
        transform: [
            {
                translate: [1200, -250, 0],
            }
        ]
    },

    wrapper: {

        backgroundColor: 'rgba(0, 0, 0, 0)',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },


});

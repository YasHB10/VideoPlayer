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

export default class Capsule03Ctrl extends React.Component {
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
        auxState = this.state.CapsuleState;
        isPlayingVideoAux = this.props.IsPlayingVideo;
        messageBtn01 = "";
        messageBtn02 = "";
        //console.log("values " + auxState);
        switch (auxState) {
            case "1":
                return (
                    <View  key="00">
                        <PlayerAuto
                            videoId="311"
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
                return (
                        <View style={styles.Dialog01} key="01">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId="321"
                                    ButtonMessage={"\u00A1No importa! es un troll cualquiera"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="2"
                                    answerID={"12,37,42"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="322"
                                    ButtonMessage="Voy a preguntar para ver si alguien conoce a Jorge"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"12,37,43"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>
                            </View>
                        </View>
                );
            case "3":
                if (this.props.IsFemale) {
                    messageBtn01 = "Hago un grupo para molestar a Diego";
                    messageBtn02 = "No hago nada y lo ignoro";
                }
                else
                {
                    messageBtn01 = "Hago un grupo para molestar a Diana";
                    messageBtn02 = "No hago nada y la ignoro";
                }
                return (
                        <View style={styles.Dialog02} key="02">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId="332"
                                    ButtonMessage={messageBtn01}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"12,38,44"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="331"
                                    ButtonMessage={messageBtn02}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"12,38,46"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                videoId="333"
                                ButtonMessage="Pido ayuda a mis amigos"
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="4"
                                answerID={"12,38,45"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                                >
                                </Player>
                            </View>
                        </View>
                );
            case "4":            
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
                this.props.UpdateCapsuleNumber(6);
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
                translate: [1300, -250, 0],
            }
        ]
    },

    Dialog02: {
        transform: [
            {
                translate: [1600, -200, 0],
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

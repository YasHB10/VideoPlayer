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

export default class Capsule02Ctrl extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            CapsuleState: "1",
            StateUpdated: false,
            AnswerUser: []
        }

        this.updateCapsuleState = this.updateCapsuleState.bind(this);
        this.updateAnswerUser = this.updateAnswerUser.bind(this);
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
        console.log("values " + auxState);
        switch (auxState) {
            case "1":
                return (
                    <View key="00">
                        <PlayerAuto
                            videoId="210"
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
                                    videoId="212"
                                    ButtonMessage="Respondo en el grupo"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"11,35,37"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="211"
                                    ButtonMessage="Le mando un mensaje a Ceci"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"11,35,38"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>
                            </View>
                        </View>
                );
            case "3":
                return (
                        <View style={styles.Dialog02} key="02">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId="222"
                                    ButtonMessage={"No s\u00E9 que hacer"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"11,36,41"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="221"
                                    ButtonMessage="Crear una nueva cuenta"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"11,36,39"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="223"
                                ButtonMessage="Escribe a sus amigos un mensaje"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="4"
                                    answerID={"11,36,40"}
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
                this.props.UpdateCapsuleNumber(5);
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
                translate: [1800, -250, 0],
            }
        ]
    },

    Dialog02: {
        transform: [
            {
                translate: [1280, -200, 0],
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

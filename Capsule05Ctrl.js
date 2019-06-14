import React from 'react';
import Player from './Player';
import PlayerAuto from './PlayerAuto';
import {
    StyleSheet,
    Environment,
    staticAssetURL,
    View,
} from 'react-360';

export default class Capsule05Ctrl extends React.Component {
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
        videoID = "";
        
        switch (auxState) {
            case "1":
                return (
                    <View  key="00">
                        <PlayerAuto
                            videoId="511"
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
                                videoId="522"
                                ButtonMessage="No"
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="3"
                                answerID={"14,40,50"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="521"
                                    ButtonMessage={"S\u00ED"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"14,40,51"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                   >

                                </Player>
                            </View>
                        </View>
                );
            case "3": 
                return (
                        <View style={styles.Dialog01} key="03">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId="531"
                                    ButtonMessage={"S\u00ED, sobre todo cuando ya llevamos rato de ser amigos en l\u00EDnea"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="4"
                                    answerID={"14,41,52"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="532"
                                    ButtonMessage={"No, no me ver\u00EDa con alguien que no s\u00E9 qui\u00E9n es"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="4"
                                    answerID={"14,41,53"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                            </View>
                        </View>
                );
            case "4": 
                return (
                    <View style={styles.Dialog02} key="04">
                        <View style={styles.wrapper}>
                            <Player
                                videoId="541"
                                ButtonMessage={"S\u00ED, , solo compartir\u00EDa mi informaci\u00F3n personal con amigos"}
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="5"
                                answerID={"14,42,56"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                            >
                            </Player>

                            <Player
                                videoId="542"
                                ButtonMessage="No creo que sea un peligro"
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="5"
                                answerID={"14,42,55"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                            >
                            </Player>

                            <Player
                                videoId="543"
                                ButtonMessage="Creo que puede llegar a ser peligroso"
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="5"
                                answerID={"14,42,54"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                            >
                            </Player>
                        </View>
                    </View>
                );
            case "5":
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
                Environment.setBackgroundImage(staticAssetURL('360_world.png'), { format: '3DLR' });
                this.props.UpdateCapsuleNumber(0);
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
                translate: [2100, -250, 0],
            }
        ]
    },

    Dialog02: {
        transform: [
            {
                translate: [2100, -150, 0],
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

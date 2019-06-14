import React from 'react';
import Player from './Player';
import PlayerAuto from './PlayerAuto';
import PlayerC01 from './PlayerC01';
import {
    StyleSheet,
    View,
} from 'react-360';

export default class Capsule01Ctrl extends React.Component {
    constructor(props) {
        super(props);
        //console.log(props);
        this.state = {
            CapsuleState: "1",
            //isPlayingVideo: false,
            StateUpdated: false,
            TellTruth: false,
            AnswerUser: []
        }

        this.updateCapsuleState = this.updateCapsuleState.bind(this);
        this.updateTellingTruth = this.updateTellingTruth.bind(this);
        this.updateAnswerUser = this.updateAnswerUser.bind(this);
    }


    updateAnswerUser(IdButton) {
        aux = this.state.AnswerUser.slice();
        aux[aux.length] = IdButton;
        this.setState({ AnswerUser: aux });
    }


    updateCapsuleState(value) {
        this.setState({ CapsuleState: value });
    }

    updateTellingTruth(value) {
        this.setState({ TellTruth: value });
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
                            videoId="111"
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
                                <PlayerC01
                                videoId="122"
                                ButtonMessage="Le digo la verdad a Luis"
                                IsPlayingVideo={this.props.IsPlayingVideo}
                                UpdateState={this.updateCapsuleState}
                                UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                nextState="3"
                                UpdateTellTruth={this.updateTellingTruth}
                                TellingTruthValue={false}
                                answerID={"10,33,32"}
                                updateAnswerUser={this.updateAnswerUser}
                                IsFemale={this.props.IsFemale}
                                >
                                </PlayerC01>

                                <PlayerC01
                                    videoId="121"
                                ButtonMessage={"Le miento y digo que no s\u00E9 que pasa"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    UpdateTellTruth={this.updateTellingTruth}
                                    TellingTruthValue={true}
                                    answerID={"10,33,33"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                   >

                                </PlayerC01>
                            </View>
                        </View>
                );
            case "3": 
                if (this.state.TellTruth) {
                    videoID = "132";
                } else {
                    videoID = "133"
                }
                return (
                        <View style={styles.Dialog02} key="02">
                            <View style={styles.wrapper}>
                                <Player
                                    videoId={videoID}
                                    ButtonMessage="Le digo que no conteste y que reportemos el contenido"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="4"
                                    answerID={"10,34,34"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="134"
                                    ButtonMessage= "Le digo que hay que vengarnos"
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"10,34,35"}
                                    updateAnswerUser={this.updateAnswerUser}
                                    IsFemale={this.props.IsFemale}
                                >
                                </Player>

                                <Player
                                    videoId="131"
                                    ButtonMessage={"Le digo que mejor me voy porque est\u00E1 exagerando"}
                                    IsPlayingVideo={this.props.IsPlayingVideo}
                                    UpdateState={this.updateCapsuleState}
                                    UpdateIsPlayingVideo={this.props.UpdateIsPlayingVideo}
                                    nextState="3"
                                    answerID={"10,34,36"}
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
                this.props.UpdateCapsuleNumber(4);
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

    Dialog02: {
        transform: [
            {
                translate: [1500, -250, 0],
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

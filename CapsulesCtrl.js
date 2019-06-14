// JavaScript source code
import * as React from 'react';

import {
    Environment,
    VrButton,
    Text,
    View,
    Animated,
    staticAssetURL,
    StyleSheet,
} from 'react-360';
import Capsule02Ctrl from './Capsule02Ctrl';
import Capsule01Ctrl from './Capsule01Ctrl';
import PlayerCtrl from './PlayerCtrl';
import Capsule03Ctrl from './Capsule03Ctrl';
import Capsule04Ctrl from './Capsule04Ctrl';
import Capsule05Ctrl from './Capsule05Ctrl';
import GenderBtn from './GenderBtn';


export default class CapsulesCtrl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlayingVideo: false,
            CapsuleNumber: 0,
            isFemale: null,
        }

        this.upDateisPlayingVideo = this.upDateisPlayingVideo.bind(this);
        this.upDateCapsuleNumber = this.upDateCapsuleNumber.bind(this);
        this.upDateCapsuleNumber = this.upDateCapsuleNumber.bind(this);
        this.upDateIsFemale = this.upDateIsFemale.bind(this);
        
    }

    upDateisPlayingVideo(value) {
        this.setState({ isPlayingVideo: value });
    }

    upDateCapsuleNumber(value) {
        console.log("Siguiente capsula " + value);
        this.setState({ CapsuleNumber: value});
    }

    upDateIsFemale(vale) {
        this.setState({ isFemale: vale });
    }
   


    render() {
        capsuleNumberAux = this.state.CapsuleNumber;
        switch (capsuleNumberAux) {          
            case 0:
                if (this.state.isFemale != null)
                    this.setState({ isFemale: null });
                return (
                    
                    <View style={styles.EntryMenu} key="Iniciar">                       
                        <VrButton
                            onClick={() => this.setState({ CapsuleNumber: 1 })}
                            style={styles.VrBegingBtn}
                        >
                            <Text style={styles.VrTextBtn}>
                                Iniciar
                                        </Text>
                        </VrButton>
                    </View>
                    
                    );
            case 1:
                if (this.state.isFemale != null)
                    this.setState({ CapsuleNumber: 7});

                return (
                    <View style={styles.wrapperGender} key="GenderWrapper">
                        <Text style={styles.HaderTextBtn}>
                            Selecciona tu personaje
                         </Text>

                        <View style={styles.wrapperGenderBtns}>
                            <GenderBtn
                                UpDateGender={this.upDateIsFemale}
                                isFemale={true}
                                Name={"Andrea"}
                                iconNameA={'AndreaIconA1.png'}
                                iconNameN={'AndreaIconN3.png'}
                            >
                            </GenderBtn>

                            <GenderBtn
                                UpDateGender={this.upDateIsFemale}
                                isFemale={false}
                                Name={"Alex"}
                                iconNameA={'AlexIconA.png'}
                                iconNameN={'AlexIconN.png'}
                            >
                            </GenderBtn>
                        </View>

                        
                    </View>
                    );


            case 2:
                console.log("IsFemale" + this.state.isFemale);
                return (

                    <View style={styles.wrapperMenuSections} key="Capsule">
                            <Text style={styles.HaderTextBtn}>
                                Elige la capsula a iniciar
                            </Text>
                                <VrButton
                                    onClick={() => this.setState({ CapsuleNumber: 1 })}
                                    style={styles.VrButton}
                                >
                                    <Text style={styles.VrTextBtn}>
                                        Capsula 1
                                        </Text>
                                </VrButton>

                                <VrButton
                                    onClick={() => this.setState({ CapsuleNumber: 2 })}
                                    style={styles.VrButton}
                                >
                                    <Text style={styles.VrTextBtn}>
                                        Capsula 2
                                        </Text>
                                </VrButton>

                                <VrButton
                                    onClick={() => this.setState({ CapsuleNumber: 3 })}
                                    style={styles.VrButton}
                                >
                                    <Text style={styles.VrTextBtn}>
                                        Capsula 3
                                        </Text>
                                </VrButton>

                                <VrButton
                                    onClick={() => this.setState({ CapsuleNumber: 4 })}
                                    style={styles.VrButton}
                                >
                                    <Text style={styles.VrTextBtn}>
                                        Capsula 4
                                        </Text>
                                </VrButton>

                                <VrButton
                                    onClick={() => this.setState({ CapsuleNumber: 5 })}
                                    style={styles.VrButton}
                                >
                                    <Text style={styles.VrTextBtn}>
                                        Capsula 5
                                        </Text>
                                </VrButton>
                    
                    </View>

                    );
            case 3:
                return (
                    <View key="000">
                        <PlayerCtrl IsPlayingVideo={this.state.isPlayingVideo}>
                        </PlayerCtrl>

                        <Capsule01Ctrl
                            IsPlayingVideo={this.state.isPlayingVideo}
                            UpdateIsPlayingVideo={this.upDateisPlayingVideo}
                            UpdateCapsuleNumber={this.upDateCapsuleNumber}
                            IsFemale={this.state.isFemale}
                        >
                        </Capsule01Ctrl>
                    </View>
                );
            case 4:
                console.log("capsula 2")
                return (
                    <View key="001">
                        <PlayerCtrl IsPlayingVideo={this.state.isPlayingVideo}>
                        </PlayerCtrl>

                        <Capsule02Ctrl
                            IsPlayingVideo={this.state.isPlayingVideo}
                            UpdateIsPlayingVideo={this.upDateisPlayingVideo}
                            UpdateCapsuleNumber={this.upDateCapsuleNumber}
                            IsFemale={this.state.isFemale}
                        >
                        </Capsule02Ctrl>
                    </View>
                );
            case 5:
                console.log("capsula 3")
                return (
                    <View key="002">
                        <PlayerCtrl IsPlayingVideo={this.state.isPlayingVideo}>
                        </PlayerCtrl>

                        <Capsule03Ctrl
                            IsPlayingVideo={this.state.isPlayingVideo}
                            UpdateIsPlayingVideo={this.upDateisPlayingVideo}
                            UpdateCapsuleNumber={this.upDateCapsuleNumber}
                            IsFemale={this.state.isFemale}
                        >
                        </Capsule03Ctrl>
                    </View>
                );
            case 6:
                console.log("capsula 4")
                return (
                    <View key="003">
                        <PlayerCtrl IsPlayingVideo={this.state.isPlayingVideo}>
                        </PlayerCtrl>

                        <Capsule04Ctrl
                            IsPlayingVideo={this.state.isPlayingVideo}
                            UpdateIsPlayingVideo={this.upDateisPlayingVideo}
                            UpdateCapsuleNumber={this.upDateCapsuleNumber}
                            IsFemale={this.state.isFemale}
                        >
                        </Capsule04Ctrl>
                    </View>
                );
            case 7:
                console.log("capsula 5")
                return (
                    <View key="004">
                        <PlayerCtrl IsPlayingVideo={this.state.isPlayingVideo}>
                        </PlayerCtrl>

                        <Capsule05Ctrl
                            IsPlayingVideo={this.state.isPlayingVideo}
                            UpdateIsPlayingVideo={this.upDateisPlayingVideo}
                            UpdateCapsuleNumber={this.upDateCapsuleNumber}
                            IsFemale={this.state.isFemale}
                        >
                        </Capsule05Ctrl>
                    </View>
                );
        }
    }
}



const styles = StyleSheet.create({
    EntryMenu: {
        transform: [
            {
                translate: [1300, -300, 0],
            }
        ]
    },

    VrButton: {
        width: 450,
        height: 100,
        padding: 20,
        backgroundColor: '#275472',
        borderColor: '#162f3f',
        borderWidth: 5,
        justifyContent: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },


    VrBegingBtn: {
        width: 450,
        height: 100,
        padding: 20,
        backgroundColor: '#5ebdc9',
        borderColor: '#0e94a5',
        borderWidth: 5,
        justifyContent: 'center',
        marginBottom: 20,
    },


    VrTextBtn: {
        fontSize: 30,
        textAlign: 'center',
        opacity: 1,

    },

    HaderTextBtn: {
        fontSize: 60,
        textAlign: 'center',
        padding: 10
    },

    WellcomeText: {
        fontSize: 50,
        textAlign: 'center',
        padding: 30
    },

    wrapperMenuSections: {
        width: 1050,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        transform: [
            {
                translate: [970, 10, 0],
            }
        ],
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },

    wrapperGender: {
        width: 1050,
        height: 550,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        transform: [
            {
                translate: [970, -50, 0],
            }
        ],
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },

    wrapperGenderBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 20,
        padding: 20,
    },
});


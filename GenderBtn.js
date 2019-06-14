// JavaScript source code
import * as React from 'react';

import {
    VrButton,
    Text,
    View,
    Animated,
    staticAssetURL,
    StyleSheet,
    Image,
    asset,
} from 'react-360';

const FOCUS_SCALE = 1.3;

export default class GenderBtn extends React.Component
{
    state = {
        hasFocus: false,
        scaleAnim: new Animated.Value(0),
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

    ChangeIcon()
    {
        if (this.setState.hasFocus) {
            return asset(this.props.iconNameA);
        }
        else
        {
            return asset(this.props.iconNameN);
        }
    }

    render()
    {
        ImageStyle = null;
        if (this.state.hasFocus) {
            ImageStyle = styles.icon;
        }
        else
        {
            ImageStyle = styles.iconFocused;
        }
        return (
            //<View style={styles.greetingBox}>
            <VrButton
                onClick={() => this.props.UpDateGender(this.props.isFemale)}
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
                                outputRange: [200, 200 * FOCUS_SCALE],
                            }),
                        }]}>
                    <Image
                        style={ImageStyle}
                        source={asset(this.props.iconNameN)} />
                    <Text style={styles.VrTextBtn}>
                        {this.props.Name}
                    </Text>
                </Animated.View>
            </VrButton>
            //</View>
        );
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
        flex:0,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        marginRight: 50,
        marginLeft: 50,
    },

    icon: {
        padding: 20,
        tintColor: 'white',
        height: '100%',
        aspectRatio: 1,
        padding: 5,
    },

    iconFocused: {
        padding: 20,
        tintColor: '#b3d1e5',
        height: '100%',
        aspectRatio: 1,
        padding: 5,
    },

    VrTextBtn: {
        fontSize: 30,
        textAlign: 'center',
        flex: 1,
    },

    buttonFocused: {
        backgroundColor: '#5497c4',
        borderColor: '#b3d1e5',
        padding: 20,
    },
});
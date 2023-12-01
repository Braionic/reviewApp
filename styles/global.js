import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    textStyles: {
        fontFamily: 'Caladea-Bold'
    },
    input: {
        borderWidth: 1,
        padding: 20,
        margin: 5,
        borderRadius: 4,
        borderColor: 'grey'
    }
})

const iconRating = {
'1': require('../assets/rating-1.png'),
'2': require('../assets/rating-2.png'),
'3': require('../assets/rating-3.png'),
'4': require('../assets/rating-4.png'),
'5': require('../assets/rating-5.png')
}

export {iconRating}
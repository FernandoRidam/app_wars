import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 165,
    height: 75,
    marginHorizontal: 7.5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#303030',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },

    shadowOpacity: .75,
    elevation: 5,
  },

  text: {
    textAlign: 'center',
  },
});

export default Styles;

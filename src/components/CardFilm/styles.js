import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 195,
    padding: 15,
    marginVertical: 15,
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

  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 110,
    height: 110,
    opacity: .1,
  },

  title: {
    fontSize: 22,
  },

  epView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(217, 217, 217, .1 )',
  },

  ep: {
    fontSize: 18,
  },
});

export default Styles;

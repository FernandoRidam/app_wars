import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  card: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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

  label: {
    fontSize: 16,
    marginTop: 10,
  },

  info: {
    fontSize: 18,
    marginLeft: 5,
  },

  backgroundImage: {
    position: 'absolute',
    right: 10,
    bottom: 35,
    width: 155,
    height: 155,
    opacity: .1,
  },

  title: {
    fontSize: 22,
  },

  epView: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(217, 217, 217, .1 )',
  },

  ep: {
    fontSize: 18,
  },

  releaseView: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    padding: 10,
    alignItems: 'flex-end'
  },

  release: {
    fontSize: 16,
  },
});

export default Styles;

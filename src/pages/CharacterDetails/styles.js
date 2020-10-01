import {
  StyleSheet,
} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#262525',
  },

  scrollView: {
    padding: 10,
  },

  title: {
    fontSize: 24,
  },

  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  info: {
    marginHorizontal: 15,
  },

  label: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
  },

  infoText: {
    marginLeft: 5,
  },

  divider: {
    width: '100%',
    marginVertical: 20,
    borderBottomWidth: .4,
    borderBottomColor: '#D9D9D9',
  },
});

export default Styles;

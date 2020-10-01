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

  emptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  empty: {
    fontSize: 32,
  },
});

export default Styles;

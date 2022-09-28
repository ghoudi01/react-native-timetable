import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    // alignItems: 'center',
    position: 'absolute',
    paddingVertical: 2,
   alignItems:"center",
   
   
    flex: 1,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal:2
  },
  description: {
    color: '#777',
    textAlign: 'left',
    fontSize: 9,
  },
  location: {
    color: '#777',
    textAlign: 'left',
    paddingTop: 4,
    paddingBottom: 2,
    fontSize: 11,
  },
});

export default styles;

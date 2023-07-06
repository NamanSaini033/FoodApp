import { StyleSheet } from 'react-native';
import COLORS from '../../const/color';
import FONTS from '../../const/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20
  },
  bottomContiner:{
    marginBottom:50,
  },
  heading:{
    fontFamily:FONTS.semiBold,
    fontSize:18,
    color:COLORS.theme
  },
  subHeading:{
    fontFamily:FONTS.semiBold,
    fontSize:24,
    color:COLORS.darkBlue,
    marginBottom:30,
  },
  listContainer:{
    backgroundColor:COLORS.background,
    borderRadius:6,
    padding:15,
    marginBottom:15
  },
  activeContainer:{
    backgroundColor:COLORS.themeLight,
    borderColor:COLORS.theme,
    borderRadius:6,
    borderWidth:1,
    padding:15,
    marginBottom:15
  },
  title:{
    fontFamily:FONTS.semiBold,
    fontSize:16,
    marginBottom:10,
    color:COLORS.black
  },
  description:{
    fontFamily:FONTS.medium,
    fontSize:14,
    lineHeight:20,
    marginBottom:10,
    color:COLORS.grey
  },
});
export default styles;
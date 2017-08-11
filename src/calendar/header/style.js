import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomWidth: 0.5,
      borderBottomColor: '#282629',
      paddingBottom: 20,
      borderStyle: 'solid',
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: appStyle.textMonthFontFamily,
      fontWeight: '500',
      color: appStyle.monthTextColor,
    },
    arrow: {
      padding: 0,
      margin: 0,
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          tintColor: appStyle.arrowColor,
        },
        android: {
          tintColor: appStyle.arrowColor,
          height: 40,
        }
      })
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    dayHeader: {
      marginTop: 20,
      marginBottom: 20,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: appStyle.textDayHeaderFontFamily,
      color: appStyle.textSectionTitleColor,
      fontWeight: 'bold',
    }
  });
}

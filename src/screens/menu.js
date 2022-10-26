import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"

export default function Menu({ navigation }) {
  return (
    <View>
      <Text style={{ ...FONTS.h1_semiBold, color: COLORS.secondary, marginBottom: 30, marginTop: 80, padding: 20}}>My Tasks</Text>
      <Text style={{ ...FONTS.h2_semiBold, color: COLORS.primary, marginBottom: 10, marginTop: 60, backgroundColor: COLORS.secondary, borderRadius: 8, padding: 5}}> Seu aplicativo de registro de tarefas! Navegue pela barra.</Text>
      <StatusBar style="auto" />
    </View>
  );
}
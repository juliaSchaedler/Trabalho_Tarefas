import { Text, View} from 'react-native';
import { COLORS, SIZES, FONTS, SHADOW } from "../constants"

export default function About() {
  return (
    <View>
      <Text style={{ ...FONTS.h1_semiBold, color: COLORS.secondary, marginBottom: 15, marginTop: 80, padding: 20 }}>Sobre o app</Text>
      <Text style={{ ...FONTS.h2_semiBold, color: COLORS.primary, marginBottom: 10, marginTop: 35, backgroundColor: COLORS.secondary, borderRadius: 8, padding: 20}}>App feito em ReactNative sobre um bloco de notas para cadastrar tarefas do dia a dia, podendo deletá-las também!</Text>
      <Text style={{ ...FONTS.h2_semiBold, color: COLORS.primary, marginBottom: 10, marginTop: 35, backgroundColor: COLORS.secondary, borderRadius: 8, padding: 20}}>Futuramente houverá adição de cadastro de notas por áudio, além do histórico de tarefas feitas e também um sistema de login</Text>
      <Text style={{ ...FONTS.h2_semiBold, color: COLORS.primary, marginBottom: 10, marginTop: 35, backgroundColor: COLORS.secondary, borderRadius: 8, padding: 20}}>Projeto feito por Julia Schaedler</Text>
    </View>
  );
}
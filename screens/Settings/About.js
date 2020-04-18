import * as React from 'react';
import { View, Dimensions, SafeAreaView, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import BackIcon from '../../components/BackIcon';
import TextBlock from '../../components/TextBlock';

const { width, height } = Dimensions.get('window');

export default class About extends React.Component {
	render() {
		return (
			<View
				style={{
					backgroundColor: '#5227D0',
					height: '100%',
					width: width,
					paddingLeft: 20,
					paddingRight: 20,
					alignItems: 'center',
				}}
			>
				<StatusBar barStyle="light-content" />
				<Header
					center={<HeaderTitle title="О приложении" />}
					left={<BackIcon onPress={() => this.props.navigation.goBack()} />}
				/>
				<SafeAreaView>
					<View
						style={{
							backgroundColor: '#FFFFFF',
							flex: 1,
							marginTop: 60,
							width: width,
							height: height,
							borderTopLeftRadius: 20,
							borderTopRightRadius: 20,
							justifyContent: 'flex-end',
						}}
					>
						<ScrollView style={{ padding: 20 }}>
							<TextBlock title="Версия" text="1.1848.1808"/>
                            <TextBlock title="Текст отзыва" text="Поначалу пицца в этом заведении показалась очень вкусной, но спустя несколько посещений стало ясно, что пицца-то очень тяжелая, на нижней части тесто все в масле, коробка вся пропитана маслом. Кроме того пицца на толстом тесте как правило имеет мало начинки. Сначала как-то этого не замечаешь, но потом видишь, что пицца сытная только за счет тяжелого толстого теста! Начинки мало, а цена высокая. Больше не ходим в пиццу хат. Поначалу пицца в этом заведении показалась очень вкусной, но спустя несколько посещений стало ясно, что пицца-то очень тяжелая, на нижней части тесто все в масле, коробка вся пропитана маслом. Кроме того пицца на толстом тесте как правило имеет мало начинки. Сначала как-то этого не замечаешь, но потом видишь, что пицца сытная только за счет тяжелого толстого теста! Начинки мало, а цена высокая. Больше не ходим в пиццу хат."/>
						</ScrollView>
					</View>
				</SafeAreaView>
			</View>
		);
	}
}

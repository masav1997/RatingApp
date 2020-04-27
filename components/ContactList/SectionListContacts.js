import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Text,
	ViewPropTypes,
	Image,
	Dimensions,
	TouchableWithoutFeedback,
	SectionList,
} from 'react-native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');
import { makePy } from './getFirstAlphabet';
import { TouchableOpacity } from 'react-native-gesture-handler';

var _ = require('lodash');

export default class SectionListModule extends Component {
	static propTypes = {
		sectionListData: PropTypes.array.isRequired,
		sectionHeight: PropTypes.number,
		sectionHeaderHeight: PropTypes.number,
		letterViewStyle: ViewPropTypes.style,
		sectionItemViewStyle: ViewPropTypes.style,
		sectionItemTextStyle: Text.propTypes.style,
		sectionHeaderTextStyle: Text.propTypes.style,
		scrollAnimation: PropTypes.bool,
		showAlphabet: PropTypes.bool,
		otherAlphabet: PropTypes.string,
	};

	static defaultProps = {
		sectionHeight: 50,
		sectionHeaderHeight: 25,
		scrollAnimation: false,
		showAlphabet: true,
	};

	constructor(props) {
		super(props);
		var data = [
			{ data: [], key: 'A' },
			{ data: [], key: 'B' },
			{ data: [], key: 'C' },
			{ data: [], key: 'D' },
			{ data: [], key: 'E' },
			{ data: [], key: 'F' },
			{ data: [], key: 'G' },
			{ data: [], key: 'H' },
			{ data: [], key: 'I' },
			{ data: [], key: 'J' },
			{ data: [], key: 'K' },
			{ data: [], key: 'L' },
			{ data: [], key: 'M' },
			{ data: [], key: 'N' },
			{ data: [], key: 'O' },
			{ data: [], key: 'P' },
			{ data: [], key: 'Q' },
			{ data: [], key: 'R' },
			{ data: [], key: 'S' },
			{ data: [], key: 'T' },
			{ data: [], key: 'U' },
			{ data: [], key: 'V' },
			{ data: [], key: 'W' },
			{ data: [], key: 'X' },
			{ data: [], key: 'Y' },
			{ data: [], key: 'Z' },
		];
		this.state = {
			dataArray: data,
		};
	}

	filterData() {
		var data = _.cloneDeep(this.state.dataArray);
		this.props.sectionListData.map((item, index) => {
			for (let i = 0; i < data.length; i++) {
				if (i == data.length - 1) {
					data[i].data.push(item);
					break;
				} else if (data[i].key == makePy(item.name.toUpperCase())) {
					data[i].data.push(item);
					break;
				} else {
					continue;
				}
			}
		});
		let delData = [];
		let letterData = [];
		for (var i in data) {
			if (data[i].data.length != 0) {
				delData.push(data[i]);
				letterData.push(data[i].key);
			}
		}
		return {
			delData: delData,
			letterData: letterData,
		};
	}

	render() {
		let filterData = this.filterData();
		let delData = filterData.delData;
		let letterData = filterData.letterData;

		return (
			<View style={styles.container}>
				<SectionList
					{...this.props}
					style={this.props.SectionListStyle}
					ref={(s) => (this.sectionList = s)}
					keyExtractor={this._keyExtractor}
					sections={delData}
					renderSectionHeader={this._renderSectionHeader}
					renderItem={this._renderItem}
					getItemLayout={(data, index) => ({
						length: this.props.sectionHeight,
						offset: this.props.sectionHeight * index,
						index,
					})}
				/>
				{this.props.showAlphabet ? (
					<View style={[styles.letterView, this.props.letterViewStyle]}>
						{letterData.map((item, index) => {
							let otherStyle = [];
							if (index == letterData.length - 1) {
								if (item == this.props.otherAlphabet) {
									otherStyle.push({ width: 20 });
								}
							}
							return (
								<TouchableWithoutFeedback
									key={'letter_' + index}
									onPress={() => {
										this.sectionList.scrollToLocation({
											animated: this.props.scrollAnimation,
											itemIndex: 0,
											sectionIndex: index,
											viewOffset:
												this.props.sectionHeight * (index + 1) +
												this.props.sectionHeaderHeight * index,
										});
									}}
								>
									<View style={[styles.letterItemView, otherStyle]}>
										<Text numberOfLines={0} style={[styles.letterText, this.props.letterTextStyle]}>
											{item}
										</Text>
									</View>
								</TouchableWithoutFeedback>
							);
						})}
					</View>
				) : (
					<View></View>
				)}
			</View>
		);
	}

	_renderSectionHeader = ({ section }) => {
		if (this.props.renderHeader) {
			return this.props.renderHeader(section);
		}
		return (
			<View style={[styles.sectionHeaderView, { height: this.props.sectionHeaderHeight }]}>
				<Text style={[styles.sectionHeaderText, this.props.sectionHeaderTextStyle]}>{section.key}</Text>
			</View>
		);
	};

	_keyExtractor = (item, index) => index;

	_renderItem = ({ item, index, section }) => {
		if (this.props.renderItem) {
			return this.props.renderItem(item, index, section);
		}
		return (
			<SectionItem
				{...this.props}
				callback={() => {
					this.props.SectionListClickCallback(item, index, section);
				}}
				item={item}
			></SectionItem>
		);
	};
}

 export class SectionItem extends PureComponent {
	state = {
		isModalVisible: false,
	};
	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};
	render() {
		const { onPress1, onPress2, onPress3, onPress4} = this.props;
		return (
			<TouchableWithoutFeedback onPress={this.toggleModal}>
				<View style={styles.itemStyle}>
					<View style={{ flex: 1 }}>
						<Image style={{ width: 40, height: 40, marginRight: 10 }} source={this.props.item.avatar} />
					</View>
					<View style={{ flex: 4 }}>
						<Text style={styles.artistText}>{this.props.item.name}</Text>
						<Text style={styles.sectionItemCountStyle}>{this.props.item.count}</Text>
					</View>
					{this.state.isModalVisible ? (
						<View style={{ flex: 1, justifyContent: 'center' }}>
							<Modal isVisible={this.state.isModalVisible} backdropOpacity={0} onBackdropPress={this.toggleModal}>
								<View
									style={{
										backgroundColor: '#FFF',
										height: 'auto',
										width: width / 2.2,
										alignSelf: 'flex-end',
										marginBottom: 200,
										elevation: 10,
										borderRadius: 10,
										padding: 15,
									}}
								>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 10 }}
										onPress={onPress1, this.toggleModal}
									>
										<View style={{ flex: 1 }}>
											<Image
												style={{ width: 15, height: 15 }}
												source={require('../../assets/icons/call.png')}
											/>
										</View>
										<View style={{ flex: 3, fontSize: 14, color: '#0D1F3C', fontWeight: '600' }}>
											<Text>Позвонить</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 10 }}
										onPress={onPress2, this.toggleModal}
									>
										<Image
											style={{ width: 15, height: 15 }}
											source={require('../../assets/icons/chat.png')}
										/>
										<View
											style={{
												flex: 3,
												fontSize: 14,
												color: '#0D1F3C',
												fontWeight: '600',
												marginLeft: 15,
											}}
										>
											<Text>Написать</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 10 }}
										onPress={onPress3, this.toggleModal}
									>
										<Image
											style={{ width: 15, height: 15 }}
											source={require('../../assets/icons/forward1.png')}
										/>
										<View
											style={{
												flex: 3,
												fontSize: 14,
												color: '#0D1F3C',
												fontWeight: '600',
												marginLeft: 15,
											}}
										>
											<Text>Поделиться</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										style={{ flexDirection: 'row', marginBottom: 10 }}
										onPress={onPress4, this.toggleModal}
									>
											<Image
												style={{ width: 15, height: 15 }}
												source={require('../../assets/icons/edit.png')}
											/>
										<View
											style={{
												flex: 3,
												fontSize: 14,
												color: '#0D1F3C',
												fontWeight: '600',
												marginLeft: 15,
											}}
										>
											<Text>Редактировать</Text>
										</View>
									</TouchableOpacity>
								</View>
							</Modal>
						</View>
					) : (
						<TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
							<Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/dots.png')} />
						</TouchableOpacity>
					)}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	itemStyle: {
		height: 'auto',
		justifyContent: 'flex-start',
		backgroundColor: '#ffffff',
		width: '97%',
		flexDirection: 'row',
		paddingLeft: 15,
		paddingRight: 15,
		marginTop: 5,
		marginBottom: 10,
	},
	letterView: {
		width: 15,
		position: 'absolute',
		height: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		right: 0,
	},
	sectionHeaderView: {
		backgroundColor: '#ffffff',
		height: 25,
		justifyContent: 'center',
	},
	sectionHeaderText: {
		color: '#333333',
		fontSize: 14,
		fontWeight: 'bold',
		paddingLeft: 10,
	},
	letterItemView: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 1,
		paddingHorizontal: 2,
	},
	artistText: {
		fontSize: 16,
		color: '#0D1F3C',
		fontWeight: '700',
	},
	letterText: {
		fontSize: 13,
		color: '#B5BBC9',
	},
	sectionItemCountStyle: {
		color: '#A7ADBA',
		fontSize: 15,
	},
});

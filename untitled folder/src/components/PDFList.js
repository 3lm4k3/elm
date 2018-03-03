import React, { Component } from 'react';
import { ListView } from 'react-native';
import {connect } from 'react-redux';
import PDFItem from './PDFItem';

class PDFList extends Component{
	componentWillMount(){
		const ds = new ListView.DataSource({
			rowHasChanged: (r1,r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(this.props.tags);
	}
	renderRow(tag){
		return <PDFItem tag={tag} />;

	}
	render(){
		
		return(

			<ListView 
				dataSource={this.dataSource}
				renderRow={this.renderRow}
				/>
			);
	}
}
const mapStateToProps = state => {
	return { tags: state.tags};
};
export default connect(mapStateToProps)(PDFList);
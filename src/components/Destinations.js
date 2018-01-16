import React, { Component } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { fetchDest } from '../actions'



class Destinations extends Component {
    componentDidMount(){
        this.props.dispatch(fetchDest())
    }

    render() {
        return (
            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 0 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Top Destinations</Text>
                {
                    this.props.daftar_destinasi.length > 0 ? (
                        <ScrollView 
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}>

                            {this.props.daftar_destinasi.map((data, index) => (
                                <Image
                                    key={index}
                                    source={{ uri: data.image }}
                                    style={{ 
                                        marginRight: 3,
                                        borderRadius: 3, 
                                        width: 100, 
                                        height: 100, 
                                        resizeMode: 'contain' 
                                    }} />
                            ))}

                        </ScrollView>
                    ) : null
                }
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        daftar_destinasi: state.destinations.items,
        isFetching: state.destinations.isFetching
    }
}

export default connect(mapStateToProps) (Destinations)
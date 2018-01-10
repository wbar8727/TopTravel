import React, { Component } from 'react'
import { 
    View, 
    Text,
    Image,
    Dimensions,
    StyleSheet,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { fetchBanners } from '../actions'
import { connect } from 'react-redux'


const styles = StyleSheet.create({
    slide: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { color: '#fff', fontSize: 30, fontWeight: 'bold' }
})

class Banners extends Component {componentDidMount(){
        this.props.dispatch(fetchBanners())
    }

    render(){
        return (
            <Swiper 
                autoplay
                dotColor={'white'}
                showsButtons={false}>
                {this.props.banners.map((data, index) => (
                    <View style={styles.slide} key={index}>
                        <Image 
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: data.image }} 
                        />
                    </View>
                ))}
            </Swiper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        banners: state.banners.items
    }
}

export default connect(mapStateToProps)(Banners)
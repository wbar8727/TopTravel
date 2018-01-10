import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { connect } from 'react-redux'
import { fetchReviewers } from '../actions'




const gambar = 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'

class Reviewers extends Component {
    state = {
        data_image : [
            {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }, {
                img: 'http://assets.lfcimages.com/images/international/thumb-no-image-3.jpg'
            }
        ]
    }


    componentDidMount(){
        this.props.dispatch(fetchReviewers())
    }

    render() {
        return (
            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 0 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Top Reviewers</Text>

                {
                    this.props.reviewers.length > 0 ? (
                        <View style={{ flexDirection: 'row' }}>
                            {this.props.reviewers.map((data, index) => (
                                <View>
                                    <Image
                                        style={{ width: 100, height: 100, marginRight: 20,
                                            resizeMode: 'contain', borderRadius: 3 }}
                                            source={{ uri: data.avatar }} />
                                    <Text>{index}</Text>
                                </View>
                            ))}
                        </View>
                    ) : (null)
                }

            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isFetching: state.reviewers.isFetching,
        reviewers: state.reviewers.items
    }
}

export default connect(mapStateToProps) (Reviewers)
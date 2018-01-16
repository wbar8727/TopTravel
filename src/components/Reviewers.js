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

    _renderGridView(reviewers){
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    reviewers.map((reviewers, id) => (
                        <Image
                            key={id}
                            style={{ 
                                margin: 10,
                                width: 100, 
                                height: 100, 
                                borderRadius: 3 }}
                            source={{ uri: reviewers.avatar }} />
                    ))
                }
            </View>
        )
    }


    render() {
        console.log(this.props.reviewers)
        return (
            <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>Top Reviewers</Text>

                {
                    this.props.reviewers.length > 0 ? (
                        <View >
                            {this._renderGridView(this.props.reviewers)}
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
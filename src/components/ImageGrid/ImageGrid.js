import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadImages } from '../../actions/imagesActions';

import './styles.css';

class ImageGrid extends Component {
    componentDidMount() {
        this.props.loadImages();
    }

    render() {
        const { images, error } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    <a onClick={() => this.props.loadImages()}>Load Images</a>
                </section>

                {error && <div className="error">{error}</div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    images: state.images.images,
    loading: state.images.loading,
    error: state.images.error,
});

export default connect(
    mapStateToProps,
    { loadImages },
)(ImageGrid);

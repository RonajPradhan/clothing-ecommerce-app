import React from 'react'
import './collections.styles.scss'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/collection/collection.selectors'
import CollectionPreview from '../preview-collection/previous.collection.component'

const CollectionOverview = () => {

    const { COLLECTION_DATA } = useSelector((createStructuredSelector({
        COLLECTION_DATA: selectCollectionsForPreview
    })))

    return (
        <div>
            <div className="collections-overview">
                {COLLECTION_DATA.map(({ id, ...otherProps }: any) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))}
            </div>
        </div>
    )
}

export default CollectionOverview

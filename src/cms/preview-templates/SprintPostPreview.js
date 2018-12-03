import React from 'react'
import PropTypes from 'prop-types'
import { SprintPostTemplate } from '../../templates/sprint-post'

const SprintPostPreview = ({ entry, widgetFor }) => (
  <SprintPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SprintPostPreview

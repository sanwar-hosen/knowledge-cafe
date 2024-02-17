import PropTypes from 'prop-types'

const ReadingTime = ({readingTime}) => {
  return (
    <div className='border-violet-500 border-4 rounded-lg p-3 text-lg font-semibold bg-violet-100'>Total Reading Time: {readingTime} Minutes</div>
  )
}

ReadingTime.propTypes = {
  readingTime: PropTypes.number
}

export default ReadingTime
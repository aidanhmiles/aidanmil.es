
import resume from '../components/resume'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    resume: state.resume
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onTodoClick: id => {
    //   dispatch(toggleTodo(id))
    // }
  }
}

const ResumeContainer = connect(
  mapStateToProps
  // mapDispatchToProps
)(resume)

export default ResumeContainer;


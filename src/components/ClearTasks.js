import { Button, Col, Row, Container } from 'reactstrap';

const ClearTasks = ({ dispatch }) => {

    return (
        <Container>

                <Col className='btn-group'>
                    <Button
                        onClick={() => dispatch({ type: 'REMOVE_COMPLETED' })}
                        type='button'
                        color='secondary'
                        className='remove-completed-btn'>
                            Delete Completed
                        </Button>

                    <Button 
                        onClick={() => dispatch({ type: 'REMOVE_ALL_TASKS' })}
                        type='button'
                        color='danger'
                        className='remove-all-btn'>
                            Delete <b>All</b>
                        </Button>
                </Col>

        </Container>
    );
};

export default ClearTasks;
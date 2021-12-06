import { Card, CardGroup, Stack, Button } from 'react-bootstrap';
// import content from '../content';
import { useSelector, useDispatch } from 'react-redux';
import {selectContent, deleteContent } from '../../state/contentSlice';
import { Link } from 'react-router-dom';

function BlogList(props) {
  const dispatch = useDispatch();
  const blogInfo = useSelector(selectContent);
  console.log(blogInfo)

  const deleteHandler = (index => {
    console.log(index)
    dispatch(deleteContent(index))
  })

  return (
    <Stack>
      {blogInfo.map(( item, index ) => {
        return (
      <Card key= {index} style={{ width: '100%' }}>
        <Card.Body>
          <Card.Title>{item.characterName}</Card.Title>
          <Card.Text>
            {item.characterText}
          </Card.Text>
          <Button variant = "dark">
            <Link to ={`/card/${index}`}>
              Read About Me
            </Link>
          </Button>
        </Card.Body>
      <Button variant="warning" onClick={() => deleteHandler(index)}>
        Delete
      </Button>
      </Card>
      )})}
    </Stack>
  )
}

export default BlogList
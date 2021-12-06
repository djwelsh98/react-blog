import { Card, Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {selectContent, deleteContent } from '../../state/contentSlice';
import ReactAudioPlayer from 'react-audio-player';

function BlogCard(props) {
  const dispatch = useDispatch();
  const blogInfo = useSelector(selectContent);
  console.log(blogInfo)
  const { index } = useParams();
  // console.log(useParams())
  // console.log(props.content[index].characterName)

  const deleteHandler = (index => {
    console.log(index)
    dispatch(deleteContent(index))
  })
  return (
    <Card className="character-card">
      <Card.Body>
        <Card.Title>{blogInfo[index].characterName}</Card.Title>
        <Card.Text>
          {blogInfo[index].characterBlog}
        </Card.Text>
        <Card.Text>
          Author:
          <Link to="/authors">
            {blogInfo[index].authorName}
          </Link>
        </Card.Text>
        <Card.Text>
          Date Published: {blogInfo[index].datePublished}
        </Card.Text>
        <ReactAudioPlayer
          src={blogInfo[index].characterAudio}
          controls
        />
      </Card.Body>
      <Link to ={`/`}>
      <Button variant="info">
          Back to Home
        </Button>
        </Link>
      <Button variant="warning" onClick={() => deleteHandler(index)}>
        Delete
      </Button>
      
      <Card.Img src={blogInfo[index].characterImg} />
    </Card>
  )
}

export default BlogCard
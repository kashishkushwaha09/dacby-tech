import { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";

import StoryCard from "../components/StoryCard";

import { getStories } from "../services/storyService";

function Home() {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      setLoading(true);

      const data = await getStories();

       setStories(data.stories);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch stories"
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="py-5">
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <div className="mb-4">
        <h2 className="fw-bold">
          Top Hacker News Stories
        </h2>

        <p className="text-muted mb-0">
          Latest scraped stories from Hacker
          News
        </p>
      </div>

      <Row className="g-4">
        {stories.length > 0 ? (
          stories.map((story) => (
            <Col
              key={story._id}
              xs={12}
              md={6}
              lg={4}
            >
              <StoryCard story={story} />
            </Col>
          ))
        ) : (
          <Col>
            <Alert variant="secondary">
              No stories found
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default Home;
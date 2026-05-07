import { useEffect, useState } from "react";

import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";

import StoryCard from "../components/StoryCard";

import { getBookmarks } from "../services/bookmarkService";

function BookMarks() {
  const [bookmarks, setBookmarks] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    fetchBookmarks();
  }, []);

  const fetchBookmarks = async () => {
    try {
      setLoading(true);

      const data = await getBookmarks();

      setBookmarks(data.bookmarks);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch bookmarks"
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
          ❤️ My Bookmarks
        </h2>

        <p className="text-muted mb-0">
          Saved Hacker News stories
        </p>
      </div>

      <Row className="g-4">
        {bookmarks.length > 0 ? (
          bookmarks.map((story) => (
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
              No bookmarks found
            </Alert>
          </Col>
        )}
      </Row>
    </Container>
  );
}

export default BookMarks;
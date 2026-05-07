import { useContext, useEffect, useState } from "react";

import {
  Card,
  Button,
  Badge,
  Spinner,
} from "react-bootstrap";

import { AuthContext } from "../context/AuthContext";

import { toggleBookmark } from "../services/bookmarkService";

function StoryCard({ story }) {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const [bookmarked, setBookmarked] =
    useState(story.isBookmarked || false);
  useEffect(() => {
    setBookmarked(
      story.isBookmarked || false
    );
  }, [story.isBookmarked]);
  const handleBookmark = async () => {
    try {
      setLoading(true);

      await toggleBookmark(story._id);

      setBookmarked((prev) => !prev);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="h-100 shadow-sm border-0 rounded-4">
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <Badge bg="primary">
            {story.points} Points
          </Badge>

          {user && (
            <Button
              variant={
                bookmarked
                  ? "danger"
                  : "outline-danger"
              }
              size="sm"
              onClick={handleBookmark}
              disabled={loading}
            >
              {loading ? (
                <Spinner
                  animation="border"
                  size="sm"
                />
              ) : bookmarked ? (
                "❤️ Saved"
              ) : (
                "🤍 Save"
              )}
            </Button>
          )}
        </div>

        <Card.Title className="fw-bold mb-3">
          {story.title}
        </Card.Title>

        <div className="mb-3 text-muted small">
          <div>
            <strong>Author:</strong>{" "}
            {story.author}
          </div>

          <div>
            <strong>Posted:</strong>{" "}
            {story.postedAt}
          </div>
        </div>

        <div className="mt-auto">
          <Button
            href={story.url}
            target="_blank"
            rel="noreferrer"
            variant="dark"
            className="w-100"
          >
            Read Story
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StoryCard;
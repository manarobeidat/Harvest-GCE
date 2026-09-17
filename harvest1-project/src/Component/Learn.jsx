import { useState } from 'react';
import '../css/Learn.css';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AgricultureIcon from '@mui/icons-material/Agriculture';

const topics = [
  {
    id: 1,
    title: 'How to Save Endangered Crops',
    description:
      'Learn how to protect rare and endangered crops through seed saving and sustainable farming.',
    explanation:
      'This lesson explains how farmers can protect endangered crops by saving seeds, preserving local varieties, and using sustainable farming practices.',
    category: 'Crop Protection',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=how+to+save+endangered+crops',
  },
  {
    id: 2,
    title: 'Smart Farming Techniques',
    description:
      'Discover modern tools and methods that help farmers produce more with fewer resources.',
    explanation:
      'Learn how sensors, data, smart irrigation, and modern agricultural tools can improve crop production and reduce waste.',
    category: 'Smart Farming',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=smart+farming+techniques',
  },
  {
    id: 3,
    title: 'Water Conservation in Agriculture',
    description:
      'Learn practical methods for reducing water waste in farms and gardens.',
    explanation:
      'This lesson explains drip irrigation, soil moisture monitoring, mulching, and proper watering schedules.',
    category: 'Water Saving',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=water+conservation+in+agriculture',
  },
  {
    id: 4,
    title: 'Seed Saving Methods',
    description:
      'Learn how to collect, dry, label, and store seeds correctly.',
    explanation:
      'This lesson shows how to select healthy seeds, dry them properly, label them, and store them for the next growing season.',
    category: 'Seed Saving',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=seed+saving+methods',
  },
  {
    id: 5,
    title: 'Soil Protection Guide',
    description:
      'Understand how to protect soil from erosion and keep it fertile.',
    explanation:
      'Learn how compost, cover crops, mulch, and reduced soil disturbance can improve soil health and prevent erosion.',
    category: 'Soil Health',
    image:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=soil+protection+agriculture',
  },
  {
    id: 6,
    title: 'Organic Farming Basics',
    description:
      'An introduction to natural fertilizers and sustainable farming methods.',
    explanation:
      'This lesson introduces compost, natural fertilizers, biological pest control, and methods that reduce the use of harmful chemicals.',
    category: 'Organic Farming',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=organic+farming+basics',
  },
  {
    id: 7,
    title: 'Crop Rotation Benefits',
    description:
      'Learn how changing crops can improve soil quality and reduce pests.',
    explanation:
      'Crop rotation helps maintain nutrients, reduce diseases, control pests, and improve long-term soil productivity.',
    category: 'Crop Rotation',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=crop+rotation+benefits',
  },
  {
    id: 8,
    title: 'Composting at Home',
    description:
      'Turn food leftovers and organic waste into useful compost.',
    explanation:
      'Learn how to create compost using dry leaves, vegetable leftovers, soil, air, and the right amount of moisture.',
    category: 'Composting',
    image:
      'https://images.unsplash.com/photo-1581578017427-04cda7e8c3c4?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=composting+at+home',
  },
  {
    id: 9,
    title: 'Rainwater Harvesting',
    description:
      'Collect and store rainwater for use in gardens and farms.',
    explanation:
      'Rainwater harvesting allows communities to collect water during rainy periods and use it later for irrigation.',
    category: 'Water Management',
    image:
      'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=rainwater+harvesting+agriculture',
  },
  {
    id: 10,
    title: 'Sustainable Irrigation',
    description:
      'Choose irrigation systems that provide plants with water without waste.',
    explanation:
      'This lesson compares drip irrigation, sprinkler systems, and traditional irrigation while explaining how to reduce water loss.',
    category: 'Irrigation',
    image:
      'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&w=1200&q=85',
    videoUrl:
      'https://www.youtube.com/results?search_query=sustainable+irrigation+methods',
  },
];

export default function Learn() {
  const [search, setSearch] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredTopics = topics.filter((topic) => {
    const searchText = search.toLowerCase().trim();

    return (
      topic.title.toLowerCase().includes(searchText) ||
      topic.description.toLowerCase().includes(searchText) ||
      topic.category.toLowerCase().includes(searchText)
    );
  });

  const handleOpenExplanation = (topic) => {
    setSelectedTopic(topic);
  };

  const handleCloseExplanation = () => {
    setSelectedTopic(null);
  };

  return (
    <Box className="learn-page">
      <Container maxWidth="xl">
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          className="learn-header"
        >
          <Box className="learn-header-content">
            <Chip
              icon={<MenuBookIcon />}
              label="Sustainable Agriculture Education"
              className="learn-header-chip"
            />

            <Typography variant="h3" component="h1" fontWeight="bold">
              Learn and Grow
            </Typography>

            <Typography variant="h6">
              Explore practical lessons about farming, water conservation, and
              protecting our agricultural heritage.
            </Typography>
          </Box>
        </Stack>

        <Box className="search-info-row">
          <Box className="search-info">
            <Box className="search-info-icon">
              <AgricultureIcon />
            </Box>

            <Box>
              <Typography variant="h5" component="h2">
                Discover Your Next Lesson
              </Typography>

              <Typography variant="body2">
                Search for a topic and start learning new ways to protect crops,
                save water, and build a sustainable future.
              </Typography>
            </Box>
          </Box>

          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search lessons..."
            variant="outlined"
            className="topic-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography variant="body1" className="topics-count">
          Showing {filteredTopics.length} of {topics.length} lessons
        </Typography>

        {filteredTopics.length > 0 ? (
          <Grid container spacing={3} className="topics-grid">
            {filteredTopics.map((topic) => (
              <Grid
                key={topic.id}
                size={{ xs: 12, sm: 6, md: 4 }}
              >
                <Card className="topic-card">
                  <CardMedia
                    component="img"
                    image={topic.image}
                    alt={topic.title}
                    className="topic-image"
                  />

                  <CardContent className="topic-content">
                    <Chip
                      label={topic.category}
                      color="success"
                      size="small"
                      className="topic-chip"
                    />

                    <Typography
                      variant="h6"
                      component="h2"
                      className="topic-title"
                    >
                      {topic.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      className="topic-description"
                    >
                      {topic.description}
                    </Typography>

                    <Stack spacing={1} className="topic-actions">
                      <Button
                        variant="contained"
                        color="success"
                        fullWidth
                        startIcon={<MenuBookIcon />}
                        onClick={() => handleOpenExplanation(topic)}
                      >
                        Read Explanation
                      </Button>

                      <Button
                        variant="outlined"
                        color="success"
                        fullWidth
                        component="a"
                        href={topic.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch Video
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box className="no-results">
            <Typography variant="h5">
              No lessons found
            </Typography>

            <Typography variant="body2">
              Try searching with another word.
            </Typography>
          </Box>
        )}
      </Container>

      <Dialog
        open={Boolean(selectedTopic)}
        onClose={handleCloseExplanation}
        fullWidth
        maxWidth="sm"
      >
        {selectedTopic && (
          <>
            <DialogTitle className="dialog-title">
              {selectedTopic.title}
            </DialogTitle>

            <DialogContent dividers>
              <Box
                component="img"
                src={selectedTopic.image}
                alt={selectedTopic.title}
                className="dialog-image"
              />

              <Chip
                label={selectedTopic.category}
                color="success"
                size="small"
                className="dialog-chip"
              />

              <Typography
                variant="body1"
                className="dialog-explanation"
              >
                {selectedTopic.explanation}
              </Typography>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleCloseExplanation} color="inherit">
                Close
              </Button>

              <Button
                variant="contained"
                color="success"
                component="a"
                href={selectedTopic.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
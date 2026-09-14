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
  Stack,
  Typography,
} from '@mui/material';

const topics = [
  {
    id: 1,
    title: 'How to Save Endangered Crops',
    description: 'Learn how to protect rare and endangered crops.',
    explanation:
      'This video explains how farmers can protect endangered crops by saving seeds, preserving traditional varieties, and using sustainable farming methods.',
    category: 'Crop Protection',
    image:
      'https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example1',
  },
  {
    id: 2,
    title: 'Smart Farming Techniques',
    description: 'Discover modern techniques for better farming.',
    explanation:
      'This video explains how technology, sensors, and data can help farmers improve crop production and reduce waste.',
    category: 'Smart Farming',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example2',
  },
  {
    id: 3,
    title: 'Water Conservation in Agriculture',
    description: 'Useful methods to reduce water consumption.',
    explanation:
      'Learn about drip irrigation, proper watering schedules, and methods that reduce water loss from the soil.',
    category: 'Water Saving',
    image:
      'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example3',
  },
  {
    id: 4,
    title: 'Seed Saving Methods',
    description: 'Learn how to collect and store seeds correctly.',
    explanation:
      'This video shows how to select healthy seeds, dry them, label them, and store them safely for the next season.',
    category: 'Seed Saving',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example4',
  },
  {
    id: 5,
    title: 'Soil Protection Guide',
    description: 'Understand how to keep soil healthy and productive.',
    explanation:
      'Learn how cover crops, compost, and reduced soil disturbance can prevent erosion and improve soil quality.',
    category: 'Soil Health',
    image:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example5',
  },
  {
    id: 6,
    title: 'Organic Farming Basics',
    description: 'An introduction to organic and sustainable farming.',
    explanation:
      'This lesson introduces natural fertilizers, biological pest control, and farming methods that reduce chemical use.',
    category: 'Organic Farming',
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example6',
  },
  {
    id: 7,
    title: 'Crop Rotation Benefits',
    description: 'Learn why changing crops improves the soil.',
    explanation:
      'Crop rotation helps maintain soil nutrients, reduce pests, and lower the risk of plant diseases.',
    category: 'Crop Rotation',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example7',
  },
  {
    id: 8,
    title: 'Composting at Home',
    description: 'Turn household organic waste into useful compost.',
    explanation:
      'This lesson explains how to make compost from plant leftovers, dry leaves, and other organic materials.',
    category: 'Composting',
    image:
      'https://images.unsplash.com/photo-1523742818-b596e2e4f3f0?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example8',
  },
  {
    id: 9,
    title: 'Rainwater Harvesting',
    description: 'Collect and use rainwater for agriculture.',
    explanation:
      'Rainwater harvesting allows farmers to collect water during rainy periods and use it later for irrigation.',
    category: 'Water Management',
    image:
      'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example9',
  },
  {
    id: 10,
    title: 'Sustainable Irrigation',
    description: 'Use irrigation systems efficiently and responsibly.',
    explanation:
      'This video explains how to choose an irrigation method and provide crops with the water they need without wasting water.',
    category: 'Irrigation',
    image:
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80',
    videoUrl: 'https://www.youtube.com/watch?v=example10',
  },
];

export default function Learn() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpenExplanation = (topic) => {
    setSelectedTopic(topic);
  };

  const handleCloseExplanation = () => {
    setSelectedTopic(null);
  };

  return (
    <Box className="learn-page">
      <Container maxWidth="lg">
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          className="learn-header"
        >
          <Typography variant="h3" component="h1" fontWeight="bold">
            Learn
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Educational videos about sustainable agriculture
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {topics.map((topic) => (
            <Grid key={topic.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card className="topic-card">
                <CardMedia
                  component="img"
                  height="210"
                  image={topic.image}
                  alt={topic.title}
                />

                <CardContent>
                  <Chip
                    label={topic.category}
                    color="success"
                    size="small"
                    sx={{ mb: 1.5 }}
                  />

                  <Typography
                    variant="h6"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {topic.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {topic.description}
                  </Typography>

                  <Stack spacing={1} sx={{ mt: 2 }}>
                    <Button
                      variant="contained"
                      color="success"
                      fullWidth
                      onClick={() => handleOpenExplanation(topic)}
                    >
                      Video Explanation
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
      </Container>

      <Dialog
        open={Boolean(selectedTopic)}
        onClose={handleCloseExplanation}
        fullWidth
        maxWidth="sm"
      >
        {selectedTopic && (
          <>
            <DialogTitle>{selectedTopic.title}</DialogTitle>

            <DialogContent dividers>
              <Typography
                variant="body1"
                color="text.secondary"
                lineHeight={1.8}
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
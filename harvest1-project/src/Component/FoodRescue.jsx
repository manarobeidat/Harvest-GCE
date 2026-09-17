import { useState } from 'react';
import '../css/FoodRescue.css';

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
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
import AgricultureIcon from '@mui/icons-material/Agriculture';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import CloseIcon from '@mui/icons-material/Close';

const foodRescueFeatures = [
  {
    id: 1,
    title: 'Ain Al-Jawwal Wheat',
    description:
      'An ancient local wheat variety known for its high nutritional value and drought resistance.',
    growingMethod:
      'Plant the seeds in well-drained soil during the cool growing season. Prepare the soil with compost, plant the seeds in rows, and water lightly until they germinate. This crop needs sunlight and limited irrigation.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn and Winter',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    title: 'White Zucchini',
    description:
      'A traditional zucchini variety known for its unique taste and nutritional value.',
    growingMethod:
      'Plant zucchini seeds in fertile soil after the cold season. Leave enough space between plants and water near the roots. Harvest the fruits while they are still young and soft.',
    waterNeed: 'Medium',
    plantingSeason: 'Spring and Summer',
    image:
      'https://images.unsplash.com/photo-1563252722-6434563a985d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    title: 'Rain-fed Tomato',
    description:
      'Tomatoes grown mainly with rainwater and known for their strong natural flavor.',
    growingMethod:
      'Plant tomatoes in fertile soil with good drainage. Choose a sunny location, support the plants with sticks, and use mulch to preserve soil moisture.',
    waterNeed: 'Very Low',
    plantingSeason: 'Spring',
    image:
      'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    title: 'Local Chickpeas',
    description:
      'A native chickpea variety adapted to the local environment and resistant to diseases.',
    growingMethod:
      'Plant chickpeas in light, well-drained soil. Soak the seeds before planting if necessary, provide sunlight, and avoid excessive irrigation.',
    waterNeed: 'Low',
    plantingSeason: 'Winter',
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    title: 'Rumi Olive',
    description:
      'Ancient olive trees that produce high-quality oil and represent local agricultural heritage.',
    growingMethod:
      'Plant olive trees in deep, dry, and well-drained soil. Choose a sunny location and water regularly during the first years. Avoid standing water around the roots.',
    waterNeed: 'Medium',
    plantingSeason: 'Winter and Spring',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    title: 'Freekeh',
    description:
      'Traditional roasted green wheat rich in protein and fiber.',
    growingMethod:
      'Grow green wheat in fertile soil during the cool season. Harvest the grains while they are still green, then dry and roast them carefully.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 7,
    title: 'Khorasan Wheat',
    description:
      'An ancient grain with large kernels, a nutty flavor, and high nutritional value.',
    growingMethod:
      'Plant Khorasan wheat in fertile soil with good drainage. It grows best in sunny areas and needs moderate watering during early growth.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 8,
    title: 'Local Fava Beans',
    description:
      'A traditional bean variety adapted to the local climate and rich in protein.',
    growingMethod:
      'Plant fava beans in fertile soil during the cool season. Keep the soil slightly moist and provide support when the plant becomes tall.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn and Winter',
    image:
      'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 9,
    title: 'Ancient Barley',
    description:
      'One of the oldest cultivated grains, known for drought tolerance and nutrition.',
    growingMethod:
      'Plant barley seeds directly into prepared soil. Barley needs sunlight, good air circulation, and limited irrigation after establishment.',
    waterNeed: 'Very Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1536052922700-5b4f3e0f4f6d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 10,
    title: 'Heritage Lentils',
    description:
      'Traditional lentil varieties with unique flavors and colors.',
    growingMethod:
      'Plant lentils in light soil and a sunny location. Water lightly during germination and avoid overwatering to protect the roots.',
    waterNeed: 'Low',
    plantingSeason: 'Winter',
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 11,
    title: 'Quinoa',
    description:
      'A nutrient-dense crop with strong drought resistance.',
    growingMethod:
      'Plant quinoa in well-drained soil with full sunlight. Water during early growth, then reduce irrigation as the plant becomes established.',
    waterNeed: 'Low',
    plantingSeason: 'Spring',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 12,
    title: 'Millet',
    description:
      'A small grain crop highly resistant to drought and heat.',
    growingMethod:
      'Plant millet in warm soil after the last cold period. It grows quickly in sunlight and needs less water than many other grains.',
    waterNeed: 'Very Low',
    plantingSeason: 'Spring and Summer',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 13,
    title: 'Amaranth',
    description:
      'An ancient grain with high protein content and strong drought tolerance.',
    growingMethod:
      'Plant amaranth seeds in warm, fertile soil. Give the plant sunlight and water moderately during the first weeks.',
    waterNeed: 'Low',
    plantingSeason: 'Spring',
    image:
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 14,
    title: 'Sorghum',
    description:
      'A drought-resistant cereal grain that supports food security in dry regions.',
    growingMethod:
      'Plant sorghum in warm soil and full sunlight. It needs regular water during early growth but becomes drought resistant later.',
    waterNeed: 'Very Low',
    plantingSeason: 'Spring and Summer',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 15,
    title: 'Einkorn Wheat',
    description:
      'One of the oldest wheat varieties, valued for nutrition and disease resistance.',
    growingMethod:
      'Plant einkorn wheat in fertile, well-drained soil during autumn. Reduce irrigation when the grain begins to mature.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 16,
    title: 'Emmer Wheat',
    description:
      'An ancient hulled wheat variety related to modern wheat.',
    growingMethod:
      'Plant emmer wheat in prepared soil with good sunlight. Water during the early growth stage and allow the soil to dry slightly between watering.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 17,
    title: 'Spelt Wheat',
    description:
      'A hardy ancient wheat with a nutty flavor that tolerates poor soil.',
    growingMethod:
      'Plant spelt seeds in loose soil. It needs sunlight and moderate irrigation, and it can grow in less fertile land.',
    waterNeed: 'Low',
    plantingSeason: 'Autumn',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 18,
    title: 'Carob',
    description:
      'A traditional tree crop that produces nutritious pods and needs limited water.',
    growingMethod:
      'Plant carob trees in sunny locations with dry, well-drained soil. Water regularly during the first years, then reduce irrigation.',
    waterNeed: 'Very Low',
    plantingSeason: 'Winter and Spring',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 19,
    title: 'Heritage Fig',
    description:
      'Traditional fig varieties with unique flavors and cultural importance.',
    growingMethod:
      'Plant fig trees in sunny areas and well-drained soil. Water deeply during fruit development and prune dry branches regularly.',
    waterNeed: 'Low',
    plantingSeason: 'Winter and Spring',
    image:
      'https://images.unsplash.com/photo-1601379760883-1bb497c558f8?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 20,
    title: 'Ancient Pomegranate',
    description:
      'Heritage pomegranate varieties known for excellent taste and health benefits.',
    growingMethod:
      'Plant pomegranate trees in sunny locations. Use compost, water regularly during fruit development, and prune the tree after harvest.',
    waterNeed: 'Medium',
    plantingSeason: 'Winter and Spring',
    image:
      'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=85',
  },
];

function getWaterColor(waterNeed) {
  if (waterNeed === 'Very Low') return 'info';
  if (waterNeed === 'Low') return 'success';
  return 'warning';
}

export default function FoodRescue() {
  const [search, setSearch] = useState('');
  const [selectedCrop, setSelectedCrop] = useState(null);

  const filteredCrops = foodRescueFeatures.filter((crop) =>
    crop.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box className="food-rescue">
      <Box className="hero-section">
        <Box className="hero-content">
          <Typography variant="h1" component="h1">
            Food Rescue
          </Typography>

          <Typography variant="h5" component="p">
            Protect endangered crops, preserve food heritage, and save water.
          </Typography>

          <Typography variant="body1">
            Discover traditional crops that support biodiversity and sustainable
            agriculture.
          </Typography>
        </Box>
      </Box>

      <Box className="crops-section">
        <Typography variant="h2" component="h2" className="section-title">
          Endangered Crops
        </Typography>

        <Box className="search-welcome-row">
          <Box className="search-welcome-text">
            <Typography variant="h5" component="h3">
              Discover Our Agricultural Heritage
            </Typography>

            <Typography variant="body2">
              Search for a crop and learn about its history, benefits, and
              growing method.
            </Typography>
          </Box>

          <TextField
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search crops..."
            variant="outlined"
            className="crop-search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Typography variant="body1" className="section-description">
          Learn about local and ancient crops that need protection for future
          generations.
        </Typography>

        <Box className="crops-grid-wrapper">
          <Grid container spacing={3} className="crops-grid">
            {filteredCrops.map((crop) => (
              <Grid
                key={crop.id}
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
                className="crop-grid-item"
              >
                <Card className="crop-card">
                  <CardMedia
                    component="img"
                    image={crop.image}
                    alt={crop.title}
                    className="crop-image"
                  />

                  <CardContent className="crop-content">
                    <Typography
                      variant="h6"
                      component="h3"
                      className="crop-title"
                    >
                      {crop.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      component="p"
                      className="crop-description"
                    >
                      {crop.description}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                      className="crop-meta"
                    >
                      <Chip
                        label={`Water: ${crop.waterNeed}`}
                        color={getWaterColor(crop.waterNeed)}
                        size="small"
                        className="water-chip"
                      />

                      <Chip
                        label={crop.plantingSeason}
                        size="small"
                        variant="outlined"
                        color="success"
                      />
                    </Stack>

                    <Button
                      fullWidth
                      variant="contained"
                      color="success"
                      startIcon={<AgricultureIcon />}
                      onClick={() => setSelectedCrop(crop)}
                      className="growing-button"
                    >
                      Growing Method
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {filteredCrops.length === 0 && (
            <Box className="no-results">
              <Typography variant="h6" color="success.main">
                No crops found
              </Typography>

              <Typography variant="body2">
                Try searching with another crop name.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>

      <Dialog
        open={Boolean(selectedCrop)}
        onClose={() => setSelectedCrop(null)}
        fullWidth
        maxWidth="sm"
      >
        {selectedCrop && (
          <>
            <DialogTitle className="crop-dialog-title">
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
              >
                <AgricultureIcon color="success" />
                <span>{selectedCrop.title}</span>
              </Stack>
            </DialogTitle>

            <DialogContent dividers>
              <Box
                component="img"
                src={selectedCrop.image}
                alt={selectedCrop.title}
                className="dialog-crop-image"
              />

              <Typography
                variant="body1"
                className="dialog-description"
              >
                {selectedCrop.description}
              </Typography>

              <Typography
                variant="h6"
                className="dialog-section-title"
              >
                How to Grow It
              </Typography>

              <Typography
                variant="body1"
                className="dialog-growing-method"
              >
                {selectedCrop.growingMethod}
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={1}
                sx={{ mt: 3 }}
              >
                <Chip
                  icon={<WaterDropIcon />}
                  label={`Water Need: ${selectedCrop.waterNeed}`}
                  color={getWaterColor(selectedCrop.waterNeed)}
                />

                <Chip
                  label={`Planting Season: ${selectedCrop.plantingSeason}`}
                  color="success"
                  variant="outlined"
                />
              </Stack>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => setSelectedCrop(null)}
                color="inherit"
                startIcon={<CloseIcon />}
              >
                Close
              </Button>

              <Button
                variant="contained"
                color="success"
                onClick={() => setSelectedCrop(null)}
              >
                Done
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
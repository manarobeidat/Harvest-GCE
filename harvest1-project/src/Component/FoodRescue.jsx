import '../css/FoodRescue.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';

const foodRescueFeatures = [
  {
    id: 1,
    title: 'Ain Al-Jawwal Wheat',
    description:
      'An ancient local wheat variety known for its high nutritional value and drought resistance, but endangered due to limited cultivation.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    title: 'White Zucchini',
    description:
      'A traditional zucchini variety known for its unique taste and nutritional value, but nearly replaced by hybrid varieties.',
    waterNeed: 'Medium',
    image:
      'https://images.unsplash.com/photo-1563252722-6434563a985d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    title: 'Rain-fed Tomato',
    description:
      'Tomatoes grown mainly with rainwater. They are known for their strong flavor but are threatened by climate change.',
    waterNeed: 'Very Low',
    image:
      'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    title: 'Local Chickpeas',
    description:
      'A native chickpea variety adapted to the local environment and known for resistance to common diseases.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 5,
    title: 'Rumi Olive',
    description:
      'Ancient olive trees that produce high-quality oil and represent an important part of local agricultural heritage.',
    waterNeed: 'Medium',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 6,
    title: 'Freekeh',
    description:
      'Traditional roasted green wheat rich in protein and fiber, with production declining because of its complex processing.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 7,
    title: 'Khorasan Wheat',
    description:
      'An ancient grain with large kernels and a nutty flavor that is rich in nutrients.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 8,
    title: 'Local Fava Beans',
    description:
      'A traditional bean variety adapted to the local climate and valued for its high protein content.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 9,
    title: 'Ancient Barley',
    description:
      'One of the oldest cultivated grains, known for drought tolerance and nutritional value.',
    waterNeed: 'Very Low',
    image:
      'https://images.unsplash.com/photo-1536052922700-5b4f3e0f4f6d?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 10,
    title: 'Heritage Lentils',
    description:
      'Traditional lentil varieties with unique flavors and colors threatened by commercial farming.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 11,
    title: 'Quinoa',
    description:
      'A nutrient-dense crop with strong drought resistance and potential for sustainable farming.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 12,
    title: 'Millet',
    description:
      'A small grain crop highly resistant to drought and heat.',
    waterNeed: 'Very Low',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 13,
    title: 'Amaranth',
    description:
      'An ancient grain with high protein content that is drought tolerant but underused.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 14,
    title: 'Sorghum',
    description:
      'A drought-resistant cereal grain that can improve food security in dry regions.',
    waterNeed: 'Very Low',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 15,
    title: 'Einkorn Wheat',
    description:
      'One of the oldest wheat varieties, valued for its nutrition and disease resistance.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 16,
    title: 'Emmer Wheat',
    description:
      'An ancient hulled wheat variety related to modern wheat and rich in nutrients.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 17,
    title: 'Spelt Wheat',
    description:
      'A hardy ancient wheat with a nutty flavor that can tolerate poor soil conditions.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 18,
    title: 'Carob',
    description:
      'A traditional tree crop that produces nutritious pods and needs limited water.',
    waterNeed: 'Very Low',
    image:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 19,
    title: 'Heritage Fig',
    description:
      'Traditional fig varieties with unique flavors threatened by urbanization and commercial crops.',
    waterNeed: 'Low',
    image:
      'https://images.unsplash.com/photo-1601379760883-1bb497c558f8?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 20,
    title: 'Ancient Pomegranate',
    description:
      'Heritage pomegranate varieties known for excellent taste and health benefits.',
    waterNeed: 'Medium',
    image:
      'https://images.unsplash.com/photo-1541344999736-83eca272f6fc?auto=format&fit=crop&w=900&q=85',
  },
];

function getWaterColor(waterNeed) {
  if (waterNeed === 'Very Low') {
    return 'info';
  }

  if (waterNeed === 'Low') {
    return 'success';
  }

  return 'warning';
}

export default function FoodRescue() {
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

        <Typography variant="body1" className="section-description">
          Learn about local and ancient crops that need protection for future
          generations.
        </Typography>

        <Box className="crops-grid-wrapper">
          <Grid container spacing={3} className="crops-grid">
            {foodRescueFeatures.map((crop) => (
              <Grid
              size={{sm: 6, md: 4, lg: 3}}
                key={crop.id}
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

                    <Chip
                      label={`Water Need: ${crop.waterNeed}`}
                      color={getWaterColor(crop.waterNeed)}
                      size="small"
                      className="water-chip"
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
import { useState } from 'react';

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
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';

import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import HistoryIcon from '@mui/icons-material/History';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

import '../css/SmartFarming.css';

const initialPlants = [
  {
    id: 1,
    name: 'Tomato Plant',
    moisture: 32,
    advice: 'Water early in the morning to reduce evaporation.',
    farmingMethod:
      'Plant tomatoes in rich, well-drained soil. Provide support using a stake or cage and expose the plant to plenty of sunlight.',
    waterAmount: '300 - 500 ml per day',
    temperature: '20°C - 30°C',
    humidity: '60% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 2,
    name: 'Basil Plant',
    moisture: 68,
    advice: 'Check the soil before watering to avoid wasting water.',
    farmingMethod:
      'Grow basil in fertile soil with good drainage. Place it in a sunny location and remove flowers to encourage leaf growth.',
    waterAmount: '150 - 250 ml per day',
    temperature: '18°C - 30°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 3,
    name: 'Mint Plant',
    moisture: 45,
    advice: 'Keep the soil slightly moist without overwatering.',
    farmingMethod:
      'Plant mint in moist soil and partial shade. It is better to grow mint in a container because it spreads quickly.',
    waterAmount: '200 - 350 ml per day',
    temperature: '15°C - 25°C',
    humidity: '60% - 80%',
    history: ['No watering recorded yet'],
  },
  {
    id: 4,
    name: 'Cucumber Plant',
    moisture: 25,
    advice: 'Use drip irrigation to deliver water directly to the roots.',
    farmingMethod:
      'Grow cucumbers in fertile soil with enough space for the vines. Use a trellis to support the plant and improve air circulation.',
    waterAmount: '500 - 800 ml per day',
    temperature: '21°C - 30°C',
    humidity: '60% - 80%',
    history: ['No watering recorded yet'],
  },
  {
    id: 5,
    name: 'Carrot Plant',
    moisture: 52,
    advice: 'Water deeply but avoid watering the leaves.',
    farmingMethod:
      'Plant carrots in loose, sandy soil free from stones. Keep the soil evenly moist while the roots are developing.',
    waterAmount: '200 - 300 ml per day',
    temperature: '16°C - 24°C',
    humidity: '50% - 65%',
    history: ['No watering recorded yet'],
  },
  {
    id: 6,
    name: 'Lettuce Plant',
    moisture: 38,
    advice: 'Use gentle watering to protect the shallow roots.',
    farmingMethod:
      'Grow lettuce in cool weather and partial sunlight. Harvest the outer leaves first to allow the plant to continue growing.',
    waterAmount: '250 - 400 ml per day',
    temperature: '15°C - 22°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 7,
    name: 'Potato Plant',
    moisture: 47,
    advice: 'Water when the top layer of soil starts to dry.',
    farmingMethod:
      'Plant potatoes in loose, well-drained soil. Add soil around the stems as the plant grows to protect the tubers.',
    waterAmount: '400 - 600 ml per day',
    temperature: '15°C - 25°C',
    humidity: '60% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 8,
    name: 'Onion Plant',
    moisture: 61,
    advice: 'Reduce watering as the bulbs begin to mature.',
    farmingMethod:
      'Plant onions in light soil with good sunlight. Keep the soil moist at the beginning and reduce water before harvesting.',
    waterAmount: '200 - 350 ml per day',
    temperature: '13°C - 25°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 9,
    name: 'Pepper Plant',
    moisture: 29,
    advice: 'Apply water slowly around the base of the plant.',
    farmingMethod:
      'Grow peppers in warm soil with plenty of sunlight. Use compost and support the plant when it starts producing fruit.',
    waterAmount: '300 - 500 ml per day',
    temperature: '21°C - 30°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 10,
    name: 'Strawberry Plant',
    moisture: 42,
    advice: 'Use mulch to keep moisture in the soil.',
    farmingMethod:
      'Plant strawberries in slightly acidic, well-drained soil. Use mulch around the plant to protect the fruit and retain moisture.',
    waterAmount: '250 - 400 ml per day',
    temperature: '15°C - 26°C',
    humidity: '60% - 75%',
    history: ['No watering recorded yet'],
  },
  {
    id: 11,
    name: 'Rose Plant',
    moisture: 73,
    advice: 'Water the soil directly instead of the flowers.',
    farmingMethod:
      'Plant roses in fertile soil with good drainage. Provide morning sunlight and prune damaged branches regularly.',
    waterAmount: '400 - 600 ml per day',
    temperature: '18°C - 27°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 12,
    name: 'Sunflower Plant',
    moisture: 35,
    advice: 'Water deeply during hot and dry days.',
    farmingMethod:
      'Plant sunflowers in a sunny location with deep soil. Support tall varieties with a stick to protect them from wind.',
    waterAmount: '500 - 800 ml per day',
    temperature: '20°C - 30°C',
    humidity: '40% - 60%',
    history: ['No watering recorded yet'],
  },
  {
    id: 13,
    name: 'Lavender Plant',
    moisture: 78,
    advice: 'Allow the soil to dry slightly between watering.',
    farmingMethod:
      'Grow lavender in dry, well-drained soil and full sunlight. Avoid excessive watering because the roots are sensitive to moisture.',
    waterAmount: '150 - 250 ml every 2 days',
    temperature: '18°C - 30°C',
    humidity: '30% - 50%',
    history: ['No watering recorded yet'],
  },
  {
    id: 14,
    name: 'Aloe Vera Plant',
    moisture: 82,
    advice: 'Avoid frequent watering because this plant stores water.',
    farmingMethod:
      'Plant aloe vera in sandy soil and a container with drainage holes. Place it in bright indirect sunlight.',
    waterAmount: '150 - 250 ml every 10 days',
    temperature: '18°C - 32°C',
    humidity: '30% - 50%',
    history: ['No watering recorded yet'],
  },
  {
    id: 15,
    name: 'Parsley Plant',
    moisture: 36,
    advice: 'Keep the soil moist but do not let it become muddy.',
    farmingMethod:
      'Grow parsley in fertile soil with partial sunlight. Harvest the outer stems first to encourage new growth.',
    waterAmount: '200 - 350 ml per day',
    temperature: '15°C - 25°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 16,
    name: 'Spinach Plant',
    moisture: 49,
    advice: 'Water near the roots to reduce evaporation.',
    farmingMethod:
      'Plant spinach in cool weather and fertile soil. Provide partial shade in warm climates to prevent early flowering.',
    waterAmount: '250 - 400 ml per day',
    temperature: '10°C - 22°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 17,
    name: 'Corn Plant',
    moisture: 27,
    advice: 'Give the plant regular water during its growing stage.',
    farmingMethod:
      'Plant corn in rows under full sunlight. It needs fertile soil and regular watering during flowering and cob development.',
    waterAmount: '700 - 1000 ml per day',
    temperature: '21°C - 32°C',
    humidity: '50% - 70%',
    history: ['No watering recorded yet'],
  },
  {
    id: 18,
    name: 'Grape Vine',
    moisture: 57,
    advice: 'Use a drip system for slow and controlled irrigation.',
    farmingMethod:
      'Grow grape vines in deep, well-drained soil. Use a trellis and prune the vines to improve fruit production.',
    waterAmount: '500 - 800 ml per day',
    temperature: '18°C - 30°C',
    humidity: '50% - 65%',
    history: ['No watering recorded yet'],
  },
  {
    id: 19,
    name: 'Fig Tree',
    moisture: 66,
    advice: 'Water deeply and less frequently to encourage strong roots.',
    farmingMethod:
      'Plant fig trees in sunny locations with well-drained soil. Water regularly during fruit development and reduce water in winter.',
    waterAmount: '800 - 1200 ml every 3 days',
    temperature: '20°C - 32°C',
    humidity: '40% - 60%',
    history: ['No watering recorded yet'],
  },
  {
    id: 20,
    name: 'Olive Tree',
    moisture: 76,
    advice: 'Olive trees need limited water once established.',
    farmingMethod:
      'Grow olive trees in sunny areas with dry, well-drained soil. Avoid standing water around the roots.',
    waterAmount: '1000 - 1500 ml every 5 days',
    temperature: '20°C - 35°C',
    humidity: '40% - 60%',
    history: ['No watering recorded yet'],
  },
];

export default function SmartFarming() {
  const [plants, setPlants] = useState(initialPlants);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const getMoistureColor = (moisture) => {
    if (moisture < 35) return 'error';
    if (moisture < 60) return 'warning';
    return 'success';
  };

  const waterPlant = (plantId) => {
    const currentDate = new Date().toLocaleString();

    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === plantId
          ? {
              ...plant,
              moisture: 85,
              history: [`Watered on ${currentDate}`, ...plant.history],
            }
          : plant
      )
    );
  };

  return (
    <Box className="smart-farming-page">
      <Box className="welcome-section">
        <Box className="welcome-overlay">
          <Typography
            variant="h2"
            component="h1"
            className="welcome-title"
            fontWeight="bold"
          >
            Welcome to Smart Farming
          </Typography>

          <Typography variant="h6" className="welcome-subtitle">
            Monitor your plants, grow healthier crops, and save water.
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<AgricultureIcon />}
            href="#plants"
            className="welcome-button"
          >
            Explore Your Plants
          </Button>
        </Box>
      </Box>

      <Container maxWidth="lg" id="plants">
        <Stack
          spacing={1}
          alignItems="center"
          textAlign="center"
          className="smart-farming-header"
        >
          <Typography variant="h3" component="h2" fontWeight="bold">
            Smart Farming Dashboard
          </Typography>

          <Typography variant="h6" color="text.secondary">
            Monitor your plants and save water
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {plants.map((plant) => {
            const needsWater = plant.moisture < 40;

            return (
              <Grid key={plant.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card className="plant-card">
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      spacing={1}
                      mb={2}
                    >
                      <Stack
                        direction="row"
                        spacing={1}
                        alignItems="center"
                      >
                        <LocalFloristIcon color="success" />

                        <Typography variant="h6" fontWeight="bold">
                          {plant.name}
                        </Typography>
                      </Stack>

                      <Chip
                        label={needsWater ? 'Needs Water' : 'Healthy'}
                        color={needsWater ? 'error' : 'success'}
                        size="small"
                      />
                    </Stack>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      gutterBottom
                    >
                      Soil Moisture
                    </Typography>

                    <LinearProgress
                      variant="determinate"
                      value={plant.moisture}
                      color={getMoistureColor(plant.moisture)}
                      className="moisture-progress"
                    />

                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      textAlign="center"
                      sx={{ mt: 1 }}
                    >
                      {plant.moisture}%
                    </Typography>

                    <Stack spacing={1} sx={{ mt: 2 }}>
                      <Button
                        fullWidth
                        variant="contained"
                        color={needsWater ? 'primary' : 'success'}
                        startIcon={<WaterDropIcon />}
                        onClick={() => waterPlant(plant.id)}
                      >
                        {needsWater ? 'Water Now' : 'No Water Needed'}
                      </Button>

                      <Button
                        fullWidth
                        variant="outlined"
                        color="success"
                        startIcon={<AgricultureIcon />}
                        onClick={() => setSelectedPlant(plant)}
                      >
                        Farming Method
                      </Button>
                    </Stack>

                    <Box className="plant-details">
                      <Stack direction="row" spacing={1} alignItems="center">
                        <WaterDropIcon color="primary" fontSize="small" />

                        <Typography variant="body2">
                          Water: {plant.waterAmount}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <ThermostatIcon color="error" fontSize="small" />

                        <Typography variant="body2">
                          Temperature: {plant.temperature}
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={1} alignItems="center">
                        <OpacityIcon color="info" fontSize="small" />

                        <Typography variant="body2">
                          Humidity: {plant.humidity}
                        </Typography>
                      </Stack>
                    </Box>

                    <Box className="water-advice">
                      <Typography variant="subtitle2" fontWeight="bold">
                        Water Saving Tip
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {plant.advice}
                      </Typography>
                    </Box>

                    <Divider sx={{ my: 2 }} />

                    <Stack direction="row" spacing={1} alignItems="center">
                      <HistoryIcon color="action" fontSize="small" />

                      <Typography variant="subtitle2" fontWeight="bold">
                        Plant History
                      </Typography>
                    </Stack>

                    <List dense>
                      {plant.history.slice(0, 3).map((record, index) => (
                        <ListItem
                          key={`${plant.id}-${record}-${index}`}
                          disableGutters
                        >
                          <ListItemText
                            primary={record}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selectedPlant)}
        onClose={() => setSelectedPlant(null)}
        fullWidth
        maxWidth="sm"
      >
        {selectedPlant && (
          <>
            <DialogTitle>
              {selectedPlant.name} - Farming Method
            </DialogTitle>

            <DialogContent dividers>
              <Typography
                variant="body1"
                color="text.secondary"
                lineHeight={1.8}
              >
                {selectedPlant.farmingMethod}
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                <Typography>
                  <strong>Water Amount:</strong>{' '}
                  {selectedPlant.waterAmount}
                </Typography>

                <Typography>
                  <strong>Suitable Temperature:</strong>{' '}
                  {selectedPlant.temperature}
                </Typography>

                <Typography>
                  <strong>Suitable Humidity:</strong>{' '}
                  {selectedPlant.humidity}
                </Typography>
              </Stack>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => setSelectedPlant(null)}
                color="inherit"
              >
                Close
              </Button>

              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  waterPlant(selectedPlant.id);
                  setSelectedPlant(null);
                }}
              >
                Water Plant
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
import { useState } from 'react';
import '../css/PracticalLearning.css';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  LinearProgress,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ScienceIcon from '@mui/icons-material/Science';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import AddTaskIcon from '@mui/icons-material/AddTask';
import GrassIcon from '@mui/icons-material/Grass';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import AirIcon from '@mui/icons-material/Air';
import OpacityIcon from '@mui/icons-material/Opacity';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import VerifiedIcon from '@mui/icons-material/Verified';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

const lessons = [
  {
    id: 1,
    title: 'Water Conservation',
    shortDescription:
      'Learn how to save water while keeping plants healthy and productive.',
    description:
      'This lesson explains drip irrigation, soil moisture monitoring, watering schedules, and simple methods for reducing water loss.',
    duration: '20 minutes',
    level: 'Beginner',
    audience: 'School Students and Farmers',
    skills: [
      'Measure the amount of water used.',
      'Identify when a plant needs water.',
      'Compare normal irrigation with drip irrigation.',
      'Create a simple water-saving plan.',
    ],
    tools: 'Two plants, measuring cup, soil, water, ruler, and notebook.',
    result:
      'You will be able to choose a suitable watering method and explain how much water was saved.',
    icon: <WaterDropIcon />,
  },
  {
    id: 2,
    title: 'Soil Protection',
    shortDescription:
      'Understand how compost, mulch, and cover crops improve soil health.',
    description:
      'This lesson introduces soil erosion, organic matter, compost, mulch, and cover crops. Students learn how healthy soil supports stronger plants.',
    duration: '25 minutes',
    level: 'Beginner',
    audience: 'School Students and University Students',
    skills: [
      'Identify signs of unhealthy soil.',
      'Compare covered and uncovered soil.',
      'Use compost safely.',
      'Explain how mulch reduces water loss.',
    ],
    tools: 'Two soil samples, dry leaves, compost, water, and observation sheet.',
    result:
      'You will understand how to protect soil from erosion and keep it fertile.',
    icon: <ScienceIcon />,
  },
  {
    id: 3,
    title: 'Seed Conservation',
    shortDescription:
      'Learn how to select, dry, label, and store local seeds.',
    description:
      'This lesson shows how local seeds can be preserved for future seasons and why agricultural biodiversity is important.',
    duration: '30 minutes',
    level: 'Intermediate',
    audience: 'Students, Teachers, and Farmers',
    skills: [
      'Select healthy seeds.',
      'Dry seeds correctly.',
      'Label seeds with useful information.',
      'Store seeds in a safe and dry place.',
    ],
    tools: 'Local seeds, paper bags, labels, containers, and notebook.',
    result:
      'You will be able to prepare a simple seed collection for your school or farm.',
    icon: <AgricultureIcon />,
  },
  {
    id: 4,
    title: 'Greenhouse Climate Control',
    shortDescription:
      'Learn how temperature, humidity, light, and ventilation affect plants.',
    description:
      'A greenhouse is a controlled learning environment. Students learn how to observe climate conditions and make safe adjustments for plant growth.',
    duration: '35 minutes',
    level: 'Intermediate',
    audience: 'University Students and Farmers',
    skills: [
      'Read greenhouse temperature.',
      'Measure relative humidity.',
      'Observe light levels.',
      'Open vents or use fans when needed.',
      'Record climate changes.',
    ],
    tools:
      'Thermometer, humidity meter, light meter or phone sensor, notebook, and greenhouse.',
    result:
      'You will understand how greenhouse conditions influence plant health and growth.',
    icon: <HomeWorkIcon />,
  },
  {
    id: 5,
    title: 'Organic Composting',
    shortDescription:
      'Turn organic waste into useful compost for plants.',
    description:
      'This lesson explains how dry leaves, vegetable leftovers, soil, air, and moisture work together to produce compost.',
    duration: '30 minutes',
    level: 'Beginner',
    audience: 'School Students and Families',
    skills: [
      'Separate suitable organic materials.',
      'Build compost layers.',
      'Keep compost slightly moist.',
      'Observe decomposition.',
    ],
    tools: 'Container, dry leaves, vegetable leftovers, soil, and water.',
    result:
      'You will be able to build a small compost container using household materials.',
    icon: <GrassIcon />,
  },
  {
    id: 6,
    title: 'Plant Growth Measurement',
    shortDescription:
      'Collect data about plant height, leaves, water, and growth.',
    description:
      'Students learn how to observe plant development and create a simple growth report based on real measurements.',
    duration: '14 days',
    level: 'Intermediate',
    audience: 'University Students and Teachers',
    skills: [
      'Measure plant height.',
      'Count leaves.',
      'Take regular photographs.',
      'Create a simple growth table.',
      'Compare two plants.',
    ],
    tools: 'Plant, ruler, camera, notebook, and measuring table.',
    result:
      'You will create a small report explaining how a plant changed over time.',
    icon: <HistoryEduIcon />,
  },
];

const experiments = [
  {
    id: 1,
    title: 'Compare Two Watering Methods',
    audience: 'School Students',
    duration: '7 Days',
    points: 30,
    tools: 'Two plants, two containers, water, ruler, and notebook.',
    steps: [
      'Choose two plants with a similar size.',
      'Water the first plant using the normal method.',
      'Water the second plant using a slow or drip method.',
      'Record the amount of water used every day.',
      'Compare plant growth and soil moisture.',
    ],
  },
  {
    id: 2,
    title: 'Build a Small Compost Container',
    audience: 'Students and Farmers',
    duration: '3 Weeks',
    points: 40,
    tools: 'Dry leaves, vegetable leftovers, soil, and a container.',
    steps: [
      'Prepare a container with small air holes.',
      'Add a layer of dry leaves.',
      'Add vegetable leftovers and a thin layer of soil.',
      'Repeat the layers and keep the mixture slightly moist.',
      'Observe the changes every few days.',
    ],
  },
  {
    id: 3,
    title: 'Measure Plant Growth',
    audience: 'University Students',
    duration: '14 Days',
    points: 35,
    tools: 'Plant, ruler, notebook, and camera.',
    steps: [
      'Measure the plant height on the first day.',
      'Count the number of leaves.',
      'Measure the plant at the same time every day.',
      'Take one picture every three days.',
      'Create a simple growth report.',
    ],
  },
];

const greenhouseFeatures = [
  {
    id: 1,
    title: 'Temperature Monitoring',
    description:
      'Track the temperature inside the greenhouse and protect plants from extreme heat or cold.',
    value: '24°C',
    icon: <ThermostatIcon />,
    color: 'error',
  },
  {
    id: 2,
    title: 'Humidity Control',
    description:
      'Monitor humidity and reduce plant diseases by balancing moisture and ventilation.',
    value: '65%',
    icon: <OpacityIcon />,
    color: 'info',
  },
  {
    id: 3,
    title: 'Natural Light',
    description:
      'Use sunlight efficiently and provide shade when the temperature becomes too high.',
    value: 'Good',
    icon: <WbSunnyIcon />,
    color: 'warning',
  },
  {
    id: 4,
    title: 'Ventilation',
    description:
      'Open vents or use fans to improve airflow and reduce excessive humidity.',
    value: 'Active',
    icon: <AirIcon />,
    color: 'success',
  },
  {
    id: 5,
    title: 'Drip Irrigation',
    description:
      'Deliver water directly to the roots and reduce water loss.',
    value: 'Efficient',
    icon: <WaterDropIcon />,
    color: 'primary',
  },
  {
    id: 6,
    title: 'Plant Records',
    description:
      'Record plant height, number of leaves, water amount, and growth changes.',
    value: 'Updated',
    icon: <HistoryEduIcon />,
    color: 'secondary',
  },
];

const greenhouseExperiments = [
  {
    id: 1,
    title: 'Compare Greenhouse and Outdoor Growth',
    audience: 'School Students',
    duration: '14 Days',
    points: 45,
    tools:
      'Two similar plants, ruler, thermometer, notebook, and camera.',
    steps: [
      'Place one plant inside the greenhouse and the other outside.',
      'Give both plants the same amount of water.',
      'Record temperature and plant height every day.',
      'Count the leaves after one week.',
      'Compare the growth results at the end.',
    ],
  },
  {
    id: 2,
    title: 'Test Ventilation and Humidity',
    audience: 'University Students',
    duration: '7 Days',
    points: 40,
    tools:
      'Humidity meter, thermometer, greenhouse window or fan, and notebook.',
    steps: [
      'Record temperature and humidity with the ventilation closed.',
      'Open the window or turn on the fan for one hour.',
      'Record the new temperature and humidity.',
      'Repeat the measurement every day.',
      'Explain how ventilation changes the greenhouse environment.',
    ],
  },
  {
    id: 3,
    title: 'Greenhouse Water Saving Challenge',
    audience: 'Students and Farmers',
    duration: '10 Days',
    points: 50,
    tools:
      'Drip irrigation, measuring cup, plant, soil moisture meter, and notebook.',
    steps: [
      'Measure the water used by normal irrigation.',
      'Install or simulate drip irrigation.',
      'Measure the water used by the drip method.',
      'Compare soil moisture and plant health.',
      'Calculate how much water was saved.',
    ],
  },
];

const challenges = [
  {
    id: 1,
    title: 'Save Water for One Week',
    description:
      'Reduce the amount of water used by your plant without affecting its health.',
    points: 50,
  },
  {
    id: 2,
    title: 'Plant a Local Crop',
    description:
      'Plant one local or endangered crop and document its growth.',
    points: 60,
  },
  {
    id: 3,
    title: 'Reuse Farm Materials',
    description:
      'Create a plant container using recycled materials.',
    points: 40,
  },
];

const successStories = [
  {
    id: 1,
    name: 'Al-Nahda School Garden',
    location: 'Zarqa, Jordan',
    title: 'Students Became Young Farmers',
    story:
      'Students built a small school garden and planted tomatoes, mint, and local herbs. They measured plant growth every week and learned how to reduce water waste.',
    result: '30 students completed 5 practical activities.',
    image:
      'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    name: 'Green Valley Farm',
    location: 'Jordan',
    title: 'Less Water, Better Results',
    story:
      'A local farmer tested drip irrigation and soil moisture monitoring. The activity helped the farm provide water directly to plant roots and avoid unnecessary irrigation.',
    result: 'Water use was reduced during the experiment.',
    image:
      'https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Future Seeds Club',
    location: 'School Community',
    title: 'Protecting Local Seeds',
    story:
      'Students collected local seeds, labeled them, and stored them safely. They also shared their knowledge with families and other students.',
    result: 'More than 20 local seed samples were documented.',
    image:
      'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=900&q=85',
  },
];

const initialFormData = {
  studentName: '',
  schoolName: '',
  userType: '',
  plantName: '',
  plantingDate: '',
  waterAmount: '',
  moistureLevel: '',
  plantHeight: '',
  temperature: '',
  humidity: '',
  lightLevel: '',
  ventilation: '',
  notes: '',
};

export default function PracticalLearning() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedChallenges, setCompletedChallenges] = useState([]);
  const [completedGreenhouseExperiments, setCompletedGreenhouseExperiments] =
    useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const lessonPoints = completedLessons.length * 10;

  const challengePoints = completedChallenges.reduce(
    (total, challenge) => total + challenge.points,
    0
  );

  const greenhousePoints =
    completedGreenhouseExperiments.length * 40;

  const totalPoints =
    lessonPoints + challengePoints + greenhousePoints;

  const progress = Math.min((totalPoints / 300) * 100, 100);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const completeLesson = (lessonId) => {
    if (completedLessons.includes(lessonId)) return;

    setCompletedLessons((previousLessons) => [
      ...previousLessons,
      lessonId,
    ]);

    setSnackbarOpen(true);
  };

  const completeChallenge = (challenge) => {
    const alreadyCompleted = completedChallenges.some(
      (item) => item.id === challenge.id
    );

    if (alreadyCompleted) return;

    setCompletedChallenges((previousChallenges) => [
      ...previousChallenges,
      challenge,
    ]);

    setSnackbarOpen(true);
  };

  const completeGreenhouseExperiment = (experiment) => {
    const alreadyCompleted = completedGreenhouseExperiments.some(
      (item) => item.id === experiment.id
    );

    if (alreadyCompleted) return;

    setCompletedGreenhouseExperiments((previousExperiments) => [
      ...previousExperiments,
      experiment,
    ]);

    setSnackbarOpen(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      ...formData,
      image: selectedImage,
    });

    setSnackbarOpen(true);
    setFormData(initialFormData);
    setSelectedImage(null);
  };

  return (
    <Box className="practical-learning-page">
      <Box className="practical-learning-hero">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Chip
              icon={<SchoolIcon />}
              label="Practical Agriculture Education"
              className="hero-chip"
            />

            <Typography variant="h2" component="h1">
              Practical Learning
            </Typography>

            <Typography variant="h6">
              Learn the theory, try it in practice, and record your results.
            </Typography>

            <Button
              variant="contained"
              color="success"
              size="large"
              startIcon={<HomeWorkIcon />}
              onClick={() => setActiveTab(3)}
              className="hero-button"
            >
              Explore Greenhouse Farming
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Paper className="progress-card">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            alignItems={{ xs: 'stretch', md: 'center' }}
          >
            <Box className="progress-icon">
              <EmojiEventsIcon />
            </Box>

            <Box className="progress-info">
              <Typography variant="h6" fontWeight="bold">
                Your Learning Progress
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {totalPoints} points earned
              </Typography>

              <LinearProgress
                variant="determinate"
                value={progress}
                color="success"
                className="progress-bar"
              />
            </Box>

            <Chip
              label={
                totalPoints >= 200
                  ? 'Greenhouse Expert'
                  : totalPoints >= 150
                    ? 'Young Farmer'
                    : totalPoints >= 80
                      ? 'Plant Protector'
                      : 'Seed Starter'
              }
              color="success"
              className="level-chip"
            />
          </Stack>
        </Paper>

        <Paper className="tabs-wrapper">
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            textColor="success"
            indicatorColor="success"
          >
            <Tab icon={<SchoolIcon />} label="Learn" />
            <Tab icon={<ScienceIcon />} label="Experiments" />
            <Tab icon={<GrassIcon />} label="School Garden" />
            <Tab icon={<HomeWorkIcon />} label="Greenhouse" />
            <Tab icon={<HistoryEduIcon />} label="Success Stories" />
            <Tab icon={<EmojiEventsIcon />} label="Challenges" />
          </Tabs>
        </Paper>

        {activeTab === 0 && (
          <Box className="tab-content">
            <SectionHeader
              title="Learn the Basics"
              description="Build your agricultural knowledge before starting a practical activity."
            />

            <Grid container spacing={3}>
              {lessons.map((lesson) => {
                const isCompleted = completedLessons.includes(lesson.id);

                return (
                  <Grid
                    key={lesson.id}
                    size={{ xs: 12, sm: 6, md: 4 }}
                  >
                    <Card className="lesson-card">
                      <CardContent>
                        <Box className="lesson-icon">
                          {lesson.icon}
                        </Box>

                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          useFlexGap
                          className="lesson-chips"
                        >
                          <Chip
                            label={lesson.level}
                            size="small"
                            color="success"
                            variant="outlined"
                          />

                          <Chip
                            label={lesson.duration}
                            size="small"
                            color="info"
                            variant="outlined"
                          />
                        </Stack>

                        <Typography
                          variant="h5"
                          className="card-title"
                        >
                          {lesson.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          className="card-description"
                        >
                          {lesson.shortDescription}
                        </Typography>

                        <Typography
                          variant="body2"
                          className="lesson-audience"
                        >
                          <strong>For:</strong> {lesson.audience}
                        </Typography>

                        <Stack spacing={1} className="card-actions">
                          <Button
                            fullWidth
                            variant="outlined"
                            color="success"
                            onClick={() => setSelectedLesson(lesson)}
                          >
                            View Lesson Details
                          </Button>

                          <Button
                            fullWidth
                            variant={
                              isCompleted ? 'outlined' : 'contained'
                            }
                            color="success"
                            startIcon={<AddTaskIcon />}
                            onClick={() => completeLesson(lesson.id)}
                          >
                            {isCompleted
                              ? 'Completed'
                              : 'Complete Lesson'}
                          </Button>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}

        {activeTab === 1 && (
          <Box className="tab-content">
            <SectionHeader
              title="Practical Experiments"
              description="Choose an activity, perform it, and record your observations."
            />

            <Stack spacing={2}>
              {experiments.map((experiment) => (
                <Accordion
                  key={experiment.id}
                  className="experiment-card"
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box className="experiment-summary">
                      <Box>
                        <Typography variant="h6">
                          {experiment.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                        >
                          {experiment.audience} • {experiment.duration}
                        </Typography>
                      </Box>

                      <Chip
                        label={`+${experiment.points} points`}
                        color="success"
                        size="small"
                      />
                    </Box>
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography variant="subtitle1" fontWeight="bold">
                      Required Tools
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {experiment.tools}
                    </Typography>

                    <Typography variant="subtitle1" fontWeight="bold">
                      Steps
                    </Typography>

                    <Box component="ol" className="steps-list">
                      {experiment.steps.map((step) => (
                        <li key={step}>
                          <Typography variant="body2">
                            {step}
                          </Typography>
                        </li>
                      ))}
                    </Box>

                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => {
                        setActiveTab(2);
                        setSnackbarOpen(true);
                      }}
                    >
                      Record This Experiment
                    </Button>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Stack>
          </Box>
        )}

        {activeTab === 2 && (
          <Box className="tab-content">
            <SectionHeader
              title="School Garden Record"
              description="Record your plant activity and share what you learned."
            />

            <Paper
              component="form"
              onSubmit={handleSubmit}
              className="experiment-form"
            >
              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Student Name"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="School or Farm Name"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="User Type"
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  >
                    <MenuItem value="School Student">
                      School Student
                    </MenuItem>
                    <MenuItem value="University Student">
                      University Student
                    </MenuItem>
                    <MenuItem value="Farmer">
                      Farmer
                    </MenuItem>
                    <MenuItem value="Teacher">
                      Teacher
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Plant Name"
                    name="plantName"
                    value={formData.plantName}
                    onChange={handleInputChange}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Planting Date"
                    name="plantingDate"
                    type="date"
                    value={formData.plantingDate}
                    onChange={handleInputChange}
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Water Amount"
                    name="waterAmount"
                    value={formData.waterAmount}
                    onChange={handleInputChange}
                    placeholder="Example: 300 ml"
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Soil Moisture (%)"
                    name="moistureLevel"
                    type="number"
                    value={formData.moistureLevel}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Plant Height (cm)"
                    name="plantHeight"
                    type="number"
                    value={formData.plantHeight}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Greenhouse Temperature (°C)"
                    name="temperature"
                    type="number"
                    value={formData.temperature}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    label="Greenhouse Humidity (%)"
                    name="humidity"
                    type="number"
                    value={formData.humidity}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="Light Level"
                    name="lightLevel"
                    value={formData.lightLevel}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    select
                    label="Ventilation Status"
                    name="ventilation"
                    value={formData.ventilation}
                    onChange={handleInputChange}
                    fullWidth
                  >
                    <MenuItem value="Closed">Closed</MenuItem>
                    <MenuItem value="Partially Open">
                      Partially Open
                    </MenuItem>
                    <MenuItem value="Open">Open</MenuItem>
                    <MenuItem value="Fan Active">
                      Fan Active
                    </MenuItem>
                  </TextField>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    label="Notes and Observations"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    component="label"
                    variant="outlined"
                    color="success"
                    startIcon={<CloudUploadIcon />}
                    className="upload-button"
                  >
                    Upload Experiment Image
                    <input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={handleImageChange}
                    />
                  </Button>

                  {selectedImage && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="selected-file"
                    >
                      Selected file: {selectedImage.name}
                    </Typography>
                  )}
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Divider sx={{ my: 1 }} />

                  <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    size="large"
                    fullWidth
                  >
                    Save Experiment
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}

        {activeTab === 3 && (
          <Box className="tab-content">
            <SectionHeader
              title="Greenhouse Farming"
              description="Explore how greenhouses help plants grow in a controlled environment."
            />

            <Paper className="greenhouse-intro">
              <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={3}
                alignItems="center"
              >
                <Box className="greenhouse-intro-icon">
                  <HomeWorkIcon />
                </Box>

                <Box>
                  <Typography variant="h5" fontWeight="bold">
                    Learn Inside a Living Laboratory
                  </Typography>

                  <Typography
                    variant="body1"
                    color="text.secondary"
                  >
                    Observe temperature, humidity, light, ventilation,
                    irrigation, and plant growth in one controlled space.
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Grid container spacing={3} className="greenhouse-features">
              {greenhouseFeatures.map((feature) => (
                <Grid
                  key={feature.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Card className="greenhouse-feature-card">
                    <CardContent>
                      <Box className="greenhouse-feature-icon">
                        {feature.icon}
                      </Box>

                      <Typography variant="h6" fontWeight="bold">
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="card-description"
                      >
                        {feature.description}
                      </Typography>

                      <Chip
                        label={feature.value}
                        color={feature.color}
                        size="small"
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <SectionHeader
              title="Greenhouse Experiments"
              description="Perform controlled experiments and compare your results."
            />

            <Stack spacing={2}>
              {greenhouseExperiments.map((experiment) => {
                const isCompleted =
                  completedGreenhouseExperiments.some(
                    (item) => item.id === experiment.id
                  );

                return (
                  <Accordion
                    key={experiment.id}
                    className="experiment-card greenhouse-experiment"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                    >
                      <Box className="experiment-summary">
                        <Box>
                          <Typography variant="h6">
                            {experiment.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                          >
                            {experiment.audience} • {experiment.duration}
                          </Typography>
                        </Box>

                        <Chip
                          label={`+${experiment.points} points`}
                          color="success"
                          size="small"
                        />
                      </Box>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                      >
                        Required Tools
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {experiment.tools}
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                      >
                        Steps
                      </Typography>

                      <Box component="ol" className="steps-list">
                        {experiment.steps.map((step) => (
                          <li key={step}>
                            <Typography variant="body2">
                              {step}
                            </Typography>
                          </li>
                        ))}
                      </Box>

                      <Button
                        variant={
                          isCompleted ? 'outlined' : 'contained'
                        }
                        color="success"
                        onClick={() =>
                          completeGreenhouseExperiment(experiment)
                        }
                      >
                        {isCompleted
                          ? 'Experiment Completed'
                          : 'Complete Experiment'}
                      </Button>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Stack>
          </Box>
        )}

        {activeTab === 4 && (
          <Box className="tab-content">
            <SectionHeader
              title="Success Stories"
              description="Examples of students, schools, and farmers learning through agriculture."
            />

            <Grid container spacing={3}>
              {successStories.map((story) => (
                <Grid
                  key={story.id}
                  size={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Card className="success-story-card">
                    <Box
                      component="img"
                      src={story.image}
                      alt={story.title}
                      className="success-story-image"
                    />

                    <CardContent>
                      <Chip
                        icon={<VerifiedIcon />}
                        label="Success Story"
                        color="success"
                        size="small"
                      />

                      <Typography
                        variant="h5"
                        className="card-title"
                      >
                        {story.title}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        color="success.main"
                      >
                        {story.name} • {story.location}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        className="card-description"
                      >
                        {story.story}
                      </Typography>

                      <Divider sx={{ my: 2 }} />

                      <Typography variant="body2" fontWeight="bold">
                        Result
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                      >
                        {story.result}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}

        {activeTab === 5 && (
          <Box className="tab-content">
            <SectionHeader
              title="Sustainability Challenges"
              description="Complete challenges and earn points and badges."
            />

            <Grid container spacing={3}>
              {challenges.map((challenge) => {
                const isCompleted = completedChallenges.some(
                  (item) => item.id === challenge.id
                );

                return (
                  <Grid
                    key={challenge.id}
                    size={{ xs: 12, sm: 6, md: 4 }}
                  >
                    <Card className="challenge-card">
                      <CardContent>
                        <Box className="challenge-icon">
                          <EmojiEventsIcon />
                        </Box>

                        <Typography
                          variant="h5"
                          className="card-title"
                        >
                          {challenge.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className="card-description"
                        >
                          {challenge.description}
                        </Typography>

                        <Chip
                          label={`+${challenge.points} points`}
                          color="warning"
                          size="small"
                        />

                        <Button
                          fullWidth
                          variant={
                            isCompleted ? 'outlined' : 'contained'
                          }
                          color="success"
                          onClick={() =>
                            completeChallenge(challenge)
                          }
                          className="card-button"
                        >
                          {isCompleted
                            ? 'Challenge Completed'
                            : 'Start Challenge'}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        )}
      </Container>

      <Dialog
        open={Boolean(selectedLesson)}
        onClose={() => setSelectedLesson(null)}
        fullWidth
        maxWidth="md"
      >
        {selectedLesson && (
          <>
            <DialogTitle className="lesson-dialog-title">
              {selectedLesson.title}
            </DialogTitle>

            <DialogContent dividers>
              <Stack spacing={2.5}>
                <Typography
                  variant="body1"
                  className="lesson-dialog-description"
                >
                  {selectedLesson.description}
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  spacing={1}
                >
                  <Chip
                    label={`Level: ${selectedLesson.level}`}
                    color="success"
                  />

                  <Chip
                    label={`Duration: ${selectedLesson.duration}`}
                    color="info"
                  />

                  <Chip
                    label={selectedLesson.audience}
                    color="warning"
                  />
                </Stack>

                <Box>
                  <Typography
                    variant="h6"
                    className="dialog-section-title"
                  >
                    Skills You Will Learn
                  </Typography>

                  <Box component="ul" className="lesson-list">
                    {selectedLesson.skills.map((skill) => (
                      <li key={skill}>
                        <Typography variant="body2">
                          {skill}
                        </Typography>
                      </li>
                    ))}
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    className="dialog-section-title"
                  >
                    Required Tools
                  </Typography>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {selectedLesson.tools}
                  </Typography>
                </Box>

                <Box className="lesson-result-box">
                  <Typography variant="subtitle1" fontWeight="bold">
                    Expected Result
                  </Typography>

                  <Typography variant="body2">
                    {selectedLesson.result}
                  </Typography>
                </Box>
              </Stack>
            </DialogContent>

            <DialogActions>
              <Button
                onClick={() => setSelectedLesson(null)}
                color="inherit"
              >
                Close
              </Button>

              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  completeLesson(selectedLesson.id);
                  setSelectedLesson(null);
                }}
              >
                Complete Lesson
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSnackbarOpen(false)}
        >
          Great job! Your progress has been updated.
        </Alert>
      </Snackbar>
    </Box>
  );
}

function SectionHeader({ title, description }) {
  return (
    <Box className="section-header">
      <Typography variant="h3" component="h2">
        {title}
      </Typography>

      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
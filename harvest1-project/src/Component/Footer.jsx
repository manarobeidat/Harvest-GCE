import '../css/Footer.css';

import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import AgricultureIcon from '@mui/icons-material/Agriculture';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box component="footer" className="footer">
      <Box className="footer-image-section">
        <Box className="footer-image-overlay">
          <Container maxWidth="lg">
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={3}
              alignItems="center"
              justifyContent="space-between"
              textAlign={{ xs: 'center', md: 'left' }}
            >
              <Box>
                <Typography variant="h4" className="footer-banner-title">
                  Grow Together with Harvest
                </Typography>

                <Typography variant="body1" className="footer-banner-text">
                  Save food, protect water, and support sustainable farming.
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="success"
                href="/practical-learning"
                className="footer-banner-button"
              >
                Join Practical Learning
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Container maxWidth="lg" className="footer-container">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 4, md: 8 }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box className="footer-brand">
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <AgricultureIcon className="footer-brand-icon" />

              <Typography variant="h5" className="footer-title">
                Harvest
              </Typography>
            </Stack>

            <Typography variant="body2" className="footer-description">
              An interactive platform connecting farmers, students, schools,
              charities, and families to build a more sustainable future.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
              className="footer-socials"
            >
              <IconButton
                aria-label="Facebook"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                aria-label="Instagram"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                aria-label="YouTube"
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <YouTubeIcon />
              </IconButton>

              <IconButton
                aria-label="Email"
                component="a"
                href="mailto:info@harvest.com"
                className="social-icon"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>

          <Box className="footer-column">
            <Typography variant="subtitle1" className="footer-heading">
              Explore
            </Typography>

            <Stack spacing={1}>
              <Link href="/" className="footer-link">
                Home
              </Link>

              <Link href="/learn" className="footer-link">
                Learn
              </Link>

              <Link href="/smart-farming" className="footer-link">
                Smart Farming
              </Link>

              <Link href="/food-rescue" className="footer-link">
                Food Rescue
              </Link>

              <Link href="/practical-learning" className="footer-link">
                Practical Learning
              </Link>
            </Stack>
          </Box>

          <Box className="footer-column">
            <Typography variant="subtitle1" className="footer-heading">
              Our Goals
            </Typography>

            <Stack spacing={1}>
              <Typography variant="body2" className="footer-goal">
                Reduce food waste
              </Typography>

              <Typography variant="body2" className="footer-goal">
                Save water resources
              </Typography>

              <Typography variant="body2" className="footer-goal">
                Protect local crops
              </Typography>

              <Typography variant="body2" className="footer-goal">
                Educate future farmers
              </Typography>
            </Stack>
          </Box>

          <Box className="footer-column">
            <Typography variant="subtitle1" className="footer-heading">
              Contact Us
            </Typography>

            <Stack spacing={1.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <LocationOnIcon className="contact-icon" />

                <Typography variant="body2">
                  Irbid, Jordan
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneIcon className="contact-icon" />

                <Typography variant="body2">
                  +962 779216987 
                </Typography>
              </Stack>

              <Stack direction="row" spacing={1} alignItems="center">
                <EmailIcon className="contact-icon" />

                <Typography variant="body2">
                  info@harvest.com
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        <Divider className="footer-divider" />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          textAlign="center"
        >
          <Typography variant="body2" className="copyright">
            © {new Date().getFullYear()} Harvest. All rights reserved.
          </Typography>

          <Button
            variant="outlined"
            size="small"
            startIcon={<ArrowUpwardIcon />}
            onClick={scrollToTop}
            className="back-to-top"
          >
            Back to Top
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
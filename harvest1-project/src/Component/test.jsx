
import '../css/Footer.css';

import {
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              My App
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Learn, grow, and build a better sustainable future.
            </Typography>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>

            <Stack spacing={0.5}>
              <Link href="/" color="inherit" underline="hover">
                Home
              </Link>

              <Link href="/learn" color="inherit" underline="hover">
                Learn
              </Link>

              <Link href="/about" color="inherit" underline="hover">
                About Us
              </Link>
            </Stack>
          </Box>

          <Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                color="primary"
                aria-label="Facebook"
                component="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="Instagram"
                component="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="YouTube"
                component="a"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="Email"
                component="a"
                href="mailto:info@example.com"
              >
                <EmailIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Box>
            <iframe></iframe>
        </Box>
        <Divider sx={{ my: 3 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          © {new Date().getFullYear()} My App. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
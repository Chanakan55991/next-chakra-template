import {
  Container,
  Box,
  Button,
  Heading,
  Link,
  Image,
  useColorModeValue
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Page = () => {
  return (
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              A web template
            </Heading>
          </Box>
        </Box>

          <Heading as="h3" variant="section-title">
            Section
          </Heading>
      </Container>

  );
};

export default Page;

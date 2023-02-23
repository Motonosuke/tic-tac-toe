import type { CustomLayout } from 'next';

import { Box } from 'components/chakra-parts/Layout';
import { chakra } from 'components/chakra-parts/Other';

export const MainLayout: CustomLayout = (page) => {
  return (
    <chakra.main>
      <Box height="100vh" mt={20} mx="auto" width="70vw">
        {page}
      </Box>
    </chakra.main>
  );
};

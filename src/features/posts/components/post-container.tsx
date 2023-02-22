import React from 'react';

import { Box } from 'components/chakra-parts/Layout/Box';
import { Posts } from 'features/posts';

interface Props {
  data: Posts | undefined;
}

export const PostContainer: React.FunctionComponent<Props> = ({ data }) => {
  return (
    <Box>
      PostContainer
      <ul>
        {data?.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </ul>
    </Box>
  );
};

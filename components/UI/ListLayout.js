import { SimpleGrid } from "@chakra-ui/react";

export default function ListLayout({ children }) {

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={20} m={7}>
      {children}
    </SimpleGrid>
  );
}

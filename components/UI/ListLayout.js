import { SimpleGrid } from "@chakra-ui/react";

export const SimpleListLayout = ({ children }) => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={20} m={7}>
      {children}
    </SimpleGrid>
  );
};

export const ComplexListLayout = ({
  children,
  cols,
  spacing = 20,
  margin = 7,
}) => {
  return (
    <SimpleGrid
      columns={cols}
      spacing={spacing}
      m={margin}
      overflow="hidden"
    >
      {children}
    </SimpleGrid>
  );
};

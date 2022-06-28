import * as React from 'react';
import { Box, ScrollView, Text } from 'native-base';
import {
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';

type CarouselProps = {
  children: React.ReactNode;
  pagination?: 'hidden' | 'over' | 'below';
};

export function Carousel(props: CarouselProps) {
  const { children, pagination = 'below' } = props;
  const [currentPage, setCurrentPage] = React.useState(0);
  const { width } = useWindowDimensions();

  function handleScrollEndDrag(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { x } = event.nativeEvent.contentOffset;
    setCurrentPage(Math.round(x / width));
  }

  return (
    <Box>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={handleScrollEndDrag}
        scrollEventThrottle={1}
      >
        {children}
      </ScrollView>
      <Text
        display={[pagination === 'hidden' ? 'none' : undefined]}
        textAlign="center"
        top={pagination === 'over' ? -40 : 0}
      >
        {currentPage}
      </Text>
    </Box>
  );
}

type CarouselPanelProps = {
  children: React.ReactNode;
};

Carousel.Panel = function CarouselPanel(props: CarouselPanelProps) {
  const { children } = props;
  const { width } = useWindowDimensions();

  return <Box w={width}>{children}</Box>;
};

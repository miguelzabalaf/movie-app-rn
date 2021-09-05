import React from 'react';
import { FlatList, View } from 'react-native';
import MoviePoster from '../MoviePoster';
import Subtitle from '../Subtitle';

const HorizontalMovieSlider = ({ data, title }) => {

  const renderItem = ({ item }) => <MoviePoster movie={item} width={135} height={200} />;

  return (
    <View style={{ height: title ? 275 : 235 }}>
      {title && <Subtitle text={title} />}
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HorizontalMovieSlider;
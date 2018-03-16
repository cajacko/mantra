import React from 'react';
import { View } from 'react-native';
import { ListItem, Right, Icon, Body, Text } from 'native-base';
import PropTypes from 'prop-types';
import style from 'components/AddSource/AddSource.style';

const SourceSuggestions = ({ suggestions, addSuggestion }) => (
  <View>
    {suggestions.length ? (
      suggestions.map(({ id, title, link }) => (
        <ListItem
          key={id}
          icon
          last
          onPress={addSuggestion(id, title, link)}
          style={style.suggestion}
        >
          <Body style={style.suggestionBody}>
            <Text style={style.suggestionTitle} numberOfLines={1}>
              {title}
            </Text>
            <Text style={style.suggestionLink} numberOfLines={1}>
              {link}
            </Text>
          </Body>
          <Right style={style.suggestionIconContainer}>
            <Icon name="add" style={style.suggestionIcon} />
          </Right>
        </ListItem>
      ))
    ) : (
      <ListItem last>
        <Text>No suggestions yet :s</Text>
      </ListItem>
    )}
  </View>
);

SourceSuggestions.propTypes = {
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  addSuggestion: PropTypes.func.isRequired,
};

export default SourceSuggestions;

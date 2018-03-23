import React from 'react';
import { View } from 'react-native';
import { ListItem, Right, Icon, Body, Text } from 'native-base';
import PropTypes from 'prop-types';
import style from 'components/SourceSuggestions/SourceSuggestions.style';
import trimLink from 'components/SourceSuggestions/helpers/trimLink';

const SourceSuggestions = ({ suggestions, addSuggestion }) => (
  <View>
    {suggestions.length ? (
      suggestions.map(({ id, title, link }, i) => (
        <ListItem
          key={id}
          icon
          last={i === suggestions.length - 1}
          onPress={addSuggestion(id, title, link)}
          style={link && style.suggestion}
        >
          <Body>
            <Text style={link && style.suggestionTitle} numberOfLines={1}>
              {title}
            </Text>
            {link && (
              <Text style={style.suggestionLink} numberOfLines={1}>
                {trimLink(link)}
              </Text>
            )}
          </Body>
          <Right style={link && style.suggestionIconContainer}>
            <Icon name="add" />
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
      link: PropTypes.string,
    })
  ).isRequired,
  addSuggestion: PropTypes.func.isRequired,
};

export default SourceSuggestions;

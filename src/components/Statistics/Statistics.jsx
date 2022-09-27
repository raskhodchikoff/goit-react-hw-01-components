import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import {
  StatisticTitle,
  StatisticList,
  StatisticListItem,
  StatisticSpan,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Box
      as="section"
      width="360px"
      bg="mainColorStatistics"
      border="normal"
      borderRadius="sm"
      boxShadow="shadow"
      borderColor="greyFontProfile"
      textAlign="center"
      mt={3}
    >
      {title && <StatisticTitle>{title}</StatisticTitle>}
      <StatisticList>
        {stats.map(stat => {
          const { label, percentage, id } = stat;
          return (
            <StatisticListItem key={id}>
              <StatisticSpan>{label}</StatisticSpan>
              <StatisticSpan>{percentage}%</StatisticSpan>
            </StatisticListItem>
          );
        })}
      </StatisticList>
    </Box>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
